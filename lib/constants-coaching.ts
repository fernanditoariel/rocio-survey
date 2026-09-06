export const ENCUESTA_COACHING_INTRO = {
    title: "Encuesta de Descubrimiento — Coaching Ejecutivo",
    subtitle: "Antes de conversar, contame dónde estás parado/a hoy",
    description:
          "Esta encuesta me permite entender tu desafío antes de nuestra conversación, para no hacerte perder tiempo con preguntas genéricas y llegar directo a lo que te importa.",
};

export const FORM_SECTIONS_COACHING = [
  {
        id: "datos-basicos",
        title: "Datos Básicos",
        description: "Para poder contactarte y ubicar tu contexto",
        fields: [
          { name: "nombre", label: "¿Cuál es tu nombre?", type: "text", required: true },
          { name: "email", label: "¿Cuál es tu email?", type: "text", required: true },
          { name: "whatsapp", label: "¿Cuál es tu WhatsApp? (con código de país)", type: "text", required: true, placeholder: "Ej: +54 9 291 000-0000" },
          { name: "rolActual", label: "¿Cuál es tu rol o cargo actual?", type: "text", required: true },
          { name: "empresa", label: "¿En qué empresa u organización trabajás? (si aplica)", type: "text", required: false },
          { name: "ciudad", label: "¿En qué ciudad y país estás?", type: "text", required: true },
              ],
  },
  {
        id: "contexto",
        title: "Quién Impulsa Este Proceso",
        description: "Esto define qué preguntas te hago a continuación",
        fields: [
          {
                    name: "quienPaga",
                    label: "¿Quién pagaría este proceso de coaching?",
                    type: "select",
                    required: true,
                    options: [
                      { value: "propio", label: "Yo mismo/a, de mi bolsillo" },
                      { value: "empresa", label: "Mi empresa u organización" },
                              ],
          },
          {
                    name: "personasACargo",
                    label: "¿Tenés personas a cargo hoy? ¿Cuántas?",
                    type: "text",
                    required: true,
                    placeholder: "Ej: Sí, 8 personas / No, todavía no lidero equipo",
          },
          {
                    name: "nivelJerarquico",
                    label: "¿Cuál es tu nivel jerárquico?",
                    type: "select",
                    required: true,
                    showIf: (data: Record<string, any>) => data.quienPaga === "empresa",
                    options: [
                      { value: "mando-medio", label: "Mando medio / jefatura" },
                      { value: "gerencia", label: "Gerencia" },
                      { value: "direccion", label: "Dirección" },
                      { value: "dueno-ceo", label: "Dueño/a o CEO" },
                              ],
          },
          {
                    name: "modalidadPreferida",
                    label: "¿Qué modalidad preferís?",
                    type: "select",
                    required: true,
                    showIf: (data: Record<string, any>) => data.quienPaga === "empresa",
                    options: [
                      { value: "presencial", label: "Presencial" },
                      { value: "virtual", label: "Virtual" },
                      { value: "hibrida", label: "Híbrida" },
                              ],
          },
          {
                    name: "hayPresupuesto",
                    label: "¿Ya hay presupuesto asignado para esto?",
                    type: "select",
                    required: true,
                    showIf: (data: Record<string, any>) => data.quienPaga === "empresa",
                    options: [
                      { value: "si", label: "Sí, ya está asignado" },
                      { value: "hay-que-crearlo", label: "No, hay que crearlo/justificarlo" },
                      { value: "no-se", label: "No lo sé todavía" },
                              ],
          },
          {
                    name: "quienMasDeberiaEstar",
                    label: "Para armar bien la propuesta: ¿quién más debería estar en la conversación?",
                    type: "text",
                    required: true,
                    showIf: (data: Record<string, any>) => data.quienPaga === "empresa",
          },
          {
                    name: "situacionLaboral",
                    label: "¿Cómo describirías tu situación laboral hoy?",
                    type: "select",
                    required: true,
                    showIf: (data: Record<string, any>) => data.quienPaga === "propio",
                    options: [
                      { value: "empleado-buscando-cambio", label: "Empleado/a, buscando un cambio" },
                      { value: "en-transicion", label: "En transición, sin empleo actualmente" },
                      { value: "evaluando-independizarme", label: "Evaluando independizarme" },
                      { value: "otro", label: "Otro" },
                              ],
          },
          {
                    name: "procesoPrevio",
                    label: "¿Ya hiciste algún proceso de coaching antes?",
                    type: "select",
                    required: true,
                    showIf: (data: Record<string, any>) => data.quienPaga === "propio",
                    options: [
                      { value: "si", label: "Sí, ya hice uno o más procesos" },
                      { value: "no", label: "No, sería el primero" },
                              ],
          },
          {
                    name: "plazoEnMente",
                    label: "¿Tenés algún plazo en mente para resolver esto?",
                    type: "text",
                    required: true,
                    showIf: (data: Record<string, any>) => data.quienPaga === "propio",
          },
              ],
  },
  {
        id: "situacion",
        title: "Tu Situación Hoy",
        description: "Contame con el máximo detalle posible",
        fields: [
          {
                    name: "desafioPrincipal",
                    label: "¿Cuál es el desafío más importante que estás enfrentando hoy en tu rol de liderazgo?",
                    type: "textarea",
                    required: true,
          },
          {
                    name: "queHicisteHastaAhora",
                    label: "¿Qué has hecho hasta ahora para atender ese desafío?",
                    type: "textarea",
                    required: true,
          },
          {
                    name: "porQueNoFunciono",
                    label: "¿Por qué creés que lo que hiciste no resolvió el desafío?",
                    type: "textarea",
                    required: true,
          },
          {
                    name: "impactoReal",
                    label: "¿Qué impacto real está teniendo esta situación? (en resultados, en tu equipo, en vos)",
                    type: "textarea",
                    required: true,
          },
              ],
  },
  {
        id: "conciencia-problema",
        title: "Profundizando el Desafío",
        fields: [
          {
                    name: "desdeCuando",
                    label: "¿Desde hace cuánto tiempo tenés este desafío?",
                    type: "text",
                    required: true,
          },
          {
                    name: "causasDeFondo",
                    label: "¿Cuáles creés que son las causas de fondo?",
                    type: "textarea",
                    required: true,
          },
          {
                    name: "consecuenciasNoResolver",
                    label: "¿Qué consecuencias tiene no resolver este desafío?",
                    type: "textarea",
                    required: true,
          },
              ],
  },
  {
        id: "conciencia-solucion",
        title: "La Solución que Buscás",
        description: "Esta es la sección más importante: contame con tus propias palabras",
        fields: [
          {
                    name: "solucionOptima",
                    label: "¿Cómo sería una solución óptima para este desafío?",
                    type: "textarea",
                    required: true,
          },
          {
                    name: "impactosTangibles",
                    label: "¿Qué impactos tangibles produciría? (resultados, indicadores, plazos)",
                    type: "textarea",
                    required: true,
          },
          {
                    name: "impactoPersonal",
                    label: "Y de manera personal, ¿qué diferencia haría para vos resolver esto?",
                    type: "textarea",
                    required: true,
          },
          {
                    name: "condicionesDePiso",
                    label: "¿Hay algo que no estarías dispuesto/a a aceptar en este proceso?",
                    type: "textarea",
                    required: false,
          },
              ],
  },
  {
        id: "consecuencia",
        title: "Mirando Hacia Adelante",
        fields: [
          {
                    name: "futuroSiNoResuelve",
                    label: "¿Cómo te imaginás los próximos meses o años si esto sigue igual?",
                    type: "textarea",
                    required: true,
          },
              ],
  },
  {
        id: "cierre",
        title: "Antes de Conversar",
        fields: [
          {
                    name: "queEsperasDelProceso",
                    label: "¿Qué esperás de un proceso de coaching?",
                    type: "textarea",
                    required: true,
          },
          {
                    name: "comunicacionPreferida",
                    label: "¿Cómo preferís que te contacte?",
                    type: "select",
                    required: true,
                    options: [
                      { value: "whatsapp", label: "WhatsApp" },
                      { value: "email", label: "Email" },
                      { value: "llamada", label: "Llamada telefónica" },
                              ],
          },
          {
                    name: "observaciones",
                    label: "¿Hay algo más que quieras que sepa antes de que hablemos?",
                    type: "textarea",
                    required: false,
          },
              ],
  },
  ];
