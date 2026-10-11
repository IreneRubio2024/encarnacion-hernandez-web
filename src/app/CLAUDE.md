# encarnacionhernandez.com

Web de Encarnación Hernández, escultora, orfebre y pintora.
Sustituye una web antigua hecha en WordPress.

## Qué hay que construir

El diseño original venía de dos mockups HTML (`bronce-oscuro` y
`bronce-claro`, dos temas del mismo diseño, hechos en un editor visual)
que ya se convirtieron a Next.js (App Router) y se borraron una vez
incorporados. Ver «Rediseño» más abajo: ese diseño de scroll único con
Bodoni Moda fue después sustituido por la estructura multi-página
actual con Cormorant Garamond.

## Estructura (actualizada, ver «Rediseño» más abajo)

Multi-página, no de scroll único:

`/` (Inicio) · `/obra` (escultura, joyas y pintura, con filtro y
lightbox) · `/la-artista` (biografía + El taller, proceso) ·
`/exposiciones` · `/contacto` · `/trayectoria` (CV completo, enlazado
desde La artista y Exposiciones).

Contacto lleva formulario real (`ContactForm` + `src/app/actions.ts`)
y datos visibles. En la web antigua no había ninguna forma de
contactar: es el fallo principal que esta versión corrige.

## Temas

Dos temas con variables CSS en `:root` y `[data-theme="dark"]`,
botón que cambia el atributo, preferencia guardada.
**El claro es el tema por defecto.**

El bronce NO es el mismo color en los dos temas:
- claro: `#7A4A18` sobre `#F7F3EC`
- oscuro: `#D9A05B` sobre `#15120F`

En claro, el `#D9A05B` no llega al contraste mínimo de WCAG AA.
Cualquier color nuevo se comprueba antes de usarlo.

## Tipografía

Cormorant Garamond (display) y Jost (texto), desde Google Fonts,
cargadas con `next/font`. (Antes era Bodoni Moda; ver «Rediseño».)

## Contenido

Las obras viven en archivos dentro del repo, no en una base de datos.
Cada obra: título, año, material, medidas, sección, fotos, descripción.
Más adelante se añadirá TinaCMS encima de esa misma estructura para
que la artista pueda actualizarla sola.

## Requisitos no negociables

- Accesibilidad WCAG 2.1 AA: elementos semánticos reales
  (`<button>`, `<a href>`, `<label>`), contraste comprobado,
  `alt` descriptivo en todas las obras.
- Responsive de verdad, comprobado a 390 px de ancho.
- Imágenes con `next/image`.
- Tests de Playwright para navegación, formulario y cambio de tema,
  más un escaneo con axe-core.

## Despliegue

Vercel, conectado a este repositorio. Dominio
`encarnacionhernandez.com`, que ya existe y habrá que repuntar.

## Trayectoria (añadido durante el desarrollo)

La web antigua (en encarnacionhernandez.com, no en `/referencia`) tenía
páginas sin enlazar desde el menú con nota biográfica, educación, premios,
obras singulares y ~70 exposiciones individuales/colectivas desde 1982.
Se decidió con la propietaria recuperar ese contenido como una página
aparte, `/trayectoria` (src/app/trayectoria/page.tsx), con su contenido en
src/content/trayectoria.ts, enlazada desde «La artista» y «Exposiciones»
con «Ver trayectoria completa →».

## Rediseño multi-página (añadido durante el desarrollo)

Irene encontró una propuesta generada con Lovable
(`gallery-bloom-portfolio.lovable.app`) que reorganiza el sitio en páginas
independientes en vez de un scroll único, con tipografía más grande
(Cormorant Garamond) y usando uno de los dibujos reales («Dibujos en el
confinamiento») como fondo del hero — resolviendo así la falta de una foto
de escultura en condiciones para esa posición. Le pareció «más moderna y
elegante» y se adoptó esa estructura e interacción (ver sección
«Estructura» arriba), pero no su contenido: la propuesta de Lovable es solo
una maqueta visual, con biografía genérica y sin formulario de contacto
real. Todo el contenido real recuperado en esta sesión (biografía completa,
exposiciones, fotos reales, formulario funcional) se mantuvo.

El color de acento sigue siendo el bronce ya validado (no el terracota de
la propuesta). La sección «El taller» (proceso de fundición, obligatoria
según este documento) no tenía hueco en la navegación de Lovable, así que
se integró dentro de `/la-artista`.

Pendiente: si `/obra` debe crecer a catálogo completo por categoría de
joyas (anillos, broches, collares...) como tenía la web antigua, o
mantenerse como vista única con filtro — depende de lo que decida la
artista, no se ha definido todavía.