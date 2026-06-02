import { test, expect } from "@playwright/test";
import { MarketPage } from "../../pages/market/MarketPage";

const BASE_BE = process.env.MARKET_BASE_URL_BE ?? "";
const BASE_NL = process.env.MARKET_BASE_URL_NL ?? "";
const BASE_FR = process.env.MARKET_BASE_URL_FR ?? "";
const BASE_CH = process.env.MARKET_BASE_URL_CH ?? "";
const BASE_ES = process.env.MARKET_BASE_URL_ES ?? "";

// ---------------------------------------------------------------------------
// Automation Testing Large Media Component
// ---------------------------------------------------------------------------

test.describe("Visual - Automation Testing Large Media Component", () => {
  test("BE EN - automation-testing-large-media-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/en/automation-testing-large-media-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-en-automation-testing-large-media-component.png", {
      fullPage: true,
    });
  });

  test("BE NL - automation-testing-large-media-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/nl/automation-testing-large-media-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-nl-automation-testing-large-media-component.png", {
      fullPage: true,
    });
  });

  test("BE FR - automation-testing-large-media-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/fr/automation-testing-large-media-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-fr-automation-testing-large-media-component.png", {
      fullPage: true,
    });
  });

  test("NL NL - automation-testing-large-media-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/nl/automation-testing-large-media-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-nl-automation-testing-large-media-component.png", {
      fullPage: true,
    });
  });

  test("NL EN - automation-testing-large-media-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/en/automation-testing-large-media-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-en-automation-testing-large-media-component.png", {
      fullPage: true,
    });
  });

  test("FR FR - automation-testing-large-media-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_FR}/fr/automation-testing-large-media-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("fr-fr-automation-testing-large-media-component.png", {
      fullPage: true,
    });
  });

  test("CH FR - automation-testing-large-media-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/fr/automation-testing-large-media-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-fr-automation-testing-large-media-component.png", {
      fullPage: true,
    });
  });

  test("CH DE - automation-testing-large-media-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/de/automation-testing-large-media-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-de-automation-testing-large-media-component.png", {
      fullPage: true,
    });
  });

  test("CH EN - automation-testing-large-media-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/en/automation-testing-large-media-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-en-automation-testing-large-media-component.png", {
      fullPage: true,
    });
  });

  test("ES ES - automation-testing-large-media-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/es/automation-testing-large-media-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-es-automation-testing-large-media-component.png", {
      fullPage: true,
    });
  });

  test("ES EN - automation-testing-large-media-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/en/automation-testing-large-media-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-en-automation-testing-large-media-component.png", {
      fullPage: true,
    });
  });
});

// ---------------------------------------------------------------------------
// Automation Testing Metrics Component
// ---------------------------------------------------------------------------

test.describe("Visual - Automation Testing Metrics Component", () => {
  test("BE EN - automation-testing-metrics-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_BE}/en/automation-testing-metrics-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-en-automation-testing-metrics-component.png", {
      fullPage: true,
    });
  });

  test("BE NL - automation-testing-metrics-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_BE}/nl/automation-testing-metrics-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-nl-automation-testing-metrics-component.png", {
      fullPage: true,
    });
  });

  test("BE FR - automation-testing-metrics-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_BE}/fr/automation-testing-metrics-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-fr-automation-testing-metrics-component.png", {
      fullPage: true,
    });
  });

  test("NL NL - automation-testing-metrics-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_NL}/nl/automation-testing-metrics-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-nl-automation-testing-metrics-component.png", {
      fullPage: true,
    });
  });

  test("NL EN - automation-testing-metrics-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_NL}/en/automation-testing-metrics-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-en-automation-testing-metrics-component.png", {
      fullPage: true,
    });
  });

  test("FR FR - automation-testing-metrics-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_FR}/fr/automation-testing-metrics-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("fr-fr-automation-testing-metrics-component.png", {
      fullPage: true,
    });
  });

  test("CH FR - automation-testing-metrics-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_CH}/fr/automation-testing-metrics-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-fr-automation-testing-metrics-component.png", {
      fullPage: true,
    });
  });

  test("CH DE - automation-testing-metrics-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_CH}/de/automation-testing-metrics-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-de-automation-testing-metrics-component.png", {
      fullPage: true,
    });
  });

  test("CH EN - automation-testing-metrics-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_CH}/en/automation-testing-metrics-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-en-automation-testing-metrics-component.png", {
      fullPage: true,
    });
  });

  test("ES ES - automation-testing-metrics-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_ES}/es/automation-testing-metrics-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-es-automation-testing-metrics-component.png", {
      fullPage: true,
    });
  });

  test("ES EN - automation-testing-metrics-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_ES}/en/automation-testing-metrics-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-en-automation-testing-metrics-component.png", {
      fullPage: true,
    });
  });
});

