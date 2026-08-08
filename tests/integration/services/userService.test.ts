import { describe, expect, it } from "vitest";
import { HttpResponse, http } from "msw";
import { server } from "../../mocks/server";
import { env } from "@/config/env";
import { userService } from "@/services/userService";

describe("userService (integration, mocked API via MSW)", () => {
  it("fetches the list of users", async () => {
    const users = await userService.getUsers();

    expect(users).toHaveLength(2);
    expect(users[0]).toMatchObject({ name: "Ada Lovelace" });
  });

  it("fetches a single user by id", async () => {
    const user = await userService.getUserById("42");
    expect(user.id).toBe("42");
  });

  it("propagates errors from the API layer", async () => {
    server.use(
      http.get(`${env.apiBaseUrl}/users`, () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );

    await expect(userService.getUsers()).rejects.toBeTruthy();
  });
});
