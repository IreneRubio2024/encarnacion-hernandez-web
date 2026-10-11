import Link from "next/link";
import { site } from "@/content/site";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/obra", label: "Obra" },
  { href: "/la-artista", label: "La artista" },
  { href: "/exposiciones", label: "Exposiciones" },
];

export function Header({ variant = "default" }: { variant?: "default" | "overlay" }) {
  return (
    <header
      className={`flex flex-wrap items-center justify-between gap-6 px-6 py-7 sm:px-16 ${
        variant === "overlay" ? "sm:absolute sm:inset-x-0 sm:top-0 sm:z-20 sm:mx-auto sm:w-full sm:max-w-7xl" : ""
      }`}
    >
      <Link
        href="/"
        className="font-display text-2xl font-medium tracking-[0.02em] no-underline sm:text-3xl"
      >
        {site.nombre}
      </Link>
      <nav
        aria-label="Secciones principales"
        className="flex flex-wrap items-center gap-6 text-[13px] uppercase tracking-[0.14em] sm:gap-7"
      >
        <ul className="flex flex-wrap gap-6 sm:gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
        <ThemeToggle />
        <Link
          href="/contacto"
          className="border border-border px-4 py-2 no-underline hover:border-accent hover:text-accent"
        >
          Contacto
        </Link>
      </nav>
    </header>
  );
}
