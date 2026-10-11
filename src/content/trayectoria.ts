// Contenido recuperado de la web antigua (www.encarnacionhernandez.com),
// páginas notabio.html, historial_educacion.html, historial_premios.html,
// historial_obras.html, historial_individuales.html e historial_colectivas.html.
// No enlazadas desde el menú de la web antigua, pero accesibles directamente.

export type NotaBiografica = {
  heading?: string;
  texto: string;
};

export const notaBiografica: NotaBiografica[] = [
  {
    texto:
      "Escultora, pintora, grabadora y joyera que nace en Casillas de Flores (Salamanca), donde ejercía de médico su padre y donde vive la infancia rodeada de una naturaleza y ambiente rurales que le impactan y llenan de sensaciones, siempre presentes —de una forma más o menos consciente— en su sensibilidad.",
  },
  {
    texto:
      "Estudia Bachillerato Superior y Preuniversitario en Ciudad Rodrigo (Salamanca) e inicia los estudios de Magisterio. Pero es en Salamanca capital, finales de los 60, donde orienta sus estudios académicos desde la medicina, como primera intención, hacia la decoración, en el Centro Técnico de Nuevas Profesiones. Allí descubre su vocación artística de mano de dos de sus grandes maestros, don Mariano Sánchez Álvarez del Manzano, pintor, y don José Luis Núñez Solé, escultor.",
  },
  {
    texto:
      "Se traslada a Madrid en 1970. Cursa la especialidad de escultura en la Facultad de Bellas Artes de San Fernando, que culmina con la Licenciatura en 1977. En el viaje de paso del Ecuador de la carrera a París y los Países Bajos descubre a sus otros grandes maestros: Giacometti, Brancusi, Julio González, Modigliani, Mondrian…",
  },
  {
    heading: "Primera etapa (años 80)",
    texto:
      "En 1981 obtiene plaza oficial de Profesora de Dibujo en el Instituto Jorge Manrique de Palencia, donde permanece hasta 1988. Es la década de sus primeras exposiciones individuales, de obras monumentales en Palencia —como un mural cerámico de 15 m² y una imagen de Santo Domingo— y de los primeros reconocimientos: I Bienal de la Universidad Politécnica de Madrid (1983), Medalla de Plata en el XXII Certamen Nacional de Arte de Caja Guadalajara (1984), Primer Accésit en el XII Certamen Nacional de Escultura de Caja Madrid (1988).",
  },
  {
    heading: "Segunda etapa (años 90)",
    texto:
      "De vuelta en Madrid, simultanea la docencia con el taller y realiza los cursos de doctorado con la tesis «La joya como escultura», germen de su trabajo posterior en joyería como micro-escultura. Expone en galerías de Madrid y Barcelona, recibe el Primer Premio Mariano Benlliure de Escultura de la Villa de Madrid, obtiene el título de Grabado en San Fernando (1992) y participa en ferias internacionales como Lineart (Gante, 1997) y la II Bienal de Arte Contemporáneo de Florencia (1999).",
  },
  {
    heading: "Tercera etapa (años 2000)",
    texto:
      "Profundiza en escultura, pintura y grabado, e investiga nuevos materiales —en especial la escultura en vidrio, que aprende con maestros centroeuropeos y japoneses en el Centro Nacional del Vidrio de la Real Fábrica de Cristales de La Granja (Segovia)—. Antológica en el Palacio Pimentel de Valladolid (2002) y muestra en la Pleiades Gallery de Nueva York (2003). Es también la década en que descubre Málaga y la Axarquía, con su primera exposición en el Palacio Beniel de Vélez-Málaga (2003) y la escultura homenaje a Blas y María Zambrano (2007).",
  },
  {
    heading: "Cuarta etapa (años 2010 en adelante)",
    texto:
      "Continúa su actividad entre Madrid y la Axarquía malagueña, con especial dedicación en los últimos años a las Joyas de Autor —pequeñas esculturas para llevar puestas—, además de coordinar encuentros de su promoción de Bellas Artes y seguir exponiendo y creando.",
  },
];

export type ItemFormacion = { periodo: string; texto: string };

