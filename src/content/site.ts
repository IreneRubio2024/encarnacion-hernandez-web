// Textos recuperados y adaptados de www.encarnacionhernandez.com (la web
// antigua). Nota biográfica completa, educación, premios y exposiciones
// desde 1982 en /trayectoria (src/content/trayectoria.ts).
// [CONTENIDO PENDIENTE] correo, teléfono y ciudad de contacto: no existían
// en la web antigua (no tenía ninguna vía de contacto) y hay que pedírselos
// a la artista.
export const site = {
  nombre: "Encarnación Hernández",
  descripcion:
    "Escultora, orfebre y pintora. Fundición a la cera perdida, joyería de autor y pintura.",
  hero: {
    tituloLinea1: "Clásica",
    tituloEnfasis: "modernidad",
    intro:
      "Escultora y orfebre. Fundición a la cera perdida, joyería de autor, pintura. La materia se enfría una sola vez: no hay segunda versión de una pieza.",
  },
  obra: {
 
    titulo: "La obra",
    intro: "Distintos materiales, una misma mirada: escultura, joyas de autor y pintura.",
  },
  laArtista: {
    
    titulo: "Encarnación Hernández",
    intro: "Escultora, orfebre y pintora.",
    parrafos: [
      "Nace en Casillas de Flores (Salamanca) y se forma en Bellas Artes en Madrid, donde se licencia en Escultura en 1977 por la Facultad de San Fernando. Descubre su vocación de la mano de dos maestros salmantinos, y en los viajes de estudiante a París y los Países Bajos conoce la obra de Giacometti, Brancusi o Julio González.",
      "Trabaja el bronce mediante fundición a la cera perdida, el barro y la piedra, y desde el año 2000 también el vidrio, aprendido con maestros centroeuropeos y japoneses en la Real Fábrica de Cristales de La Granja. La joyería de autor nace de su tesis de doctorado «La joya como escultura»: cada pieza es, para ella, una escultura pensada para llevarse puesta.",
      "Lleva más de veinte años vinculada a la Axarquía malagueña, donde continúa exponiendo y trabajando hoy.",
    ],
    teaser: "La materia como forma de expresión.",
    // Foto recuperada de la web antigua (imagenes/encarnacion/ehr_ejercicioclase.jpg):
    // Encarnación Hernández trabajando sobre un relieve de figura masculina
    // clásica, años de formación en Madrid. Incluye desnudo académico.
    foto: "/sobre-mi/retrato.jpg" as string | null,
    retratoAlt:
      "Encarnación Hernández trabajando en un relieve de figura masculina clásica, durante su formación en Madrid",
  },
  taller: {
  
    titulo: "El taller",
    texto:
      "Abrir el horno. Acabar la pieza fundida. Romper el molde — el único momento en que se ve si ha salido.",
  },
  exposiciones: {

    titulo: "Exposiciones",
    intro: "Una selección de las muestras más recientes.",
  },
  contacto: {
 
    titulo: "Contacto",
    texto: "Encargos, exposiciones o una pieza concreta.",
    correo: "ehrozas@gmail.com",
    telefono: "(34) 696 95 86 46",
    telefonoFijo: "(34) 91 638 85 86",
    ciudad: "Majadahonda. Madrid. España",
    redes: {
      linkedin: "https://www.linkedin.com/encarnacion-hernandez-rozas",
      facebook: "https://www.facebook.com/encarnacion.hernandezrozas",
    },
  },
} as const;
