"use client";

import { useCallback, useRef, useState } from "react";
import type { Obra, Seccion } from "@/content/types";
import { ObraLightbox } from "./ObraLightbox";
import { PieceImage } from "./PieceImage";

const ETIQUETAS: Partial<Record<Seccion, string>> = {
  escultura: "Esculturas",
  joyas: "Joyas de autor",
  pintura: "Pinturas",
  grafica: "Obra gráfica",
};

export function ObraGaleria({ obras }: { obras: Obra[] }) {
  const secciones = [...new Set(obras.map((o) => o.seccion))];
  const [filtro, setFiltro] = useState<Seccion | "todas">("todas");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const visibles = filtro === "todas" ? obras : obras.filter((o) => o.seccion === filtro);

  const close = useCallback(() => {
    setOpenIndex((current) => {
      if (current !== null) triggerRefs.current[current]?.focus();
      return null;
    });
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl px-6 sm:px-16">
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar por disciplina">
        <button
          type="button"
          onClick={() => setFiltro("todas")}
          aria-pressed={filtro === "todas"}
          className={`px-4 py-2 text-[13px] uppercase tracking-[0.1em] ${
            filtro === "todas" ? "bg-accent text-background" : "border border-border text-foreground-muted"
          }`}
        >
          Todas
        </button>
        {secciones.map((seccion) => (
          <button
            key={seccion}
            type="button"
            onClick={() => setFiltro(seccion)}
            aria-pressed={filtro === seccion}
            className={`px-4 py-2 text-[13px] uppercase tracking-[0.1em] ${
              filtro === seccion ? "bg-accent text-background" : "border border-border text-foreground-muted"
            }`}
          >
            {ETIQUETAS[seccion] ?? seccion}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-1 gap-y-10 pb-16 sm:grid-cols-3 sm:gap-0 sm:pb-24">
        {visibles.map((obra, i) => (
          <li key={obra.slug}>
            <button
              type="button"
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              onClick={() => setOpenIndex(i)}
              className="block w-full cursor-zoom-in text-left"
              aria-label={`Ver ${obra.fotoAlt} en grande`}
            >
              <PieceImage
                foto={obra.foto}
                alt={obra.fotoAlt}
                className="h-80"
                sizes="(min-width: 640px) 33vw, 100vw"
                bordered={false}
              />
            </button>
            <div className="px-4 sm:px-6">
              <p className="mt-3 font-display text-lg italic">{obra.titulo}</p>
              <p className="text-[15px] text-foreground-muted">
                {ETIQUETAS[obra.seccion] ?? obra.material}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <ObraLightbox piezas={visibles} index={openIndex} onClose={close} onNavigate={setOpenIndex} />
      )}
    </div>
  );
}