export const educacion: ItemFormacion[] = [
  {
    periodo: "2000–actual",
    texto:
      "Cursos de especialización en escultura en vidrio, Centro Nacional del Vidrio, Real Fábrica de Cristales de La Granja (Segovia).",
  },
  {
    periodo: "1992",
    texto: "Título en la especialidad de Grabado, Facultad de BB.AA., Universidad Complutense de Madrid.",
  },
  { periodo: "1990–93", texto: "Cursos de Fotografía, Casa de la Cultura de Majadahonda (Madrid)." },
  { periodo: "1989–90", texto: "Cursos de doctorado, Facultad de BB.AA., Universidad Complutense de Madrid." },
  { periodo: "1988–00", texto: "Profesora Agregada de Dibujo, INB Carlos Bousoño, Majadahonda (Madrid)." },
  { periodo: "1981–88", texto: "Profesora Agregada de Dibujo, INB Jorge Manrique, Palencia." },
  {
    periodo: "1977",
    texto: "Licenciada en Bellas Artes, especialidad de Escultura, Escuela Superior de BB.AA. de San Fernando, Madrid.",
  },
  { periodo: "1970–72", texto: "Cursos de Cerámica, Escuela Nacional de Cerámica de Madrid." },
  { periodo: "1970", texto: "Diplomada en Artes Decorativas, Escuela Técnica de Nuevas Profesiones de Salamanca." },
  {
    periodo: "",
    texto:
      "Estancias en países extranjeros para completar la formación académica y profesional: Alemania, Bélgica, Dinamarca, EE.UU., Francia, Grecia, Holanda, Inglaterra, Italia, Portugal, Suiza y Suecia.",
  },
];

export const premios: ItemFormacion[] = [
  {
    periodo: "1990",
    texto: 'Primer Premio de Escultura "Mariano Benlliure" (1989) de la Villa de Madrid, por la obra Niebla.',
  },
  {
    periodo: "1989",
    texto: 'Finalista en el "II Premio de Escultura Boceto" de la Galería Veiga de Madrid, por Cabeza africana.',
  },
  {
    periodo: "1988",
    texto: 'Primer Accésit en el "XII Certamen Nacional de Escultura" de Caja Madrid, por Máscara III.',
  },
  {
    periodo: "1984",
    texto: 'Medalla de Plata en el "XXII Certamen Nacional de Arte" de Caja Guadalajara, por Máscara I.',
  },
  { periodo: "1982", texto: 'Premio en la "I Bienal de la Universidad Politécnica" de Madrid, por Hoplita.' },
];

export const obrasSingulares = {
  enCurso: ["Monumento para la Fundación AnnaO de Málaga."],
  recientes: [
    "Busto en bronce y placa conmemorativa para el homenaje a su padre médico, Ayuntamiento de Navasfrías (Salamanca), 2025.",
    'Escultura para el Premio "Joaquín Lobato", Poeta de Vélez-Málaga, 2020.',
    'Escultura trofeo del "Premio de Novela Francisco Umbral", Ayuntamiento de Majadahonda (Madrid), 2000 y sgtes.',
    "Retrato conmemorativo del 25º aniversario del Centro Educativo J. Balmes de Hospitalet de Llobregat (Barcelona, 2007).",
    "Grupo escultórico Blas y María Zambrano, encargo del Ayuntamiento de Vélez-Málaga y la Fundación María Zambrano (2007).",
    "Serie de múltiples para los cursos de verano de la Universidad de Málaga en Vélez-Málaga (2006 y sgtes.).",
    "Múltiple en homenaje a Joaquín Lobato, La Axarquía (Málaga), 2006.",
  ],
  anteriores: [
    "Escultura homenaje a Ceferino Santos, Ciudad Rodrigo (Salamanca), 2003.",
    "Adquisición de Baco por el Museo del Vino de Peñafiel (Valladolid), 2000.",
    "Múltiple para el Premio al Mejor Ingeniero, Colegio Oficial de Ingenieros de Telecomunicaciones de Madrid, 1999 y sgtes.",
    'Múltiple para el "Premio Valladolid de Teatro", Diputación de Valladolid, 1999.',
    "Escultura donada al Museo de Escultura al Aire Libre de Alcalá de Henares (Madrid), 1993.",
    "Niebla, Museo Municipal de Madrid, 1991.",
    "Original de la Medalla al Mérito Deportivo de la Junta de Castilla y León, concedida a Perico Delgado, 1988.",
    'Múltiple "Sin fronteras" para Renault España, lanzamiento del Renault 21, Factoría Renault de Palencia, 1986.',
    "Imagen de Santo Domingo, Colegio de las Madres Dominicas de Palencia, 1982.",
    "Panteón familiar en Navasfrías (Salamanca).",
    "Murales cerámicos en edificios públicos y privados de Palencia, 1979.",
    "Obra en colecciones de los museos Municipal de Madrid y de la Facultad de BB.AA. de Madrid, y en colecciones privadas de España, Alemania, Japón, Estados Unidos, Dinamarca y Francia.",
    "Colección de joyas para el Museo de Arte Contemporáneo Reina Sofía de Madrid y para MAPFRE.",
  ],
};

