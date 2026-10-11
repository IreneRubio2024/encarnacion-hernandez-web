import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const RUTAS = ["/", "/obra", "/la-artista", "/exposiciones", "/contacto", "/trayectoria"];

test.describe("Accesibilidad (axe-core)", () => {
  for (const theme of ["light", "dark"] as const) {
    for (const ruta of RUTAS) {
      test(`sin violaciones WCAG 2.1 AA en ${ruta} (tema ${theme})`, async ({ page }) => {
        await page.goto(ruta);
        await page.evaluate((t) => {
          document.documentElement.setAttribute("data-theme", t);
        }, theme);

        const results = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze();

        expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
      });
    }
  }
});
