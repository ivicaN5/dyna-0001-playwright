# dyna-0001-playwright

Playwright test suite for the Dynapps marketing website (DatoCMS + Next.js).
It runs **visual regression** and **accessibility** checks against the staging
environment.

---

## Tech stack

- **[Playwright](https://playwright.dev/)** with TypeScript
- **[@axe-core/playwright](https://github.com/dequelabs/axe-core-npm)** for accessibility scanning
- **ESLint** (flat config) + **Prettier** for linting/formatting
- **Husky** + **lint-staged** pre-commit hooks (auto `eslint --fix` + `prettier --write`)
- **dotenv** for environment configuration

---

## Project setup

### Prerequisites

- Node.js (LTS)
- npm

### Install

```bash
npm ci
npx playwright install --with-deps
```

The `prepare` script installs Husky git hooks automatically on `npm install`.

### Environment variables

The suite targets one base URL per country domain. Values are loaded by
`dotenv` in `playwright.config.ts`, from `.env.local` first, then `.env`.

| Variable             | Example                                  |
| -------------------- | ---------------------------------------- |
| `MARKET_BASE_URL_BE` | `https://www.website-staging.dynapps.be` |
| `MARKET_BASE_URL_NL` | `https://www.website-staging.dynapps.nl` |
| `MARKET_BASE_URL_FR` | `https://www.website-staging.dynapps.fr` |
| `MARKET_BASE_URL_CH` | `https://www.website-staging.dynapps.ch` |
| `MARKET_BASE_URL_ES` | `https://www.website-staging.dynapps.es` |

- `.env` is a committed template with empty values (documentation only).
- `.env.local` holds the real staging URLs and is **gitignored**.
- In CI the same keys are provided as **GitHub Actions secrets** (see below).

> The active visual and accessibility suites currently only use
> `MARKET_BASE_URL_BE` (they are scoped to the BE English variant — see
> [Test suites](#test-suites)). The other URLs remain configured for future
> expansion.

---

## Project structure

```
config/
  viewports.ts                    # single source of truth for viewport sizes
pages/
  market/MarketPage.ts            # Market page object (navigation, lazy-image wait, masks)
  group/GroupPage.ts              # placeholder for the Group instance
tests/
  e2e/                            # (reserved) end-to-end tests
  features/                       # (reserved) feature tests
  visual/
    market-visual.spec.ts         # visual regression tests
    market-visual.spec.ts-snapshots/   # committed baseline screenshots (*-linux.png for CI)
  accessibility/
    market-accessibility.spec.ts  # axe-core accessibility tests
    helpers.ts                    # violation formatting / scan summary helpers
.github/workflows/
  visual.yml                      # CI: visual regression suite
  accessibility.yml               # CI: accessibility suite (non-blocking)
  update-visual-snapshots.yml     # manual: regenerate Linux baselines
playwright.config.ts
```

---

## Test suites

Both suites are scoped to the **BE English** variant and cover 13 component
pages.

### Visual regression (`tests/visual`)

- 13 pages × 12 projects (3 browsers × 4 viewports) = **156 screenshots**.
- Browsers: Chromium, Firefox, WebKit. Viewports: `desktop-default` (1366×768),
  `desktop-large` (1920×1080), `mobile-iphone` (390×844), `mobile-android`
  (360×800). Firefox mobile uses viewport size only (`isMobile` is unsupported).
- Full-page screenshots; the second logo grid is masked on the logo-grid page.
- Baselines are committed under `tests/visual/*.spec.ts-snapshots/`. CI compares
  against Linux baselines (`*-linux.png`); local macOS baselines are `*-darwin.png`.

### Accessibility (`tests/accessibility`)

- 13 pages × 3 scans (full page, WCAG, main-content) = **39 tests**, on Chromium.
- Tags: `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `EN-301-549` (EAA).
- Produces **no snapshots**; it asserts there are no violations and attaches a
  JSON report per scan.

### Stability defaults (`playwright.config.ts`)

- Per-test timeout 90s, navigation timeout 60s, `expect` timeout 15s.
- `toHaveScreenshot`: animations disabled, caret hidden, CSS scale,
  `maxDiffPixelRatio: 0.01`; `reducedMotion: "reduce"`.
- CI: `retries: 2`, `workers: 1` (the accessibility workflow overrides workers — see below).

---

## Running tests locally

```bash
# Visual
npm run dev:run:visual           # run all visual tests
npm run dev:open:visual          # visual tests in UI mode
npm run dev:update:visual        # regenerate local (macOS) baselines

# Accessibility
npm run dev:run:accessibility    # run all accessibility tests
npm run dev:open:accessibility   # accessibility tests in UI mode

# (reserved) e2e / feature suites
npm run dev:run:e2e
npm run dev:run:features
```

Other scripts: `npm run lint`, `npm run format`.

### Updating snapshots

```bash
# Specific page / project
npx playwright test tests/visual -u -g "automated-testing-faq-component-variations"
npx playwright test tests/visual -u --project=chromium-desktop-default
```

> Local baselines are macOS (`*-darwin.png`) and **do not** match CI's Linux
> renderer. Linux baselines (`*-linux.png`) are generated in CI — see
> [Update Visual Snapshots](#update-visual-snapshots-manual).

---

## GitHub Actions workflows

All workflows read the staging URLs from repository **secrets**
(`MARKET_BASE_URL_BE` … `MARKET_BASE_URL_ES`), configured under
**Settings → Secrets and variables → Actions**.

### Visual Tests — `.github/workflows/visual.yml`

- **Triggers:** push & pull request to `main`/`master`, plus manual `workflow_dispatch`.
- **Job:** installs all browsers, runs `npx playwright test tests/visual`,
  uploads the HTML report as the `visual-report` artifact.
- **Pass/fail:** a screenshot diff **fails** the workflow. Requires the Linux
  baselines to exist (generated by the snapshot workflow below).

### Accessibility Tests — `.github/workflows/accessibility.yml`

- **Triggers:** push & pull request to `main`/`master`, plus manual `workflow_dispatch`.
- **Job:** installs Chromium, runs
  `npx playwright test tests/accessibility --project=accessibility --workers=4 --retries=0`,
  uploads the `accessibility-report` artifact.
- **Non-blocking:** the run step uses `continue-on-error: true`, so accessibility
  violations are reported as a **warning** and do **not** fail the workflow.
  Inspect the artifact (and the warning-annotated step) for details.
- **Why these flags:** the suite previously ran serially (repo-wide `workers: 1`)
  with retries and hit the 60-minute job timeout. Parallelising (`--workers=4`)
  and skipping retries keeps it well under the limit (~2 min).

### Update Visual Snapshots — `.github/workflows/update-visual-snapshots.yml`

- **Trigger:** manual only (`workflow_dispatch`).
- **Purpose:** regenerate the **Linux** baseline screenshots (`*-linux.png`) and
  commit them back to the branch it runs on.
- **Permissions:** declares `permissions: contents: write` so the `GITHUB_TOKEN`
  can push the regenerated baselines (the repo default token is read-only).
- **Run it after:** adding/removing pages, intentional UI changes, or any change
  that affects rendering (e.g. navigation/animation config).

```bash
gh workflow run update-visual-snapshots.yml --ref main
# or run the test suite manually:
gh workflow run visual.yml --ref main
gh workflow run accessibility.yml --ref main
```

> **Note:** the baseline commit is made with `GITHUB_TOKEN`, and GitHub does not
> trigger other workflows from such pushes. After regenerating baselines, start
> the Visual Tests workflow manually (or via a normal push/PR) to validate.

---

## CI setup checklist (for a fresh repo)

1. Add the five `MARKET_BASE_URL_*` secrets under
   **Settings → Secrets and variables → Actions**.
2. Run **Update Visual Snapshots** to generate and commit the Linux baselines.
3. Run **Visual Tests** / **Accessibility Tests** (push, PR, or manual dispatch).
