export const SURVEY_SECTIONS = {
  intro: {
    title: "Encuesta de Descubrimiento",
    subtitle: "Entrevista para conocer mejor tu proyecto de marketplace de propiedades",
    description: "Fernando necesita entender bien qué necesitás para poder ofrecerte la mejor propuesta. Esta encuesta te tomará 10-15 minutos.",
  },
};

export const FORM_SECTIONS = [
  {
    id: "datos-basicos",
    title: "Datos Básicos",
    description: "Empecemos con información sobre vos",
    fields: [
      { name: "nombre", label: "¿Cuál es tu nombre?", type: "text", required: true },
      { name: "edad", label: "¿Cuántos años tenés?", type: "text", required: true },
      { name: "ubicacion", label: "¿Dónde vivís actualmente?", type: "text", required: true },
      {
        name: "experiencia",
        label: "Contame tu experiencia previa. ¿Qué trabajos o proyectos relevantes has tenido?",
        type: "textarea",
        required: true,
        placeholder: "Ej: En Bariloche gestioné casas de alquiler...",
      },
    ],
  },
  {
    id: "negocio",
    title: "Sobre Tu Negocio",
    description: "Entendamos mejor la idea que tenés",
    fields: [
      {
        name: "tipoNegocio",
        label: "¿Qué tipo de negocio querés montar?",
        type: "select",
        required: true,
        options: [
          { value: "marketplace-propiedades", label: "Marketplace de propiedades en alquiler" },
          { value: "plataforma-gestion", label: "Plataforma de gestión de propiedades" },
          { value: "agencia-digital", label: "Agencia digital de alquileres" },
          { value: "otro", label: "Otro (especificá abajo)" },
        ],
      },
      {
        name: "modeloNegocio",
        label: "¿Cuál sería tu modelo de negocio? (Cómo ganarías dinero, comisiones, etc.)",
        type: "textarea",
        required: true,
        placeholder: "Ej: Cobrar comisión por cada reserva, suscripción mensual para anfitriones, etc.",
      },
      {
        name: "targetMarket",
        label: "¿Quiénes serían tus clientes? ¿Propietarios, inquilinos, ambos?",
        type: "textarea",
        required: true,
        placeholder: "Ej: Propietarios en Punta Alta que quieren alquilar temporada...",
      },
      {
        name: "barreras",
        label: "¿Cuáles ves que son las principales barreras o desafíos para llevar adelante este negocio?",
        type: "textarea",
        required: true,
        placeholder: "Ej: No tengo propiedades propias, desconocimiento legal, competencia, etc.",
      },
    ],
  },
  {
    id: "solucion-web",
    title: "Sobre la Solución Web",
    description: "Entender qué necesitás de la plataforma digital",
    fields: [
      {
        name: "tipoWeb",
        label: "¿Qué tipo de web buscás?",
        type: "select",
        required: true,
        options: [
          { value: "landing", label: "Landing page (solo presentación)" },
          { value: "marketplace", label: "Marketplace completo (listados + reservas)" },
          { value: "plataforma-gestion", label: "Plataforma de gestión interna" },
          { value: "hibrido", label: "Combinación (landing + funcionalidades básicas)" },
        ],
      },
      {
        name: "funcionalidades",
        label: "¿Cuáles serían las funcionalidades más importantes?",
        type: "textarea",
        required: true,
        placeholder: "Ej: Listado de propiedades, galería de fotos, sistema de reservas, pagos, reseñas, etc.",
      },
      {
        name: "presupuesto",
        label: "¿Cuál es tu rango de presupuesto aproximado? (en pesos ARS)",
        type: "select",
        required: true,
        options: [
          { value: "100-300k", label: "$100.000 a $300.000" },
          { value: "301-500k", label: "$301.000 a $500.000" },
          { value: "501-800k", label: "$501.000 a $800.000" },
          { value: "800-1100k", label: "$800.000 a $1.100.000" },
          { value: "1100k+", label: "Más de $1.100.000" },
          { value: "flexible", label: "Flexible (depende de lo que me proponjas)" },
        ],
      },
      {
        name: "timeline",
        label: "¿Cuándo querés que la web esté online funcionando?",
        type: "select",
        required: true,
        options: [
          { value: "asap", label: "Lo antes posible (urgente)" },
          { value: "1-2-meses", label: "1-2 meses" },
          { value: "2-3-meses", label: "2-3 meses" },
          { value: "flexible", label: "Flexible" },
        ],
      },
      {
        name: "ciudades",
        label: "¿De qué ciudades querés que se carguen propiedades?",
        type: "textarea",
        required: true,
        placeholder: "Ej: Punta Alta, Bahía Blanca, localidades cercanas...",
      },
      {
        name: "estrategiaMarketing",
        label: "¿Cómo esperas que la gente de Argentina conozca esta web para ingresar a buscar propiedades?",
        type: "textarea",
        required: true,
        placeholder: "Ej: Redes sociales, publicidad pagada, boca en boca, Google Ads, etc.",
      },
      {
        name: "redesSociales",
        label: "¿Querés que la web tenga redes sociales?",
        type: "select",
        required: true,
        options: [
          { value: "si", label: "Sí, quiero presencia en redes" },
          { value: "no", label: "No, por ahora solo la web" },
          { value: "indeciso", label: "Indeciso, depende de lo que me propongas" },
        ],
      },
      {
        name: "gestorContenido",
        label: "¿Buscas que alguien te gestione el contenido de las redes sociales?",
        type: "select",
        required: true,
        options: [
          { value: "si", label: "Sí, necesito gestor de contenido" },
          { value: "no", label: "No, yo lo manejo" },
          { value: "flexible", label: "Flexible" },
        ],
      },
    ],
  },
  {
    id: "expectativas",
    title: "Expectativas y Comunicación",
    description: "¿Cómo te gustaría trabajar con nosotros?",
    fields: [
      {
        name: "motivacion",
        label: "¿Por qué es importante para vos armar este negocio? ¿Qué te motiva?",
        type: "textarea",
        required: true,
        placeholder: "Ej: Quiero ser independiente, generar ingresos pasivos, ayudar a propietarios, etc.",
      },
      {
        name: "comunicacion",
        label: "¿Cómo preferís comunicarte? (Reuniones, mensajes, email, etc.)",
        type: "select",
        required: true,
        options: [
          { value: "llamadas", label: "Reuniones por video/llamada" },
          { value: "whatsapp", label: "WhatsApp + reuniones puntuales" },
          { value: "email", label: "Email (más formal)" },
          { value: "flexible", label: "Lo que sea más fácil" },
        ],
      },
      {
        name: "observaciones",
        label: "¿Hay algo más que quieras que sepa Fernando antes de la reunión?",
        type: "textarea",
        required: false,
        placeholder: "Observaciones, dudas, referencias, cualquier cosa relevante...",
      },
    ],
  },
];