// ---------------------------------------------------------------------------
// Automation Testing Component Features Only Text
// ---------------------------------------------------------------------------

test.describe("Visual - Automation Testing Component Features Only Text", () => {
  test("BE EN - automation-testing-component-features-only-text", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/en/automation-testing-component-features-only-text`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "be-en-automation-testing-component-features-only-text.png",
      { fullPage: true }
    );
  });

  test("BE NL - automation-testing-component-features-only-text", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/nl/automation-testing-component-features-only-text`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "be-nl-automation-testing-component-features-only-text.png",
      { fullPage: true }
    );
  });

  test("BE FR - automation-testing-component-features-only-text", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/fr/automation-testing-component-features-only-text`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "be-fr-automation-testing-component-features-only-text.png",
      { fullPage: true }
    );
  });

  test("NL NL - automation-testing-component-features-only-text", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/nl/automation-testing-component-features-only-text`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "nl-nl-automation-testing-component-features-only-text.png",
      { fullPage: true }
    );
  });

  test("NL EN - automation-testing-component-features-only-text", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/en/automation-testing-component-features-only-text`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "nl-en-automation-testing-component-features-only-text.png",
      { fullPage: true }
    );
  });

  test("FR FR - automation-testing-component-features-only-text", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_FR}/fr/automation-testing-component-features-only-text`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "fr-fr-automation-testing-component-features-only-text.png",
      { fullPage: true }
    );
  });

  test("CH FR - automation-testing-component-features-only-text", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/fr/automation-testing-component-features-only-text`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "ch-fr-automation-testing-component-features-only-text.png",
      { fullPage: true }
    );
  });

  test("CH DE - automation-testing-component-features-only-text", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/de/automation-testing-component-features-only-text`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "ch-de-automation-testing-component-features-only-text.png",
      { fullPage: true }
    );
  });

  test("CH EN - automation-testing-component-features-only-text", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/en/automation-testing-component-features-only-text`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "ch-en-automation-testing-component-features-only-text.png",
      { fullPage: true }
    );
  });

  test("ES ES - automation-testing-component-features-only-text", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/es/automation-testing-component-features-only-text`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "es-es-automation-testing-component-features-only-text.png",
      { fullPage: true }
    );
  });

  test("ES EN - automation-testing-component-features-only-text", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/en/automation-testing-component-features-only-text`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "es-en-automation-testing-component-features-only-text.png",
      { fullPage: true }
    );
  });
});

// ---------------------------------------------------------------------------
// Automated Testing Team Member Component Variations
// ---------------------------------------------------------------------------

test.describe("Visual - Automated Testing Team Member Component Variations", () => {
  test("BE EN - automated-testing-team-member-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/en/automated-testing-team-member-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "be-en-automated-testing-team-member-component-variations.png",
      { fullPage: true }
    );
  });

  test("BE NL - automated-testing-team-member-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/nl/automated-testing-team-member-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "be-nl-automated-testing-team-member-component-variations.png",
      { fullPage: true }
    );
  });

  test("BE FR - automated-testing-team-member-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/fr/automated-testing-team-member-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "be-fr-automated-testing-team-member-component-variations.png",
      { fullPage: true }
    );
  });

  test("NL NL - automated-testing-team-member-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/nl/automated-testing-team-member-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "nl-nl-automated-testing-team-member-component-variations.png",
      { fullPage: true }
    );
  });

  test("NL EN - automated-testing-team-member-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/en/automated-testing-team-member-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "nl-en-automated-testing-team-member-component-variations.png",
      { fullPage: true }
    );
  });

  test("FR FR - automated-testing-team-member-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_FR}/fr/automated-testing-team-member-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "fr-fr-automated-testing-team-member-component-variations.png",
      { fullPage: true }
    );
  });

  test("CH FR - automated-testing-team-member-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/fr/automated-testing-team-member-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "ch-fr-automated-testing-team-member-component-variations.png",
      { fullPage: true }
    );
  });

  test("CH DE - automated-testing-team-member-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/de/automated-testing-team-member-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "ch-de-automated-testing-team-member-component-variations.png",
      { fullPage: true }
    );
  });

  test("CH EN - automated-testing-team-member-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/en/automated-testing-team-member-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "ch-en-automated-testing-team-member-component-variations.png",
      { fullPage: true }
    );
  });

  test("ES ES - automated-testing-team-member-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/es/automated-testing-team-member-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "es-es-automated-testing-team-member-component-variations.png",
      { fullPage: true }
    );
  });

  test("ES EN - automated-testing-team-member-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/en/automated-testing-team-member-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "es-en-automated-testing-team-member-component-variations.png",
      { fullPage: true }
    );
  });
});

// ---------------------------------------------------------------------------
// Automated Testing Testimonial Component
// ---------------------------------------------------------------------------

test.describe("Visual - Automated Testing Testimonial Component", () => {
  test("BE EN - automated-testing-testimonial-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/en/automated-testing-testimonial-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-en-automated-testing-testimonial-component.png", {
      fullPage: true,
    });
  });

  test("BE NL - automated-testing-testimonial-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/nl/automated-testing-testimonial-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-nl-automated-testing-testimonial-component.png", {
      fullPage: true,
    });
  });

  test("BE FR - automated-testing-testimonial-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/fr/automated-testing-testimonial-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-fr-automated-testing-testimonial-component.png", {
      fullPage: true,
    });
  });

  test("NL NL - automated-testing-testimonial-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/nl/automated-testing-testimonial-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-nl-automated-testing-testimonial-component.png", {
      fullPage: true,
    });
  });

  test("NL EN - automated-testing-testimonial-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/en/automated-testing-testimonial-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-en-automated-testing-testimonial-component.png", {
      fullPage: true,
    });
  });

  test("FR FR - automated-testing-testimonial-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_FR}/fr/automated-testing-testimonial-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("fr-fr-automated-testing-testimonial-component.png", {
      fullPage: true,
    });
  });

  test("CH FR - automated-testing-testimonial-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/fr/automated-testing-testimonial-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-fr-automated-testing-testimonial-component.png", {
      fullPage: true,
    });
  });

  test("CH DE - automated-testing-testimonial-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/de/automated-testing-testimonial-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-de-automated-testing-testimonial-component.png", {
      fullPage: true,
    });
  });

  test("CH EN - automated-testing-testimonial-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/en/automated-testing-testimonial-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-en-automated-testing-testimonial-component.png", {
      fullPage: true,
    });
  });

  test("ES ES - automated-testing-testimonial-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/es/automated-testing-testimonial-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-es-automated-testing-testimonial-component.png", {
      fullPage: true,
    });
  });

  test("ES EN - automated-testing-testimonial-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/en/automated-testing-testimonial-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-en-automated-testing-testimonial-component.png", {
      fullPage: true,
    });
  });
});

// ---------------------------------------------------------------------------
// Automated Testing Logo Grid Component
// ---------------------------------------------------------------------------

test.describe("Visual - Automated Testing Logo Grid Component", () => {
  test("BE EN - automated-testing-logo-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_BE}/en/automated-testing-logo-grid-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-en-automated-testing-logo-grid-component.png", {
      mask: [marketPage.secondLogoGrid],
      fullPage: true,
    });
  });

  test("BE NL - automated-testing-logo-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_BE}/nl/automated-testing-logo-grid-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-nl-automated-testing-logo-grid-component.png", {
      mask: [marketPage.secondLogoGrid],
      fullPage: true,
    });
  });

  test("BE FR - automated-testing-logo-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_BE}/fr/automated-testing-logo-grid-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-fr-automated-testing-logo-grid-component.png", {
      mask: [marketPage.secondLogoGrid],
      fullPage: true,
    });
  });

  test("NL NL - automated-testing-logo-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_NL}/nl/automated-testing-logo-grid-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-nl-automated-testing-logo-grid-component.png", {
      mask: [marketPage.secondLogoGrid],
      fullPage: true,
    });
  });

  test("NL EN - automated-testing-logo-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_NL}/en/automated-testing-logo-grid-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-en-automated-testing-logo-grid-component.png", {
      mask: [marketPage.secondLogoGrid],
      fullPage: true,
    });
  });

  test("FR FR - automated-testing-logo-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_FR}/fr/automated-testing-logo-grid-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("fr-fr-automated-testing-logo-grid-component.png", {
      mask: [marketPage.secondLogoGrid],
      fullPage: true,
    });
  });

  test("CH FR - automated-testing-logo-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_CH}/fr/automated-testing-logo-grid-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-fr-automated-testing-logo-grid-component.png", {
      mask: [marketPage.secondLogoGrid],
      fullPage: true,
    });
  });

  test("CH DE - automated-testing-logo-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_CH}/de/automated-testing-logo-grid-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-de-automated-testing-logo-grid-component.png", {
      mask: [marketPage.secondLogoGrid],
      fullPage: true,
    });
  });

  test("CH EN - automated-testing-logo-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_CH}/en/automated-testing-logo-grid-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-en-automated-testing-logo-grid-component.png", {
      mask: [marketPage.secondLogoGrid],
      fullPage: true,
    });
  });

  test("ES ES - automated-testing-logo-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_ES}/es/automated-testing-logo-grid-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-es-automated-testing-logo-grid-component.png", {
      mask: [marketPage.secondLogoGrid],
      fullPage: true,
    });
  });

  test("ES EN - automated-testing-logo-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_ES}/en/automated-testing-logo-grid-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-en-automated-testing-logo-grid-component.png", {
      mask: [marketPage.secondLogoGrid],
      fullPage: true,
    });
  });
});

// ---------------------------------------------------------------------------
// Automated Testing Industry Card Grid Component Variations
// ---------------------------------------------------------------------------

test.describe("Visual - Automated Testing Industry Card Grid Component Variations", () => {
  test("BE EN - automated-testing-industry-card-grid-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/en/automated-testing-industry-card-grid-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "be-en-automated-testing-industry-card-grid-component-variations.png",
      { fullPage: true }
    );
  });

  test("BE NL - automated-testing-industry-card-grid-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/nl/automated-testing-industry-card-grid-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "be-nl-automated-testing-industry-card-grid-component-variations.png",
      { fullPage: true }
    );
  });

  test("BE FR - automated-testing-industry-card-grid-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/fr/automated-testing-industry-card-grid-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "be-fr-automated-testing-industry-card-grid-component-variations.png",
      { fullPage: true }
    );
  });

  test("NL NL - automated-testing-industry-card-grid-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/nl/automated-testing-industry-card-grid-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "nl-nl-automated-testing-industry-card-grid-component-variations.png",
      { fullPage: true }
    );
  });

  test("NL EN - automated-testing-industry-card-grid-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/en/automated-testing-industry-card-grid-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "nl-en-automated-testing-industry-card-grid-component-variations.png",
      { fullPage: true }
    );
  });

  test("FR FR - automated-testing-industry-card-grid-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_FR}/fr/automated-testing-industry-card-grid-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "fr-fr-automated-testing-industry-card-grid-component-variations.png",
      { fullPage: true }
    );
  });

  test("CH FR - automated-testing-industry-card-grid-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/fr/automated-testing-industry-card-grid-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "ch-fr-automated-testing-industry-card-grid-component-variations.png",
      { fullPage: true }
    );
  });

  test("CH DE - automated-testing-industry-card-grid-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/de/automated-testing-industry-card-grid-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "ch-de-automated-testing-industry-card-grid-component-variations.png",
      { fullPage: true }
    );
  });

  test("CH EN - automated-testing-industry-card-grid-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/en/automated-testing-industry-card-grid-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "ch-en-automated-testing-industry-card-grid-component-variations.png",
      { fullPage: true }
    );
  });

  test("ES ES - automated-testing-industry-card-grid-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/es/automated-testing-industry-card-grid-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "es-es-automated-testing-industry-card-grid-component-variations.png",
      { fullPage: true }
    );
  });

  test("ES EN - automated-testing-industry-card-grid-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/en/automated-testing-industry-card-grid-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "es-en-automated-testing-industry-card-grid-component-variations.png",
      { fullPage: true }
    );
  });
});

// ---------------------------------------------------------------------------
// Automated Testing Feature Grid Component
// ---------------------------------------------------------------------------

test.describe("Visual - Automated Testing Feature Grid Component", () => {
  test("BE EN - automated-testing-feature-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/en/automated-testing-feature-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-en-automated-testing-feature-grid-component.png", {
      fullPage: true,
    });
  });

  test("BE NL - automated-testing-feature-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/nl/automated-testing-feature-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-nl-automated-testing-feature-grid-component.png", {
      fullPage: true,
    });
  });

  test("BE FR - automated-testing-feature-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/fr/automated-testing-feature-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-fr-automated-testing-feature-grid-component.png", {
      fullPage: true,
    });
  });

  test("NL NL - automated-testing-feature-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/nl/automated-testing-feature-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-nl-automated-testing-feature-grid-component.png", {
      fullPage: true,
    });
  });

  test("NL EN - automated-testing-feature-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/en/automated-testing-feature-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-en-automated-testing-feature-grid-component.png", {
      fullPage: true,
    });
  });

  test("FR FR - automated-testing-feature-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_FR}/fr/automated-testing-feature-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("fr-fr-automated-testing-feature-grid-component.png", {
      fullPage: true,
    });
  });

  test("CH FR - automated-testing-feature-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/fr/automated-testing-feature-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-fr-automated-testing-feature-grid-component.png", {
      fullPage: true,
    });
  });

  test("CH DE - automated-testing-feature-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/de/automated-testing-feature-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-de-automated-testing-feature-grid-component.png", {
      fullPage: true,
    });
  });

  test("CH EN - automated-testing-feature-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/en/automated-testing-feature-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-en-automated-testing-feature-grid-component.png", {
      fullPage: true,
    });
  });

  test("ES ES - automated-testing-feature-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/es/automated-testing-feature-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-es-automated-testing-feature-grid-component.png", {
      fullPage: true,
    });
  });

  test("ES EN - automated-testing-feature-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/en/automated-testing-feature-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-en-automated-testing-feature-grid-component.png", {
      fullPage: true,
    });
  });
});

// ---------------------------------------------------------------------------
// Automated Testing FAQ Component Variations
// ---------------------------------------------------------------------------

test.describe("Visual - Automated Testing FAQ Component Variations", () => {
  test("BE EN - automated-testing-faq-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/en/automated-testing-faq-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-en-automated-testing-faq-component-variations.png", {
      fullPage: true,
    });
  });

  test("BE NL - automated-testing-faq-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/nl/automated-testing-faq-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-nl-automated-testing-faq-component-variations.png", {
      fullPage: true,
    });
  });

  test("BE FR - automated-testing-faq-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/fr/automated-testing-faq-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-fr-automated-testing-faq-component-variations.png", {
      fullPage: true,
    });
  });

  test("NL NL - automated-testing-faq-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/nl/automated-testing-faq-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-nl-automated-testing-faq-component-variations.png", {
      fullPage: true,
    });
  });

  test("NL EN - automated-testing-faq-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/en/automated-testing-faq-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-en-automated-testing-faq-component-variations.png", {
      fullPage: true,
    });
  });

  test("FR FR - automated-testing-faq-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_FR}/fr/automated-testing-faq-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("fr-fr-automated-testing-faq-component-variations.png", {
      fullPage: true,
    });
  });

  test("CH FR - automated-testing-faq-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/fr/automated-testing-faq-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-fr-automated-testing-faq-component-variations.png", {
      fullPage: true,
    });
  });

  test("CH DE - automated-testing-faq-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/de/automated-testing-faq-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-de-automated-testing-faq-component-variations.png", {
      fullPage: true,
    });
  });

  test("CH EN - automated-testing-faq-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/en/automated-testing-faq-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-en-automated-testing-faq-component-variations.png", {
      fullPage: true,
    });
  });

  test("ES ES - automated-testing-faq-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/es/automated-testing-faq-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-es-automated-testing-faq-component-variations.png", {
      fullPage: true,
    });
  });

  test("ES EN - automated-testing-faq-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/en/automated-testing-faq-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-en-automated-testing-faq-component-variations.png", {
      fullPage: true,
    });
  });
});

// ---------------------------------------------------------------------------
// Automated Testing CTA Image Component
// ---------------------------------------------------------------------------

test.describe("Visual - Automated Testing CTA Image Component", () => {
  test("BE EN - automated-testing-cta-image-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_BE}/en/automated-testing-cta-image-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-en-automated-testing-cta-image-component.png", {
      fullPage: true,
    });
  });

  test("BE NL - automated-testing-cta-image-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_BE}/nl/automated-testing-cta-image-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-nl-automated-testing-cta-image-component.png", {
      fullPage: true,
    });
  });

  test("BE FR - automated-testing-cta-image-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_BE}/fr/automated-testing-cta-image-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-fr-automated-testing-cta-image-component.png", {
      fullPage: true,
    });
  });

  test("NL NL - automated-testing-cta-image-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_NL}/nl/automated-testing-cta-image-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-nl-automated-testing-cta-image-component.png", {
      fullPage: true,
    });
  });

  test("NL EN - automated-testing-cta-image-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_NL}/en/automated-testing-cta-image-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-en-automated-testing-cta-image-component.png", {
      fullPage: true,
    });
  });

  test("FR FR - automated-testing-cta-image-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_FR}/fr/automated-testing-cta-image-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("fr-fr-automated-testing-cta-image-component.png", {
      fullPage: true,
    });
  });

  test("CH FR - automated-testing-cta-image-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_CH}/fr/automated-testing-cta-image-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-fr-automated-testing-cta-image-component.png", {
      fullPage: true,
    });
  });

  test("CH DE - automated-testing-cta-image-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_CH}/de/automated-testing-cta-image-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-de-automated-testing-cta-image-component.png", {
      fullPage: true,
    });
  });

  test("CH EN - automated-testing-cta-image-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_CH}/en/automated-testing-cta-image-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-en-automated-testing-cta-image-component.png", {
      fullPage: true,
    });
  });

  test("ES ES - automated-testing-cta-image-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_ES}/es/automated-testing-cta-image-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-es-automated-testing-cta-image-component.png", {
      fullPage: true,
    });
  });

  test("ES EN - automated-testing-cta-image-component", async ({ page }) => {
    const marketPage = new MarketPage(page, `${BASE_ES}/en/automated-testing-cta-image-component`);
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-en-automated-testing-cta-image-component.png", {
      fullPage: true,
    });
  });
});

// ---------------------------------------------------------------------------
// Automated Testing Content Section Component Variations
// ---------------------------------------------------------------------------

test.describe("Visual - Automated Testing Content Section Component Variations", () => {
  test("BE EN - automated-testing-content-section-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/en/automated-testing-content-section-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "be-en-automated-testing-content-section-component-variations.png",
      { fullPage: true }
    );
  });

  test("BE NL - automated-testing-content-section-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/nl/automated-testing-content-section-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "be-nl-automated-testing-content-section-component-variations.png",
      { fullPage: true }
    );
  });

  test("BE FR - automated-testing-content-section-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/fr/automated-testing-content-section-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "be-fr-automated-testing-content-section-component-variations.png",
      { fullPage: true }
    );
  });

  test("NL NL - automated-testing-content-section-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/nl/automated-testing-content-section-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "nl-nl-automated-testing-content-section-component-variations.png",
      { fullPage: true }
    );
  });

  test("NL EN - automated-testing-content-section-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/en/automated-testing-content-section-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "nl-en-automated-testing-content-section-component-variations.png",
      { fullPage: true }
    );
  });

  test("FR FR - automated-testing-content-section-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_FR}/fr/automated-testing-content-section-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "fr-fr-automated-testing-content-section-component-variations.png",
      { fullPage: true }
    );
  });

  test("CH FR - automated-testing-content-section-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/fr/automated-testing-content-section-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "ch-fr-automated-testing-content-section-component-variations.png",
      { fullPage: true }
    );
  });

  test("CH DE - automated-testing-content-section-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/de/automated-testing-content-section-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "ch-de-automated-testing-content-section-component-variations.png",
      { fullPage: true }
    );
  });

  test("CH EN - automated-testing-content-section-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/en/automated-testing-content-section-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "ch-en-automated-testing-content-section-component-variations.png",
      { fullPage: true }
    );
  });

  test("ES ES - automated-testing-content-section-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/es/automated-testing-content-section-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "es-es-automated-testing-content-section-component-variations.png",
      { fullPage: true }
    );
  });

  test("ES EN - automated-testing-content-section-component-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/en/automated-testing-content-section-component-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot(
      "es-en-automated-testing-content-section-component-variations.png",
      { fullPage: true }
    );
  });
});

// ---------------------------------------------------------------------------
// Automated Testing Case Study Grid Component
// ---------------------------------------------------------------------------

test.describe("Visual - Automated Testing Case Study Grid Component", () => {
  test("BE EN - automated-testing-case-study-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/en/automated-testing-case-study-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-en-automated-testing-case-study-grid-component.png", {
      fullPage: true,
    });
  });

  test("BE NL - automated-testing-case-study-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/nl/automated-testing-case-study-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-nl-automated-testing-case-study-grid-component.png", {
      fullPage: true,
    });
  });

  test("BE FR - automated-testing-case-study-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/fr/automated-testing-case-study-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-fr-automated-testing-case-study-grid-component.png", {
      fullPage: true,
    });
  });

  test("NL NL - automated-testing-case-study-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/nl/automated-testing-case-study-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-nl-automated-testing-case-study-grid-component.png", {
      fullPage: true,
    });
  });

  test("NL EN - automated-testing-case-study-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/en/automated-testing-case-study-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-en-automated-testing-case-study-grid-component.png", {
      fullPage: true,
    });
  });

  test("FR FR - automated-testing-case-study-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_FR}/fr/automated-testing-case-study-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("fr-fr-automated-testing-case-study-grid-component.png", {
      fullPage: true,
    });
  });

  test("CH FR - automated-testing-case-study-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/fr/automated-testing-case-study-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-fr-automated-testing-case-study-grid-component.png", {
      fullPage: true,
    });
  });

  test("CH DE - automated-testing-case-study-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/de/automated-testing-case-study-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-de-automated-testing-case-study-grid-component.png", {
      fullPage: true,
    });
  });

  test("CH EN - automated-testing-case-study-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/en/automated-testing-case-study-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-en-automated-testing-case-study-grid-component.png", {
      fullPage: true,
    });
  });

  test("ES ES - automated-testing-case-study-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/es/automated-testing-case-study-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-es-automated-testing-case-study-grid-component.png", {
      fullPage: true,
    });
  });

  test("ES EN - automated-testing-case-study-grid-component", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/en/automated-testing-case-study-grid-component`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-en-automated-testing-case-study-grid-component.png", {
      fullPage: true,
    });
  });
});

