[![React Template Banner](public/banner.png)](public/banner.png)
<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
    <img alt="Vite" src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
    <img alt="Vitest" src="https://img.shields.io/badge/Vitest-2-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" />
    <img alt="Playwright" src="https://img.shields.io/badge/Playwright-E2E-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" />
    <img alt="GitHub Actions" src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" />
</p>

A minimal, well-structured, production-ready **React** frontend/service template fully typed, layered (components / hooks / services / store), test-covered, and CI-ready out of the box.

> This is a custom template made by **AzyzHm**.

## Features

- **React 18 + TypeScript**, built with **Vite**
- **Layered architecture**: components → hooks → services (API layer) → store
- **React Router** for client-side routing
- **Zustand** for lightweight global state (swap for Redux/Context as needed)
- **Axios**-based API client with centralized endpoints and error handling
- **Full test suite**: unit, integration, and e2e tests in separate folders
  - **Vitest + React Testing Library** for unit and integration tests
  - **MSW (Mock Service Worker)** to mock the API in integration tests - no backend needed
  - **Playwright** for real-browser end-to-end tests
- **ESLint + Prettier** for linting/formatting, with **Husky + lint-staged** pre-commit hooks
- **GitHub Actions CI**: lint, typecheck, tests (with coverage), e2e, and build on every push/PR
- **Path aliases** (`@/*` → `src/*`) pre-configured in Vite, TypeScript, and Vitest

## Project Structure

```
react-template/
├── .github/
│   ├── workflows/ci.yml        # CI: lint + typecheck + tests + e2e + build
│   ├── ISSUE_TEMPLATE/         # Bug report / feature request templates
│   └── PULL_REQUEST_TEMPLATE.md
├── public/                     # Static assets served as-is (e.g. banner.png)
├── src/
│   ├── main.tsx                 # App entry point
│   ├── App.tsx                  # Root component
│   ├── routes/                  # AppRouter.tsx - route definitions
│   ├── pages/                   # Route-level components (Home, NotFound, ...)
│   ├── components/               # Reusable UI components (common/, feature-specific/)
│   ├── hooks/                    # Reusable React hooks (useFetch, ...)
│   ├── services/
│   │   ├── api/                  # client.ts (axios instance) + endpoints.ts
│   │   └── *.ts                  # Resource-level services (userService.ts, ...)
│   ├── store/                    # Global state (zustand)
│   ├── types/                    # Shared TypeScript types/interfaces
│   ├── utils/                    # Pure helper functions
│   ├── config/                   # Typed env access (env.ts)
│   └── styles/                   # Global CSS
├── tests/
│   ├── setup.ts                  # Vitest setup: jest-dom + MSW server lifecycle
│   ├── mocks/                    # MSW request handlers + server
│   ├── unit/                     # Isolated logic tests (utils, components) - no network
│   ├── integration/               # Service/page tests against a mocked API (MSW)
│   └── e2e/                      # Real-browser flows against a built app (Playwright)
├── scripts/                      # lint.sh, test.sh helper scripts
├── vite.config.ts                # Vite + Vitest config (includes path aliases, coverage)
├── playwright.config.ts
├── eslint.config.js
└── .env.example
```

## Getting Started

### 1. Clone and install dependencies

```bash
git clone https://github.com/AzyzHm/React-Custom-Template.git
cd React-Custom-Template
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env
# then edit .env with your local VITE_API_BASE_URL, etc.
```

### 3. Run the app

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Running Tests

Unit and integration tests run against mocked network requests (via MSW) no backend needed.

```bash
# All unit + integration tests
npm test

# By type
npm run test:unit
npm run test:integration

# Watch mode
npm run test:watch

# With coverage (same as CI)
npm run test:coverage

# End-to-end tests (builds the app, then drives it with a real browser)
npm run test:e2e
```

## Linting & Formatting

```bash
bash scripts/lint.sh
```

This runs `eslint`, `prettier --check`, and `tsc` (type checking), the same checks enforced in CI.

Pre-commit hooks (via Husky + lint-staged) run the same checks automatically on staged files.

## Continuous Integration

Every push and pull request to `main` triggers `.github/workflows/ci.yml`, which:

1. Installs dependencies
2. Runs lint, format, and typecheck jobs
3. Runs unit + integration tests with coverage, uploaded as a build artifact
4. Runs Playwright e2e tests against a production build, uploaded as a report artifact
5. Builds the app and uploads the `dist/` output as a build artifact

## Adding a New Feature

A typical new feature (e.g. a `Products` page consuming a `/products` API) touches these layers:

1. `src/types/index.ts` : add a `Product` type
2. `src/services/api/endpoints.ts` : add the `/products` route
3. `src/services/productService.ts` : fetch/create/update logic for the resource
4. `src/hooks/` : optional custom hook wrapping the service call
5. `src/components/` : reusable presentational pieces
6. `src/pages/Products/Products.tsx` : the route-level page
7. Register the route in `src/routes/AppRouter.tsx`
8. Add tests under `tests/unit`, `tests/integration`, and (for full user flows) `tests/e2e`

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for setup steps and
PR guidelines, and note that this project follows a [Code of Conduct](CODE_OF_CONDUCT.md).

## Security

Found a vulnerability? Please see [SECURITY.md](SECURITY.md) for how to report it responsibly.

## License

This project is licensed under the [MIT License](LICENSE).

---

Made with care by **AzyzHm**.
