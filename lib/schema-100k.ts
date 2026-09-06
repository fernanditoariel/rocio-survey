import { z } from "zod";

export const encuesta100kSchema = z.object({
  // ===== Datos básicos =====
  nombre: z.string().min(1, "El nombre es requerido"),
  email: z.string().min(1, "El email es requerido").email("Ingresá un email válido"),
  negocioNicho: z.string().min(1, "Contanos tu negocio o nicho"),
  objetivo12Meses: z.string().min(1, "Contanos tu objetivo en 12 meses"),

  // ===== 1.1 La Puerta =====
  puerta: z.string().min(1, "Elegí una opción"),

  // ===== 1.2-A (showIf puerta === "si") =====
  queVendesActualmente: z.string().optional(),
  aQuienLeVendes: z.string().optional(),
  aQuePrecioVendes: z.string().optional(),
  cuantoFacturasAlMes: z.string().optional(),
  deDondeLleganClientes: z.string().optional(),
  objecionMasEscuchas: z.string().optional(),
  queNoEstaFuncionando: z.string().optional(),

  // ===== 1.2-B (showIf puerta === "no") =====
  queSabesHacer: z.string().optional(),
  quePreguntanConocidos: z.string().optional(),
  aQuienHasAyudado: z.string().optional(),
  queIntentasteAntes: z.string().optional(),
  cuantoTiempoDedicas: z.string().optional(),

  // ===== 1.3 Mi Punto Cero =====
  categoriaVida: z.string().min(1, "Contanos tu categoría de vida"),
  monedaEntrada: z.string().min(1, "Elegí una opción"),
  rubro: z.string().min(1, "Contanos tu rubro"),
  nicho: z.string().min(1, "Contanos tu nicho"),

  // ===== 1.4 Mi Paradigma Único =====
  consensoDeMiRubro: z.string().min(1, "Contanos el consenso que vas a matar"),
  loQueYoSostengo: z.string().min(1, "Contanos lo que vos sostenés"),
  comoLoLlamo: z.string().min(1, "Contanos cómo lo llamás"),
  queSignificaEnConcreto: z.string().min(1, "Contanos qué significa en concreto"),

  // ===== 1.5 Mi Historia =====
  cuandoEmpezo: z.string().min(1, "Contanos cuándo empezó"),
  elFondo: z.string().min(1, "Contanos el fondo de tu historia"),
  laEmocion: z.string().min(1, "Contanos la emoción que unía esos datos"),
  elGiro: z.string().min(1, "Contanos cuál fue el giro"),
  laPrueba: z.string().min(1, "Contanos la prueba / el resultado"),
  laObjecionSinArgumento: z.string().optional(),
  loQueTodaviaCuesta: z.string().optional(),
  laFraseParaOtro: z.string().min(1, "Contanos esa frase"),

  // ===== 1.6 Mis Testimonios y Pruebas =====
  testimoniosYPruebas: z.string().optional(),

  // ===== 1.7 Presencia Digital =====
  instagram: z.string().optional(),
  tiktok: z.string().optional(),
  youtube: z.string().optional(),
  bioActual: z.string().optional(),
  fotoPerfilActual: z.string().optional(),

  // ===== 1.8 Objetivo Personal =====
  queQuieresLograr: z.string().min(1, "Contanos qué querés lograr"),
  comoSabrasQueLoLograste: z.string().min(1, "Contanos cómo sabrás que lo lograste"),
  observaciones: z.string().optional(),
});

export type Encuesta100kFormData = z.infer<typeof encuesta100kSchema>;
