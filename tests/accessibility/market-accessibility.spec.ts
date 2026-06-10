import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";
import { formatViolations, getScanSummary } from "./helpers";

/**
 * Accessibility Tests for all Market visual testing pages.
 *
 * Tests against WCAG 2.2 Level AA (cumulative A + AA up to 2.2):
 * - WCAG 2.0 Level A  (wcag2a)
 * - WCAG 2.0 Level AA (wcag2aa)
 * - WCAG 2.1 Level A  (wcag21a)
 * - WCAG 2.1 Level AA (wcag21aa)
 * - WCAG 2.2 Level A  (wcag22a)
 * - WCAG 2.2 Level AA (wcag22aa)  — adds e.g. target-size (2.5.8)
 * - EN-301-549 (European Accessibility Act)
 *
 * Note: target-size (2.5.8) is a touch-target rule and mainly surfaces on
 * touch/mobile viewports; the accessibility project runs desktop-default.
 *
 * Documentation: https://playwright.dev/docs/accessibility-testing
 */

const BASE_BE = process.env.MARKET_BASE_URL_BE ?? "";

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
// Locale / domain combinations — BE English only (mirrors the visual suite)
// ---------------------------------------------------------------------------
const LOCALES = [{ base: BASE_BE, locale: "en", label: "BE EN" }];

// Shared axe tags
const AXE_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22a", "wcag22aa", "EN-301-549"];

// ---------------------------------------------------------------------------
// Test matrix
// ---------------------------------------------------------------------------
for (const slug of PAGES) {
  for (const { base, locale, label } of LOCALES) {
    const url = `${base}/${locale}/${slug}`;

    test.describe(`Accessibility - ${slug} - ${label}`, () => {
      // Shared navigation step reused in every test
      async function navigateTo({ page }: { page: import("@playwright/test").Page }) {
        // Use "domcontentloaded" (not "load") so a slow third-party resource
        // can't stall navigation; axe only needs the DOM, not every sub-resource.
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });

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
