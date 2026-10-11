import { test, expect } from "@playwright/test";

test.describe("Cambio de tema", () => {
  test("el tema claro es el predeterminado", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  });

  test("el botón cambia el tema y lo guarda para la siguiente visita", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: /modo oscuro/i });

    await toggle.click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await expect(page.getByRole("button", { name: /modo claro/i })).toBeVisible();

    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  });
});