// ---------------------------------------------------------------------------
// Automated Testing Card Section Variations
// ---------------------------------------------------------------------------

test.describe("Visual - Automated Testing Card Section Variations", () => {
  test("BE EN - automated-testing-card-section-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/en/automated-testing-card-section-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-en-automated-testing-card-section-variations.png", {
      fullPage: true,
    });
  });

  test("BE NL - automated-testing-card-section-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/nl/automated-testing-card-section-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-nl-automated-testing-card-section-variations.png", {
      fullPage: true,
    });
  });

  test("BE FR - automated-testing-card-section-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_BE}/fr/automated-testing-card-section-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("be-fr-automated-testing-card-section-variations.png", {
      fullPage: true,
    });
  });

  test("NL NL - automated-testing-card-section-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/nl/automated-testing-card-section-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-nl-automated-testing-card-section-variations.png", {
      fullPage: true,
    });
  });

  test("NL EN - automated-testing-card-section-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_NL}/en/automated-testing-card-section-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("nl-en-automated-testing-card-section-variations.png", {
      fullPage: true,
    });
  });

  test("FR FR - automated-testing-card-section-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_FR}/fr/automated-testing-card-section-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("fr-fr-automated-testing-card-section-variations.png", {
      fullPage: true,
    });
  });

  test("CH FR - automated-testing-card-section-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/fr/automated-testing-card-section-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-fr-automated-testing-card-section-variations.png", {
      fullPage: true,
    });
  });

  test("CH DE - automated-testing-card-section-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/de/automated-testing-card-section-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-de-automated-testing-card-section-variations.png", {
      fullPage: true,
    });
  });

  test("CH EN - automated-testing-card-section-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_CH}/en/automated-testing-card-section-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("ch-en-automated-testing-card-section-variations.png", {
      fullPage: true,
    });
  });

  test("ES ES - automated-testing-card-section-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/es/automated-testing-card-section-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-es-automated-testing-card-section-variations.png", {
      fullPage: true,
    });
  });

  test("ES EN - automated-testing-card-section-variations", async ({ page }) => {
    const marketPage = new MarketPage(
      page,
      `${BASE_ES}/en/automated-testing-card-section-variations`
    );
    await marketPage.goto();
    await expect(page).toHaveScreenshot("es-en-automated-testing-card-section-variations.png", {
      fullPage: true,
    });
  });
});