export const PRESENTIAL_QUESTIONS = [
  {
    section: "Validación de Descubrimiento",
    questions: [
      "¿Hay algo de lo que respondiste que quieras aclarar o cambiar?",
      "¿Hace cuánto tiempo pensás en este negocio?",
      "¿Qué es lo que más te emociona de este proyecto?",
      "¿Qué es lo que más te asusta?",
    ],
  },
  {
    section: "Profundidad Comercial",
    questions: [
      "¿Tenés propiedades propias para empezar o trabajarías con anfitriones?",
      "¿Cuál sería tu estrategia de adquisición de propiedades?",
      "¿Cómo competirías con Airbnb, Booking, etc.?",
      "¿Cuál es tu proyección de ingresos en el primer año?",
    ],
  },
  {
    section: "Validación de la Solución",
    questions: [
      "De las funcionalidades que mencionaste, ¿cuál es la más crítica?",
      "¿Cuál sería el impacto de tener una versión MVP simple versus completa?",
      "¿Cómo mediríamos el éxito de la plataforma?",
      "¿Qué pasa si en 6 meses el negocio no despega?",
    ],
  },
  {
    section: "Cierre de Acuerdo",
    questions: [
      "Aparte de la web, ¿qué más necesitarías de nosotros? (Marketing, copywriting, etc.)",
      "¿Estás dispuesta a trabajar con nosotros en las cuotas que mencioné el miércoles?",
      "Si te propongo una solución específica, ¿estarías lista para reunirnos nuevamente para discutir la propuesta?",
    ],
  },
];
