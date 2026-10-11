import { test, expect } from "@playwright/test";

test.describe("Navegación", () => {
  test("el encabezado enlaza a cada página", async ({ page }) => {
    await page.goto("/");

    for (const [label, path, heading] of [
      ["Obra", "/obra", "La obra"],
      ["La artista", "/la-artista", "Encarnación Hernández"],
      ["Exposiciones", "/exposiciones", "Exposiciones"],
      ["Contacto", "/contacto", "Contacto"],
    ] as const) {
      await page.getByRole("link", { name: label, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`${path}$`));
      await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();
    }

    await page.getByRole("link", { name: "Inicio", exact: true }).click();
    await expect(page).toHaveURL(/\/$/);
  });

  test("el enlace de saltar al contenido funciona con teclado", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Saltar al contenido" })).toBeFocused();
  });

  test("el filtro de disciplina en /obra muestra solo las piezas de esa sección", async ({ page }) => {
    await page.goto("/obra");
    await page.getByRole("button", { name: "Joyas de autor" }).click();
    await expect(page.getByRole("button", { name: /^Ver .* en grande$/ })).toHaveCount(4);
  });
});
