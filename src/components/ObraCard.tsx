import Link from "next/link";
import { PieceImage } from "./PieceImage";

export function ObraCard({
  href,
  foto,
  fotoAlt,
  titulo,
  subtitulo,
}: {
  href: string;
  foto: string | null;
  fotoAlt: string;
  titulo: string;
  subtitulo: string;
}) {
  return (
    <Link href={href} className="group block no-underline">
      <PieceImage
        foto={foto}
        alt={fotoAlt}
        className="h-80"
        sizes="(min-width: 640px) 33vw, 100vw"
        bordered={false}
      />
      <div className="mt-4 flex items-baseline justify-between gap-3 px-4 sm:px-6">
        <div>
          <p className="font-display text-2xl">{titulo}</p>
          <p className="text-[15px] text-foreground-muted">{subtitulo}</p>
        </div>
        <span aria-hidden="true" className="text-xl text-accent transition-transform group-hover:translate-x-1">
          ↗
        </span>
      </div>
    </Link>
  );
}
