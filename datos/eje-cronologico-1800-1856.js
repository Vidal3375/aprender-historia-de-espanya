/* =====================================================================
   JUEGO: EJE CRONOLÓGICO · ESPAÑA 1800-1856
   ---------------------------------------------------------------------
   Este archivo contiene TODO el contenido del juego «eje-cronologico.html».
   Puedes editarlo con cualquier editor de texto (o desde la web de GitHub).

   CADA CARTA (bloque { ... } dentro de "cartas"):
     id         identificador único, sin espacios.
     titulo     lo que ve el jugador.
     pista      frase corta que ayuda a situar la carta.
     tipo       "guerra" | "tratado" | "manifiesto" | "pronunciamiento"
                | "constitucion" (constituciones, estatutos, leyes, decretos)
                | "clave" (otras fechas significativas).
     nivel      "basico" | "normal" | "extremo". El nivel Normal incluye
                las cartas básicas; el Extremo, todas.
     desde      fecha: "1808", "1808-05" o "1808-05-02".
     hasta      (opcional) fin del intervalo, con el mismo formato.
                Si una carta tiene intervalo, vale cualquier posición
                compatible con ese intervalo.
     fechaTexto cómo se muestra la fecha al jugador.
     deducida   (opcional) true si el año exacto está por confirmar. El
                juego lo avisa y acepta cualquier posición del intervalo.
     etapa      una de las claves de "etapas" (abajo).
     explicacion lo que se muestra tras colocar la carta.
     fuente     de dónde sale el dato (ver "fuentes").
     img        clave de "imagenes".

   FUENTES DEL PROYECTO (abreviaturas usadas en "fuente"):
     B3   = Resumen «Bloque 3: Antiguo Régimen y su crisis (1700-1833)».
     B4   = Resumen «Bloque 4: la construcción del Estado Liberal (1833-1874)».
     PPT  = Presentación edebé «La crisis del Antiguo Régimen» (diap. = diapositiva).
     LIB  = Libro edebé: «Fases de la guerra» y apartado 5
            «La emancipación de la América española (1810-1824)».
     T1-5 = Resumen de los Temas 1-5 (ya usado en datos/crisis-antiguo-regimen.js).

   IMÁGENES: todas de Wikimedia Commons, comprobada la licencia en la
   ficha de cada archivo (noviembre de 2026). Se guardan en img/eje/.
   ===================================================================== */

