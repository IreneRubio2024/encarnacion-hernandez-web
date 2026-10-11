export type Seccion =
  | "escultura"
  | "taller"
  | "joyas"
  | "pintura"
  | "grafica";

export type Obra = {
  slug: string;
  titulo: string;
  anio?: number;
  material: string;
  medidas?: string;
  seccion: Seccion;
  descripcion?: string;
  /** Ruta bajo /public cuando exista la fotografía real; null mientras se usa un placeholder. */
  foto: string | null;
  /** Texto descriptivo para el alt de la foto, o para la etiqueta del placeholder. */
  fotoAlt: string;
  fotografo?: string;
};

export type Exposicion = {
  titulo: string;
  lugar: string;
  anio: number;
};
