import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ObraCard } from "@/components/ObraCard";
import { SkipLink } from "@/components/SkipLink";
import { exposiciones } from "@/content/exposiciones";
import { obrasPorSeccion } from "@/content/obras";
import { site } from "@/content/site";

function destacada(seccion: Parameters<typeof obrasPorSeccion>[0]) {
  const piezas = obrasPorSeccion(seccion);
  return piezas.find((o) => o.foto) ?? piezas[0];
}

export default function Home() {
  const esculturaDestacada = destacada("escultura");
  const joyaDestacada = destacada("joyas");
  const pinturaDestacada = destacada("pintura");
  const graficaDestacada = destacada("grafica");
  const ultimaExposicion = exposiciones[0];

  return (
    <>
      <SkipLink />
      <Header variant="overlay" />
      <main id="contenido">
        <Hero />

        <div className="mx-auto w-full max-w-7xl">
          <section aria-labelledby="obra-titulo" className="px-6 py-16 sm:px-16">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 id="obra-titulo" className="font-display text-4xl font-medium sm:text-5xl">
                  {site.obra.titulo}
                </h2>
              </div>
              <Link
                href="/obra"
                className="text-[13px] uppercase tracking-[0.14em] text-accent no-underline"
              >
                Ver toda la obra →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-0">
              <ObraCard
                href="/obra"
                foto={esculturaDestacada.foto}
                fotoAlt={esculturaDestacada.fotoAlt}
                titulo="Esculturas"
                subtitulo="La forma y la materia"
              />
              <ObraCard
                href="/obra"
                foto={joyaDestacada.foto}
                fotoAlt={joyaDestacada.fotoAlt}
                titulo="Joyas de autor"
                subtitulo="Pequeñas esculturas para llevar"
              />
              <ObraCard
                href="/obra"
                foto={pinturaDestacada.foto}
                fotoAlt={pinturaDestacada.fotoAlt}
                titulo="Pinturas"
                subtitulo="El gesto sobre el papel"
              />
              <ObraCard
                href="/obra"
                foto={graficaDestacada.foto}
                fotoAlt={graficaDestacada.fotoAlt}
                titulo="Obra gráfica"
                subtitulo="El dibujo como apunte"
              />
            </div>
          </section>

          <section aria-labelledby="artista-titulo" className="border-t border-border px-6 py-16 sm:px-16">
            <div className="flex flex-wrap gap-14">
              <div className="min-w-0 flex-[1_1_300px]">
                <h2 id="artista-titulo" className="font-display text-4xl font-medium">
                  {site.laArtista.teaser}
                </h2>
                <Link
                  href="/la-artista"
                  className="mt-5 inline-block text-[13px] uppercase tracking-[0.14em] text-accent no-underline"
                >
                  Conocer a Encarnación →
                </Link>
              </div>
              <p className="min-w-0 flex-[1_1_380px] text-lg leading-[1.75] text-foreground-muted">
                {site.laArtista.parrafos[1]}
              </p>
            </div>
          </section>

          {ultimaExposicion && (
            <section
              aria-labelledby="exposiciones-titulo"
              className="border-t border-border px-6 py-16 sm:px-16"
            >
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <h2 id="exposiciones-titulo" className="font-display text-4xl font-medium sm:text-5xl">
                    {site.exposiciones.titulo}
                  </h2>
                </div>
                <Link
                  href="/exposiciones"
                  className="text-[13px] uppercase tracking-[0.14em] text-accent no-underline"
                >
                  Ver exposiciones →
                </Link>
              </div>
              <div className="mt-10 border-t border-border pt-8">
                <span className="text-[13px] uppercase tracking-widest text-surface-label">
                  {ultimaExposicion.lugar} · {ultimaExposicion.anio}
                </span>
                <p className="mt-2 font-display text-2xl">{ultimaExposicion.titulo}</p>
              </div>
            </section>
          )}
        </div>
      </main>
      <div className="mx-auto w-full max-w-7xl">
        <Footer />
      </div>
    </>
  );
}
