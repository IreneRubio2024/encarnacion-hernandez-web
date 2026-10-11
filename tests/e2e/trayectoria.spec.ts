import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Página de trayectoria", () => {
  test("se accede desde La artista y se puede volver", async ({ page }) => {
    await page.goto("/la-artista");
    await page.getByRole("link", { name: "Ver trayectoria completa →" }).click();
    await expect(page).toHaveURL(/\/trayectoria$/);
    await expect(page.getByRole("heading", { name: "Trayectoria", level: 1 })).toBeVisible();

    await page.getByRole("link", { name: "← Volver a La artista" }).click();
    await expect(page).toHaveURL(/\/la-artista$/);
  });

  test("sin violaciones WCAG 2.1 AA", async ({ page }) => {
    await page.goto("/trayectoria");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([]);
  });
});
