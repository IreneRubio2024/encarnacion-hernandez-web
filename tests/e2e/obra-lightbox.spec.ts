import { test, expect } from "@playwright/test";

test.describe("Lightbox de Obra", () => {
  test("se abre al hacer clic y cierra con Escape devolviendo el foco al disparador", async ({ page }) => {
    await page.goto("/obra");
    const primerBoton = page.getByRole("button", { name: /^Ver .* en grande$/ }).first();
    await primerBoton.click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(page.getByRole("button", { name: "Cerrar ✕" })).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await expect(primerBoton).toBeFocused();
  });

  test("navega a la pieza siguiente y, al cerrar, el foco vuelve a esa miniatura", async ({ page }) => {
    await page.goto("/obra");
    const botones = page.getByRole("button", { name: /^Ver .* en grande$/ });
    await botones.first().click();

    const dialog = page.getByRole("dialog");
    await page.getByRole("button", { name: "Pieza siguiente" }).click();
    await expect(dialog).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await expect(botones.nth(1)).toBeFocused();
  });

  test("hacer clic fuera de la imagen cierra el lightbox", async ({ page }) => {
    await page.goto("/obra");
    await page.getByRole("button", { name: /^Ver .* en grande$/ }).first().click();
    await expect(page.getByRole("dialog")).toBeVisible();

    await page.getByRole("dialog").click({ position: { x: 5, y: 5 } });
    await expect(page.getByRole("dialog")).not.toBeVisible();
  });
});
