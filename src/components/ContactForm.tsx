"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions";

const INITIAL_STATE: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContactForm, INITIAL_STATE);

  return (
    <form
      action={action}
      className="flex min-w-0 flex-[1_1_380px] flex-col gap-4.5"
      noValidate
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nombre" className="text-xs uppercase tracking-[0.14em] text-label">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          aria-invalid={state.fieldErrors?.nombre ? true : undefined}
          aria-describedby={state.fieldErrors?.nombre ? "nombre-error" : undefined}
          className="min-h-[46px] border border-input-border bg-input-bg px-3.5 py-3 text-base text-foreground"
        />
        {state.fieldErrors?.nombre && (
          <p id="nombre-error" className="text-sm text-accent">
            {state.fieldErrors.nombre}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="correo" className="text-xs uppercase tracking-[0.14em] text-label">
          Correo
        </label>
        <input
          id="correo"
          name="correo"
          type="email"
          required
          aria-invalid={state.fieldErrors?.correo ? true : undefined}
          aria-describedby={state.fieldErrors?.correo ? "correo-error" : undefined}
          className="min-h-[46px] border border-input-border bg-input-bg px-3.5 py-3 text-base text-foreground"
        />
        {state.fieldErrors?.correo && (
          <p id="correo-error" className="text-sm text-accent">
            {state.fieldErrors.correo}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensaje" className="text-xs uppercase tracking-[0.14em] text-label">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          aria-invalid={state.fieldErrors?.mensaje ? true : undefined}
          aria-describedby={state.fieldErrors?.mensaje ? "mensaje-error" : undefined}
          className="border border-input-border bg-input-bg px-3.5 py-3 text-base text-foreground"
        />
        {state.fieldErrors?.mensaje && (
          <p id="mensaje-error" className="text-sm text-accent">
            {state.fieldErrors.mensaje}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="min-h-12 self-start px-7.5 text-[13px] uppercase tracking-[0.14em] text-background bg-accent disabled:opacity-60"
      >
        {pending ? "Enviando…" : "Enviar"}
      </button>

      <p role="status" aria-live="polite" className="text-sm text-foreground-muted">
        {state.status === "success" ? state.message : ""}
      </p>
    </form>
  );
}
