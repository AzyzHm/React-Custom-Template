# Contributing

Thanks for considering contributing to this template! The goal of this project is to stay
**minimal, conventional, and easy to build on**, please keep that in mind for any change.

## Getting set up

1. Fork the repository and clone your fork
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the environment file:
   ```bash
   cp .env.example .env
   ```
4. Run the dev server to confirm everything works:
   ```bash
   npm run dev
   ```

## Branching

Create a feature branch off `main` using a descriptive name:

```bash
git checkout -b feat/short-description
git checkout -b fix/short-description
```

## Making changes

- Keep the layered structure intact: components stay presentational, business/API logic lives in
  `services/`, and shared state lives in `store/`.
- Add or update tests alongside any code change:
  - `tests/unit` for pure functions and isolated component behavior
  - `tests/integration` for services/pages exercised against the mocked API (MSW)
  - `tests/e2e` for real user flows through the built app (Playwright)
- Run the full check suite before opening a PR:
  ```bash
  bash scripts/lint.sh
  bash scripts/test.sh
  ```

## Commit messages

This project loosely follows [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add product listing page
fix: correct date formatting for non-UTC locales
docs: update README getting started steps
test: add integration tests for userService
chore: bump vite to 5.x
```

## Submitting a pull request

1. Push your branch and open a PR against `main`
2. Fill out the PR template completely
3. Ensure CI is green (lint, typecheck, unit/integration tests, e2e, build)
4. Link any related issues
5. Be responsive to review feedback - small, focused PRs get merged faster

## Reporting bugs / requesting features

Please use the issue templates under **Issues → New Issue** rather than opening a blank issue -
they help ensure we get the information needed to act on it quickly.

## Code of Conduct

By participating in this project, you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md).
