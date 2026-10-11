import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-border px-6 py-8 text-[13px] text-footer-foreground sm:px-16">
      <span>© {site.nombre}</span>
      <span>Escultura · Joyas de autor · Pintura</span>
      <Link href="/contacto" className="text-foreground no-underline hover:text-accent">
        Contacto ↗
      </Link>
    </footer>
  );
}
