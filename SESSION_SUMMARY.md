# Session Summary

## Project: `dyna-0001-playwright`

**Repo:** https://github.com/ivicaN5/dyna-0001-playwright  
**Branch:** `feature/visual-testing-setup`

---

## What was built

### Project setup

- Initialised Playwright with TypeScript, ESLint (flat config v10), Prettier, Husky pre-commit hooks
- `dotenv` configured in `playwright.config.ts` loading from `.env.local` → `.env`
- `.env.local` holds staging URLs (gitignored), `.env` has empty keys for documentation

### Folder structure

```
config/
  viewports.ts                    ← single source of truth for all viewport dimensions
pages/
  market/MarketPage.ts            ← POM with goto(), scroll, lazy-load wait, secondLogoGrid locator
  group/GroupPage.ts              ← POM placeholder for Group instance
tests/
  e2e/                            ← empty, ready for e2e tests
  features/                       ← empty, ready for feature tests
  visual/
    market-visual.spec.ts         ← 143 visual tests (13 pages × 11 locales)
    group-visual.spec.ts          ← placeholder for Group visual tests
  accessibility/
    helpers.ts                    ← formatViolations(), getScanSummary() utilities
    market-accessibility.spec.ts  ← 429 accessibility tests (13 pages × 11 locales × 3 checks)
.github/workflows/
  playwright.yml                  ← CI: separate jobs for visual and accessibility tests
  update-visual-snapshots.yml     ← manually triggered, generates Linux baselines in 35 shards
```

---

## Pages covered (13 total, each with 11 locale/domain variants)

1. `automation-testing-metrics-component`
2. `automation-testing-large-media-component`
3. `automation-testing-component-features-only-text`
4. `automated-testing-testimonial-component`
5. `automated-testing-team-member-component-variations`
6. `automated-testing-logo-grid-component` ← second logo grid masked with `mask:`
7. `automated-testing-industry-card-grid-component-variations`
8. `automated-testing-feature-grid-component`
9. `automated-testing-faq-component-variations`
10. `automated-testing-cta-image-component`
11. `automated-testing-content-section-component-variations`
12. `automated-testing-case-study-grid-component`
13. `automated-testing-card-section-variations`

## Locale / domain matrix (11 combinations)

| Domain       | Locales    |
| ------------ | ---------- |
| `dynapps.be` | en, nl, fr |
| `dynapps.nl` | nl, en     |
| `dynapps.fr` | fr         |
| `dynapps.ch` | fr, de, en |
| `dynapps.es` | es, en     |

---

## Test matrix

| Type          | Projects                      | Tests | Total                 |
| ------------- | ----------------------------- | ----- | --------------------- |
| Visual        | 12 (3 browsers × 4 viewports) | 143   | **1,716 screenshots** |
| Accessibility | 1 (chromium, desktop-default) | 429   | **429 tests**         |

## Browsers & viewports

- **Chromium, Firefox, Webkit** — Firefox mobile projects use viewport size only (`isMobile` not supported by Firefox)
- **desktop-default** 1366×768 · **desktop-large** 1920×1080 · **mobile-iphone** 390×844 · **mobile-android** 360×800

---

## Key npm scripts

```bash
npm run dev:run:visual           # run all visual tests
npm run dev:open:visual          # visual tests in UI mode
npm run dev:update:visual        # regenerate local (macOS) baselines
npm run dev:run:accessibility    # run all accessibility tests
npm run dev:open:accessibility   # accessibility tests in UI mode
```

---

## GitHub Actions — still needed before CI fully works

1. Add 5 secrets at https://github.com/ivicaN5/dyna-0001-playwright/settings/secrets/actions:

| Secret               | Value                                    |
| -------------------- | ---------------------------------------- |
| `MARKET_BASE_URL_BE` | `https://www.website-staging.dynapps.be` |
| `MARKET_BASE_URL_NL` | `https://www.website-staging.dynapps.nl` |
| `MARKET_BASE_URL_FR` | `https://www.website-staging.dynapps.fr` |
| `MARKET_BASE_URL_CH` | `https://www.website-staging.dynapps.ch` |
| `MARKET_BASE_URL_ES` | `https://www.website-staging.dynapps.es` |

2. After secrets are added, run the **Update Visual Snapshots** workflow manually from https://github.com/ivicaN5/dyna-0001-playwright/actions to generate Linux baselines (35 shards of ~49 tests each).

---

## Known issues / next steps

- **Group instance** — `pages/group/GroupPage.ts` and `tests/visual/group-visual.spec.ts` are placeholder files; no Group pages added yet
- **Logo grid mask selector** — `[data-block-type='logo_grid']` needs to be verified in browser DevTools against the actual HTML attribute on the staging site
- **Linux baselines** — `*-linux.png` snapshots don't exist yet; CI visual tests will fail until the Update Visual Snapshots workflow is run
