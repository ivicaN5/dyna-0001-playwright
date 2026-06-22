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
    await this.page.goto(this.url, { waitUntil: "domcontentloaded", timeout: 60000 });
    await this.dismissCookieConsent();
    await this.removeAvoDebugger();
    await this.scrollToBottomAndWaitForImages();
  }

  async dismissCookieConsent() {
    const acceptButton = this.page.locator(
      "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"
    );
    await acceptButton.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
    if (await acceptButton.isVisible()) {
      await acceptButton.click();
      await acceptButton.waitFor({ state: "hidden", timeout: 5000 }).catch(() => {});
    }
  }

  async removeAvoDebugger() {
    await this.page.evaluate(() => {
      const toolbar = document.getElementById("avo-debugger");
      if (toolbar) toolbar.remove();
    });
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

    // Only require visible, source-resolved images to finish loading, and bound
    // the wait so a hidden/off-screen lazy image (e.g. inactive carousel slide)
    // or a stalled request can't hang the whole test for the full timeout.
    await this.page
      .waitForFunction(
        () =>
          Array.from(document.querySelectorAll("img"))
            .filter((img) => img.offsetParent !== null && img.currentSrc)
            .every((img) => img.complete && img.naturalWidth > 0),
        undefined,
        { timeout: 20000 }
      )
      .catch(() => {
        // Proceed anyway — off-screen/hidden lazy images may never load.
      });

    await this.page.evaluate(() => window.scrollTo(0, 0));
  }
}
