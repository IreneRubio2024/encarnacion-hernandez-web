import type { Obra } from "./types";

// Las 3 fotos del proceso de fundición y una de los "Dibujos en el
// confinamiento" son reales, recuperadas de www.encarnacionhernandez.com.
// [CONTENIDO PENDIENTE] el resto de piezas (esculturas, joyas, pinturas):
// título, año, medidas, descripción y fotografías en buena resolución. La
// web antigua solo tenía miniaturas de 170-400px para estas piezas,
// demasiado pequeñas para los recuadros grandes de este diseño.
export const obras: Obra[] = [
  {
    slug: "efebo",
    titulo: "Efebo",
    material: "bronce",
    medidas: "35 × 20 × 20 cm",
    seccion: "escultura",
    foto: null,
    fotoAlt: "Efebo, escultura de bronce de cuerpo entero, luz lateral",
  },
  {
    slug: "escultura-2",
    titulo: "[TÍTULO]",
    material: "bronce",
    seccion: "escultura",
    foto: null,
    fotoAlt: "[DESCRIPCIÓN DE LA PIEZA 2]",
  },
  {
    slug: "escultura-3",
    titulo: "[TÍTULO]",
    material: "bronce",
    seccion: "escultura",
    foto: null,
    fotoAlt: "[DESCRIPCIÓN DE LA PIEZA 3]",
  },
  {
    slug: "taller-horno",
    titulo: "Abriendo el horno",
    material: "proceso",
    seccion: "taller",
    foto: "/obras/taller/abriendo-el-horno.jpg",
    fotoAlt: "Abriendo el horno de fundición a la cera perdida",
  },
  {
    slug: "taller-acabado",
    titulo: "Acabado",
    material: "proceso",
    seccion: "taller",
    foto: "/obras/taller/acabado.jpg",
    fotoAlt: "Acabado de una pieza recién fundida",
  },
  {
    slug: "taller-molde",
    titulo: "Rompiendo el molde",
    material: "proceso",
    seccion: "taller",
    foto: "/obras/taller/rompiendo-el-molde.jpg",
    fotoAlt: "Rompiendo el molde para liberar la pieza fundida",
  },
  {
    slug: "pendientes",
    titulo: "Pendientes",
    material: "joyería de autor",
    seccion: "joyas",
    foto: null,
    fotoAlt: "Pendientes de joyería de autor",
    fotografo: "Marta Calleja",
  },
  {
    slug: "anillo",
    titulo: "Anillo",
    material: "joyería de autor",
    seccion: "joyas",
    foto: null,
    fotoAlt: "Anillo de joyería de autor",
    fotografo: "Marta Calleja",
  },
  {
    slug: "colgante",
    titulo: "Colgante",
    material: "joyería de autor",
    seccion: "joyas",
    foto: null,
    fotoAlt: "Colgante de joyería de autor",
    fotografo: "Marta Calleja",
  },
  {
    slug: "broche",
    titulo: "Broche",
    material: "joyería de autor",
    seccion: "joyas",
    foto: null,
    fotoAlt: "Broche de joyería de autor",
    fotografo: "Marta Calleja",
  },
  {
    slug: "pinturas",
    titulo: "Pinturas",
    material: "pintura",
    seccion: "pintura",
    foto: null,
    fotoAlt: "Serie de pinturas",
  },
  {
    slug: "dibujos-confinamiento",
    titulo: "Dibujos en el confinamiento",
    material: "acrílico sobre papiro español",
    seccion: "grafica",
    foto: "/obras/pintura/confinamiento-1.jpg",
    fotoAlt: "Retrato en acrílico sobre papiro español, serie Dibujos en el confinamiento",
  },
];

export function obrasPorSeccion(seccion: Obra["seccion"]) {
  return obras.filter((obra) => obra.seccion === seccion);
}
