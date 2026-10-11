import { test, expect } from "@playwright/test";

test.describe("Formulario de contacto", () => {
  test("muestra errores si se envía vacío", async ({ page }) => {
    await page.goto("/contacto");
    await page.getByRole("button", { name: "Enviar" }).click();

    await expect(page.getByText("Escribe tu nombre.")).toBeVisible();
    await expect(page.getByText("Escribe tu correo.")).toBeVisible();
    await expect(page.getByText("Escribe un mensaje.")).toBeVisible();
  });

  test("avisa si el correo no tiene un formato válido", async ({ page }) => {
    await page.goto("/contacto");
    await page.getByLabel("Nombre").fill("Ana");
    await page.getByLabel("Correo").fill("no-es-un-correo");
    await page.getByLabel("Mensaje").fill("Hola, quería hacer un encargo.");
    await page.getByRole("button", { name: "Enviar" }).click();

    await expect(page.getByText("Revisa el formato del correo.")).toBeVisible();
  });

  test("envía correctamente con datos válidos", async ({ page }) => {
    await page.goto("/contacto");
    await page.getByLabel("Nombre").fill("Ana");
    await page.getByLabel("Correo").fill("ana@example.com");
    await page.getByLabel("Mensaje").fill("Hola, quería hacer un encargo.");
    await page.getByRole("button", { name: "Enviar" }).click();

    await expect(page.getByRole("status")).toHaveText("Mensaje recibido. Te responderé en breve.");
  });
});