export type EntradaExposicion = { anio: number; texto: string };

export const exposicionesIndividuales: EntradaExposicion[] = [
  { anio: 2023, texto: 'Esculturas y Pinturas, Sala Maruja Mallo, Casa de Cultura de Las Rozas (Madrid).' },
  { anio: 2022, texto: '"Vuelvo a Málaga", Sala Alfajar, Málaga (1 de julio – 22 de agosto).' },
  { anio: 2021, texto: "Joyas de Autor (2021–22), Galería Carmen Durango, Valladolid." },
  { anio: 2020, texto: "Joyas de Autor, Galería Carmen Durango, Valladolid." },
  { anio: 2019, texto: "Joyas de Autor, Galería Carmen Durango, Valladolid." },
  { anio: 2018, texto: "Obras escultóricas, Galería Carmen Durango, Valladolid." },
  { anio: 2018, texto: "Joyas de Autor (con Rosana), Museo de Arte Contemporáneo de Mijas (Málaga)." },
  { anio: 2017, texto: "Clausura de la exposición de Joyas de Autor (2010–17), Fundación Centro Nacional del Vidrio, La Granja de San Ildefonso (Segovia)." },
  { anio: 2017, texto: "Obras escultóricas, Galería Carmen Durango, Valladolid." },
  { anio: 2016, texto: "Depósito de obras escultóricas, Galería Guerrero, Sitges (Barcelona)." },
  { anio: 2016, texto: '"Mitos, evocaciones y otras historias", Casa Cultura La Despernada, Villanueva de la Cañada (Madrid).' },
  { anio: 2015, texto: '"A dúo" con el pintor Cristóbal Olmedo, Casa de la Cultura de Majadahonda (Madrid).' },
  { anio: 2014, texto: "Joyas de Autor, Galería Carmen Durango, Valladolid." },
  { anio: 2013, texto: "Joyas de Autor (2013–16), Galería Lola, Moraira (Alicante)." },
  { anio: 2012, texto: "Intervención pedagógica, CEIP Eduardo Ocón Rivas, Benamocarra (Málaga)." },
  { anio: 2012, texto: "Intervención pedagógica, CEIP Mare Nostrum, Torrox (Málaga)." },
  { anio: 2011, texto: "Sala Maenoba, I.E.S. Joaquín Lobato, Torre del Mar (Málaga)." },
  { anio: 2011, texto: "Sala Axarquía, I.E.S. Bezmiliana, Rincón de la Victoria (Málaga)." },
  { anio: 2010, texto: "Joyas, Museo del Vidrio, La Granja de San Ildefonso (Segovia); Galería Nolde, Navacerrada; Jordano Espacio, Madrid." },
  { anio: 2009, texto: '"Escayola, blanda dureza", Sala Robert Harvey, CEIP Ntra. Sra. de la Candelaria, Benagalbón (Málaga).' },
  { anio: 2008, texto: "Sala Ángeles Santos, Casa Cultura Carmen Conde, Majadahonda (Madrid)." },
  { anio: 2008, texto: "Sala Cipriano Maldonado (Casa Larios), Ayuntamiento de Vélez, Torre del Mar." },
  { anio: 2008, texto: "Sala de exposiciones del Rectorado de la Universidad de Málaga." },
  { anio: 2007, texto: "Sala del Teatro del Carmen, Ayuntamiento de Vélez-Málaga." },
  { anio: 2006, texto: "Casa Fuerte Bezmiliana, Área de Cultura del Rincón de la Victoria (Málaga)." },
  { anio: 2006, texto: "Sala Maruja Mallo, Centro Cultural del Ayuntamiento de Las Rozas (Madrid)." },
  { anio: 2005, texto: "Galería Lorenzo Colomo, Valladolid; IES Alfaguar, Torrox (Málaga)." },
  { anio: 2004, texto: "Galería Larra, Madrid; Sede Turismo Andaluz y Centro Litoral, Málaga; Casa Fuerte Bezmiliana, Rincón de la Victoria." },
  { anio: 2003, texto: "Galería Surcos, Majadahonda; Galería Nolde, Navacerrada; High Land Gallery, Breckenridge (Colorado, EE.UU.); Palacio Beniel, Vélez-Málaga; IES Bezmiliana, Rincón de la Victoria; Galería Artis, Salamanca." },
  { anio: 2002, texto: "Retrospectiva (20 años), Palacio Pimentel, Diputación de Valladolid." },
  { anio: 2001, texto: "Galería Artis, Salamanca; Galería Castilla, Valladolid." },
  { anio: 2000, texto: "Sala Carmen Conde, Casa de la Cultura de Majadahonda (Madrid)." },
  { anio: 1999, texto: "Escultura, Joyas y Pintura, Galería EEGEE3, Madrid." },
  { anio: 1998, texto: "Kulturscheune, Viernheim (Alemania). Obra seleccionada en la LIX Exposición Nacional de Artes Plásticas, Valdepeñas." },
  { anio: 1998, texto: "Escultura y Pintura, Galería Castilla, Valladolid." },
  { anio: 1995, texto: "Casa Municipal de Cultura, Ciudad Rodrigo (Salamanca). Conferencia sobre escultura, Centro Municipal de Cultura de Móstoles." },
  { anio: 1994, texto: "SENASA, Madrid; Sala Municipal de Cultura, El Escorial (Madrid)." },
  { anio: 1993, texto: "Galería SYF, Majadahonda (Madrid)." },
  { anio: 1992, texto: "Pintura, escultura y joyas, Galería Androx, Vigo; Galería Castilla, Valladolid; Ayuntamiento de Las Rozas." },
  { anio: 1991, texto: "Itinerante de Pintura y Escultura de Caja Salamanca y Soria (Valladolid, Palencia, Ávila, Zamora). Casa de Cultura de Majadahonda." },
  { anio: 1989, texto: "Galería Kreisler, Madrid." },
  { anio: 1988, texto: "Galería Artis, Salamanca." },
  { anio: 1987, texto: "Itinerante de la Caja de Ahorros de Salamanca: Palencia, Salamanca, Valladolid, Zamora." },
  { anio: 1986, texto: "Galería María Salvat, Barcelona; Sala Galleri Gallo, Aarhus (Dinamarca); Sala Floridablanca, San Lorenzo de El Escorial." },
  { anio: 1985, texto: "Galería Varron y Galería Carmen Durango, Salamanca/Valladolid." },
  { anio: 1984, texto: "Sala Caja Palencia." },
];

