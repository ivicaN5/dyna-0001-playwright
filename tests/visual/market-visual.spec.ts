import { test, expect } from "@playwright/test";
import { MarketPage } from "../../pages/market/MarketPage";

// Screenshots are captured for BE English only.
const BASE_BE = process.env.MARKET_BASE_URL_BE ?? "";
const LOCALE = "en";
const PREFIX = "be-en";

// ---------------------------------------------------------------------------
// Page slugs — one entry per component page.
// `mask: true` masks the second logo grid (animated / rotating logos).
// ---------------------------------------------------------------------------
const PAGES: { slug: string; mask?: boolean }[] = [
  { slug: "automation-testing-metrics-component" },
  { slug: "automation-testing-large-media-component" },
  { slug: "automation-testing-component-features-only-text" },
  { slug: "automated-testing-testimonial-component" },
  { slug: "automated-testing-team-member-component-variations" },
  { slug: "automated-testing-logo-grid-component", mask: true },
  { slug: "automated-testing-industry-card-grid-component-variations" },
  { slug: "automated-testing-feature-grid-component" },
  { slug: "automated-testing-faq-component-variations" },
  { slug: "automated-testing-cta-image-component" },
  { slug: "automated-testing-content-section-component-variations" },
  { slug: "automated-testing-case-study-grid-component" },
  { slug: "automated-testing-card-section-variations" },
];

test.describe("Visual - Market (BE EN)", () => {
  for (const { slug, mask } of PAGES) {
    test(`BE EN - ${slug}`, async ({ page }) => {
      const marketPage = new MarketPage(page, `${BASE_BE}/${LOCALE}/${slug}`);
      await marketPage.goto();
      await expect(page).toHaveScreenshot(`${PREFIX}-${slug}.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.05,
        ...(mask ? { mask: [marketPage.secondLogoGrid] } : {}),
      });
    });
  }
});
