import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PieceImage } from "@/components/PieceImage";
import { obrasPorSeccion } from "@/content/obras";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.laArtista.titulo} — ${site.nombre}`,
  description: site.laArtista.intro,
};

export default function LaArtistaPage() {
  const fotosTaller = obrasPorSeccion("taller");

  return (
    <div className="mx-auto w-full max-w-7xl">
      <Header />
      <main id="contenido">
        <div className="px-6 py-8 sm:px-16">
          <h1 className="mt-4 font-display text-3xl font-medium sm:text-4xl">
            {site.laArtista.titulo}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-[1.75] text-foreground-muted">
            {site.laArtista.intro}
          </p>
        </div>

        <div className="flex flex-wrap gap-14 border-t border-border px-6 py-12 sm:px-16">
          <div className="min-w-0 flex-[999_1_440px]">
            <h2 className="mb-5 font-display text-4xl font-medium">
              {site.laArtista.teaser}
            </h2>
            <div className="flex flex-col gap-4">
              {site.laArtista.parrafos.map((parrafo, i) => (
                <p
                  key={i}
                  className="text-[17px] leading-[1.75] text-foreground-muted"
                >
                  {parrafo}
                </p>
              ))}
            </div>
            <Link
              href="/trayectoria"
              className="mt-6 inline-block text-[13px] uppercase tracking-[0.14em] text-accent no-underline"
            >
              Ver trayectoria completa →
            </Link>
          </div>
          <div className="flex-[1_1_300px]">
            <PieceImage
              foto={site.laArtista.foto}
              alt={site.laArtista.retratoAlt}
              className="h-90"
              sizes="(min-width: 640px) 25vw, 100vw"
            />
          </div>
        </div>

        <div className="border-t border-border px-6 py-12 sm:px-16">
          <div className="flex flex-wrap gap-11">
            <div className="min-w-0 flex-[1_1_300px]">
              <h2 className="mt-4 mb-4 font-display text-[34px] font-medium">
                {site.taller.titulo}
              </h2>
              <p className="text-[17px] leading-[1.75] text-foreground-muted">
                {site.taller.texto}
              </p>
            </div>
            <div className="grid min-w-0 flex-[2_1_480px] grid-cols-1 gap-4 sm:grid-cols-3">
              {fotosTaller.map((foto) => (
                <PieceImage
                  key={foto.slug}
                  foto={foto.foto}
                  alt={foto.fotoAlt}
                  className="h-30 sm:h-47.5"
                  sizes="(min-width: 640px) 33vw, 100vw"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
