import { http, HttpResponse } from "msw";
import { env } from "@/config/env";

/**
 * Default MSW handlers shared by integration tests.
 * Override per-test with `server.use(...)` for edge cases.
 */
export const handlers = [
  http.get(`${env.apiBaseUrl}/users`, () => {
    return HttpResponse.json([
      { id: "1", name: "Ada Lovelace", email: "ada@example.com" },
      { id: "2", name: "Alan Turing", email: "alan@example.com" },
    ]);
  }),

  http.get(`${env.apiBaseUrl}/users/:id`, ({ params }) => {
    return HttpResponse.json({
      id: params.id,
      name: "Ada Lovelace",
      email: "ada@example.com",
    });
  }),
];
