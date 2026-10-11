"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"nombre" | "correo" | "mensaje", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const nombre = String(formData.get("nombre") ?? "").trim();
  const correo = String(formData.get("correo") ?? "").trim();
  const mensaje = String(formData.get("mensaje") ?? "").trim();

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (!nombre) fieldErrors.nombre = "Escribe tu nombre.";
  if (!correo) fieldErrors.correo = "Escribe tu correo.";
  else if (!EMAIL_RE.test(correo)) fieldErrors.correo = "Revisa el formato del correo.";
  if (!mensaje) fieldErrors.mensaje = "Escribe un mensaje.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors };
  }

  // TODO: conectar un proveedor real de envío de correo (p. ej. Resend) antes
  // de desplegar. Por ahora el envío solo se registra en el log del servidor.
  console.info("[contacto] nuevo mensaje", { nombre, correo, mensaje });

  return {
    status: "success",
    message: "Mensaje recibido. Te responderé en breve.",
  };
}
