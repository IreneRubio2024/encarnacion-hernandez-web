import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ObraGaleria } from "@/components/ObraGaleria";
import { obras } from "@/content/obras";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.obra.titulo} — ${site.nombre}`,
  description: site.obra.intro,
};

export default function ObraPage() {
  const piezas = obras.filter((obra) => obra.seccion !== "taller");
  const fotografo = piezas.find((o) => o.fotografo)?.fotografo;

  return (
    <>
      <div className="mx-auto w-full max-w-7xl">
        <Header />
      </div>
      <main id="contenido">
        <div className="mx-auto w-full max-w-7xl px-6 pt-8 sm:px-16">
          <h1 className="mt-4 font-display text-5xl font-medium sm:text-6xl">{site.obra.titulo}</h1>
          <p className="mt-4 max-w-xl text-lg leading-[1.75] text-foreground-muted">
            {site.obra.intro}
          </p>
          {fotografo && (
            <p className="mt-2 text-[13px] text-surface-label">
              Fotografías de joyería: {fotografo}
            </p>
          )}
        </div>
        <div className="mt-12">
          <ObraGaleria obras={piezas} />
        </div>
      </main>
      <div className="mx-auto w-full max-w-7xl">
        <Footer />
      </div>
    </>
  );
}
