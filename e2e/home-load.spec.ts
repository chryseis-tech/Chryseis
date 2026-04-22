import { test, expect } from "@playwright/test";

test("home page loads with core content", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("banner")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /transform your organisation/i })
  ).toBeVisible();
  await expect(page.getByRole("button", { name: /book free consultation/i }).first()).toBeVisible();
});
