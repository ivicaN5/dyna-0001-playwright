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
    await this.scrollToBottomAndWaitForImages();
  }

  /**
   * Scrolls the page gradually from top to bottom so that all lazy-loaded images
   * are triggered, then scrolls back to the top. Waits for every <img> to be
   * fully loaded before returning.
   */
  private async scrollToBottomAndWaitForImages() {
    await this.page.evaluate(async () => {
      await new Promise<void>((resolve) => {
        const distance = 400;
        const delay = 100;
        const timer = setInterval(() => {
          window.scrollBy(0, distance);
          if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, delay);
      });
    });

    await this.page.waitForFunction(() =>
      Array.from(document.querySelectorAll("img")).every((img) => img.complete)
    );

    await this.page.evaluate(() => window.scrollTo(0, 0));
  }
}
