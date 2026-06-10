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

## Getting started (step-by-step for absolute beginners)

> Never used the terminal, Node.js, or Playwright before? Follow these steps in
> order. If you already have Node.js installed and the repo cloned, skip ahead to
> [Project setup](#project-setup).

A few terms first:

- **Terminal** — the app where you type commands. On **macOS** it's _Terminal_
  (Applications → Utilities). On **Windows** use _PowerShell_ or _Git Bash_
  (installed with Git, below).
- **Command** — a line you type into the terminal and run by pressing Enter.
- **Repository ("repo")** — this project's folder of code, hosted on GitHub.

### Step 1 — Install Node.js (this also installs `npm`)

1. Go to <https://nodejs.org> and download the **LTS** version for your operating system.
2. Run the installer and accept the default options.
3. Open a **new** terminal window and check it worked:

   ```bash
   node --version
   npm --version
   ```

   Each command should print a version number (e.g. `v20.x.x`). If you see
   "command not found", close the terminal, open a new one, and try again.

### Step 2 — Install Git

Git is the tool used to download (clone) the project.

- **macOS:** run `git --version`. If Git isn't installed, macOS will offer to
  install it. Or download from <https://git-scm.com>.
- **Windows:** install **Git for Windows** from <https://git-scm.com> — this also
  gives you the _Git Bash_ terminal.
- Verify with: `git --version`

### Step 3 — Download the project

In the terminal, go to the folder where you keep projects, then clone the repo
and move into it:

```bash
git clone https://github.com/ivicaN5/dyna-0001-playwright.git
cd dyna-0001-playwright
```

Every command from here on is run **inside** this `dyna-0001-playwright` folder.

### Step 4 — Install the project's dependencies

```bash
npm ci
```

This reads `package-lock.json` and installs the exact library versions the
project needs. (If `npm ci` errors, try `npm install` instead.) This also sets
up the Git pre-commit hooks automatically.

### Step 5 — Install the browsers Playwright controls

```bash
npx playwright install --with-deps
```

This downloads the Chromium, Firefox, and WebKit browsers that the tests drive.
(`--with-deps` also installs required system libraries on Linux; it's harmless on
macOS/Windows.)

### Step 6 — Add the website URLs

The tests need to know which website to test. Create a file named **`.env.local`**
in the project root containing these lines (ask a teammate if the URLs differ):

```bash
MARKET_BASE_URL_BE=https://www.website-staging.dynapps.be
MARKET_BASE_URL_NL=https://www.website-staging.dynapps.nl
MARKET_BASE_URL_FR=https://www.website-staging.dynapps.fr
MARKET_BASE_URL_CH=https://www.website-staging.dynapps.ch
MARKET_BASE_URL_ES=https://www.website-staging.dynapps.es
```

On macOS/Linux you can start from the template: `cp .env .env.local`, then edit
it. `.env.local` is private and is never committed to Git.

### Step 7 — Run your first test

Start with the accessibility suite — it's fast (~2 minutes) and needs no baseline
images:

```bash
npm run dev:run:accessibility
```

Prefer to _watch_ the tests run? Open the visual suite in interactive UI mode:

```bash
npm run dev:open:visual
```

### Step 8 — View the results

After a run, open the HTML report in your browser:

```bash
npx playwright show-report
```

You'll see every test, its status, screenshots, and (for accessibility) the
detailed findings.

### Common problems

| You see…                                      | Fix                                                                                                                       |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `command not found: npm` (or `node`)          | Node.js isn't installed, or you need a fresh terminal. Reinstall from nodejs.org and open a new terminal window.          |
| `Cannot navigate to invalid URL`              | `.env.local` is missing or a `MARKET_BASE_URL_*` value is empty. Re-check Step 6.                                         |
| Browser download / launch errors              | Re-run `npx playwright install --with-deps`.                                                                              |
| Visual test fails: "A snapshot doesn't exist" | You have no local baseline images yet. Create them with `npm run dev:update:visual` (see the snapshot note further down). |
| The first run is slow                         | The first run downloads browsers and warms caches; later runs are much faster.                                            |

---

## Project setup

> Quick reference for those already comfortable with Node.js — the section above
> walks through the same steps in more detail.

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

- 13 pages × 3 scans (full page, WCAG, main-content) × 2 projects = **78 tests**, on Chromium.
- Projects: `accessibility` (desktop, 1366×768) and `accessibility-mobile`
  (390×844, `isMobile` + `hasTouch`). The mobile/touch project exists so
  touch-only WCAG 2.2 rules like `target-size` (SC 2.5.8) are actually exercised.
- Standard: **WCAG 2.2 Level AA** — tags `wcag2a`, `wcag2aa`, `wcag21a`,
  `wcag21aa`, `wcag22a`, `wcag22aa`, plus `EN-301-549` (EAA).
- Produces **no snapshots**; it asserts there are no violations and attaches a
  JSON report per scan.

### Stability defaults (`playwright.config.ts`)

- Per-test timeout 90s, navigation timeout 60s, `expect` timeout 15s.
- `toHaveScreenshot`: animations disabled, caret hidden, CSS scale,
  `maxDiffPixelRatio: 0.01`; `reducedMotion: "reduce"`.
- CI: `retries: 2`, `workers: 1` (the accessibility workflow overrides workers — see below).

---

## Commands reference

### npm scripts

Run any of these with `npm run <name>` (they are defined in `package.json`).

| Command                          | Runs (under the hood)                                              | What it does                                                                         |
| -------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `npm run dev:run:visual`         | `playwright test tests/visual`                                     | Run the full visual regression suite (156 screenshots).                              |
| `npm run dev:open:visual`        | `playwright test tests/visual --ui`                                | Open the visual suite in Playwright's interactive **UI mode** (watch, pick, replay). |
| `npm run dev:update:visual`      | `playwright test tests/visual --update-snapshots`                  | Regenerate the local (macOS) baseline screenshots.                                   |
| `npm run dev:run:accessibility`  | `playwright test tests/accessibility --project=accessibility`      | Run the accessibility suite (39 axe scans).                                          |
| `npm run dev:open:accessibility` | `playwright test tests/accessibility --project=accessibility --ui` | Open the accessibility suite in UI mode.                                             |
| `npm run dev:run:e2e`            | `playwright test tests/e2e`                                        | Run end-to-end tests _(reserved — folder is currently empty)_.                       |
| `npm run dev:open:e2e`           | `playwright test tests/e2e --ui`                                   | E2E tests in UI mode _(reserved)_.                                                   |
| `npm run dev:run:features`       | `playwright test tests/features`                                   | Run feature tests _(reserved — folder is currently empty)_.                          |
| `npm run dev:open:features`      | `playwright test tests/features --ui`                              | Feature tests in UI mode _(reserved)_.                                               |
| `npm run lint`                   | `eslint .`                                                         | Lint all TypeScript/JavaScript files.                                                |
| `npm run format`                 | `prettier --write .`                                               | Auto-format the entire project.                                                      |
| `npm run prepare`                | `husky`                                                            | Install the Git pre-commit hooks. Runs automatically after `npm install`.            |

### Useful raw Playwright commands

Not npm scripts, but handy day-to-day:

| Command                                                  | What it does                                                            |
| -------------------------------------------------------- | ----------------------------------------------------------------------- |
| `npx playwright test`                                    | Run **every** project and suite (visual + accessibility).               |
| `npx playwright test tests/visual -g "logo-grid"`        | Run only tests whose title matches a pattern (`-g`).                    |
| `npx playwright test --project=chromium-desktop-default` | Run a single browser/viewport project.                                  |
| `npx playwright test tests/visual -u -g "faq"`           | Update baselines for matching tests only (`-u` = `--update-snapshots`). |
| `npx playwright test --headed`                           | Run with a visible browser window.                                      |
| `npx playwright test --debug`                            | Step through tests with the Playwright Inspector.                       |
| `npx playwright show-report`                             | Open the HTML report from the last run.                                 |
| `npx playwright install --with-deps`                     | (Re)install the browsers Playwright drives.                             |

Project names follow `<browser>-<viewport>` for visual (e.g. `chromium-desktop-default`,
`webkit-mobile-iphone`; browsers: `chromium`/`firefox`/`webkit`, viewports:
`desktop-default`/`desktop-large`/`mobile-iphone`/`mobile-android`). The accessibility
project is simply named `accessibility`.

### Running workflows from the CLI

Requires the [GitHub CLI](https://cli.github.com/) (`gh`), authenticated for this repo.

| Command                                                  | What it does                                           |
| -------------------------------------------------------- | ------------------------------------------------------ |
| `gh workflow run visual.yml --ref main`                  | Manually trigger the **Visual Tests** workflow.        |
| `gh workflow run accessibility.yml --ref main`           | Manually trigger the **Accessibility Tests** workflow. |
| `gh workflow run update-visual-snapshots.yml --ref main` | Regenerate and commit the **Linux** baselines.         |
| `gh run list`                                            | List recent workflow runs.                             |
| `gh run watch <run-id>`                                  | Follow a run live until it finishes.                   |

### Updating snapshots

```bash
# All BE EN baselines (local macOS)
npm run dev:update:visual

# Specific page or project only
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

## Setting up GitHub Actions (CI)

These steps configure CI from scratch (e.g. on a fresh fork). They require
**admin** access to the repository settings.

### 1. Enable Actions

Actions are on by default. To confirm, go to
**Settings → Actions → General → Actions permissions** and select
_"Allow all actions and reusable workflows"_. The workflow files in
`.github/workflows/` are detected automatically.

### 2. Add the staging-URL secrets

The workflows read the website URLs from repository **secrets** (so they are
never committed). Add all five.

**Via the GitHub UI** — _Settings → Secrets and variables → Actions → New repository secret_:

| Secret name          | Value                                    |
| -------------------- | ---------------------------------------- |
| `MARKET_BASE_URL_BE` | `https://www.website-staging.dynapps.be` |
| `MARKET_BASE_URL_NL` | `https://www.website-staging.dynapps.nl` |
| `MARKET_BASE_URL_FR` | `https://www.website-staging.dynapps.fr` |
| `MARKET_BASE_URL_CH` | `https://www.website-staging.dynapps.ch` |
| `MARKET_BASE_URL_ES` | `https://www.website-staging.dynapps.es` |

**Or via the `gh` CLI** (reads the values straight from your local `.env.local`):

```bash
while IFS='=' read -r key val; do
  [ -n "$key" ] && gh secret set "$key" --body "$val"
done < .env.local

gh secret list   # verify all five are present
```

> If a secret is missing, CI navigation fails with
> `Cannot navigate to invalid URL` (the base URL resolves to an empty string).

### 3. Generate the initial Linux baselines

The visual suite compares against **Linux** screenshots (`*-linux.png`), which
don't exist on a fresh repo. Generate them on a Linux runner:

```bash
gh workflow run update-visual-snapshots.yml --ref main
```

The workflow renders every baseline and commits them back to the branch. It
declares `permissions: contents: write` so the built-in `GITHUB_TOKEN` can push.

> **If the commit step fails with a 403:** the token is read-only. This repo
> grants write per-workflow via `permissions: contents: write`. If your org
> enforces read-only globally, also set
> **Settings → Actions → General → Workflow permissions → "Read and write permissions"**.

### 4. Run the test workflows

The baseline commit in step 3 is made with `GITHUB_TOKEN`, and GitHub does
**not** auto-trigger other workflows from such a push. So start the suites
manually the first time:

```bash
gh workflow run visual.yml --ref main
gh workflow run accessibility.yml --ref main
```

After that, they run automatically on every push and pull request to
`main`/`master` (and remain manually dispatchable).

### 5. Monitor runs

```bash
gh run list                          # recent runs across all workflows
gh run watch <run-id>                # follow a run live
gh run view <run-id> --log-failed    # show only the failing step output
```

Or use the **Actions** tab in the GitHub UI — each run uploads its HTML report
as a downloadable artifact (`visual-report` / `accessibility-report`).

### When to regenerate baselines

Re-run **Update Visual Snapshots** whenever rendering legitimately changes —
pages added/removed, intentional UI changes, or config changes that affect
rendering (viewports, animation/motion settings) — then re-run **Visual Tests**
to confirm the suite is green.
