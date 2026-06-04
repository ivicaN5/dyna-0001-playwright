import { defineConfig, Project } from "@playwright/test";
import { config } from "dotenv";
import { VIEWPORTS } from "./config/viewports";

config({ path: [".env.local", ".env"] });

type BrowserName = "chromium" | "firefox" | "webkit";

const BROWSERS: BrowserName[] = ["chromium", "firefox", "webkit"];

const VIEWPORT_CONFIGS = [
  { name: "desktop-default", viewport: VIEWPORTS.desktopDefault, isMobile: false },
  { name: "desktop-large", viewport: VIEWPORTS.desktopLarge, isMobile: false },
  { name: "mobile-iphone", viewport: VIEWPORTS.mobileIphone, isMobile: true },
  { name: "mobile-android", viewport: VIEWPORTS.mobileAndroid, isMobile: true },
];

const projects: Project[] = BROWSERS.flatMap((browser) =>
  VIEWPORT_CONFIGS.map(({ name, viewport, isMobile }) => ({
    name: `${browser}-${name}`,
    use: {
      browserName: browser,
      viewport,
      ...(isMobile && { hasTouch: true, isMobile: true }),
    },
  }))
);

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
  },
  projects,
});
