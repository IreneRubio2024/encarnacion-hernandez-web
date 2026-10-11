/**
 * Marcador temporal mientras no hay fotografías reales. Cuando `foto` llegue
 * con una ruta real en /public, este componente se sustituye por next/image
 * en el lugar donde se usa (ver Obra.foto en src/content/types.ts).
 */
export function PlaceholderImage({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-end border border-surface-border bg-surface p-3.5 ${className}`}
    >
      <span className="text-[11px] uppercase tracking-[0.12em] text-surface-label">
        {label}
      </span>
    </div>
  );
}
