import Image from "next/image";
import { PlaceholderImage } from "./PlaceholderImage";

export function PieceImage({
  foto,
  alt,
  className = "",
  sizes = "(min-width: 640px) 50vw, 100vw",
  bordered = true,
}: {
  foto: string | null;
  alt: string;
  className?: string;
  sizes?: string;
  bordered?: boolean;
}) {
  if (!foto) {
    return <PlaceholderImage label={alt} className={className} />;
  }

  return (
    <div
      className={`relative overflow-hidden bg-surface ${bordered ? "border border-surface-border" : ""} ${className}`}
    >
      <Image src={foto} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}
