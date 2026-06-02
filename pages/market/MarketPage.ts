import { Page, Locator } from "@playwright/test";

export class MarketPage {
  readonly page: Page;
  readonly url: string;
  readonly secondLogoGrid: Locator;

  constructor(page: Page, url: string) {
    this.page = page;
    this.url = url;
    // NOTE: Verify the selector "[data-block-type='logo_grid']" in browser DevTools
    // (F12 → inspect the logo grid section) and adjust if the actual attribute differs.
    this.secondLogoGrid = page.locator("[data-block-type='logo_grid']").nth(1);
  }

  async goto() {
    await this.page.goto(this.url, { waitUntil: "load" });
    await this.page.waitForLoadState("domcontentloaded");
  }
}