window.EJE_CRONOLOGICO = {
  titulo: "Eje cronológico",
  subtitulo: "España, 1800-1856",
  carpetaImagenes: "img/eje/",

  fuentes: {
    B3: "Resumen «Bloque 3: Antiguo Régimen y su crisis (1700-1833)»",
    B4: "Resumen «Bloque 4: la construcción del Estado Liberal (1833-1874)»",
    PPT: "Presentación edebé «La crisis del Antiguo Régimen» (2016)",
    LIB: "Libro de Historia de España, edebé (fases de la guerra; ap. 5, emancipación de América)",
    "T1-5": "Resumen de los Temas 1-5 (banco de preguntas del proyecto)"
  },

  /* Etapas: nombres y fechas tal y como aparecen en los apuntes. */
  etapas: {
    carlos4:     { nombre: "Reinado de Carlos IV (1788-1808)",            color: "#8a6d3b", fuente: "PPT, diap. 2" },
    guerra:      { nombre: "Guerra de la Independencia (1808-1814)",       color: "#a23b2a", fuente: "PPT, diap. 4" },
    restauracion:{ nombre: "Restauración absolutista (1814-1820)",         color: "#5b4a7a", fuente: "PPT, diap. 6" },
    trienio:     { nombre: "Trienio Liberal (1820-1823)",                  color: "#2f7a5b", fuente: "B3; PPT, diap. 7" },
    ominosa:     { nombre: "Década Ominosa (1823-1833)",                   color: "#3f3f3f", fuente: "PPT, diap. 8" },
    america:     { nombre: "Emancipación de la América española (1810-1824)", color: "#2a6f8a", fuente: "PPT, diap. 9; LIB, ap. 5" },
    mcristina:   { nombre: "Regencia de María Cristina (hasta 1840)",      color: "#9a5b7a", fuente: "B4" },
    espartero:   { nombre: "Regencia de Espartero (1840-1843)",            color: "#b5762a", fuente: "B4" },
    moderada:    { nombre: "Década Moderada (1844-1854)",                  color: "#35557f", fuente: "B4" },
    bienio:      { nombre: "Bienio Progresista (1854-1856)",               color: "#6b8a2a", fuente: "B4" }
  },

  /* ----------------------------------------------------------------
     IMÁGENES (Wikimedia Commons). "archivo" es el nombre en Commons:
     la ficha está en https://commons.wikimedia.org/wiki/File:<archivo>
     ---------------------------------------------------------------- */
  imagenes: {
    "goya-familia":     { img: "goya-familia-carlos-iv.jpg", obra: "La familia de Carlos IV", autor: "Francisco de Goya", fecha: "1800-1801", lugar: "Museo del Prado", licencia: "Dominio público", archivo: "La_familia_de_Carlos_IV,_Francisco_de_Goya.jpg" },
    "goya-godoy":       { img: "goya-godoy.jpg", obra: "Manuel Godoy", autor: "Francisco de Goya", fecha: "1801", lugar: "Real Academia de Bellas Artes de San Fernando", licencia: "Dominio público", archivo: "Francisco_de_Goya_-_Godoy_como_general_-_Google_Art_Project.jpg" },
    "goya-dos-mayo":    { img: "goya-dos-de-mayo.jpg", obra: "El 2 de mayo de 1808 en Madrid (La lucha con los mamelucos)", autor: "Francisco de Goya", fecha: "1814", lugar: "Museo del Prado", licencia: "Dominio público", archivo: "El_dos_de_mayo_de_1808_en_Madrid.jpg" },
    "goya-tres-mayo":   { img: "goya-tres-de-mayo.jpg", obra: "El 3 de mayo en Madrid (Los fusilamientos)", autor: "Francisco de Goya", fecha: "1814", lugar: "Museo del Prado", licencia: "Dominio público", archivo: "El_Tres_de_Mayo,_by_Francisco_de_Goya,_from_Prado_thin_black_margin.jpg" },
    "goya-alegoria":    { img: "goya-alegoria-madrid.jpg", obra: "Alegoría de la Villa de Madrid", autor: "Francisco de Goya", fecha: "1810", lugar: "Museo de Historia de Madrid", licencia: "Dominio público", archivo: "Alegoría_de_la_Villa_de_Madrid_por_Goya.jpg" },
    "goya-wellington":  { img: "goya-wellington.jpg", obra: "El duque de Wellington", autor: "Francisco de Goya", fecha: "1812-1814", lugar: "National Gallery (Londres)", licencia: "Dominio público", archivo: "Goya_-_Duke_of_Wellington_-_NG6322.jpg" },
    "goya-fernando-manto":   { img: "goya-fernando-vii-manto.jpg", obra: "Fernando VII con manto real", autor: "Francisco de Goya", fecha: "1814-1815", lugar: "Museo del Prado", licencia: "Dominio público", archivo: "Francisco_Goya_-_Portrait_of_Ferdinand_VII_of_Spain_in_his_robes_of_state_(1815)_-_Prado.jpg" },
    "goya-fernando-ecuestre":{ img: "goya-fernando-vii-ecuestre.jpg", obra: "Retrato ecuestre de Fernando VII", autor: "Francisco de Goya", fecha: "1808", lugar: "Real Academia de Bellas Artes de San Fernando", licencia: "Dominio público", archivo: "Francisco_de_Goya_-_Retrato_ecuestre_de_Fernando_VII_-_Google_Art_Project.jpg" },
    "goya-filipinas":   { img: "goya-junta-filipinas.jpg", obra: "La Junta de Filipinas (Fernando VII presidiendo la Junta de la Compañía de Filipinas)", autor: "Francisco de Goya", fecha: "1815", lugar: "Musée Goya (Castres)", licencia: "Dominio público", archivo: "La_Junta_de_Filipinas.jpg" },
    "mayer-trafalgar":  { img: "mayer-trafalgar.jpg", obra: "Combate del navío Bucentaure en Trafalgar", autor: "Auguste Mayer", fecha: "1836", lugar: "", licencia: "Dominio público", archivo: "Trafalgar-Auguste_Mayer.jpg", nota: "La ficha de Commons advierte de que el título original del cuadro no se conoce con seguridad." },
    "lefevre-jose":     { img: "lefevre-jose-bonaparte.jpg", obra: "José Bonaparte, rey de España", autor: "Robert Lefèvre", fecha: "", lugar: "Apsley House (Londres)", licencia: "Dominio público", archivo: "Joseph_Bonaparte,_King_of_Spain,_by_Robert_Lefevre.jpg" },
    "david-napoleon":   { img: "david-napoleon.jpg", obra: "Napoleón en su gabinete de las Tullerías", autor: "Jacques-Louis David", fecha: "1812", lugar: "National Gallery of Art (Washington)", licencia: "Dominio público", archivo: "Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg" },
    "bruc":             { img: "anonimo-bruc-1846.jpg", obra: "Segunda defensa del Bruc, 1808 (grabado)", autor: "Autor desconocido", fecha: "1846", lugar: "", licencia: "Dominio público", archivo: "Second_defence_of_Bruch,_1808.jpg" },
    "casado-bailen":    { img: "casado-bailen.jpg", obra: "La rendición de Bailén", autor: "José Casado del Alisal", fecha: "1864", lugar: "Museo del Prado", licencia: "Dominio público", archivo: "La_Rendición_de_Bailén_(Casado_del_Alisal).jpg" },
    "casado-cortes":    { img: "casado-cortes-cadiz.jpg", obra: "El juramento de las Cortes de Cádiz en 1810", autor: "José Casado del Alisal", fecha: "1863", lugar: "Congreso de los Diputados", licencia: "Dominio público", archivo: "El_juramento_de_las_Cortes_de_Cádiz_en_1810.jpg" },
    "lopez-fernando":   { img: "lopez-fernando-vii.jpg", obra: "Fernando VII", autor: "Vicente López Portaña", fecha: "", lugar: "Museo del Prado", licencia: "Dominio público", archivo: "Fernando_VII_-_Vicente_López.jpg" },
    "espoz-mina":       { img: "espoz-y-mina.jpg", obra: "Francisco Espoz y Mina", autor: "Autor indicado en la ficha de Commons", fecha: "1858", lugar: "Palacio de Navarra (Gobierno de Navarra)", licencia: "Dominio público", archivo: "Francisco_Espoz_y_Mina_(Palacio_de_Navarra).jpg" },
    "porlier":          { img: "diaz-porlier.jpg", obra: "Juan Díaz Porlier (grabado de «Los mártires de la libertad española»)", autor: "Victoriano Ameller (ed.)", fecha: "1853", lugar: "", licencia: "Dominio público", archivo: "1853,_Los_mártires_de_la_libertad_española,_vol_II,_Juan_Díaz_Porlier.jpg" },
    "bejar-lacy":       { img: "bejar-lacy.jpg", obra: "Fusilamiento del general Luis Lacy", autor: "Pablo Antonio Béjar Novella", fecha: "", lugar: "", licencia: "Dominio público", archivo: "Fusilamiento_del_general_Luis_Lacy_y_Gautier_(5-7-1817).jpg" },
    "riego":            { img: "riego.jpg", obra: "Rafael del Riego", autor: "Autor desconocido", fecha: "s. XIX", lugar: "", licencia: "Dominio público", archivo: "Rafael_Riego.jpg" },
    "lawrence-angulema":{ img: "lawrence-angulema.jpg", obra: "Luis Antonio de Borbón, duque de Angulema", autor: "Thomas Lawrence", fecha: "1825", lugar: "", licencia: "Dominio público", archivo: "Louis-Antoine,_Duke_of_Angouleme_-_Lawrence_1825.jpg" },
    "aparicio":         { img: "aparicio-desembarco.jpg", obra: "Desembarco de Fernando VII en el Puerto de Santa María", autor: "José Aparicio", fecha: "1828", lugar: "Museo del Romanticismo (Madrid)", licencia: "Dominio público", archivo: "José_Aparicio_-_Landing_of_Ferdinand_VII_in_El_Puerto_de_Santa_María_-_Google_Art_Project.jpg" },
    "guayaquil":        { img: "collignon-guayaquil.jpg", obra: "Entrevista de Guayaquil", autor: "J. Collignon", fecha: "1843", lugar: "", licencia: "Dominio público", archivo: "Entrevista_de_Guayaquil.jpg" },
    "tovar-ayacucho":   { img: "tovar-ayacucho.jpg", obra: "Batalla de Ayacucho", autor: "Martín Tovar y Tovar", fecha: "s. XIX", lugar: "Galería de Arte Nacional (Caracas)", licencia: "Dominio público", archivo: "Batalla_de_Ayacucho_by_Martín_Tovar_y_Tovar_(1827_-_1902).jpg" },
    "lopez-mcristina":  { img: "lopez-maria-cristina.jpg", obra: "María Cristina de Borbón-Dos Sicilias, reina de España", autor: "Vicente López Portaña", fecha: "h. 1830", lugar: "Museo del Prado", licencia: "Dominio público", archivo: "María_Cristina_de_Borbón-Dos_Sicilias,_reina_de_España.jpg" },
    "gisbert-torrijos": { img: "gisbert-torrijos.jpg", obra: "Fusilamiento de Torrijos y sus compañeros en las playas de Málaga", autor: "Antonio Gisbert", fecha: "1888", lugar: "Museo del Prado", licencia: "Dominio público", archivo: "Fusilamiento_de_Torrijos_(Gisbert).jpg" },
    "lopez-carlos":     { img: "lopez-carlos-maria-isidro.jpg", obra: "El infante Carlos María Isidro de Borbón", autor: "Vicente López Portaña", fecha: "h. 1823", lugar: "Museo del Prado", licencia: "Dominio público", archivo: "El_infante_Carlos_María_Isidro_de_Borbón_(Museo_del_Prado).jpg" },
    "lopez-isabel-nina":{ img: "lopez-isabel-nina.jpg", obra: "La reina niña Isabel II", autor: "Vicente López Portaña", fecha: "h. 1836-1838", lugar: "Ministerio de Hacienda", licencia: "Dominio público", archivo: "La_reina_niña_Isabel_II_(1)_-_Vicente_López_Portaña.jpg" },
    "mendizabal":       { img: "gomez-mendizabal.jpg", obra: "Juan Álvarez Mendizábal", autor: "José Gómez", fecha: "", lugar: "", licencia: "Dominio público", archivo: "Juan_Álvarez_Mendizábal.jpg" },
    "constitucion-1837":{ img: "constitucion-1837.jpg", obra: "Constitución española de 1837 (documento)", autor: "", fecha: "1837", lugar: "", licencia: "Dominio público", archivo: "ConstitucionEspana1837.jpg" },
    "laurent-espartero":{ img: "laurent-espartero.jpg", obra: "Baldomero Espartero (fotografía)", autor: "J. Laurent", fecha: "h. 1861-1868", lugar: "Biblioteca Nacional de España", licencia: "CC BY 4.0", archivo: "Retrato_de_Baldomero_Espartero_-_J._Laurent.jpg" },
    "bombardeo-1842":   { img: "bombardeo-barcelona-1842.jpg", obra: "Bombardeo de Barcelona desde Montjuïc (1842)", autor: "Autor no indicado", fecha: "1842", lugar: "Biblioteca Nacional de España", licencia: "Dominio público", archivo: "BNE.Barcelona.Montjuic.Bombardeo.1842.jpg" },
    "madrazo-isabel":   { img: "madrazo-isabel-ii.jpg", obra: "Isabel II", autor: "Federico de Madrazo", fecha: "", lugar: "", licencia: "Dominio público", archivo: "Federico_de_Madrazo_y_Kuntz_-_Retrato_de_Isabel_II_-_Google_Art_Project.jpg" },
    "madrazo-isabel-bde":{ img: "madrazo-isabel-ii-bde.jpg", obra: "Isabel II de España", autor: "Federico de Madrazo", fecha: "s. XIX", lugar: "Banco de España", licencia: "Dominio público", archivo: "Isabel_II_de_España,_de_Federico_Madrazo_(Banco_de_España).jpg" },
    "lopez-narvaez":    { img: "lopez-narvaez.jpg", obra: "El capitán general Ramón María Narváez", autor: "Vicente López Portaña", fecha: "1849", lugar: "Museo de Bellas Artes de Valencia", licencia: "Dominio público", archivo: "Ramon_Maria_Narvaez.jpg" },
    "odonnell":         { img: "odonnell.jpg", obra: "Leopoldo O'Donnell", autor: "Autor desconocido", fecha: "s. XIX", lugar: "Museo del Ejército (Toledo)", licencia: "Dominio público", archivo: "Leopoldo_O'Donnell_y_Jorris.jpg" },
    "pirala-odonnell":  { img: "pirala-odonnell.jpg", obra: "Leopoldo O'Donnell (litografía)", autor: "Antonio Pirala (obra)", fecha: "1889", lugar: "", licencia: "Dominio público", archivo: "Leopoldo_ODonnell.jpg" },
    "lucas-1854":       { img: "lucas-revolucion-1854.jpg", obra: "Episodio de la revolución de 1854 en la Puerta del Sol", autor: "Eugenio Lucas Velázquez", fecha: "h. 1855", lugar: "Museo de Historia de Madrid", licencia: "Dominio público", archivo: "Episodio_de_la_revolución_de_1854_en_la_Puerta_del_Sol_(cropped).JPG" },
    "nin-madoz":        { img: "nin-madoz.jpg", obra: "Pascual Madoz", autor: "José Nin y Tudó", fecha: "1873", lugar: "Congreso de los Diputados", licencia: "Dominio público", archivo: "Pascual_Madoz,_de_José_Nin_y_Tudó_(1873),_Congreso_de_los_Diputados_(2).jpg" }
  },

  cartas: [

    /* ==================== REINADO DE CARLOS IV ==================== */
    {
      id: "trafalgar", titulo: "Batalla de Trafalgar", tipo: "guerra", nivel: "basico",
      desde: "1805", fechaTexto: "1805", etapa: "carlos4",
      pista: "España, aliada de la Francia de Napoleón, pierde su armada frente al Reino Unido.",
      explicacion: "Fue la consecuencia de la subordinación a Francia. Afectó profundamente al comercio (bajaron los ingresos) y provocó un gran malestar social contra Carlos IV y Godoy.",
      fuente: "B3, ap. 3; PPT, diap. 3", img: "mayer-trafalgar"
    },
    {
      id: "fontainebleau", titulo: "Tratado de Fontainebleau", tipo: "tratado", nivel: "basico",
      desde: "1807", fechaTexto: "1807", etapa: "carlos4",
      pista: "Godoy y Napoleón acuerdan invadir juntos Portugal.",
      explicacion: "Napoleón utilizó el tratado para ocupar la Península: las tropas francesas entraron en España amparadas por él.",
      fuente: "B3, ap. 3; PPT, diap. 3 y 4", img: "goya-godoy"
    },
    {
      id: "escorial", titulo: "Conspiración de El Escorial", tipo: "clave", nivel: "extremo",
      desde: "1807-10-27", fechaTexto: "27 de octubre de 1807", etapa: "carlos4",
      pista: "Se descubre un plan del príncipe Fernando para destronar a su padre.",
      explicacion: "Fernando delató a sus cómplices y pidió perdón. Fue el primer aviso de la crisis de la monarquía.",
      fuente: "T1-5, Tema 3, diap. 8–25", img: "goya-fernando-ecuestre"
    },
    {
      id: "aranjuez", titulo: "Motín de Aranjuez", tipo: "clave", nivel: "basico",
      desde: "1808-03-17", hasta: "1808-03-19", fechaTexto: "17-19 de marzo de 1808", etapa: "carlos4",
      pista: "Los partidarios de Fernando se amotinan contra Godoy.",
      explicacion: "Godoy quería trasladar la Corte a Sevilla. Tras el motín, Carlos IV abdicó en su hijo, Fernando VII.",
      fuente: "B3, ap. 3; PPT, diap. 3; T1-5, Tema 3, diap. 8–25", img: "goya-familia"
    },

    /* ==================== GUERRA DE LA INDEPENDENCIA ==================== */
    {
      id: "dos-mayo", titulo: "Levantamiento del 2 de mayo en Madrid", tipo: "clave", nivel: "basico",
      desde: "1808-05-02", fechaTexto: "2 de mayo de 1808", etapa: "guerra",
      pista: "El pueblo de Madrid se subleva contra la ocupación francesa.",
      explicacion: "La insurrección fue duramente reprimida, pero las revueltas continuaron por todo el país: empezaba la Guerra de la Independencia (1808-1814).",
      fuente: "B3, ap. 3; PPT, diap. 4", img: "goya-dos-mayo"
    },
    {
      id: "tres-mayo", titulo: "Los fusilamientos del 3 de mayo", tipo: "clave", nivel: "extremo",
      desde: "1808-05-03", fechaTexto: "3 de mayo de 1808", etapa: "guerra",
      pista: "Las tropas francesas fusilan a los madrileños sublevados.",
      explicacion: "Fue la represión del levantamiento del día anterior. Goya lo pintó en 1814, cuando el ejército de Napoleón ya había sido expulsado.",
      fuente: "B3, ap. 3; PPT, diap. 1; T1-5, Tema 3, diap. 8–25", img: "goya-tres-mayo"
    },
    {
      id: "bayona", titulo: "Abdicaciones de Bayona", tipo: "clave", nivel: "normal",
      desde: "1808-05", fechaTexto: "Mayo de 1808", etapa: "guerra",
      pista: "Carlos IV y Fernando VII renuncian a la Corona ante Napoleón.",
      explicacion: "Napoleón cedió la Corona de España a su hermano José Bonaparte, José I.",
      fuente: "PPT, diap. 4; B3, ap. 3; T1-5, Tema 3, diap. 8–25", img: "lefevre-jose"
    },
    {
      id: "estatuto-bayona", titulo: "Estatuto de Bayona", tipo: "constitucion", nivel: "normal",
      desde: "1808", fechaTexto: "1808", etapa: "guerra",
      pista: "Nueva ley fundamental con algunos elementos liberales, bajo control francés.",
      explicacion: "Regulaba el poder de franceses y afrancesados. Era una carta otorgada: no nacía de la soberanía nacional, sino del control del rey José y, sobre todo, de Napoleón.",
      fuente: "PPT, diap. 4; T1-5, Tema 3, diap. 57–61", img: "david-napoleon"
    },
    {
      id: "bruc", titulo: "Batallas del Bruc", tipo: "guerra", nivel: "normal",
      desde: "1808-06", hasta: "1808-11", fechaTexto: "Entre junio y noviembre de 1808", etapa: "guerra",
      pista: "El somatén catalán derrota a los franceses y corta su avance hacia Aragón.",
      explicacion: "Fue uno de los primeros éxitos de la resistencia, en la primera fase de la guerra (junio-noviembre de 1808).",
      fuente: "LIB, fases de la guerra; PPT, diap. 4", img: "bruc"
    },
    {
      id: "bailen", titulo: "Batalla de Bailén", tipo: "guerra", nivel: "basico",
      desde: "1808-07-19", fechaTexto: "19 de julio de 1808", etapa: "guerra",
      pista: "Un ejército organizado por la Junta de Sevilla vence a los franceses.",
      explicacion: "Las tropas napoleónicas tuvieron que replegarse al norte del Ebro y José I abandonó Madrid. Napoleón decidió intervenir en persona.",
      fuente: "LIB, fases de la guerra; PPT, diap. 4; T1-5, Tema 3, diap. 46–56 (fecha)", img: "casado-bailen"
    },
    {
      id: "cortes-cadiz", titulo: "Se reúnen las Cortes de Cádiz", tipo: "clave", nivel: "basico",
      desde: "1810-09", fechaTexto: "Septiembre de 1810", etapa: "guerra",
      pista: "Unas Cortes se proclaman depositarias de la soberanía nacional.",
      explicacion: "Las reunió la Junta de Regencia. Se autoconstituyeron en Asamblea Constituyente para eliminar las estructuras del Antiguo Régimen.",
      fuente: "PPT, diap. 5; B3, ap. 3; T1-5, Tema 4, diap. 2–13 (mes)", img: "casado-cortes"
    },
    {
      id: "constitucion-1812", titulo: "Constitución de Cádiz («La Pepa»)", tipo: "constitucion", nivel: "basico",
      desde: "1812-03-19", fechaTexto: "19 de marzo de 1812", etapa: "guerra",
      pista: "Primera Constitución liberal española.",
      explicacion: "Soberanía nacional, división de poderes y monarquía constitucional, con la católica como única religión. En el cuadro de Goya, el óvalo llegó a mostrar la palabra «Constitución».",
      fuente: "B3, ap. 3; PPT, diap. 5; T1-5, Tema 3, diap. 57–61, y Tema 4, diap. 16–34", img: "goya-alegoria"
    },
    {
      id: "rusia-wellington", titulo: "Napoleón marcha a Rusia; ofensiva de Wellington", tipo: "guerra", nivel: "normal",
      desde: "1812", fechaTexto: "1812", etapa: "guerra",
      pista: "Bajan las tropas francesas en la Península y los aliados pasan al ataque.",
      explicacion: "La ofensiva aliada, al mando del británico Wellington, fue decisiva: expulsó al ejército napoleónico y a José Bonaparte.",
      fuente: "LIB, fases de la guerra; PPT, diap. 4", img: "goya-wellington"
    },
    {
      id: "valencay", titulo: "Tratado de Valençay", tipo: "tratado", nivel: "basico",
      desde: "1813-12", fechaTexto: "Finales (diciembre) de 1813", etapa: "guerra",
      pista: "Napoleón devuelve el trono a Fernando VII.",
      explicacion: "Lo firmó por las dificultades en el frente ruso. Fernando VII, «el Deseado», regresó a España en marzo de 1814.",
      fuente: "LIB, fases de la guerra; B3; PPT, diap. 4 y 6; T1-5, Tema 3, diap. 46–56 (mes)", img: "goya-fernando-ecuestre"
    },

    /* ==================== RESTAURACIÓN ABSOLUTISTA ==================== */
    {
      id: "regreso-fernando", titulo: "Fernando VII entra en España", tipo: "clave", nivel: "normal",
      desde: "1814-03-22", fechaTexto: "22 de marzo de 1814", etapa: "restauracion",
      pista: "El rey vuelve con un gran apoyo popular.",
      explicacion: "Su vuelta significaba el fin de la guerra y la esperanza de recuperar el país. La mayoría de la población seguía confiando en el absolutismo.",
      fuente: "B3 (fecha); LIB, fases de la guerra (marzo de 1814)", img: "lopez-fernando"
    },
    {
      id: "persas", titulo: "Manifiesto de los Persas", tipo: "manifiesto", nivel: "basico",
      desde: "1814-04-12", fechaTexto: "12 de abril de 1814", etapa: "restauracion",
      pista: "Diputados absolutistas piden al rey volver al Antiguo Régimen.",
      explicacion: "Con este apoyo, Fernando VII se impuso como rey absoluto: disolvió las Cortes, derogó la Constitución de 1812 y persiguió a los liberales.",
      fuente: "B3; PPT, diap. 6; T1-5, Tema 5, diap. 2–6 (fecha)", img: "goya-fernando-manto"
    },
    {
      id: "decreto-1814", titulo: "Decreto que anula la obra de Cádiz", tipo: "constitucion", nivel: "normal",
      desde: "1814-05-04", fechaTexto: "4 de mayo de 1814", etapa: "restauracion",
      pista: "El rey declara nula la Constitución y los decretos de Cádiz.",
      explicacion: "Los anulaba «como si no hubiesen pasado jamás esos actos». En esta etapa se restablecieron además los señoríos y la Inquisición.",
      fuente: "T1-5, Tema 5, diap. 2–6; PPT, diap. 6", img: "goya-filipinas"
    },
    {
      id: "espoz-mina", titulo: "Pronunciamiento de Espoz y Mina", tipo: "pronunciamiento", nivel: "normal",
      desde: "1814", fechaTexto: "1814", etapa: "restauracion",
      pista: "Un antiguo guerrillero intenta, sin éxito, derribar el absolutismo.",
      explicacion: "Tras la guerra, los cabecillas de las guerrillas entraron en el ejército y este se politizó: fue el primero de varios pronunciamientos liberales fallidos.",
      fuente: "T1-5, Tema 5, diap. 7–24 y 32–33; PPT, diap. 6", img: "espoz-mina"
    },
    {
      id: "porlier", titulo: "Pronunciamiento de Díaz Porlier", tipo: "pronunciamiento", nivel: "extremo",
      desde: "1815", fechaTexto: "1815", etapa: "restauracion",
      pista: "Otro militar liberal se subleva contra Fernando VII y fracasa.",
      explicacion: "Fue uno de los pronunciamientos fallidos del Sexenio absolutista, entre el de Espoz y Mina (1814) y el de Lacy (1817).",
      fuente: "T1-5, Tema 5, diap. 7–24 y 32–33", img: "porlier"
    },
    {
      id: "lacy", titulo: "Pronunciamiento de Lacy", tipo: "pronunciamiento", nivel: "extremo",
      desde: "1817", fechaTexto: "1817", etapa: "restauracion",
      pista: "Un nuevo pronunciamiento liberal contra Fernando VII que también fracasa.",
      explicacion: "Fracasó como los de Espoz y Mina (1814) y Díaz Porlier (1815). El siguiente, en 1820, sí triunfaría.",
      fuente: "T1-5, Tema 5, diap. 7–24 y 32–33", img: "bejar-lacy"
    },

    /* ==================== TRIENIO LIBERAL ==================== */
    {
      id: "riego", titulo: "Pronunciamiento de Riego", tipo: "pronunciamiento", nivel: "basico",
      desde: "1820-01-01", fechaTexto: "1 de enero de 1820", etapa: "trienio",
      pista: "Riego y Quiroga proclaman la Constitución de 1812 en Cabezas de San Juan.",
      explicacion: "Lo apoyó el ejército que debía ir a sofocar las rebeliones de América. Fernando VII tuvo que jurar la Constitución: empieza el Trienio Liberal (1820-1823).",
      fuente: "B3; PPT, diap. 7; LIB, ap. 5.2; T1-5, Tema 5, diap. 34–46 (fecha)", img: "riego"
    },
    {
      id: "jura-1820", titulo: "Fernando VII jura la Constitución", tipo: "clave", nivel: "extremo",
      desde: "1820-03-09", fechaTexto: "9 de marzo de 1820", etapa: "trienio",
      pista: "«Marchemos francamente, y yo el primero, por la senda constitucional».",
      explicacion: "El rey se vio obligado a jurarla y a convocar Cortes. Se recuperó parte de la legislación de Cádiz y se creó la Milicia Nacional.",
      fuente: "T1-5, Tema 5, diap. 34–46; B3", img: "lopez-fernando"
    },
    {
      id: "cien-mil", titulo: "Los Cien Mil Hijos de San Luis", tipo: "guerra", nivel: "basico",
      desde: "1823", fechaTexto: "1823", etapa: "trienio",
      pista: "Un ejército francés, enviado por las potencias absolutistas, invade España.",
      explicacion: "Derrocó el régimen liberal y restauró el absolutismo de Fernando VII. Los mandaba el duque de Angulema.",
      fuente: "B3; PPT, diap. 7; T1-5, Tema 5, diap. 34–46", img: "lawrence-angulema"
    },
    {
      id: "decreto-1823", titulo: "Fernando VII anula la obra del Trienio", tipo: "constitucion", nivel: "extremo",
      desde: "1823-10-01", fechaTexto: "1 de octubre de 1823", etapa: "ominosa",
      pista: "Un decreto borra todo lo aprobado desde el 7 de marzo de 1820.",
      explicacion: "Con él empezó la Década Ominosa (1823-1833), marcada por la represión de los liberales.",
      fuente: "T1-5, Tema 5, diap. 46–49", img: "aparicio"
    },

    /* ==================== EMANCIPACIÓN DE AMÉRICA ==================== */
    {
      id: "guayaquil", titulo: "Entrevista de Guayaquil", tipo: "clave", nivel: "extremo",
      desde: "1822", fechaTexto: "1822", etapa: "america",
      pista: "San Martín y Bolívar se reúnen y pactan quién culminará la independencia.",
      explicacion: "San Martín se retiró y cedió el liderazgo a Bolívar, que culminó el proceso.",
      fuente: "LIB, ap. 5.2", img: "guayaquil"
    },
    {
      id: "ayacucho", titulo: "Batalla de Ayacucho", tipo: "guerra", nivel: "basico",
      desde: "1824-12-09", fechaTexto: "9 de diciembre de 1824", etapa: "america",
      pista: "Sucre, lugarteniente de Bolívar, derrota al ejército realista.",
      explicacion: "Fue el final del proceso emancipador: a España solo le quedaron Cuba, Puerto Rico y Filipinas, y quedó como potencia de segundo orden.",
      fuente: "LIB, ap. 5.2 y 5.3; B3; PPT, diap. 9; T1-5, Tema 5, diap. 25–31 (fecha)", img: "tovar-ayacucho"
    },

    /* ==================== DÉCADA OMINOSA ==================== */
    {
      id: "pragmatica", titulo: "Pragmática Sanción", tipo: "constitucion", nivel: "basico",
      desde: "1830", fechaTexto: "1830", etapa: "ominosa",
      pista: "Tras nacer su hija Isabel, el rey deroga la Ley Sálica.",
      explicacion: "Permitía reinar a las mujeres y dejaba fuera a Carlos María Isidro, hermano del rey. Fue el origen del pleito dinástico y del carlismo.",
      fuente: "B3; PPT, diap. 8", img: "lopez-mcristina"
    },
    {
      id: "torrijos", titulo: "Fusilamiento de Torrijos", tipo: "clave", nivel: "normal",
      desde: "1831", fechaTexto: "1831", etapa: "ominosa",
      pista: "Un liberal y sus compañeros son fusilados en las playas de Málaga.",
      explicacion: "Muestra la dureza de la represión de la Década Ominosa, como las ejecuciones de Riego (1823) y Mariana Pineda (1831).",
      fuente: "PPT, diap. 8; B3; T1-5, Tema 5, diap. 46–49 y 52", img: "gisbert-torrijos"
    },
    {
      id: "granja-1832", titulo: "Sucesos de La Granja", tipo: "clave", nivel: "extremo",
      desde: "1832", fechaTexto: "1832", etapa: "ominosa",
      pista: "Con el rey enfermo, los ultras logran que derogue la Pragmática Sanción.",
      explicacion: "Al recuperarse, Fernando VII la restableció. En el cuadro de Goya aparece, aún niño, Carlos María Isidro, el candidato de los ultras.",
      fuente: "T1-5, Tema 5, diap. 56–70", img: "goya-familia"
    },
    {
      id: "muerte-fernando", titulo: "Muere Fernando VII: Primera Guerra Carlista", tipo: "guerra", nivel: "basico",
      desde: "1833-09", fechaTexto: "Septiembre de 1833", etapa: "mcristina",
      pista: "Carlistas e isabelinos se enfrentan por la sucesión.",
      explicacion: "Los carlistas apoyaban a Carlos María Isidro; los isabelinos, a Isabel II, con su madre María Cristina como regente. Esta guerra supuso el final definitivo del absolutismo.",
      fuente: "B3; B4; T1-5, Tema 5, diap. 56–70 (mes)", img: "lopez-carlos"
    },

    /* ==================== REGENCIAS (1833-1843) ==================== */
    {
      id: "estatuto-real", titulo: "Estatuto Real", tipo: "constitucion", nivel: "basico",
      desde: "1834", fechaTexto: "1834", etapa: "mcristina",
      pista: "Carta otorgada con unas Cortes de dos cámaras solo consultivas.",
      explicacion: "Una cámara la designaba la reina con carácter vitalicio; la otra se elegía por sufragio censitario. El poder legislativo seguía en manos de la Corona.",
      fuente: "B4", img: "lopez-isabel-nina"
    },
    {
      id: "mendizabal", titulo: "Desamortización de Mendizábal", tipo: "constitucion", nivel: "normal",
      desde: "1836", fechaTexto: "1836", etapa: "mcristina",
      pista: "Se subastan los bienes eclesiásticos.",
      explicacion: "Mendizábal también organizó la Milicia Nacional, creó las Diputaciones y suprimió la Mesta. Quería crear nuevos propietarios que apoyaran la revolución liberal, pero no lo consiguió.",
      fuente: "B4", img: "mendizabal"
    },
    {
      id: "sargentos-granja", titulo: "Motín de los sargentos de La Granja", tipo: "pronunciamiento", nivel: "normal",
      desde: "1836", fechaTexto: "1836", etapa: "mcristina",
      pista: "Unos sargentos obligan a la regente a restablecer la Constitución de 1812.",
      explicacion: "A raíz de ello, los progresistas elaboraron la Constitución de 1837.",
      fuente: "B4", img: "lopez-mcristina"
    },
    {
      id: "constitucion-1837", titulo: "Constitución de 1837", tipo: "constitucion", nivel: "basico",
      desde: "1837", fechaTexto: "1837", etapa: "mcristina",
      pista: "Los progresistas recuperan la monarquía constitucional.",
      explicacion: "Establecía la soberanía compartida del rey y las Cortes.",
      fuente: "B4", img: "constitucion-1837"
    },
    {
      id: "espartero", titulo: "Espartero, regente", tipo: "clave", nivel: "normal",
      desde: "1840", fechaTexto: "1840", etapa: "espartero",
      pista: "Ante las sublevaciones, la regente busca a un general prestigioso y progresista.",
      explicacion: "Espartero era muy popular, pero perdió apoyos enseguida: los progresistas criticaron su forma militar de gobernar y los moderados le negaron su apoyo.",
      fuente: "B4", img: "laurent-espartero"
    },
    {
      id: "bombardeo-barcelona", titulo: "Bombardeo de Barcelona", tipo: "guerra", nivel: "extremo",
      desde: "1842", fechaTexto: "1842", etapa: "espartero",
      pista: "Espartero reprime con dureza un levantamiento en Barcelona.",
      explicacion: "Su política librecambista ya le había enfrentado a la burguesía industrial catalana. El bombardeo aumentó su descrédito.",
      fuente: "B4", img: "bombardeo-1842"
    },
    {
      id: "isabel-reina", titulo: "Isabel II, proclamada reina con 13 años", tipo: "clave", nivel: "basico",
      desde: "1843", fechaTexto: "1843", etapa: "espartero",
      pista: "Acaba la etapa de las regencias.",
      explicacion: "Una conspiración había llevado al gobierno a un militar moderado, Narváez. El reinado de Isabel II estuvo marcado por agitaciones sociales, escándalos e inestabilidad.",
      fuente: "B4", img: "madrazo-isabel"
    },

    /* ==================== DÉCADA MODERADA ==================== */
    {
      id: "decada-moderada", titulo: "Narváez inicia la Década Moderada", tipo: "clave", nivel: "basico",
      desde: "1844", fechaTexto: "1844", etapa: "moderada",
      pista: "Un general moderado establece un régimen autoritario y estable.",
      explicacion: "Narváez fue la principal figura de la Década Moderada (1844-1854). Se reorganizaron la Administración, la enseñanza y la Hacienda, y se creó la Guardia Civil.",
      fuente: "B4", img: "lopez-narvaez"
    },
    {
      id: "constitucion-1845", titulo: "Constitución de 1845", tipo: "constitucion", nivel: "basico",
      desde: "1845", fechaTexto: "1845", etapa: "moderada",
      pista: "Una Constitución de liberalismo moderado.",
      explicacion: "Suprimió la soberanía nacional, redujo la participación electoral y limitó la libertad de expresión y de reunión. Solo el monarca podía convocar las Cortes.",
      fuente: "B4", img: "madrazo-isabel-bde"
    },
    {
      id: "concordato", titulo: "Concordato de 1851", tipo: "tratado", nivel: "normal",
      desde: "1851", fechaTexto: "1851", etapa: "moderada",
      pista: "Se restablecen las relaciones con la Iglesia.",
      explicacion: "Los moderados quisieron cerrar el desacuerdo con la Iglesia que había creado la desamortización.",
      fuente: "B4", img: "madrazo-isabel"
    },

    /* ==================== BIENIO PROGRESISTA ==================== */
    {
      id: "vicalvarada", titulo: "La Vicalvarada", tipo: "pronunciamiento", nivel: "basico",
      desde: "1854", fechaTexto: "1854", etapa: "bienio",
      pista: "Dulce, O'Donnell y Ros de Olano se pronuncian en Vicálvaro.",
      explicacion: "Los progresistas volvieron a usar el pronunciamiento militar para llegar al poder.",
      fuente: "B4", img: "odonnell"
    },
    {
      id: "manzanares", titulo: "Manifiesto de Manzanares", tipo: "manifiesto", nivel: "basico",
      desde: "1854", fechaTexto: "1854", etapa: "bienio",
      pista: "Los sublevados de Vicálvaro publican un texto con propuestas progresistas.",
      explicacion: "Después, los levantamientos populares obligaron a la reina a llamar a Espartero, que compartió el poder con O'Donnell.",
      fuente: "B4", img: "pirala-odonnell"
    },
    {
      id: "revolucion-1854", titulo: "Levantamientos populares: vuelve Espartero", tipo: "clave", nivel: "normal",
      desde: "1854", fechaTexto: "1854", etapa: "bienio",
      pista: "La reina recurre de nuevo a Espartero.",
      explicacion: "Espartero gobernó junto a O'Donnell durante el Bienio Progresista.",
      fuente: "B4", img: "lucas-1854"
    },
    {
      id: "madoz", titulo: "Desamortización de Madoz", tipo: "constitucion", nivel: "normal",
      desde: "1855", fechaTexto: "1855", etapa: "bienio",
      pista: "Una nueva ley pone a la venta el doble de bienes que la anterior.",
      explicacion: "Se nacionalizaron propiedades eclesiásticas y se vendieron bienes de uso y propiedad común.",
      fuente: "B4", img: "nin-madoz"
    },
    {
      id: "constitucion-1856", titulo: "Constitución de 1856 («non nata»)", tipo: "constitucion", nivel: "normal",
      desde: "1856", fechaTexto: "1856", etapa: "bienio",
      pista: "Una Constitución progresista que nunca llegó a entrar en vigor.",
      explicacion: "Proclamaba la soberanía nacional y ampliaba los derechos individuales. Después volvieron los moderados y O'Donnell restableció la Constitución de 1845.",
      fuente: "B4", img: "laurent-espartero"
    }
  ]
};
