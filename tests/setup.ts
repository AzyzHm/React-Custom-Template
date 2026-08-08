import "@testing-library/jest-dom/vitest";
import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "./mocks/server";

// Enable API mocking for integration tests before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));

// Reset any request handlers added in individual tests, so they don't
// leak between test files.
afterEach(() => server.resetHandlers());

// Clean up once tests are done.
afterAll(() => server.close());
