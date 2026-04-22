import { test, expect } from "@playwright/test";

test("consultation modal opens and closes from home page CTA", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: /book free consultation/i }).first().click();

  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(page.getByRole("heading", { name: /contact us/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /admin@chryseis.co.uk/i })).toHaveAttribute(
    "href",
    "mailto:admin@chryseis.co.uk"
  );
  await expect(page.getByRole("button", { name: /copy email/i })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
});
