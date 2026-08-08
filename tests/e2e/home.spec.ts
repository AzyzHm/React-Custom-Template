import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("loads and shows the main heading", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("clicking the button triggers the alert", async ({ page }) => {
    await page.goto("/");

    let alertMessage = "";
    page.on("dialog", async (dialog) => {
      alertMessage = dialog.message();
      await dialog.accept();
    });

    await page.getByRole("button", { name: "Click me" }).click();
    expect(alertMessage).toBe("Hello from the template!");
  });

  test("navigating to an unknown route shows 404", async ({ page }) => {
    await page.goto("/this-route-does-not-exist");
    await expect(page.getByRole("heading", { name: "404" })).toBeVisible();
  });
});
