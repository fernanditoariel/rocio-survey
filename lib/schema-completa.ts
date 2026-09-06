import { z } from "zod";

export const encuestaCompletaSchema = z.object({
  // ===== Datos básicos =====
  nombre: z.string().min(1, "El nombre es requerido"),
  edad: z.string().min(1, "La edad es requerida"),
  ubicacion: z.string().min(1, "La ubicación es requerida"),
  experiencia: z.string().min(1, "Describí tu experiencia previa"),

  // ===== Sobre el negocio =====
  tipoNegocio: z.string().min(1, "Seleccioná el tipo de negocio"),
  modeloNegocio: z.string().min(1, "Describí tu modelo de negocio"),
  targetMarket: z.string().min(1, "Describí tu target market"),
  barreras: z.string().min(1, "Describí las barreras que ves"),

  // ===== Sobre la solución web =====
  tipoWeb: z.string().min(1, "Seleccioná el tipo de web"),
  funcionalidades: z.string().min(1, "Describí las funcionalidades clave"),
  presupuesto: z.string().min(1, "Seleccioná un rango de presupuesto"),
  timeline: z.string().min(1, "Seleccioná el timeline deseado"),
  ciudades: z.string().optional(),
  estrategiaMarketing: z.string().optional(),
  redesSociales: z.string().optional(),
  gestorContenido: z.string().optional(),

  // ===== Expectativas =====
  motivacion: z.string().min(1, "Describí tu motivación"),
  comunicacion: z.string().min(1, "¿Cómo prefieren comunicarse?"),
  observaciones: z.string().optional(),

  // ===== Punto de partida: La Puerta =====
  existeAlgoParaVender: z.string().min(1, "Elegí una opción"),
  queSeVende: z.string().optional(),
  aQuienSeVende: z.string().optional(),
  precioComision: z.string().optional(),
  facturacionMensual: z.string().optional(),
  origenClientesHoy: z.string().optional(),
  objecionMasFrecuente: z.string().optional(),
  queNoFunciona: z.string().optional(),
  queSabeHacerRocio: z.string().optional(),
  quePreguntanHoy: z.string().optional(),
  aQuienAyudoInformalmente: z.string().optional(),
  queIntentoAntes: z.string().optional(),
  tiempoDisponibleSemana: z.string().optional(),

  // ===== Punto cero =====
  categoriaNegocio: z.string().min(1, "Contanos la categoría de tu negocio"),
  monedaEntrada: z.string().min(1, "Elegí una opción"),
  rubro: z.string().min(1, "Contanos el rubro"),
  nicho: z.string().min(1, "Describí tu nicho"),

  // ===== Paradigma único =====
  consensoARomper: z.string().min(1, "Contanos qué hace todo el mundo hoy"),
  tuPostura: z.string().min(1, "Completá tu postura"),
  nombreMarca: z.string().min(1, "Decinos el nombre de tu marca"),
  queSignificaEnConcreto: z.string().min(1, "Contanos qué significa en concreto"),

  // ===== La historia =====
  cuandoEmpezo: z.string().min(1, "Contanos cuándo empezó"),
  elFondo: z.string().min(1, "Contanos el fondo"),
  elGiro: z.string().min(1, "Contanos el giro"),
  laPrueba: z.string().min(1, "Contanos la prueba"),
  objecionQueDesarma: z.string().min(1, "Contanos qué objeción desarma"),
  loQueTodaviaCuesta: z.string().min(1, "Contanos qué te cuesta todavía"),
  fraseParaElQueDuda: z.string().min(1, "Contanos esa frase"),

  // ===== Testimonios =====
  primerAntesDespues: z.string().optional(),

  // ===== Presencia digital =====
  redesExistentes: z.string().optional(),
  bioActual: z.string().optional(),
  fotoPerfilCumple: z.string().optional(),

  // ===== Objetivo medible =====
  comoSeVaASaber: z.string().min(1, "Contanos cómo vas a medir el éxito"),

  // ===== Diagnóstico del negocio =====
  negocioEnUnaFrase: z.string().min(1, "Resumí tu negocio en una frase"),
  diferenciacionCorta: z.string().min(1, "Contanos tu diferenciación"),
  cuelloDeBotella: z.string().min(1, "Elegí una opción"),
  queNoVaAHacer: z.string().min(1, "Contanos qué no vas a hacer"),

  // ===== Competencia =====
  competidoresConcretos: z.string().min(1, "Nombrá competidores concretos"),
  queHacenEllos: z.string().min(1, "Contanos qué hacen ellos"),
  quePodesHacerVos: z.string().min(1, "Contanos qué podés hacer vos"),

  // ===== Oportunidades =====
  oportunidadesIdentificadas: z.string().min(1, "Contanos las oportunidades"),

  // ===== Avatar propietario =====
  propietarioEscenaDelDia: z.string().min(1, "Describí a tu propietario ideal"),
  propietarioDolores: z.string().min(1, "Contanos sus dolores"),
  propietarioIntentoAntes: z.string().min(1, "Contanos qué intentó antes"),
  propietarioObjeciones: z.string().min(1, "Contanos sus objeciones"),
  propietarioFraseQueLoConvence: z.string().min(1, "Contanos esa frase"),

  // ===== Avatar huésped =====
  huespedEscenaDelDia: z.string().min(1, "Describí a tu huésped ideal"),
  huespedDolores: z.string().min(1, "Contanos sus dolores"),
  huespedIntentoAntes: z.string().min(1, "Contanos qué intentó antes"),
  huespedObjeciones: z.string().min(1, "Contanos sus objeciones"),
  huespedFraseQueLoConvence: z.string().min(1, "Contanos esa frase"),

  // ===== Lenguaje =====
  frasesPropietarios: z.string().min(1, "Contanos esas frases"),
  frasesHuespedes: z.string().min(1, "Contanos esas frases"),
  contenidoQueConsumen: z.string().min(1, "Contanos qué contenido consumen"),

  // ===== Oferta al propietario =====
  promesaPropietario: z.string().min(1, "Contanos la promesa"),
  incluyeOfertaPropietario: z.string().min(1, "Contanos qué incluye"),
  porQueIncomparablePropietario: z.string().min(1, "Contanos por qué es incomparable"),
  modeloComisionPropietario: z.string().min(1, "Contanos el modelo de comisión"),

  // ===== Oferta al huésped =====
  promesaHuesped: z.string().min(1, "Contanos la promesa"),
  incluyeOfertaHuesped: z.string().min(1, "Contanos qué incluye"),
  precioCondicionesHuesped: z.string().min(1, "Contanos precio y condiciones"),
});

export type EncuestaCompletaFormData = z.infer<typeof encuestaCompletaSchema>;
