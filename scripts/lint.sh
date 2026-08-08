#!/usr/bin/env bash
set -e

echo "Running ESLint..."
npm run lint

echo "Checking Prettier formatting..."
npm run format:check

echo "Running TypeScript type checks..."
npm run typecheck

echo "All lint checks passed."
