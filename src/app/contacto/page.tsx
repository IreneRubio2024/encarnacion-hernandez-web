import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.contacto.titulo} — ${site.nombre}`,
  description: site.contacto.texto,
};

export default function ContactoPage() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <Header />
      <main id="contenido" className="px-6 py-8 sm:px-16">
        <h1 className="mt-4 font-display text-5xl font-medium sm:text-6xl">
          {site.contacto.titulo}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-[1.75] text-foreground-muted">
          {site.contacto.texto}
        </p>

        <div className="mt-12 flex flex-wrap gap-14 border-t border-border pt-12">
          <div className="min-w-0 flex-[1_1_340px]">
            <p className="text-[17px] leading-[1.9] text-foreground-muted">
              {site.contacto.correo}
              <br />
              {site.contacto.telefono} (móvil)
              <br />
              {site.contacto.telefonoFijo} (fijo)
              <br />
              {site.contacto.ciudad}
            </p>
            <p className="mt-4 flex gap-5 text-[13px] uppercase tracking-[0.14em] text-accent">
              <a href={site.contacto.redes.linkedin} className="no-underline hover:underline">
                LinkedIn
              </a>
              <a href={site.contacto.redes.facebook} className="no-underline hover:underline">
                Facebook
              </a>
            </p>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
