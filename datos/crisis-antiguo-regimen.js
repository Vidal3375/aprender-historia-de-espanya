/* =====================================================================
   ACTIVIDAD: LA CRISIS DEL ANTIGUO RÉGIMEN (1808-1833)
   ---------------------------------------------------------------------
   Este archivo contiene TODO el contenido de la actividad.
   Puedes editarlo con cualquier editor de texto (o desde la web de GitHub).

   - "obras": cuadros de Goya relacionados con el periodo. Con ellos la
     app crea sola algunas preguntas con imagen.
   - "preguntas": preguntas de texto. Para añadir una, copia un bloque
     { ... }, pégalo debajo y cambia el texto. Fíjate en las comas.

   Temas posibles: "cronologia", "personajes", "conceptos", "causas".
   Niveles: "basico", "normal", "extremo".
   "fuente": de dónde sale el dato (Resumen de los Temas 1-5 del proyecto,
   que indica el tema y las diapositivas de los apuntes originales).
   ===================================================================== */

window.ACTIVIDADES = window.ACTIVIDADES || {};

window.ACTIVIDADES["crisis-antiguo-regimen"] = {
  titulo: "La crisis del Antiguo Régimen",
  subtitulo: "Historia de España · 2.º Bachillerato · 1808-1833",
  carpetaImagenes: "img/goya/",

  /* ----------------------------------------------------------------
     CUADROS DE GOYA
     Datos de la obra: Fundación Goya en Aragón y Wikipedia.
     Relación con la historia: Resumen de los Temas 1-5.
     ---------------------------------------------------------------- */
  obras: [
    {
      id: "familia", nombre: "La familia de Carlos IV",
      fecha: "1800", lugar: "Museo del Prado (Madrid)",
      hecho: "La familia real antes de la crisis de 1808",
      clave: "Carlos IV y María Luisa ocupan el centro. A la izquierda, vestido de azul, el príncipe Fernando, futuro Fernando VII. También aparece el infante Carlos María Isidro, origen del carlismo.",
      fuenteObra: "Fundación Goya en Aragón",
      fuenteHistoria: "Tema 3, diap. 8–25; Tema 5, diap. 56–70",
      img: "familia-carlos-iv.jpg",
      foto: { autor: "Francisco de Goya", licencia: "Dominio público", url: "" }
    },
    {
      id: "godoy", nombre: "Manuel Godoy",
      fecha: "1801", lugar: "Real Academia de Bellas Artes de San Fernando (Madrid)",
      hecho: "El primer ministro de Carlos IV, blanco del Motín de Aranjuez",
      clave: "Godoy, favorito de la reina, gobernó casi sin interrupción de 1792 a 1808. El Motín de Aranjuez (1808) fue contra él.",
      fuenteObra: "Wikipedia (Portrait of Manuel Godoy); Fundación Goya en Aragón",
      fuenteHistoria: "Tema 2, diap. 34–41; Tema 3, diap. 8–25",
      img: "godoy.jpg",
      foto: { autor: "Francisco de Goya", licencia: "Dominio público", url: "" }
    },
    {
      id: "jovellanos", nombre: "Gaspar Melchor de Jovellanos",
      fecha: "1798", lugar: "Museo del Prado (Madrid)",
      hecho: "El ilustrado que presidió la Junta Suprema Central",
      clave: "Jovellanos presidió la Junta Suprema Central tras Floridablanca y, con Quintana, impulsó la consulta al país que preparó las Cortes de Cádiz.",
      fuenteObra: "Fundación Goya en Aragón",
      fuenteHistoria: "Tema 3, diap. 26–31; Tema 4, diap. 2–13",
      img: "jovellanos.jpg",
      foto: { autor: "Francisco de Goya", licencia: "Dominio público", url: "" }
    },
    {
      id: "dos-mayo", nombre: "El 2 de mayo de 1808 en Madrid (La carga de los mamelucos)",
      fecha: "1814", lugar: "Museo del Prado (Madrid)",
      hecho: "El levantamiento popular de Madrid contra las tropas francesas",
      clave: "El Dos de Mayo de 1808 Madrid se levantó de forma espontánea contra los franceses. Goya lo pintó en 1814, ya expulsado el ejército de Napoleón.",
      fuenteObra: "Wikipedia (The Second of May 1808)",
      fuenteHistoria: "Tema 3, diap. 8–25",
      img: "dos-de-mayo.jpg",
      foto: { autor: "Francisco de Goya", licencia: "Dominio público", url: "" }
    },
    {
      id: "tres-mayo", nombre: "El 3 de mayo de 1808 en Madrid (Los fusilamientos)",
      fecha: "1814", lugar: "Museo del Prado (Madrid)",
      hecho: "Los fusilamientos con que los franceses castigaron el levantamiento",
      clave: "Tras el levantamiento del Dos de Mayo llegaron los fusilamientos del 3 de mayo. Goya situó la escena en la montaña del Príncipe Pío.",
      fuenteObra: "Wikipedia (The Third of May 1808)",
      fuenteHistoria: "Tema 3, diap. 8–25",
      img: "tres-de-mayo.jpg",
      foto: { autor: "Francisco de Goya", licencia: "Dominio público", url: "" }
    },
    {
      id: "alegoria", nombre: "Alegoría de la Villa de Madrid",
      fecha: "1810", lugar: "Museo de Historia de Madrid",
      hecho: "Un cuadro que cambió con cada régimen político",
      clave: "El óvalo mostró primero a José I, después la palabra «Constitución» y luego a Fernando VII. Hoy dice «Dos de Mayo» (1872). Es un resumen visual de la época.",
      fuenteObra: "Fundación Goya en Aragón",
      fuenteHistoria: "Tema 3, diap. 57–61; Tema 4, diap. 16–34; Tema 5, diap. 2–6",
      img: "alegoria-madrid.jpg",
      foto: { autor: "Francisco de Goya", licencia: "Dominio público", url: "" }
    },
    {
      id: "wellington", nombre: "El duque de Wellington",
      fecha: "1812-1814", lugar: "National Gallery (Londres)",
      hecho: "El general británico al mando en la retirada francesa",
      clave: "Wellington dirigió a los aliados en la fase final de la guerra (1812-1814), cuando los franceses se retiraron de la Península.",
      fuenteObra: "Wikipedia (Portrait of the Duke of Wellington, Goya)",
      fuenteHistoria: "Tema 3, diap. 46–56",
      img: "wellington.jpg",
      foto: { autor: "Francisco de Goya", licencia: "Dominio público", url: "" }
    },
    {
      id: "fernando", nombre: "Fernando VII con manto real",
      fecha: "1814-1815", lugar: "Museo del Prado (Madrid)",
      hecho: "El rey que restauró el absolutismo en 1814",
      clave: "De vuelta en España en 1814, Fernando VII se negó a jurar la Constitución y anuló la obra de Cádiz con el decreto del 4 de mayo de 1814.",
      fuenteObra: "Fundación Goya en Aragón (no se sabe quién lo encargó)",
      fuenteHistoria: "Tema 5, diap. 2–6",
      img: "fernando-vii.jpg",
      foto: { autor: "Francisco de Goya", licencia: "Dominio público", url: "" }
    }
  ],

  preguntas: [

    /* ==================== CRONOLOGÍA ==================== */
    {
      tema: "cronologia", nivel: "basico",
      texto: "¿Entre qué años se desarrolló la Guerra de la Independencia?",
      correcta: "1808-1814",
      incorrectas: ["1793-1795", "1814-1820", "1820-1823"],
      explicacion: "Comenzó con los levantamientos de 1808 y terminó en 1814 con la retirada francesa y el regreso de Fernando VII.",
      fuente: "Tema 3, diap. 46–56"
    },
    {
      tema: "cronologia", nivel: "basico",
      texto: "¿En qué año tuvo lugar el Motín de Aranjuez?",
      correcta: "1808",
      incorrectas: ["1807", "1812", "1814"],
      explicacion: "Fue del 17 al 19 de marzo de 1808. Carlos IV abdicó en su hijo, que pasó a ser Fernando VII.",
      fuente: "Tema 3, diap. 8–25"
    },
    {
      tema: "cronologia", nivel: "basico",
      texto: "¿Qué ocurrió en Madrid el 2 de mayo de 1808?",
      correcta: "Un levantamiento popular contra las tropas francesas",
      incorrectas: ["La abdicación de Carlos IV en su hijo", "La proclamación de la Constitución", "La entrada de los Cien Mil Hijos de San Luis"],
      explicacion: "Fue un levantamiento espontáneo. Al día siguiente llegaron los fusilamientos del 3 de mayo.",
      fuente: "Tema 3, diap. 8–25"
    },
    {
      tema: "cronologia", nivel: "basico",
      texto: "¿Cuándo se promulgó la Constitución de Cádiz?",
      correcta: "El 19 de marzo de 1812",
      incorrectas: ["El 2 de mayo de 1808", "El 4 de mayo de 1814", "El 1 de enero de 1820"],
      explicacion: "Se eligió el 19 de marzo, aniversario de la subida al trono de Fernando VII. Por eso se la llamó «La Pepa» (día de San José).",
      fuente: "Tema 4, diap. 16–34"
    },
    {
      tema: "cronologia", nivel: "basico",
      texto: "¿Cómo se llama el periodo de 1820 a 1823?",
      correcta: "Trienio Liberal",
      incorrectas: ["Sexenio absolutista", "Década Ominosa", "Guerra de la Independencia"],
      explicacion: "Empezó con el pronunciamiento de Riego (1820) y terminó con la invasión de los Cien Mil Hijos de San Luis (1823).",
      fuente: "Tema 5, diap. 34–46"
    },
    {
      tema: "cronologia", nivel: "basico",
      texto: "¿Cómo se llama el periodo de 1823 a 1833?",
      correcta: "Década Ominosa",
      incorrectas: ["Trienio Liberal", "Sexenio absolutista", "Despotismo Ilustrado"],
      explicacion: "Son los últimos diez años de Fernando VII: represión de los liberales, reformismo moderado y problema sucesorio.",
      fuente: "Tema 5, diap. 46–70"
    },
    {
      tema: "cronologia", nivel: "basico",
      texto: "¿Cómo se llama el periodo de 1814 a 1820?",
      correcta: "Sexenio absolutista",
      incorrectas: ["Trienio Liberal", "Década Ominosa", "Regencia de María Cristina"],
      explicacion: "Fernando VII vuelve en 1814, anula la obra de Cádiz y restaura el absolutismo hasta el pronunciamiento de Riego (1820).",
      fuente: "Tema 5, diap. 2–24"
    },
    {
      tema: "cronologia", nivel: "basico",
      texto: "¿En qué año murió Fernando VII?",
      correcta: "1833",
      incorrectas: ["1823", "1830", "1814"],
      explicacion: "Murió en septiembre de 1833. Comenzaron la regencia de María Cristina y la Primera Guerra Carlista.",
      fuente: "Tema 5, diap. 56–70"
    },
    {
      tema: "cronologia", nivel: "normal",
      texto: "¿Cuál es el orden correcto de estos hechos?",
      correcta: "El Escorial → Aranjuez → Bayona",
      incorrectas: ["Aranjuez → El Escorial → Bayona", "Bayona → Aranjuez → El Escorial", "El Escorial → Bayona → Aranjuez"],
      explicacion: "Conspiración de El Escorial (octubre de 1807), Motín de Aranjuez (marzo de 1808) y abdicaciones de Bayona (mayo de 1808).",
      fuente: "Tema 3, diap. 8–25"
    },
    {
      tema: "cronologia", nivel: "normal",
      texto: "¿Cuándo tuvo lugar la batalla de Bailén?",
      correcta: "El 19 de julio de 1808",
      incorrectas: ["El 2 de mayo de 1808", "El 19 de marzo de 1812", "El 9 de diciembre de 1824"],
      explicacion: "Fue la primera gran victoria española. Obligó a Napoleón a venir en persona a la Península.",
      fuente: "Tema 3, diap. 46–56"
    },
    {
      tema: "cronologia", nivel: "normal",
      texto: "¿Cuándo se firmó el Tratado de Valençay?",
      correcta: "En diciembre de 1813",
      incorrectas: ["En julio de 1808", "En mayo de 1814", "En marzo de 1820"],
      explicacion: "Napoleón reconoció a Fernando VII como rey para poder retirar sus tropas de España.",
      fuente: "Tema 3, diap. 46–56; Tema 4, diap. 35–52"
    },
    {
      tema: "cronologia", nivel: "normal",
      texto: "¿En qué año se reunieron por primera vez las Cortes en la Isla de León?",
      correcta: "1810",
      incorrectas: ["1808", "1812", "1814"],
      explicacion: "Se reunieron en septiembre de 1810 y en su primera sesión proclamaron la soberanía nacional. En 1811 se trasladaron a Cádiz.",
      fuente: "Tema 4, diap. 2–13"
    },
    {
      tema: "cronologia", nivel: "normal",
      texto: "¿Cuándo se pronunció Riego en Cabezas de San Juan?",
      correcta: "El 1 de enero de 1820",
      incorrectas: ["El 19 de marzo de 1812", "El 4 de mayo de 1814", "El 7 de noviembre de 1823"],
      explicacion: "Se sublevó con las tropas que debían embarcar hacia América. Así empezó el Trienio Liberal.",
      fuente: "Tema 5, diap. 34–46"
    },
    {
      tema: "cronologia", nivel: "normal",
      texto: "¿En qué año entraron en España los Cien Mil Hijos de San Luis?",
      correcta: "1823",
      incorrectas: ["1814", "1820", "1830"],
      explicacion: "Los envió la Santa Alianza para restaurar el absolutismo. Su llegada puso fin al Trienio Liberal.",
      fuente: "Tema 5, diap. 34–46"
    },
    {
      tema: "cronologia", nivel: "normal",
      texto: "¿En qué año promulgó Fernando VII la Pragmática Sanción?",
      correcta: "1830",
      incorrectas: ["1814", "1823", "1833"],
      explicacion: "Permitía reinar a las mujeres. Ese mismo año nació Isabel. Las Cortes la habían aprobado ya en 1789, pero no se había publicado.",
      fuente: "Tema 5, diap. 56–70"
    },
    {
      tema: "cronologia", nivel: "normal",
      texto: "¿En qué año se libró la batalla de Ayacucho?",
      correcta: "1824",
      incorrectas: ["1808", "1814", "1833"],
      explicacion: "El 9 de diciembre de 1824. Supuso el fin del dominio español en el continente americano.",
      fuente: "Tema 5, diap. 25–31"
    },
    {
      tema: "cronologia", nivel: "extremo",
      texto: "¿En qué fecha se descubrió la Conspiración de El Escorial?",
      correcta: "El 27 de octubre de 1807",
      incorrectas: ["El 17 de marzo de 1808", "El 2 de mayo de 1808", "El 19 de julio de 1808"],
      explicacion: "Se descubrió un plan para destronar a Carlos IV. Fernando delató a sus cómplices y pidió perdón.",
      fuente: "Tema 3, diap. 8–25"
    },
    {
      tema: "cronologia", nivel: "extremo",
      texto: "¿Qué día se decretó la abolición de los señoríos jurisdiccionales?",
      correcta: "El 6 de agosto de 1811",
      incorrectas: ["El 19 de marzo de 1812", "El 12 de abril de 1814", "El 9 de marzo de 1820"],
      explicacion: "Lo aprobaron las Cortes de Cádiz. Desaparecieron los derechos jurisdiccionales, pero los señoríos territoriales pasaron a ser propiedad privada.",
      fuente: "Tema 4, diap. 9–10, 14–15 y 20–23"
    },
    {
      tema: "cronologia", nivel: "extremo",
      texto: "¿En qué fecha se presentó el Manifiesto de los Persas?",
      correcta: "El 12 de abril de 1814",
      incorrectas: ["El 19 de julio de 1808", "El 6 de agosto de 1811", "El 1 de octubre de 1823"],
      explicacion: "Un grupo de diputados absolutistas pidió al rey volver al Antiguo Régimen.",
      fuente: "Tema 5, diap. 2–6"
    },
    {
      tema: "cronologia", nivel: "extremo",
      texto: "¿Qué fecha lleva el decreto con el que Fernando VII anuló la Constitución de 1812?",
      correcta: "El 4 de mayo de 1814",
      incorrectas: ["El 19 de marzo de 1812", "El 9 de marzo de 1820", "El 1 de octubre de 1823"],
      explicacion: "Está fechado el 4 de mayo y se publicó el 11. Declaraba nula la obra de Cádiz «como si no hubiesen pasado jamás esos actos».",
      fuente: "Tema 5, diap. 2–6"
    },
    {
      tema: "cronologia", nivel: "extremo",
      texto: "¿Qué día juró Fernando VII la Constitución, tras el pronunciamiento de Riego?",
      correcta: "El 9 de marzo de 1820",
      incorrectas: ["El 1 de enero de 1820", "El 19 de marzo de 1812", "El 7 de noviembre de 1823"],
      explicacion: "Fue entonces cuando dijo: «Marchemos francamente, y yo el primero, por la senda constitucional».",
      fuente: "Tema 5, diap. 34–46"
    },
    {
      tema: "cronologia", nivel: "extremo",
      texto: "El decreto de 1 de octubre de 1823 anuló todo lo aprobado desde…",
      correcta: "El 7 de marzo de 1820",
      incorrectas: ["El 19 de marzo de 1812", "El 4 de mayo de 1814", "El 1 de enero de 1820"],
      explicacion: "Con él, Fernando VII borró la obra del Trienio Liberal e inició la Década Ominosa.",
      fuente: "Tema 5, diap. 46–49"
    },
    {
      tema: "cronologia", nivel: "extremo",
      texto: "¿En qué año fue ejecutado Riego?",
      correcta: "1823",
      incorrectas: ["1820", "1825", "1831"],
      explicacion: "Fue ejecutado el 7 de noviembre de 1823, al comienzo de la Década Ominosa.",
      fuente: "Tema 5, diap. 46–49"
    },
    {
      tema: "cronologia", nivel: "extremo",
      texto: "¿En qué año se produjeron los Sucesos de La Granja?",
      correcta: "1832",
      incorrectas: ["1827", "1829", "1830"],
      explicacion: "Con el rey enfermo, los ultras consiguieron que derogara la Pragmática Sanción. Al recuperarse, la restableció.",
      fuente: "Tema 5, diap. 56–70"
    },

    /* ==================== PERSONAJES ==================== */
    {
      tema: "personajes", nivel: "basico",
      texto: "¿Contra qué ministro se dirigió el Motín de Aranjuez?",
      correcta: "Manuel Godoy",
      incorrectas: ["Floridablanca", "Jovellanos", "Calomarde"],
      explicacion: "El partido fernandino movilizó al pueblo contra Godoy, el favorito de la reina. El resultado fue la abdicación de Carlos IV.",
      fuente: "Tema 3, diap. 8–25"
    },
    {
      tema: "personajes", nivel: "basico",
      texto: "¿Qué rey abdicó en su hijo tras el Motín de Aranjuez?",
      correcta: "Carlos IV",
      incorrectas: ["Carlos III", "Fernando VII", "José I"],
      explicacion: "Carlos IV abdicó en marzo de 1808 y su hijo pasó a ser Fernando VII.",
      fuente: "Tema 3, diap. 8–25"
    },
    {
      tema: "personajes", nivel: "basico",
      texto: "¿A quién entregó Napoleón la corona de España en 1808?",
      correcta: "A su hermano José Bonaparte",
      incorrectas: ["Al infante Carlos María Isidro", "Al duque de Angulema", "A Manuel Godoy"],
      explicacion: "En Bayona, Fernando devolvió la corona a su padre, este la cedió a Napoleón y Napoleón se la dio a su hermano José.",
      fuente: "Tema 3, diap. 8–25"
    },
    {
      tema: "personajes", nivel: "basico",
      texto: "¿Con qué apodo esperaba el pueblo a Fernando VII durante la guerra?",
      correcta: "«El Deseado»",
      incorrectas: ["«Pepe Botella»", "«El Empecinado»", "«El Príncipe de la Paz»"],
      explicacion: "El pueblo luchaba por «Dios, Patria y Rey» y esperaba el regreso de Fernando, «el Deseado».",
      fuente: "Tema 3, diap. 32–36 y 62–65"
    },
    {
      tema: "personajes", nivel: "basico",
      texto: "¿Con qué apodo ridiculizó la propaganda patriótica a José I?",
      correcta: "«Pepe Botella»",
      incorrectas: ["«El Deseado»", "«El Empecinado»", "«El Príncipe de la Paz»"],
      explicacion: "José I quiso ser un rey reformista, pero el pueblo lo rechazó porque había sido impuesto por Napoleón.",
      fuente: "Tema 3, diap. 57–61"
    },
    {
      tema: "personajes", nivel: "basico",
      texto: "¿Quién protagonizó el pronunciamiento de 1820 que abrió el Trienio Liberal?",
      correcta: "Rafael del Riego",
      incorrectas: ["José María Torrijos", "Francisco Espoz y Mina", "Juan Díaz Porlier"],
      explicacion: "Riego se sublevó el 1 de enero de 1820 en Cabezas de San Juan. Fernando VII tuvo que jurar la Constitución.",
      fuente: "Tema 5, diap. 34–46"
    },
    {
      tema: "personajes", nivel: "basico",
      texto: "¿Qué general estuvo al mando de los aliados en la retirada francesa (1812-1814)?",
      correcta: "Wellington",
      incorrectas: ["El duque de Angulema", "Rafael del Riego", "Espoz y Mina"],
      explicacion: "Wellington dirigió la fase final de la guerra. La campaña de Rusia fue también decisiva para la derrota francesa.",
      fuente: "Tema 3, diap. 46–56"
    },
    {
      tema: "personajes", nivel: "basico",
      texto: "¿Cómo se llamaba el guerrillero apodado «el Empecinado»?",
      correcta: "Juan Martín",
      incorrectas: ["Francisco Espoz y Mina", "Juan Díaz Porlier", "Rafael del Riego"],
      explicacion: "Fue uno de los grandes guerrilleros, como Espoz y Mina o Díaz Porlier. Fue ejecutado en 1825, en la Década Ominosa.",
      fuente: "Tema 3, diap. 46–56; Tema 5, diap. 46–49"
    },
    {
      tema: "personajes", nivel: "normal",
      texto: "¿Quiénes presidieron la Junta Suprema Central?",
      correcta: "Floridablanca y, después, Jovellanos",
      incorrectas: ["Godoy y, después, Calomarde", "Argüelles y, después, Muñoz Torrero", "Espoz y Mina y, después, Riego"],
      explicacion: "La Junta Suprema Central coordinó a las juntas provinciales y declaró formalmente la guerra a Francia.",
      fuente: "Tema 3, diap. 26–31"
    },
    {
      tema: "personajes", nivel: "normal",
      texto: "¿Quiénes fueron dos destacados diputados liberales en las Cortes de Cádiz?",
      correcta: "Argüelles y Muñoz Torrero",
      incorrectas: ["Escoiquiz y el duque del Infantado", "Calomarde y Cea Bermúdez", "Alagón y Ugarte"],
      explicacion: "En las Cortes había tres grupos: serviles (absolutistas), liberales (Argüelles, Muñoz Torrero) y americanos.",
      fuente: "Tema 4, diap. 2–13"
    },
    {
      tema: "personajes", nivel: "normal",
      texto: "¿Quién mandaba a los Cien Mil Hijos de San Luis?",
      correcta: "El duque de Angulema",
      incorrectas: ["Wellington", "Napoleón Bonaparte", "El embajador ruso Tatischev"],
      explicacion: "La Santa Alianza los envió en 1823. Muchos generales no combatieron, el campo no resistió y Cádiz cayó.",
      fuente: "Tema 5, diap. 34–46"
    },
    {
      tema: "personajes", nivel: "normal",
      texto: "¿En torno a quién se agruparon los ultras o apostólicos?",
      correcta: "El infante Carlos María Isidro",
      incorrectas: ["El duque de Angulema", "Cea Bermúdez", "López Ballesteros"],
      explicacion: "Era el hermano del rey. Al quedar fuera de la sucesión por la Pragmática Sanción, sus partidarios dieron origen al carlismo.",
      fuente: "Tema 5, diap. 50–70"
    },
    {
      tema: "personajes", nivel: "normal",
      texto: "¿Con quién se casó Fernando VII en 1829?",
      correcta: "María Cristina de Borbón-Dos Sicilias",
      incorrectas: ["María Luisa de Parma", "María Luisa de Austria", "Carlota Joaquina de Borbón"],
      explicacion: "Al año siguiente promulgó la Pragmática Sanción y nació su hija Isabel. A su muerte, María Cristina fue regente.",
      fuente: "Tema 5, diap. 56–70"
    },
    {
      tema: "personajes", nivel: "normal",
      texto: "¿Qué ministro de Hacienda elaboró el primer Presupuesto (1828)?",
      correcta: "López Ballesteros",
      incorrectas: ["Martín de Garay", "Calomarde", "Cea Bermúdez"],
      explicacion: "Presionado por las potencias europeas, Fernando VII nombró gobiernos moderados en la Década Ominosa.",
      fuente: "Tema 5, diap. 50–62"
    },
    {
      tema: "personajes", nivel: "normal",
      texto: "¿Qué ministro ultra logró en 1832 que el rey derogara la Pragmática Sanción?",
      correcta: "Calomarde",
      incorrectas: ["Cea Bermúdez", "López Ballesteros", "Argüelles"],
      explicacion: "Fueron los Sucesos de La Granja. Recuperado, el rey restableció la Pragmática y nombró un gobierno más moderado.",
      fuente: "Tema 5, diap. 56–70"
    },
    {
      tema: "personajes", nivel: "normal",
      texto: "¿Qué liberal fue fusilado en Málaga en 1831?",
      correcta: "José María Torrijos",
      incorrectas: ["Rafael del Riego", "Francisco Espoz y Mina", "Juan Díaz Porlier"],
      explicacion: "La represión de la Década Ominosa fue dura: Riego (1823), el Empecinado (1825), Torrijos y Mariana Pineda (1831).",
      fuente: "Tema 5, diap. 46–49 y 52"
    },
    {
      tema: "personajes", nivel: "normal",
      texto: "¿Qué mujer fue ejecutada en 1831 durante la represión de la Década Ominosa?",
      correcta: "Mariana Pineda",
      incorrectas: ["María Cristina de Borbón", "María Luisa de Parma", "La duquesa de Alba"],
      explicacion: "Su ejecución, el mismo año que la de Torrijos, muestra la dureza de la represión contra los liberales.",
      fuente: "Tema 5, diap. 46–49 y 52"
    },
    {
      tema: "personajes", nivel: "normal",
      texto: "¿Dónde resistieron Daoíz y Velarde el 2 de mayo de 1808?",
      correcta: "En el Parque de Monteleón",
      incorrectas: ["En el Oratorio de San Felipe Neri", "En la Isla de León", "En Cabezas de San Juan"],
      explicacion: "Fue uno de los focos del levantamiento de Madrid contra las tropas francesas.",
      fuente: "Tema 3, diap. 8–25"
    },
    {
      tema: "personajes", nivel: "normal",
      texto: "¿Quiénes «declararon la guerra» a los franceses tras el 2 de mayo?",
      correcta: "Los alcaldes de Móstoles",
      incorrectas: ["La Junta de Gobierno dejada por Fernando", "Las Cortes de Cádiz", "El Consejo de Castilla"],
      explicacion: "La Junta de Gobierno que dejó Fernando no reaccionó. El vacío de poder lo llenaron el pueblo y, después, las juntas.",
      fuente: "Tema 3, diap. 8–25"
    },
    {
      tema: "personajes", nivel: "extremo",
      texto: "¿Quiénes encabezaban el partido fernandino antes de 1808?",
      correcta: "Escoiquiz y el duque del Infantado",
      incorrectas: ["Argüelles y Muñoz Torrero", "Jovellanos y Quintana", "López Ballesteros y Cea Bermúdez"],
      explicacion: "Eran nobles y clérigos contrarios a las reformas, agrupados en torno al príncipe Fernando y enfrentados a Godoy.",
      fuente: "Tema 2, diap. 50–51; Tema 3, diap. 5–7"
    },
    {
      tema: "personajes", nivel: "extremo",
      texto: "¿Quiénes formaban la camarilla de Fernando VII en el Sexenio absolutista?",
      correcta: "Alagón, Ugarte, «Chamorro» y el embajador ruso Tatischev",
      incorrectas: ["Argüelles, Muñoz Torrero y Quintana", "Espoz y Mina, Díaz Porlier y Lacy", "Floridablanca, Jovellanos y Campomanes"],
      explicacion: "La camarilla era un grupo de confianza del rey que decidía al margen del gobierno.",
      fuente: "Tema 5, diap. 7–24"
    },
    {
      tema: "personajes", nivel: "extremo",
      texto: "¿Quiénes se encargaron de la consulta al país previa a las Cortes de Cádiz?",
      correcta: "Jovellanos y Quintana",
      incorrectas: ["Argüelles y Muñoz Torrero", "Calomarde y Ugarte", "Escoiquiz y el duque del Infantado"],
      explicacion: "La Junta Central la encargó. Las respuestas pedían limitar el poder del rey, libertades y el fin de los privilegios.",
      fuente: "Tema 4, diap. 2–13"
    },
    {
      tema: "personajes", nivel: "extremo",
      texto: "¿Quién de estos NO encabezó un pronunciamiento liberal durante el Sexenio absolutista?",
      correcta: "Calomarde",
      incorrectas: ["Espoz y Mina", "Díaz Porlier", "Lacy"],
      explicacion: "Espoz y Mina (1814), Díaz Porlier (1815) y Lacy (1817) se pronunciaron. Calomarde fue un ministro ultra de la Década Ominosa.",
      fuente: "Tema 5, diap. 7–24 y 32–33; Tema 5, diap. 56–70"
    },
    {
      tema: "personajes", nivel: "extremo",
      texto: "¿Qué ministro reformista fue cesado durante el Sexenio absolutista?",
      correcta: "Martín de Garay",
      incorrectas: ["Calomarde", "Ugarte", "Alagón"],
      explicacion: "Con la Hacienda en quiebra, algunos ministros intentaron reformas, pero el rey los cesaba a capricho.",
      fuente: "Tema 5, diap. 7–24"
    },
    {
      tema: "personajes", nivel: "extremo",
      texto: "¿Quién escribió que en España había «en la calle, actos sin ideas; en las Cortes, ideas sin actos»?",
      correcta: "Karl Marx",
      incorrectas: ["Manuel José Quintana", "Jovellanos", "Napoleón"],
      explicacion: "Marx resumía así la distancia entre el pueblo que luchaba y los diputados de Cádiz que legislaban.",
      fuente: "Tema 4, diap. 2–13"
    },
    {
      tema: "personajes", nivel: "extremo",
      texto: "¿Quién afirmó que era imposible dar un paso hacia la independencia sin darlo también hacia la libertad?",
      correcta: "Manuel José Quintana",
      incorrectas: ["Karl Marx", "Fernando VII", "Manuel Godoy"],
      explicacion: "Resume el doble carácter de la guerra: lucha contra el invasor y, a la vez, revolución contra el absolutismo.",
      fuente: "Tema 3, diap. 26–31 y 45"
    },

    /* ==================== CONCEPTOS Y DOCUMENTOS ==================== */
    {
      tema: "conceptos", nivel: "basico",
      texto: "¿Con qué nombre popular se conoce la Constitución de 1812?",
      correcta: "«La Pepa»",
      incorrectas: ["«La Gloriosa»", "«La Niña Bonita»", "«La Deseada»"],
      explicacion: "Se promulgó el 19 de marzo de 1812, día de San José.",
      fuente: "Tema 4, diap. 16–34"
    },
    {
      tema: "conceptos", nivel: "basico",
      texto: "Según la Constitución de 1812, ¿dónde reside la soberanía?",
      correcta: "En la nación",
      incorrectas: ["En el rey, por derecho divino", "En la nobleza y el clero", "En el emperador de los franceses"],
      explicacion: "Es la soberanía nacional: el poder reside en la nación, representada en Cortes, y no en el rey.",
      fuente: "Tema 4, diap. 16–34"
    },
    {
      tema: "conceptos", nivel: "basico",
      texto: "¿Qué era un afrancesado?",
      correcta: "Un español que colaboró con José I",
      incorrectas: ["Un soldado francés destinado en España", "Un liberal diputado en Cádiz", "Un guerrillero que luchaba contra Napoleón"],
      explicacion: "Colaboraban por convicción reformista o por interés. Muchos tuvieron que exiliarse en 1814.",
      fuente: "Tema 3, diap. 32–36 y 62–65"
    },
    {
      tema: "conceptos", nivel: "basico",
      texto: "¿Qué era la guerrilla?",
      correcta: "Una guerra de desgaste apoyada por la población",
      incorrectas: ["Un ejército regular enviado por Inglaterra", "Una sociedad secreta de liberales", "La policía secreta de Fernando VII"],
      explicacion: "Interceptaban convoyes, atacaban destacamentos y cortaban comunicaciones. Líderes: Espoz y Mina, el Empecinado, Díaz Porlier.",
      fuente: "Tema 3, diap. 46–56"
    },
    {
      tema: "conceptos", nivel: "basico",
      texto: "¿Qué es un pronunciamiento?",
      correcta: "Un levantamiento militar para forzar un cambio político",
      incorrectas: ["Un discurso del rey ante las Cortes", "Una votación de los diputados", "Una revuelta campesina contra los señores"],
      explicacion: "El ejemplo más claro es el de Riego en 1820. Antes lo intentaron, sin éxito, Espoz y Mina, Díaz Porlier y Lacy.",
      fuente: "Resumen, Conceptos clave; Tema 5, diap. 34–46"
    },
    {
      tema: "conceptos", nivel: "basico",
      texto: "¿Qué eran las juntas de 1808?",
      correcta: "Órganos de poder creados espontáneamente ante el vacío de poder",
      incorrectas: ["Tribunales de la Inquisición", "Consejos nombrados por José I", "Reuniones secretas del partido fernandino"],
      explicacion: "Surgieron de abajo arriba: juntas locales, provinciales y la Junta Suprema Central.",
      fuente: "Tema 3, diap. 26–31"
    },
    {
      tema: "conceptos", nivel: "basico",
      texto: "En las Cortes de Cádiz, ¿quiénes eran los «serviles»?",
      correcta: "Los diputados absolutistas",
      incorrectas: ["Los diputados liberales", "Los diputados americanos", "Los criados del rey"],
      explicacion: "Frente a ellos estaban los liberales (Argüelles, Muñoz Torrero) y los americanos.",
      fuente: "Tema 4, diap. 2–13"
    },
    {
      tema: "conceptos", nivel: "basico",
      texto: "¿Qué tipo de sufragio establecía la Constitución de 1812?",
      correcta: "Universal masculino e indirecto",
      incorrectas: ["Censitario y directo", "Universal masculino y femenino", "No había elecciones: el rey nombraba a los diputados"],
      explicacion: "Votaban los hombres, pero de forma indirecta: elegían a quienes después elegían a los diputados. Un diputado por cada 70.000 habitantes.",
      fuente: "Tema 4, diap. 16–34"
    },
    {
      tema: "conceptos", nivel: "basico",
      texto: "¿Qué permitía la Pragmática Sanción?",
      correcta: "Que las mujeres pudieran reinar",
      incorrectas: ["La vuelta de los jesuitas", "La libertad de imprenta", "La venta de los bienes de la Iglesia"],
      explicacion: "Abolía la Ley Sálica. Gracias a ella podía reinar Isabel, y Carlos María Isidro quedaba fuera.",
      fuente: "Tema 5, diap. 56–70"
    },
    {
      tema: "conceptos", nivel: "normal",
      texto: "¿Qué era el Estatuto de Bayona (1808)?",
      correcta: "Una carta otorgada inspirada en el modelo francés",
      incorrectas: ["La primera constitución aprobada por las Cortes", "El tratado que devolvió el trono a Fernando VII", "El decreto que abolió los señoríos"],
      explicacion: "Una carta otorgada la concede el monarca: no nace de la soberanía nacional. Reconocía algunos derechos, pero apenas se aplicó.",
      fuente: "Tema 3, diap. 57–61"
    },
    {
      tema: "conceptos", nivel: "normal",
      texto: "¿Cómo eran las Cortes según la Constitución de 1812?",
      correcta: "Unicamerales",
      incorrectas: ["Bicamerales, con Congreso y Senado", "Estamentales, por nobleza, clero y estado llano", "Nombradas directamente por el rey"],
      explicacion: "Las Cortes hacían las leyes; el rey las sancionaba y tenía un veto suspensivo de dos años.",
      fuente: "Tema 4, diap. 16–34"
    },
    {
      tema: "conceptos", nivel: "normal",
      texto: "¿Qué poder tenía el rey sobre las leyes en la Constitución de 1812?",
      correcta: "Un veto suspensivo de dos años",
      incorrectas: ["Un veto absoluto", "Ninguno: ni siquiera las sancionaba", "Hacía las leyes él solo"],
      explicacion: "Había separación de poderes: el legislativo era de las Cortes, aunque el rey sancionaba las leyes.",
      fuente: "Tema 4, diap. 16–34"
    },
    {
      tema: "conceptos", nivel: "normal",
      texto: "¿Qué era la camarilla de Fernando VII?",
      correcta: "Un grupo de confianza del rey que decidía al margen del gobierno",
      incorrectas: ["Una sociedad patriótica de liberales exaltados", "El nombre del gobierno constitucional", "Un cuerpo del ejército francés"],
      explicacion: "Muestra el absolutismo muy personal del Sexenio: ministros nombrados y cesados a capricho.",
      fuente: "Tema 5, diap. 7–24"
    },
    {
      tema: "conceptos", nivel: "normal",
      texto: "En el Trienio Liberal, ¿qué diferenciaba a moderados y exaltados?",
      correcta: "Los exaltados buscaban el apoyo popular; los moderados pactaban con la oligarquía",
      incorrectas: ["Los moderados eran absolutistas y los exaltados, liberales", "Los exaltados querían repartir la tierra entre los campesinos", "Los moderados apoyaban a José I"],
      explicacion: "Las diferencias eran más tácticas que de fondo: ninguno de los dos planteó el reparto de la tierra.",
      fuente: "Tema 5, diap. 34–46"
    },
    {
      tema: "conceptos", nivel: "normal",
      texto: "¿Cuál era el lema del carlismo?",
      correcta: "«Dios, Patria, Rey (y Fueros)»",
      incorrectas: ["«Libertad, igualdad, fraternidad»", "«Todo para el pueblo, pero sin el pueblo»", "«Constitución o muerte»"],
      explicacion: "El carlismo era absolutista y tradicionalista. Apoyaba a Carlos María Isidro como heredero.",
      fuente: "Resumen, Conceptos clave"
    },
    {
      tema: "conceptos", nivel: "normal",
      texto: "¿Qué ocurrió con los señoríos en 1811?",
      correcta: "Se abolieron los jurisdiccionales; los territoriales pasaron a ser propiedad privada",
      incorrectas: ["Se abolieron todos y la tierra se repartió entre los campesinos", "Se mantuvieron tal y como estaban", "Pasaron a ser propiedad del Estado"],
      explicacion: "El señor perdió el derecho a juzgar y cobrar tributos, pero conservó la tierra. Esa ambigüedad provocó pleitos interminables.",
      fuente: "Tema 4, diap. 9–10, 14–15 y 20–23"
    },
    {
      tema: "conceptos", nivel: "normal",
      texto: "¿Qué alcance tuvo la libertad de imprenta aprobada en 1810?",
      correcta: "Solo en materia política; lo religioso seguía bajo censura",
      incorrectas: ["Total, también en materia religiosa", "Solo para los periódicos del gobierno", "Solo en las colonias americanas"],
      explicacion: "Las Cortes de Cádiz no rompieron con la Iglesia: la Constitución mantuvo la confesionalidad católica exclusiva.",
      fuente: "Tema 4, diap. 9–10, 14–15 y 20–23"
    },
    {
      tema: "conceptos", nivel: "normal",
      texto: "¿Qué religión establecía la Constitución de 1812?",
      correcta: "La católica, como única religión",
      incorrectas: ["Libertad de cultos", "Ninguna: el Estado era laico", "Tolerancia de cultos en privado"],
      explicacion: "La Constitución era muy avanzada en lo político, pero mantuvo la confesionalidad católica exclusiva.",
      fuente: "Tema 4, diap. 16–34"
    },
    {
      tema: "conceptos", nivel: "normal",
      texto: "¿Qué pedía el Manifiesto de los Persas?",
      correcta: "Volver al Antiguo Régimen",
      incorrectas: ["Que el rey jurase la Constitución", "La independencia de América", "Que se coronase a Carlos María Isidro"],
      explicacion: "Lo firmaron diputados absolutistas. Fue uno de los apoyos del golpe de Fernando VII en 1814.",
      fuente: "Tema 5, diap. 2–6"
    },
    {
      tema: "conceptos", nivel: "normal",
      texto: "¿Qué eran los Voluntarios Realistas?",
      correcta: "El brazo armado de los ultras",
      incorrectas: ["Las tropas de Riego", "Los guerrilleros contra Napoleón", "La milicia creada por la Constitución de 1812"],
      explicacion: "Fueron uno de los instrumentos de represión de la Década Ominosa.",
      fuente: "Tema 5, diap. 46–49 y 52"
    },
    {
      tema: "conceptos", nivel: "normal",
      texto: "¿Qué alianza de potencias envió a los Cien Mil Hijos de San Luis?",
      correcta: "La Santa Alianza",
      incorrectas: ["La Liga de Delos", "La Cuádruple Alianza", "La Junta Suprema Central"],
      explicacion: "Fernando VII conspiraba contra el régimen constitucional y pidió ayuda exterior.",
      fuente: "Tema 5, diap. 34–46"
    },
    {
      tema: "conceptos", nivel: "extremo",
      texto: "¿Dónde se reunieron las Cortes en 1810 y adónde se trasladaron en 1811?",
      correcta: "De la Isla de León al Oratorio de San Felipe Neri (Cádiz)",
      incorrectas: ["De Aranjuez a Madrid", "De Bayona a Valençay", "De Sevilla a Cabezas de San Juan"],
      explicacion: "Su convocatoria ya no era estamental. En su primera sesión proclamaron la soberanía nacional.",
      fuente: "Tema 4, diap. 2–13"
    },
    {
      tema: "conceptos", nivel: "extremo",
      texto: "Según la Constitución de 1812, ¿cuántos habitantes representaba cada diputado?",
      correcta: "70.000",
      incorrectas: ["10.000", "50.000", "100.000"],
      explicacion: "El sufragio era universal masculino e indirecto.",
      fuente: "Tema 4, diap. 16–34"
    },
    {
      tema: "conceptos", nivel: "extremo",
      texto: "¿Qué dos instituciones de 1812 fueron, según los apuntes, las más democráticas?",
      correcta: "Los ayuntamientos electivos y la Milicia Nacional",
      incorrectas: ["La Inquisición y los gremios", "La camarilla y los Voluntarios Realistas", "Los mayorazgos y los señoríos"],
      explicacion: "Aun así, la Milicia Nacional exigía ser propietario: los liberales de Cádiz temían al pueblo.",
      fuente: "Tema 4, diap. 16–34"
    },
    {
      tema: "conceptos", nivel: "extremo",
      texto: "«La Nación española es libre e independiente, y no es ni puede ser patrimonio de ninguna familia ni persona». ¿Qué principio expresa este artículo?",
      correcta: "La soberanía nacional",
      incorrectas: ["La monarquía de derecho divino", "La separación Iglesia-Estado", "El sufragio censitario"],
      explicacion: "Son los artículos 2 y 3 de la Constitución de 1812: la nación ya no pertenece al rey.",
      fuente: "Tema 4, diap. 16–34"
    },
    {
      tema: "conceptos", nivel: "extremo",
      texto: "¿Por qué se ha llamado a la de Cádiz una revolución «in vitro»?",
      correcta: "Porque apenas pudo aplicarse: se anuló en 1814",
      incorrectas: ["Porque se hizo en un laboratorio", "Porque fue obra de científicos ilustrados", "Porque se copió entera de Francia"],
      explicacion: "Además, las juntas acabaron en manos de las élites y la abolición de los señoríos fue ambigua.",
      fuente: "Tema 4, diap. 16–34"
    },
    {
      tema: "conceptos", nivel: "extremo",
      texto: "¿Qué fue la Junta Reservada del Estado en la Década Ominosa?",
      correcta: "Una policía secreta",
      incorrectas: ["Un gobierno liberal en el exilio", "El consejo de regencia de María Cristina", "Una sociedad patriótica"],
      explicacion: "Junto con la Junta Suprema de Depuraciones y los Voluntarios Realistas, fue un instrumento de represión.",
      fuente: "Tema 5, diap. 46–49 y 52"
    },
    {
      tema: "conceptos", nivel: "extremo",
      texto: "¿Qué grupo liberal del Trienio se apoyaba en las sociedades patrióticas?",
      correcta: "Los exaltados",
      incorrectas: ["Los moderados", "Los serviles", "Los afrancesados"],
      explicacion: "Los exaltados buscaban el apoyo popular; los moderados preferían dejar al pueblo fuera del juego político.",
      fuente: "Tema 5, diap. 34–46"
    },
    {
      tema: "conceptos", nivel: "extremo",
      texto: "¿Qué tres tipos de afrancesados distinguen los apuntes?",
      correcta: "Funcionarios («godoístas»), intelectuales ilustrados y propietarios que buscaban orden",
      incorrectas: ["Nobles, clérigos y campesinos", "Guerrilleros, militares y diputados", "Comerciantes, banqueros y marinos"],
      explicacion: "Pensaban que colaborar con José I era el camino más corto hacia las reformas sin revolución.",
      fuente: "Tema 3, diap. 32–36 y 62–65"
    },
    {
      tema: "conceptos", nivel: "extremo",
      texto: "¿Qué decía el decreto de 4 de mayo de 1814 sobre la obra de Cádiz?",
      correcta: "Que se anulaba «como si no hubiesen pasado jamás esos actos»",
      incorrectas: ["Que se mantenía, pero con un veto absoluto del rey", "Que se aplicaría solo en América", "Que se sometía a referéndum"],
      explicacion: "Declaraba nulas la Constitución y los decretos de Cádiz. Diputados liberales fueron detenidos.",
      fuente: "Tema 5, diap. 2–6"
    },
    {
      tema: "conceptos", nivel: "extremo",
      texto: "En las Cortes de Cádiz, además de serviles y liberales, ¿qué otro grupo de diputados había?",
      correcta: "Los americanos",
      incorrectas: ["Los afrancesados", "Los exaltados", "Los apostólicos"],
      explicacion: "Los americanos solían ser liberales en lo peninsular, pero a menudo conservadores en su propio territorio.",
      fuente: "Tema 4, diap. 2–13"
    },

    /* ==================== CAUSAS Y CONSECUENCIAS ==================== */
    {
      tema: "causas", nivel: "basico",
      texto: "¿Qué acordaron Godoy y Napoleón en el Tratado de Fontainebleau (1807)?",
      correcta: "Repartirse Portugal",
      incorrectas: ["Devolver el trono a Fernando VII", "Retirar las tropas francesas de España", "Ceder América a Francia"],
      explicacion: "Napoleón jugaba a dos bandas: firmaba con Godoy mientras negociaba en secreto con los fernandinos.",
      fuente: "Tema 2, diap. 50–51; Tema 3, diap. 5–7"
    },
    {
      tema: "causas", nivel: "basico",
      texto: "¿Qué consecuencia tuvo la victoria española en Bailén?",
      correcta: "Obligó a Napoleón a venir en persona a la Península",
      incorrectas: ["Puso fin a la guerra", "Devolvió el trono a Fernando VII", "Provocó la convocatoria de los Cien Mil Hijos de San Luis"],
      explicacion: "Tras Bailén llegó un periodo de dominio francés que duró hasta 1812.",
      fuente: "Tema 3, diap. 46–56"
    },
    {
      tema: "causas", nivel: "basico",
      texto: "¿Por qué firmó Napoleón el Tratado de Valençay?",
      correcta: "Para poder retirar sus tropas de España",
      incorrectas: ["Para casarse con una infanta española", "Para repartirse Portugal con España", "Para ayudar a los liberales"],
      explicacion: "Reconoció a Fernando VII como rey. La Regencia española se negó a ratificar el tratado.",
      fuente: "Tema 3, diap. 46–56"
    },
    {
      tema: "causas", nivel: "basico",
      texto: "¿Qué consecuencia tuvo el pronunciamiento de Riego?",
      correcta: "Fernando VII tuvo que jurar la Constitución de 1812",
      incorrectas: ["Fernando VII abdicó en su hermano Carlos", "Se proclamó la república", "Napoleón volvió a invadir España"],
      explicacion: "Fracasó en Andalucía, pero se extendió por otras ciudades. El rey juró la Constitución el 9 de marzo de 1820.",
      fuente: "Tema 5, diap. 34–46"
    },
    {
      tema: "causas", nivel: "basico",
      texto: "¿Qué hecho puso fin al Trienio Liberal?",
      correcta: "La invasión de los Cien Mil Hijos de San Luis",
      incorrectas: ["El pronunciamiento de Riego", "La muerte de Fernando VII", "La batalla de Bailén"],
      explicacion: "La Santa Alianza envió este ejército en 1823 y se restauró el absolutismo.",
      fuente: "Tema 5, diap. 34–46"
    },
    {
      tema: "causas", nivel: "basico",
      texto: "¿Qué consecuencia tuvo la Pragmática Sanción para el infante Carlos María Isidro?",
      correcta: "Quedó fuera de la sucesión al trono",
      incorrectas: ["Fue proclamado rey", "Fue nombrado regente", "Tuvo que exiliarse en América"],
      explicacion: "Al nacer Isabel (1830), Carlos dejó de ser el heredero. De ahí nace el carlismo y la Primera Guerra Carlista.",
      fuente: "Tema 5, diap. 56–70"
    },
    {
      tema: "causas", nivel: "basico",
      texto: "¿Qué consecuencia tuvo la batalla de Ayacucho (1824)?",
      correcta: "El fin del dominio español en el continente americano",
      incorrectas: ["La reconquista de América por España", "La independencia de Cuba", "La entrada de Napoleón en Madrid"],
      explicacion: "Solo quedaron Cuba, Puerto Rico y Filipinas.",
      fuente: "Tema 5, diap. 25–31"
    },
    {
      tema: "causas", nivel: "normal",
      texto: "¿Por qué se dice que la Guerra de la Independencia tuvo un doble carácter?",
      correcta: "Fue guerra contra el invasor y revolución contra el absolutismo",
      incorrectas: ["Se luchó a la vez en España y en América", "Hubo dos reyes franceses a la vez", "Se combatió por mar y por tierra"],
      explicacion: "Como se dijo entonces: no era posible la revolución con Napoleón, pero sí contra Napoleón.",
      fuente: "Tema 3, diap. 26–31 y 45"
    },
    {
      tema: "causas", nivel: "normal",
      texto: "¿Qué cambio de legitimidad supuso la creación de las juntas en 1808?",
      correcta: "De la legitimidad monárquica a la legitimidad popular",
      incorrectas: ["De la legitimidad popular a la monárquica", "De la monarquía española a la francesa", "Del poder civil al poder religioso"],
      explicacion: "Ante un país sin rey, sin gobierno y sin Estado, el pueblo creó un poder nuevo de abajo arriba.",
      fuente: "Tema 3, diap. 26–31"
    },
    {
      tema: "causas", nivel: "normal",
      texto: "¿Cuál fue la naturaleza del Motín de Aranjuez, según los apuntes?",
      correcta: "Una respuesta reaccionaria a las reformas, no una revolución",
      incorrectas: ["Una revolución liberal", "Un levantamiento contra los franceses", "Una revuelta campesina contra los señores"],
      explicacion: "Lo impulsaron nobles y clérigos contrarios a Godoy, aunque ya anunciaba los levantamientos del siglo XIX.",
      fuente: "Tema 3, diap. 8–25"
    },
    {
      tema: "causas", nivel: "normal",
      texto: "¿Quiénes dirigieron en la práctica las juntas de 1808?",
      correcta: "Las élites locales: propietarios, abogados, pequeña nobleza",
      incorrectas: ["Los jornaleros y artesanos", "Los generales franceses", "Los obispos por orden del Papa"],
      explicacion: "La movilización fue popular, pero la dirección quedó en manos de élites, a menudo liberales.",
      fuente: "Tema 3, diap. 26–31 y 45"
    },
    {
      tema: "causas", nivel: "normal",
      texto: "¿Qué apoyos llevaron a Fernando VII a no jurar la Constitución en 1814?",
      correcta: "El clero, parte del pueblo, el ejército y la actitud de Inglaterra",
      incorrectas: ["Los liberales y la Milicia Nacional", "Napoleón y los afrancesados", "Las juntas americanas"],
      explicacion: "Con esos apoyos dio el golpe de Estado de 1814 y restauró el absolutismo.",
      fuente: "Tema 5, diap. 2–6"
    },
    {
      tema: "causas", nivel: "normal",
      texto: "Según los apuntes, ¿por qué cayó el absolutismo en 1820?",
      correcta: "Por su propia decrepitud: nadie salió a defenderlo",
      incorrectas: ["Por una invasión extranjera", "Por la muerte del rey", "Por una gran revuelta campesina"],
      explicacion: "Más que la fuerza de los liberales, pesó la debilidad del régimen: quiebra, corrupción y aislamiento.",
      fuente: "Tema 5, diap. 7–24"
    },
    {
      tema: "causas", nivel: "normal",
      texto: "Además de la invasión extranjera, ¿por qué cayó el Trienio Liberal?",
      correcta: "Fue una revolución sin apoyos: no convenció a las élites y perdió a los campesinos",
      incorrectas: ["Porque los liberales repartieron la tierra", "Porque Riego se pasó a los absolutistas", "Porque José I volvió a reinar"],
      explicacion: "Para los campesinos, la única consecuencia visible fue la subida de impuestos.",
      fuente: "Tema 5, diap. 34–46"
    },
    {
      tema: "causas", nivel: "normal",
      texto: "¿Qué consecuencia tuvo para los campesinos la abolición de los señoríos de 1811?",
      correcta: "Desengaño y pleitos interminables",
      incorrectas: ["Se convirtieron en propietarios de la tierra", "Dejaron de pagar cualquier impuesto", "Emigraron masivamente a América"],
      explicacion: "Los señoríos territoriales pasaron a ser propiedad privada de los antiguos señores.",
      fuente: "Tema 4, diap. 9–10, 14–15 y 20–23"
    },
    {
      tema: "causas", nivel: "normal",
      texto: "¿Por qué formaron juntas los cabildos americanos entre 1808 y 1810?",
      correcta: "Ante el vacío de poder, y en nombre de Fernando VII",
      incorrectas: ["Para unirse a Napoleón", "Para proclamar la república desde el primer momento", "Por orden de José I"],
      explicacion: "Al principio se sentían parte de la monarquía. Desde 1813 se empieza a hablar de «americanos» y «españoles».",
      fuente: "Tema 5, diap. 25–31"
    },
    {
      tema: "causas", nivel: "normal",
      texto: "¿Por qué los americanos acabaron viendo a Fernando VII como un tirano?",
      correcta: "Porque en 1814 optó por la fuerza y envió una expedición militar",
      incorrectas: ["Porque aceptó la Constitución de 1812", "Porque vendió América a Inglaterra", "Porque nombró virrey a Godoy"],
      explicacion: "En 1815 envió una expedición de 10.000 hombres. La soberanía pasaba ya del rey a la nación americana.",
      fuente: "Tema 5, diap. 25–31"
    },
    {
      tema: "causas", nivel: "normal",
      texto: "¿Por qué la Junta Central cedió el poder a una Regencia en enero de 1810?",
      correcta: "Por los reveses militares",
      incorrectas: ["Por la muerte de Jovellanos", "Porque Fernando VII volvió a España", "Porque lo ordenó Napoleón"],
      explicacion: "La Regencia era poco partidaria de las Cortes, pero estas se reunieron igualmente en septiembre de 1810.",
      fuente: "Tema 4, diap. 2–13"
    },
    {
      tema: "causas", nivel: "extremo",
      texto: "¿Qué factor externo fue decisivo en la retirada francesa de 1812-1814?",
      correcta: "La campaña de Rusia",
      incorrectas: ["La independencia de Estados Unidos", "La batalla de Trafalgar", "El Congreso de Viena"],
      explicacion: "Los apuntes la señalan como factor decisivo. En la Península, Wellington dirigía a los aliados.",
      fuente: "Tema 3, diap. 46–56"
    },
    {
      tema: "causas", nivel: "extremo",
      texto: "¿A quién benefició la venta de bienes de conventos en el Trienio?",
      correcta: "A los grandes propietarios",
      incorrectas: ["A los jornaleros sin tierra", "A la Iglesia", "A los antiguos señores jurisdiccionales franceses"],
      explicacion: "Por eso los campesinos se alejaron de los liberales y se acercaron al clero realista.",
      fuente: "Tema 5, diap. 34–46"
    },
    {
      tema: "causas", nivel: "extremo",
      texto: "¿Por qué no salió adelante la ley de señoríos durante el Trienio?",
      correcta: "Por el veto del rey",
      incorrectas: ["Porque la rechazaron los exaltados", "Porque la anuló la Santa Alianza", "Porque los campesinos se opusieron"],
      explicacion: "El rey usó el veto suspensivo que le daba la Constitución mientras conspiraba contra el régimen.",
      fuente: "Tema 5, diap. 34–46"
    },
    {
      tema: "causas", nivel: "extremo",
      texto: "¿Qué hizo la Regencia con el Tratado de Valençay?",
      correcta: "Se negó a ratificarlo",
      incorrectas: ["Lo ratificó de inmediato", "Lo convirtió en artículo de la Constitución", "Lo envió a las juntas americanas para su aprobación"],
      explicacion: "Napoleón reconocía a Fernando VII como rey para retirar sus tropas, pero la Regencia no lo aceptó.",
      fuente: "Tema 3, diap. 46–56"
    },
    {
      tema: "causas", nivel: "extremo",
      texto: "¿Por qué Fernando VII nombró gobiernos moderados en la Década Ominosa?",
      correcta: "Por la presión de las potencias europeas",
      incorrectas: ["Por la presión de los Voluntarios Realistas", "Porque juró la Constitución", "Porque se lo pidió Carlos María Isidro"],
      explicacion: "Ese reformismo moderado chocó con los ultras, agrupados en torno a Carlos María Isidro.",
      fuente: "Tema 5, diap. 50–62"
    },
    {
      tema: "causas", nivel: "extremo",
      texto: "¿Por qué se considera la revuelta de los Agraviados (Malcontents, 1827) un «ensayo general»?",
      correcta: "Porque anticipó el carlismo",
      incorrectas: ["Porque anticipó el Trienio Liberal", "Porque anticipó la Guerra de la Independencia", "Porque anticipó la independencia americana"],
      explicacion: "Fue una revuelta ultra en Cataluña. Los ultras se agrupaban en torno al infante Carlos María Isidro.",
      fuente: "Tema 5, diap. 50–62"
    },
    {
      tema: "causas", nivel: "extremo",
      texto: "¿Qué posición quedó para España en el Congreso de Viena?",
      correcta: "La de potencia de segundo orden",
      incorrectas: ["La de primera potencia europea", "La de aliada privilegiada de Francia", "La de árbitro de la Santa Alianza"],
      explicacion: "Fue parte del aislamiento internacional del Sexenio absolutista.",
      fuente: "Tema 5, diap. 7–24"
    },
    {
      tema: "causas", nivel: "extremo",
      texto: "¿Qué ejemplo de corrupción del Sexenio absolutista citan los apuntes?",
      correcta: "La compra de barcos rusos",
      incorrectas: ["La venta de Gibraltar", "El Catastro de Ensenada", "La desamortización de Godoy"],
      explicacion: "Se sumaba a la quiebra de la Hacienda, la caída de precios de 1817 y la pérdida de las colonias.",
      fuente: "Tema 5, diap. 7–24"
    },
    {
      tema: "causas", nivel: "extremo",
      texto: "¿Por qué luchaba mayoritariamente el pueblo en la Guerra de la Independencia?",
      correcta: "Por «Dios, Patria y Rey»",
      incorrectas: ["Por la Constitución de 1812", "Por el reparto de la tierra", "Por la república"],
      explicacion: "Quería expulsar al invasor y recuperar a Fernando. En gran parte era ajeno al proyecto de las Cortes.",
      fuente: "Tema 3, diap. 32–36 y 62–65"
    },
    {
      tema: "causas", nivel: "extremo",
      texto: "Según los apuntes, ¿cuál fue la principal limitación de la Constitución de 1812?",
      correcta: "Su escasa sensibilidad social: los liberales temían al pueblo",
      incorrectas: ["Que no reconocía la soberanía nacional", "Que no establecía la separación de poderes", "Que era una carta otorgada por el rey"],
      explicacion: "Fue muy avanzada en lo político, pero poco en lo social. Tampoco integró plenamente a América.",
      fuente: "Tema 4, diap. 16–34"
    }
  ]
};
