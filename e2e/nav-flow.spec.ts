import { test, expect } from "@playwright/test";

test("top nav flow to About page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /^about$/i }).first().click();
  await expect(page).toHaveURL(/\/about$/i);
  await expect(
    page.getByRole("heading", { name: /about chryseis technologies/i })
  ).toBeVisible();
});

test("hero Learn More flow to Workshops page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /learn more/i }).first().click();
  await expect(page).toHaveURL(/\/services\/workshops$/i);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /ready to take control of your digital future/i,
    })
  ).toBeVisible();
});
