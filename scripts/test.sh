#!/usr/bin/env bash
set -e

echo "Running unit + integration tests with coverage..."
npm run test:coverage

echo "Running end-to-end tests..."
npm run test:e2e

echo "All tests passed."
