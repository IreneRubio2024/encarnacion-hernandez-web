import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section aria-label="Inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/obras/pintura/confinamiento-4-horizontal.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-x-0 top-0 h-48 bg-linear-to-b from-background/70 to-transparent" />
      </div>
      <div className="relative px-6 pt-20 pb-16 sm:px-16 sm:pt-56 sm:pb-24">
        <h1 className="max-w-3xl font-display text-6xl leading-[1.05] font-medium sm:text-8xl">
          {site.hero.tituloLinea1}
          <br />
          <em className="text-accent">{site.hero.tituloEnfasis}</em>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-[1.75] text-foreground-muted">
          {site.hero.intro}
        </p>
        <Link
          href="/obra"
          className="mt-8 inline-flex items-center gap-2 bg-accent px-6 py-3 text-[13px] uppercase tracking-[0.14em] text-background no-underline"
        >
          Explorar la obra →
        </Link>
      </div>
    </section>
  );
}
