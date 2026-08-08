import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// This configures a request mocking server for Node (used in Vitest).
export const server = setupServer(...handlers);
