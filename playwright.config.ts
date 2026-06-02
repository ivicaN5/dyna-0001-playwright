import { defineConfig } from "@playwright/test";
import { config } from "dotenv";
import { VIEWPORTS } from "./config/viewports";

config({ path: [".env.local", ".env"] });

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    browserName: "chromium",
  },

  projects: [
    {
      name: "desktop-default",
      use: {
        viewport: VIEWPORTS.desktopDefault,
      },
    },
    {
      name: "desktop-large",
      use: {
        viewport: VIEWPORTS.desktopLarge,
      },
    },
    {
      name: "mobile-iphone",
      use: {
        viewport: VIEWPORTS.mobileIphone,
        hasTouch: true,
        isMobile: true,
      },
    },
    {
      name: "mobile-android",
      use: {
        viewport: VIEWPORTS.mobileAndroid,
        hasTouch: true,
        isMobile: true,
      },
    },
  ],
});
