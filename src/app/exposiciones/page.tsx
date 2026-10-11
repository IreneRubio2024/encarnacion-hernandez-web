import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { exposiciones } from "@/content/exposiciones";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.exposiciones.titulo} — ${site.nombre}`,
  description: site.exposiciones.intro,
};

export default function ExposicionesPage() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <Header />
      <main id="contenido" className="px-6 py-8 sm:px-16">
     
        <h1 className="mt-4 font-display text-5xl font-medium sm:text-6xl">
          {site.exposiciones.titulo}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-[1.75] text-foreground-muted">
          {site.exposiciones.intro}
        </p>

        <ul className="mt-12 flex flex-col">
          {exposiciones.map((exp) => (
            <li
              key={`${exp.titulo}-${exp.anio}`}
              className="flex flex-wrap items-baseline gap-x-10 gap-y-2 border-t border-border py-7 first:border-t-0"
            >
              <span className="w-16 shrink-0 text-[13px] uppercase tracking-widest text-surface-label">
                {exp.anio}
              </span>
              <div>
                <p className="font-display text-2xl">{exp.titulo}</p>
                <p className="text-[15px] text-foreground-muted">{exp.lugar}</p>
              </div>
            </li>
          ))}
        </ul>

        <Link
          href="/trayectoria"
          className="mt-10 inline-block text-[13px] uppercase tracking-[0.14em] text-accent no-underline"
        >
          Ver trayectoria completa →
        </Link>
      </main>
      <Footer />
    </div>
  );
}
