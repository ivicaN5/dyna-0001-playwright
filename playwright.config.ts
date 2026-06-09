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

const visualProjects: Project[] = BROWSERS.flatMap((browser) =>
  VIEWPORT_CONFIGS.map(({ name, viewport, isMobile }) => ({
    name: `${browser}-${name}`,
    testMatch: "**/visual/**/*.spec.ts",
    use: {
      browserName: browser,
      viewport,
      // Firefox does not support isMobile or hasTouch — use viewport size only
      ...(isMobile && browser !== "firefox" && { hasTouch: true, isMobile: true }),
    },
  }))
);

// Accessibility tests run on a single browser + desktop viewport —
// a11y violations are not viewport- or browser-specific.
const accessibilityProject: Project = {
  name: "accessibility",
  testMatch: "**/accessibility/**/*.spec.ts",
  use: {
    browserName: "chromium",
    viewport: VIEWPORTS.desktopDefault,
  },
};

export default defineConfig({
  testDir: "./tests",
  timeout: 90_000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  // Stability + tolerance defaults for a large visual-snapshot suite.
  expect: {
    timeout: 15_000,
    toHaveScreenshot: {
      // Freeze finite animations and disable infinite ones for stable pixels.
      animations: "disabled",
      caret: "hide",
      // Render at CSS pixels so snapshots are consistent across device scale factors.
      scale: "css",
      // Tolerate sub-pixel anti-aliasing jitter to avoid false positives at scale.
      maxDiffPixelRatio: 0.01,
    },
  },
  use: {
    navigationTimeout: 60_000,
    // Honour prefers-reduced-motion so CSS-driven animations settle before capture.
    reducedMotion: "reduce",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [...visualProjects, accessibilityProject],
});
