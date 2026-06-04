import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";
import { formatViolations, getScanSummary } from "./helpers";

/**
 * Accessibility Tests for all Market visual testing pages.
 *
 * Tests against:
 * - WCAG 2.0 Level A  (wcag2a)
 * - WCAG 2.0 Level AA (wcag2aa)
 * - WCAG 2.1 Level A  (wcag21a)
 * - WCAG 2.1 Level AA (wcag21aa)
 * - EN-301-549 (European Accessibility Act)
 *
 * Documentation: https://playwright.dev/docs/accessibility-testing
 */

const BASE_BE = process.env.MARKET_BASE_URL_BE ?? "";
const BASE_NL = process.env.MARKET_BASE_URL_NL ?? "";
const BASE_FR = process.env.MARKET_BASE_URL_FR ?? "";
const BASE_CH = process.env.MARKET_BASE_URL_CH ?? "";
const BASE_ES = process.env.MARKET_BASE_URL_ES ?? "";

// ---------------------------------------------------------------------------
// Page slugs — one entry per component page
// ---------------------------------------------------------------------------
const PAGES = [
  "automation-testing-metrics-component",
  "automation-testing-large-media-component",
  "automation-testing-component-features-only-text",
  "automated-testing-testimonial-component",
  "automated-testing-team-member-component-variations",
  "automated-testing-logo-grid-component",
  "automated-testing-industry-card-grid-component-variations",
  "automated-testing-feature-grid-component",
  "automated-testing-faq-component-variations",
  "automated-testing-cta-image-component",
  "automated-testing-content-section-component-variations",
  "automated-testing-case-study-grid-component",
  "automated-testing-card-section-variations",
];

// ---------------------------------------------------------------------------
// Locale / domain combinations — mirrors the visual test matrix
// ---------------------------------------------------------------------------
const LOCALES = [
  { base: BASE_BE, locale: "en", label: "BE EN" },
  { base: BASE_BE, locale: "nl", label: "BE NL" },
  { base: BASE_BE, locale: "fr", label: "BE FR" },
  { base: BASE_NL, locale: "nl", label: "NL NL" },
  { base: BASE_NL, locale: "en", label: "NL EN" },
  { base: BASE_FR, locale: "fr", label: "FR FR" },
  { base: BASE_CH, locale: "fr", label: "CH FR" },
  { base: BASE_CH, locale: "de", label: "CH DE" },
  { base: BASE_CH, locale: "en", label: "CH EN" },
  { base: BASE_ES, locale: "es", label: "ES ES" },
  { base: BASE_ES, locale: "en", label: "ES EN" },
];

// Shared axe tags
const AXE_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "EN-301-549"];

// ---------------------------------------------------------------------------
// Test matrix
// ---------------------------------------------------------------------------
for (const slug of PAGES) {
  for (const { base, locale, label } of LOCALES) {
    const url = `${base}/${locale}/${slug}`;

    test.describe(`Accessibility - ${slug} - ${label}`, () => {
      // Shared navigation step reused in every test
      async function navigateTo({ page }: { page: import("@playwright/test").Page }) {
        await page.goto(url, { waitUntil: "load" });
        await page.waitForLoadState("domcontentloaded");

        // Remove dev-toolbar iframe so it is excluded from accessibility checks
        await page.evaluate(() => {
          const toolbar = document.getElementById("avo-debugger");
          if (toolbar) toolbar.remove();
        });
      }

      // -----------------------------------------------------------------------
      // Test 1: full-page scan
      // -----------------------------------------------------------------------
      test("should not have any WCAG 2.1 AA or EAA violations", async ({ page }) => {
        await test.step("Navigate to page", () => navigateTo({ page }));

        await test.step("Run accessibility scan", async () => {
          const results = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();

          await test.info().attach("accessibility-scan-results", {
            body: JSON.stringify(results, null, 2),
            contentType: "application/json",
          });

          console.log(getScanSummary(results.violations, results.passes, results.incomplete));
          console.log(formatViolations(results.violations));

          expect(results.violations).toEqual([]);
        });
      });

      // -----------------------------------------------------------------------
      // Test 2: WCAG compliance scan (dedicated assertion)
      // -----------------------------------------------------------------------
      test("should pass WCAG 2.1 AA and EAA compliance scan", async ({ page }) => {
        await test.step("Navigate to page", () => navigateTo({ page }));

        await test.step("Run WCAG compliance scan", async () => {
          const results = await new AxeBuilder({ page }).withTags(AXE_TAGS).analyze();

          await test.info().attach("wcag-scan-results", {
            body: JSON.stringify(results, null, 2),
            contentType: "application/json",
          });

          console.log(getScanSummary(results.violations, results.passes, results.incomplete));
          console.log(formatViolations(results.violations));

          expect(results.violations).toEqual([]);
        });
      });

      // -----------------------------------------------------------------------
      // Test 3: main content area only
      // -----------------------------------------------------------------------
      test("should not have WCAG 2.1 AA or EAA violations in main content area", async ({
        page,
      }) => {
        await test.step("Navigate to page", () => navigateTo({ page }));

        await test.step("Run focused accessibility scan on main content", async () => {
          await page.locator("main").waitFor({ timeout: 10000 });

          const results = await new AxeBuilder({ page })
            .include("main")
            .withTags(AXE_TAGS)
            .analyze();

          await test.info().attach("main-content-scan-results", {
            body: JSON.stringify(results, null, 2),
            contentType: "application/json",
          });

          console.log(getScanSummary(results.violations, results.passes, results.incomplete));
          console.log(formatViolations(results.violations));

          expect(results.violations).toEqual([]);
        });
      });
    });
  }
}
