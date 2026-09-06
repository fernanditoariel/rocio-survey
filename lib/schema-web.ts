import { z } from "zod";

export const webBriefSchema = z.object({
  // Negocio y oferta
  reclutamiento: z.string().min(1, "Contanos cómo vas a conseguir propietarios"),
  diferenciacionLocal: z.string().min(1, "Contanos cómo pensás diferenciarte"),
  propuestaValorDueno: z.string().min(1, "Contanos qué les ofrecés a los dueños"),
  modeloComision: z.string().min(1, "Elegí un modelo de comisión"),
  porcentajeComision: z.string().optional(),
  moderacion: z.string().min(1, "Elegí una opción"),
  requisitosDueno: z.string().min(1, "Contanos qué le vas a pedir a un dueño"),
  fotos: z.string().min(1, "Elegí una opción"),
  calendarioDoble: z.string().min(1, "Elegí una opción"),
  cobroDueno: z.string().min(1, "Elegí una opción"),
  resolucionReclamos: z.string().min(1, "Contanos cómo se resuelve un reclamo"),

  // Marca y dominio
  nombreMarca: z.string().min(1, "Decinos el nombre del sitio"),
  dominio: z.string().min(1, "Decinos qué dominio querés"),
  referenciasVisuales: z.string().optional(),
  logoExistente: z.string().min(1, "Elegí una opción"),

  // Alcance y contenido
  alcanceLanzamiento: z.string().min(1, "Elegí una opción"),
  propiedadesConfirmadas: z.string().min(1, "Decinos cuántas propiedades tenés confirmadas"),
  idioma: z.string().min(1, "Elegí una opción"),
  moneda: z.string().min(1, "Elegí una opción"),

  // Pagos y legal
  mercadoPago: z.string().min(1, "Elegí una opción"),
  inscripcionFiscal: z.string().min(1, "Contanos tu situación fiscal"),
  politicaCancelacion: z.string().min(1, "Elegí una opción"),

  // Técnico
  confirmaWooCommerce: z.string().min(1, "Elegí una opción"),
  googleMapsApi: z.string().min(1, "Elegí una opción"),
  resenasDesdeElLanzamiento: z.string().min(1, "Elegí una opción"),
  mensajeria: z.string().min(1, "Elegí una opción"),
  soporte: z.string().min(1, "Elegí una opción"),
  observacionesTecnicas: z.string().optional(),
});

export type WebBriefFormData = z.infer<typeof webBriefSchema>;
