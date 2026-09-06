export const ENCUESTA_100K_INTRO = {
  title: "Mi Punto de Partida",
  subtitle: "Manual de Negocio 100K",
  description:
    "Este es el único tab del manual que se llena a mano: con lo que respondas acá se genera todo lo demás. Tomate tu tiempo y contestá con historias y datos concretos, no con generalidades.",
};

export const FORM_SECTIONS_100K = [
  {
    id: "datos-basicos",
    title: "Datos Básicos",
    description: "Para ubicar tu contexto",
    fields: [
      { name: "nombre", label: "Tu nombre", type: "text", required: true },
      { name: "email", label: "Tu email", type: "text", required: true },
      { name: "negocioNicho", label: "Negocio / Nicho", type: "text", required: true, placeholder: "Tu nicho" },
      { name: "objetivo12Meses", label: "Objetivo en 12 meses", type: "textarea", required: true, placeholder: "Escribí tu meta" },
    ],
  },
  {
    id: "la-puerta",
    title: "1.1 La Puerta",
    description: "¿Ya tenés algo concreto que vender? (algo que si alguien te escribe hoy, le podés cobrar)",
    fields: [
      {
        name: "puerta",
        label: "¿Ya tenés algo concreto que vender?",
        type: "select",
        required: true,
        options: [
          { value: "si", label: "Sí → soy Puerta A" },
          { value: "no", label: "No → soy Puerta B" },
        ],
      },
    ],
  },
  {
    id: "mi-info",
    title: "1.2 Mi Info Actual / Mi Punto de Arranque",
    description: "La única diferencia entre las dos puertas es este punto. De acá en más se llena todo igual.",
    fields: [
      {
        name: "queVendesActualmente",
        label: "¿Qué vendés actualmente? (producto o servicio, con lo que incluye)",
        type: "textarea",
        required: true,
        showIf: (data: Record<string, any>) => data.puerta === "si",
      },
      {
        name: "aQuienLeVendes",
        label: "¿A quién le vendés? (tu cliente real de hoy, no el ideal)",
        type: "textarea",
        required: true,
        showIf: (data: Record<string, any>) => data.puerta === "si",
      },
      {
        name: "aQuePrecioVendes",
        label: "¿A qué precio vendés? (precio o rango, con la moneda)",
        type: "text",
        required: true,
        showIf: (data: Record<string, any>) => data.puerta === "si",
      },
      {
        name: "cuantoFacturasAlMes",
        label: "¿Cuánto facturás al mes? (cantidad aproximada)",
        type: "text",
        required: true,
        showIf: (data: Record<string, any>) => data.puerta === "si",
      },
      {
        name: "deDondeLleganClientes",
        label: "¿De dónde te llegan hoy los clientes? (recomendación, redes, DM, anuncios...)",
        type: "textarea",
        required: true,
        showIf: (data: Record<string, any>) => data.puerta === "si",
      },
      {
        name: "objecionMasEscuchas",
        label: "¿Qué objeción escuchás más antes de que te compren? (con sus palabras)",
        type: "textarea",
        required: true,
        showIf: (data: Record<string, any>) => data.puerta === "si",
      },
      {
        name: "queNoEstaFuncionando",
        label: "¿Qué no está funcionando? (sé honesto)",
        type: "textarea",
        required: true,
        showIf: (data: Record<string, any>) => data.puerta === "si",
      },
      {
        name: "queSabesHacer",
        label: "¿Qué sabés hacer que a otra persona le costaría?",
        type: "textarea",
        required: true,
        showIf: (data: Record<string, any>) => data.puerta === "no",
      },
      {
        name: "quePreguntanConocidos",
        label: "¿Qué te preguntan tus conocidos cuando necesitan ayuda?",
        type: "textarea",
        required: true,
        showIf: (data: Record<string, any>) => data.puerta === "no",
      },
      {
        name: "aQuienHasAyudado",
        label: "¿A quién has ayudado con esto, aunque haya sido gratis?",
        type: "textarea",
        required: true,
        showIf: (data: Record<string, any>) => data.puerta === "no",
      },
      {
        name: "queIntentasteAntes",
        label: "¿Qué intentaste antes que no funcionó, y por qué creés que fue?",
        type: "textarea",
        required: true,
        showIf: (data: Record<string, any>) => data.puerta === "no",
      },
      {
        name: "cuantoTiempoDedicas",
        label: "¿Cuánto tiempo real por semana podés dedicarle?",
        type: "text",
        required: true,
        showIf: (data: Record<string, any>) => data.puerta === "no",
      },
    ],
  },
  {
    id: "punto-cero",
    title: "1.3 Mi Punto Cero",
    fields: [
      {
        name: "categoriaVida",
        label: "Categoría de vida (elegí 1, máximo 2)",
        type: "text",
        required: true,
        placeholder: "Amor · Familia · Cuerpo y mente · Identidad · Trabajo · Dinero · Ocio · Espiritualidad y propósito",
      },
      {
        name: "monedaEntrada",
        label: "Moneda de entrada",
        type: "select",
        required: true,
        options: [
          { value: "experiencia", label: "Experiencia" },
          { value: "investigacion", label: "Investigación" },
          { value: "produccion", label: "Producción" },
          { value: "divulgacion", label: "Divulgación" },
          { value: "perspectiva-propia", label: "Perspectiva propia" },
        ],
      },
      {
        name: "rubro",
        label: "Rubro (el campo que te da vocabulario propio)",
        type: "text",
        required: true,
      },
      {
        name: "nicho",
        label: "Nicho (a quién y en qué momento exacto de su vida)",
        type: "textarea",
        required: true,
      },
    ],
  },
  {
    id: "paradigma",
    title: "1.4 Mi Paradigma Único",
    description: "Pasá el Taladro antes de escribir: preguntate «¿y cuál es la clave de eso?» tres veces seguidas.",
    fields: [
      {
        name: "consensoDeMiRubro",
        label: "Lo que TODOS dicen en tu rubro sobre este problema (el consenso que vas a matar)",
        type: "textarea",
        required: true,
      },
      {
        name: "loQueYoSostengo",
        label: "Lo que VOS sostenés («el problema no es X, es Y»)",
        type: "textarea",
        required: true,
      },
      {
        name: "comoLoLlamo",
        label: "Cómo lo llamás (2 o 3 palabras)",
        type: "text",
        required: true,
      },
      {
        name: "queSignificaEnConcreto",
        label: "Qué significa en concreto (3 características; cada una es además un video)",
        type: "textarea",
        required: true,
      },
    ],
  },
  {
    id: "mi-historia",
    title: "1.5 Mi Historia ⭐",
    description:
      "Esto se convierte en tu Post de Autoridad. Nadie te sigue por tu currículum: te sigue porque se ve a sí misma en tu «antes». Escribí ESCENAS, no cualidades.",
    fields: [
      {
        name: "cuandoEmpezo",
        label: "¿Cuándo empezó? (una fecha o un tiempo concreto: «hace 3 años», «en marzo de 2023»)",
        type: "text",
        required: true,
      },
      {
        name: "elFondo",
        label: "El fondo: ¿cómo era tu situación antes del cambio?",
        type: "textarea",
        required: true,
      },
      {
        name: "laEmocion",
        label: "La emoción que unía esos datos",
        type: "textarea",
        required: true,
      },
      {
        name: "elGiro",
        label: "El giro: ¿qué cambió?",
        type: "textarea",
        required: true,
      },
      {
        name: "laPrueba",
        label: "La prueba: el resultado concreto de hoy",
        type: "textarea",
        required: true,
      },
      {
        name: "laObjecionSinArgumento",
        label: "¿Qué objeción deja sin argumento el resultado que lograste?",
        type: "textarea",
        required: false,
      },
      {
        name: "loQueTodaviaCuesta",
        label: "Lo que todavía te cuesta (sé honesto)",
        type: "textarea",
        required: false,
      },
      {
        name: "laFraseParaOtro",
        label: "La frase que le dirías a quien está hoy donde vos estabas",
        type: "textarea",
        required: true,
      },
    ],
  },
  {
    id: "testimonios",
    title: "1.6 Mis Testimonios y Pruebas ⭐",
    description: "Si no tenés producto o servicio todavía, contá lo que tengas de prueba igual (aunque sea informal) o dejalo en blanco.",
    fields: [
      {
        name: "testimoniosYPruebas",
        label: "Tus pruebas: antes/después, a quién ayudaste (aunque haya sido gratis), mensajes de agradecimiento",
        type: "textarea",
        required: false,
      },
    ],
  },
  {
    id: "presencia-digital",
    title: "1.7 Presencia Digital",
    fields: [
      { name: "instagram", label: "Instagram (usuario y seguidores)", type: "text", required: false },
      { name: "tiktok", label: "TikTok (usuario y seguidores)", type: "text", required: false },
      { name: "youtube", label: "YouTube (usuario y seguidores)", type: "text", required: false },
      { name: "bioActual", label: "Qué dice tu bio hoy, literal", type: "textarea", required: false },
      {
        name: "fotoPerfilActual",
        label: "Sobre tu foto de perfil de hoy: ¿cumple con cara visible, mirada a cámara, sonriendo, buena luz y fondo limpio? ¿Qué le falta?",
        type: "textarea",
        required: false,
      },
    ],
  },
  {
    id: "objetivo-personal",
    title: "1.8 Objetivo Personal",
    fields: [
      {
        name: "queQuieresLograr",
        label: "¿Qué querés lograr al terminar el programa?",
        type: "textarea",
        required: true,
      },
      {
        name: "comoSabrasQueLoLograste",
        label: "¿Cómo sabrás que lo lograste?",
        type: "textarea",
        required: true,
      },
      {
        name: "observaciones",
        label: "¿Algo más que quieras agregar?",
        type: "textarea",
        required: false,
      },
    ],
  },
];
