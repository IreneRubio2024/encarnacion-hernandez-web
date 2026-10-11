import type { Exposicion } from "./types";

// Selección curada de las exposiciones más recientes/relevantes para la
// portada. El historial completo (educación, premios, ~70 exposiciones
// desde 1982) vive en /trayectoria (src/content/trayectoria.ts), recuperado
// de www.encarnacionhernandez.com.
export const exposiciones: Exposicion[] = [
  { titulo: "Vuelvo a Málaga", lugar: "Sala Alfajar, Málaga", anio: 2022 },
  { titulo: "Joyas de Autor", lugar: "Galería Carmen Durango, Valladolid", anio: 2019 },
  {
    titulo: "Joyas de Autor (con Rosana)",
    lugar: "Museo de Arte Contemporáneo de Mijas",
    anio: 2018,
  },
  {
    titulo: "Clausura Joyas de Autor (2010–17)",
    lugar: "Fundación Centro Nacional del Vidrio, La Granja de San Ildefonso",
    anio: 2017,
  },
];
