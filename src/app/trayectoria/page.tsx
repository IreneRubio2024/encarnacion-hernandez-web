import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";
import {
  agruparPorDecada,
  educacion,
  exposicionesColectivas,
  exposicionesIndividuales,
  notaBiografica,
  obrasSingulares,
  premios,
} from "@/content/trayectoria";

export const metadata: Metadata = {
  title: `Trayectoria — ${site.nombre}`,
  description:
    "Nota biográfica, educación, premios, obras singulares y exposiciones de Encarnación Hernández.",
};

function BloqueLista({ items }: { items: { periodo: string; texto: string }[] }) {
  return (
    <dl className="flex flex-col gap-3">
      {items.map((item, i) => (
        <div key={i} className="flex flex-wrap gap-x-4 gap-y-1">
          <dt className="w-24 shrink-0 text-sm text-surface-label">{item.periodo}</dt>
          <dd className="min-w-0 flex-1 text-[15px] leading-[1.7] text-foreground-muted">
            {item.texto}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function BloqueExposiciones({ items }: { items: typeof exposicionesIndividuales }) {
  return (
    <div className="flex flex-col gap-7">
      {agruparPorDecada(items).map(([decada, entradas]) => (
        <div key={decada}>
          <h3 className="mb-3 font-display text-lg italic text-foreground">Década de {decada}</h3>
          <dl className="flex flex-col gap-2.5">
            {entradas.map((item, i) => (
              <div key={i} className="flex flex-wrap gap-x-4 gap-y-1">
                <dt className="w-16 shrink-0 text-sm text-surface-label">{item.anio}</dt>
                <dd className="min-w-0 flex-1 text-[15px] leading-[1.7] text-foreground-muted">
                  {item.texto}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}

export default function TrayectoriaPage() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <Header />
      <main id="contenido" className="flex flex-col gap-16 px-6 py-8 sm:px-16">
        <div>
          <Link href="/la-artista" className="text-[13px] uppercase tracking-[0.14em] text-accent no-underline">
            ← Volver a La artista
          </Link>
          <h1 className="mt-4 font-display text-4xl font-normal sm:text-5xl">Trayectoria</h1>
        </div>

        <section aria-labelledby="nota-biografica-titulo" className="flex flex-col gap-6">
          <h2 id="nota-biografica-titulo" className="font-display text-[13px] uppercase tracking-[0.3em] text-accent">
            Nota biográfica
          </h2>
          {notaBiografica.map((parrafo, i) => (
            <div key={i}>
              {parrafo.heading && (
                <h3 className="mb-2 font-display text-xl italic text-foreground">{parrafo.heading}</h3>
              )}
              <p className="text-[17px] leading-[1.75] text-foreground-muted">{parrafo.texto}</p>
            </div>
          ))}
        </section>

        <section aria-labelledby="educacion-titulo">
          <h2 id="educacion-titulo" className="mb-6 font-display text-[13px] uppercase tracking-[0.3em] text-accent">
            Educación
          </h2>
          <BloqueLista items={educacion} />
        </section>

        <section aria-labelledby="premios-titulo">
          <h2 id="premios-titulo" className="mb-6 font-display text-[13px] uppercase tracking-[0.3em] text-accent">
            Premios
          </h2>
          <BloqueLista items={premios} />
        </section>

        <section aria-labelledby="obras-singulares-titulo" className="flex flex-col gap-8">
          <h2 id="obras-singulares-titulo" className="font-display text-[13px] uppercase tracking-[0.3em] text-accent">
            Obras singulares
          </h2>
          <div>
            <h3 className="mb-3 text-[13px] uppercase tracking-[0.16em] text-accent">En curso</h3>
            <ul className="list-disc pl-[18px] text-[15px] leading-[1.9] text-foreground-muted">
              {obrasSingulares.enCurso.map((texto, i) => (
                <li key={i}>{texto}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-[13px] uppercase tracking-[0.16em] text-accent">Más recientes</h3>
            <ul className="list-disc pl-[18px] text-[15px] leading-[1.9] text-foreground-muted">
              {obrasSingulares.recientes.map((texto, i) => (
                <li key={i}>{texto}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-[13px] uppercase tracking-[0.16em] text-accent">Anteriores</h3>
            <ul className="list-disc pl-[18px] text-[15px] leading-[1.9] text-foreground-muted">
              {obrasSingulares.anteriores.map((texto, i) => (
                <li key={i}>{texto}</li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="individuales-titulo">
          <h2 id="individuales-titulo" className="mb-6 font-display text-[13px] uppercase tracking-[0.3em] text-accent">
            Exposiciones individuales
          </h2>
          <BloqueExposiciones items={exposicionesIndividuales} />
        </section>

        <section aria-labelledby="colectivas-titulo">
          <h2 id="colectivas-titulo" className="mb-6 font-display text-[13px] uppercase tracking-[0.3em] text-accent">
            Exposiciones colectivas
          </h2>
          <BloqueExposiciones items={exposicionesColectivas} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