export const exposicionesColectivas: EntradaExposicion[] = [
  { anio: 2020, texto: 'Promoción 77 de BB.AA., Casa Cultura Carmen Conde, Majadahonda (Madrid) — inauguración aplazada por la COVID-19.' },
  { anio: 2019, texto: '"Colectiva de Navidad", Galería Art Cuestión, Ourense. "Colectiva 2019", Casa Cultura La Despernada, Villanueva de la Cañada. "Mujeres en el Arte", Palacio Beniel, Vélez-Málaga.' },
  { anio: 2017, texto: '"Versión original", Casa Cultura La Despernada, Villanueva de la Cañada (Madrid).' },
  { anio: 2016, texto: '"Artistas en Sitges", Galería Guerrero; "La oca de los artistas", Castillo de Santa Ana, Roquetas de Mar; "Grito de mujer", Ciudad Rodrigo.' },
  { anio: 2015, texto: '"Toledo como pretexto", Las Cuevas de Hércules (Toledo).' },
  { anio: 2014, texto: "I Bienal de Arte y Escuela de la Axarquía, Torre del Mar. Colectivas sobre El Greco y en la UCM y Colegio Rosales." },
  { anio: 2013, texto: "Exposición solidaria en Majadahonda; Feria Estampa 2013 con Galería PGD; «15 Estilos de mujer», Galería Kreisler." },
  { anio: 2012, texto: "Feria Estampa 2012 con Galería PGD; Colectiva Promoción 1977 BB.AA., Majadahonda." },
  { anio: 2011, texto: "Feria Estampa 2011 con Galería PGD." },
  { anio: 2010, texto: 'Feria Estampa 2010 con Galería PGD; "After Robert Harvey", Museo Gálvez, Macharaviaya (Málaga).' },
  { anio: 2009, texto: 'Feria Estampa 2009 con Galería PGD; "After Robert Harvey", Macharaviaya (Málaga).' },
  { anio: 2008, texto: "Feria Estampa 2008 con Galería PGD." },
  { anio: 2007, texto: "I Feria ArtJaén con Galería Manfred Meuser; Feria Estampa 2007 con Galería PGD." },
  { anio: 2006, texto: '"Re-Existencias — Mujeres escultoras del siglo XX", Sevilla y Madrid; homenajes a Joaquín Lobato y Robert Harvey, La Axarquía.' },
  { anio: 2005, texto: 'Feria Estampa 2005; "Murmullos de la piedra" (250º aniversario Plaza Mayor de Salamanca); "Somos… seis", Villanueva de la Cañada.' },
  { anio: 2004, texto: "Galería D'Art, Las Rozas; Feria Estampa 2004; Feria de Arte Contemporáneo III, con Galería María Salvat." },
  { anio: 2003, texto: "Feria Estampa 2003; Pleiades Gallery, Nueva York (agosto 2003)." },
  { anio: 2002, texto: 'Feria Estampa con Galería Dukesa; "Señales, arte en la carretera" (Cuenca); Arcale, Castilla y León.' },
  { anio: 2001, texto: "«De Arte Actual» (Salamanca); III Encuentro de Artesanas Madrileñas; ArteSantander; «El viaje», Galería Artis." },
  { anio: 2000, texto: '"20 por 20", Galería Ra del Rey, Madrid; Fundación Ana Jiménez, Valladolid; Galería de Arte de Pordenone (Italia).' },
  { anio: 1999, texto: "II Biennale Internazionale dell'Arte Contemporanea, Florencia; LX Exposición Nacional de Artes Plásticas, Valdepeñas; Instituto Lope de Vega, Nador (Marruecos)." },
  { anio: 1998, texto: "Colección «En memoria de Federico García Lorca», Museo Postal y Telegráfico de Madrid; Feria Estampa; Arcale." },
  { anio: 1997, texto: "Feria Lineart de Gante (Bélgica); Fira Internacional d'Art de Valencia; «Verano-97», Galería El Cantil, Santander; I Certamen de Escultura." },
  { anio: 1996, texto: 'Galería Loreto Martín, Pampaneira; Feria Estampa; "Cita con tres escultoras", Valladolid y Palencia; Arco 96.' },
  { anio: 1995, texto: "LVI Exposición Nacional de Artes Plásticas, Valdepeñas." },
  { anio: 1994, texto: "Feria Estampa con Galería Kreisler." },
  { anio: 1993, texto: 'Galería Haurie, Sevilla; XVII Certamen de Escultura, Caja Madrid.' },
  { anio: 1992, texto: "Galería 34, Majadahonda; 40º aniversario Galería Artis; II Bienal del Grabado, Caixa-Ourense; XII Bienal del Tajo, Toledo." },
  { anio: 1991, texto: "«Magiar» y «Mujer jirafa» en certámenes nacionales; Premio Caja España de Escultura, itinerante." },
  { anio: 1990, texto: "XI Bienal del Tajo, Toledo; XIV Certamen Nacional de Escultura, Caja Madrid." },
  { anio: 1989, texto: '«Estío-II», Galería Artis; finalista "II Premio de Escultura Boceto", Galería Veiga.' },
  { anio: 1988, texto: '«Estío-I» y exposición de artes plásticas, Valdepeñas; "35 años" Galería Artis.' },
  { anio: 1987, texto: 'XII Certamen Jacinto Higueras, Jaén; Premio Valladolid Escultura; "Arte al desnudo", Palencia.' },
  { anio: 1986, texto: '"Cincuentenario de Unamuno", Casa Lis, Salamanca; individual en Sala Floridablanca; Arco-86 con Galería Varrón.' },
  { anio: 1985, texto: 'Premio "Tomás Francisco Prieto"; homenaje a Gabino Alejandro Carriedo, Palencia.' },
  { anio: 1984, texto: "XLV Exposición Nacional de Artes Plásticas, Valdepeñas; I Certamen Internacional de Escultura, Pollensa; «Figuración-84», Galería Kreisler." },
  { anio: 1983, texto: "II Bienal de Pintura y Escultura, Ávila; Premio Valladolid de Escultura; Sala Berruguete, Palencia." },
  { anio: 1982, texto: "I Exposición Regional de Artistas Plásticos de Castilla y León, itinerante; Sala Ámbito, Valladolid." },
];

export function agruparPorDecada(items: EntradaExposicion[]) {
  const decadas = new Map<number, EntradaExposicion[]>();
  for (const item of items) {
    const decada = Math.floor(item.anio / 10) * 10;
    if (!decadas.has(decada)) decadas.set(decada, []);
    decadas.get(decada)!.push(item);
  }
  return [...decadas.entries()].sort((a, b) => b[0] - a[0]);
}
