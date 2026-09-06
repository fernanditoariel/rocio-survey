export const WEB_BRIEF_INTRO = {
  title: "Antes de Construir tu Web",
  subtitle: "Definiciones para armar la plataforma en RentalHive/WordPress",
  description:
    "Estas respuestas condicionan cómo se configura todo, desde la comisión hasta el dominio. Te va a tomar 10-15 minutos.",
};

export const WEB_BRIEF_SECTIONS = [
  {
    id: "negocio",
    title: "Negocio y oferta",
    description: "Lo que más importa: cómo vas a conseguir que la gente cargue sus propiedades",
    fields: [
      {
        name: "reclutamiento",
        label: "¿Cómo vas a conseguir que los dueños de Pehuén Có y Monte Hermoso carguen sus casas?",
        type: "textarea",
        required: true,
        placeholder: "Ej: Los voy a visitar como hice en Punta Alta, ya tengo contactos ahí...",
      },
      {
        name: "diferenciacionLocal",
        label:
          "Ya existen alquilaenpehuen.com, checkinmonte.com y parairnos.com en esas localidades. ¿Cómo pensás competir con eso?",
        type: "textarea",
        required: true,
      },
      {
        name: "propuestaValorDueno",
        label: "¿Qué le ofrecés a un dueño para que prefiera tu web antes que seguir alquilando por WhatsApp o Facebook?",
        type: "textarea",
        required: true,
      },
      {
        name: "modeloComision",
        label: "¿Comisión por reserva, tarifa fija por publicar, o las dos?",
        type: "select",
        required: true,
        options: [
          { value: "comision", label: "Comisión por reserva" },
          { value: "tarifa-fija", label: "Tarifa fija por publicar" },
          { value: "ambas", label: "Las dos combinadas" },
          { value: "no-decidido", label: "Todavía no lo decidí" },
        ],
      },
      {
        name: "porcentajeComision",
        label: "Si elegiste comisión, ¿qué porcentaje? (Airbnb cobra 14-16%, Booking 16%)",
        type: "text",
        required: false,
        placeholder: "Ej: 10%",
      },
      {
        name: "moderacion",
        label: "¿Vos aprobás cada propiedad antes de publicarse, o se publica sola?",
        type: "select",
        required: true,
        options: [
          { value: "apruebo", label: "Yo apruebo cada propiedad antes de publicarse" },
          { value: "automatico", label: "Se publica automáticamente" },
          { value: "no-segura", label: "No estoy segura todavía" },
        ],
      },
      {
        name: "requisitosDueno",
        label: "¿Qué le vas a pedir a un dueño para aceptarlo? (DNI, título, fotos mínimas, habilitación municipal...)",
        type: "textarea",
        required: true,
      },
      {
        name: "fotos",
        label: "Si un dueño no tiene fotos decentes, ¿qué pasa?",
        type: "select",
        required: true,
        options: [
          { value: "yo-saco", label: "Se las saco yo" },
          { value: "fotografo", label: "Contrato un fotógrafo" },
          { value: "dueno-trae", label: "Las trae el dueño, sin excepción" },
          { value: "depende", label: "Depende del caso" },
        ],
      },
      {
        name: "calendarioDoble",
        label: "Si un dueño ya está en Airbnb y le reservan en tu web el mismo día, ¿cómo se evita el doble booking?",
        type: "select",
        required: true,
        options: [
          { value: "manual", label: "El dueño actualiza el calendario a mano" },
          { value: "plugin", label: "Quiero evaluar un plugin de sincronización" },
          { value: "no-pensado", label: "No lo había pensado" },
        ],
      },
      {
        name: "cobroDueno",
        label: "¿Cuándo cobra el dueño?",
        type: "select",
        required: true,
        options: [
          { value: "antes", label: "Antes del check-in" },
          { value: "despues", label: "Después del check-in" },
          { value: "final", label: "Al final de la estadía" },
          { value: "no-definido", label: "No lo definí todavía" },
        ],
      },
      {
        name: "resolucionReclamos",
        label: "¿Quién resuelve un reclamo si el huésped dice que la casa no era como en las fotos?",
        type: "textarea",
        required: true,
      },
    ],
  },
  {
    id: "marca",
    title: "Marca y dominio",
    description: "",
    fields: [
      {
        name: "nombreMarca",
        label: '¿Cuál es el nombre definitivo del sitio? (no tiene por qué ser "Marketplace de Propiedades")',
        type: "text",
        required: true,
      },
      {
        name: "dominio",
        label: "¿Qué dominio querés? ¿Ya lo compraste o lo compramos nosotros?",
        type: "text",
        required: true,
        placeholder: "Ej: minombre.com.ar",
      },
      {
        name: "referenciasVisuales",
        label: "¿Tenés colores o referencias visuales que te gusten? ¿Y alguno que no quieras ver?",
        type: "textarea",
        required: false,
      },
      {
        name: "logoExistente",
        label: "¿Tenés ya un isologo de tu marca personal que debamos respetar?",
        type: "select",
        required: true,
        options: [
          { value: "si-tengo", label: "Sí, tengo uno" },
          { value: "desde-cero", label: "No, partimos de cero" },
        ],
      },
    ],
  },
  {
    id: "alcance",
    title: "Alcance y contenido para el lanzamiento",
    description: "",
    fields: [
      {
        name: "alcanceLanzamiento",
        label: "¿Lanzamos solo con Punta Alta, o Pehuén Có y Monte Hermoso entran desde el día 1?",
        type: "select",
        required: true,
        options: [
          { value: "solo-punta-alta", label: "Solo Punta Alta" },
          { value: "las-tres", label: "Las tres localidades desde el día 1" },
          { value: "no-decidido", label: "Todavía no lo decidí" },
        ],
      },
      {
        name: "propiedadesConfirmadas",
        label: "¿Cuántas propiedades tenés hoy con dueño confirmado y dispuesto a publicar?",
        type: "text",
        required: true,
        placeholder: "Número real, no el potencial",
      },
      {
        name: "idioma",
        label: "¿El sitio va solo en español o también en inglés?",
        type: "select",
        required: true,
        options: [
          { value: "solo-espanol", label: "Solo español" },
          { value: "espanol-ingles", label: "Español e inglés" },
        ],
      },
      {
        name: "moneda",
        label: "¿Los precios se muestran solo en pesos?",
        type: "select",
        required: true,
        options: [
          { value: "solo-pesos", label: "Solo pesos" },
          { value: "pesos-dolares", label: "Pesos y dólares para algún segmento" },
        ],
      },
    ],
  },
  {
    id: "pagos",
    title: "Pagos y aspectos legales",
    description: "",
    fields: [
      {
        name: "mercadoPago",
        label: "¿Tenés cuenta de MercadoPago para el negocio, lista para conectar?",
        type: "select",
        required: true,
        options: [
          { value: "si-tengo", label: "Sí, ya tengo cuenta de negocio" },
          { value: "no-todavia", label: "No, todavía no" },
          { value: "no-segura", label: "No estoy segura" },
        ],
      },
      {
        name: "inscripcionFiscal",
        label: "¿Cómo estás inscripta para facturar la comisión que cobra la plataforma? (monotributo, sociedad, etc.)",
        type: "textarea",
        required: true,
      },
      {
        name: "politicaCancelacion",
        label: "¿Qué política de cancelación les ofrecés a los huéspedes?",
        type: "select",
        required: true,
        options: [
          { value: "flexible", label: "Flexible" },
          { value: "moderada", label: "Moderada" },
          { value: "estricta", label: "Estricta" },
          { value: "no-decidido", label: "Todavía no lo decidí" },
        ],
      },
    ],
  },
  {
    id: "tecnico",
    title: "Técnico — RentalHive",
    description: "",
    fields: [
      {
        name: "confirmaWooCommerce",
        label: "RentalHive funciona sobre WooCommerce. ¿Confirmás esa base?",
        type: "select",
        required: true,
        options: [
          { value: "confirmo", label: "Sí, dale con WooCommerce" },
          { value: "evaluar-otra", label: "Quiero evaluar otra alternativa antes" },
        ],
      },
      {
        name: "googleMapsApi",
        label: "El mapa necesita una API key de Google Maps (uso gratis limitado, después se cobra). ¿Quién abre la cuenta?",
        type: "select",
        required: true,
        options: [
          { value: "yo-abro", label: "La abro yo con mi tarjeta" },
          { value: "ustedes-abren", label: "Ábranla ustedes a mi nombre" },
        ],
      },
      {
        name: "resenasDesdeElLanzamiento",
        label: "¿Reseñas visibles desde el lanzamiento?",
        type: "select",
        required: true,
        options: [
          { value: "si", label: "Sí, desde el día 1" },
          { value: "despues", label: "Las activo más adelante" },
        ],
      },
      {
        name: "mensajeria",
        label: "¿Mensajería interna entre huésped y dueño dentro del sitio, o por WhatsApp?",
        type: "select",
        required: true,
        options: [
          { value: "interna", label: "Mensajería interna en el sitio" },
          { value: "whatsapp", label: "Prefiero que se resuelva por WhatsApp" },
        ],
      },
      {
        name: "soporte",
        label: "¿Quién atiende consultas de huéspedes y dueños al principio?",
        type: "select",
        required: true,
        options: [
          { value: "yo-atiendo", label: "Yo atiendo las consultas" },
          { value: "necesito-canal", label: "Necesito que armen un canal de soporte" },
        ],
      },
      {
        name: "observacionesTecnicas",
        label: "¿Algo más que debamos saber antes de empezar a construir?",
        type: "textarea",
        required: false,
      },
    ],
  },
];
