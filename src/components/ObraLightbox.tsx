"use client";

import { useEffect, useRef } from "react";
import type { Obra } from "@/content/types";
import { PieceImage } from "./PieceImage";

export function ObraLightbox({
  piezas,
  index,
  onClose,
  onNavigate,
}: {
  piezas: Obra[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const pieza = piezas[index];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowRight") {
        onNavigate((index + 1) % piezas.length);
        return;
      }
      if (e.key === "ArrowLeft") {
        onNavigate((index - 1 + piezas.length) % piezas.length);
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button");
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [index, piezas.length, onClose, onNavigate]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={pieza.fotoAlt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
      onClick={onClose}
    >
      <button
        type="button"
        ref={closeButtonRef}
        onClick={onClose}
        className="absolute top-6 right-6 text-[13px] uppercase tracking-[0.14em] text-white"
      >
        Cerrar ✕
      </button>
      {piezas.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + piezas.length) % piezas.length);
            }}
            aria-label="Pieza anterior"
            className="absolute top-1/2 left-4 -translate-y-1/2 text-3xl text-white sm:left-8"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % piezas.length);
            }}
            aria-label="Pieza siguiente"
            className="absolute top-1/2 right-4 -translate-y-1/2 text-3xl text-white sm:right-8"
          >
            ›
          </button>
        </>
      )}
      <div className="max-h-[85vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <PieceImage foto={pieza.foto} alt={pieza.fotoAlt} className="h-[70vh]" sizes="90vw" />
        <p className="mt-4 text-center text-[15px] text-white/80">
          {pieza.titulo} · {pieza.material}
        </p>
      </div>
    </div>
  );
}
