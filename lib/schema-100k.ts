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

  // ===== Tabs 6-19 (opcional) =====
  // 6.1 Mis 3 Pilares de Contenido
  t6_pilar1Nombre: z.string().optional(),
  t6_pilar1Lineas: z.string().optional(),
  t6_pilar1Palabras: z.string().optional(),
  t6_pilar2Nombre: z.string().optional(),
  t6_pilar2Lineas: z.string().optional(),
  t6_pilar2Palabras: z.string().optional(),
  t6_pilar3Nombre: z.string().optional(),
  t6_pilar3Lineas: z.string().optional(),
  t6_pilar3Palabras: z.string().optional(),
  // 6.2 Investigación de Contenido BASE
  t6_keyword1: z.string().optional(),
  t6_keyword2: z.string().optional(),
  t6_keyword3: z.string().optional(),
  t6_competidoresAnalizados: z.string().optional(),
  t6_ideasRepiten: z.string().optional(),
  t6_formatosRepiten: z.string().optional(),
  // 6.3 Niveles de Consciencia Mapeados
  t6_nivel1Formatos: z.string().optional(),
  t6_nivel2Formatos: z.string().optional(),
  t6_nivel3Formatos: z.string().optional(),
  t6_nivel4Formatos: z.string().optional(),
  // 6.4 Formatos Priorizados por Nivel de Consciencia
  t6_formatoPriorizado1: z.string().optional(),
  t6_formatoPriorizado2: z.string().optional(),
  t6_formatoPriorizado3: z.string().optional(),
  // 6.5 Lista de Ideas en Crudo
  t6_idea1: z.string().optional(),
  t6_idea2: z.string().optional(),
  t6_idea3: z.string().optional(),
  t6_idea4: z.string().optional(),
  t6_idea5: z.string().optional(),
  t6_idea6: z.string().optional(),
  // 6.6 Clasificá lo Encontrado (Viralidad vs. Valor vs. Venta)
  t6_clasifica1: z.string().optional(),
  t6_clasifica2: z.string().optional(),
  t6_clasifica3: z.string().optional(),
  t6_clasifica4: z.string().optional(),
  t6_clasifica5: z.string().optional(),
  // 7.1 Índice de Guiones
  t7_indice1: z.string().optional(),
  t7_indice2: z.string().optional(),
  t7_indice3: z.string().optional(),
  // 7.2 Guion Completo #1
  t7_g1Fecha: z.string().optional(),
  t7_g1Plataforma: z.string().optional(),
  t7_g1Pilar: z.string().optional(),
  t7_g1Estructura: z.string().optional(),
  t7_g1GanchoVerbal: z.string().optional(),
  t7_g1GanchoVisual: z.string().optional(),
  t7_g1GanchoTextual: z.string().optional(),
  t7_g1Desarrollo: z.string().optional(),
  t7_g1Cta: z.string().optional(),
  t7_g1Resultado: z.string().optional(),
  t7_g1Notas: z.string().optional(),
  // 7.2 Guion Completo #2
  t7_g2Fecha: z.string().optional(),
  t7_g2Plataforma: z.string().optional(),
  t7_g2Pilar: z.string().optional(),
  t7_g2Estructura: z.string().optional(),
  t7_g2GanchoVerbal: z.string().optional(),
  t7_g2GanchoVisual: z.string().optional(),
  t7_g2GanchoTextual: z.string().optional(),
  t7_g2Desarrollo: z.string().optional(),
  t7_g2Cta: z.string().optional(),
  t7_g2Resultado: z.string().optional(),
  t7_g2Notas: z.string().optional(),
  // 7.2 Guion Completo #3
  t7_g3Fecha: z.string().optional(),
  t7_g3Plataforma: z.string().optional(),
  t7_g3Pilar: z.string().optional(),
  t7_g3Estructura: z.string().optional(),
  t7_g3GanchoVerbal: z.string().optional(),
  t7_g3GanchoVisual: z.string().optional(),
  t7_g3GanchoTextual: z.string().optional(),
  t7_g3Desarrollo: z.string().optional(),
  t7_g3Cta: z.string().optional(),
  t7_g3Resultado: z.string().optional(),
  t7_g3Notas: z.string().optional(),
  // 7.3 Brand Voice para IA
  t7_contextoMarca: z.string().optional(),
  t7_palabrasCaracteristicas: z.string().optional(),
  t7_tonoPrincipal: z.string().optional(),
  t7_brandVoiceResultado: z.string().optional(),
  // 7.4 Análisis de Viralidad — Video #1
  t7_v1Cuenta: z.string().optional(),
  t7_v1GanchoVerbal: z.string().optional(),
  t7_v1GanchoVisual: z.string().optional(),
  t7_v1GanchoTextual: z.string().optional(),
  t7_v1Estructura: z.string().optional(),
  t7_v1PorQue: z.string().optional(),
  // 7.4 Análisis de Viralidad — Video #2
  t7_v2Cuenta: z.string().optional(),
  t7_v2GanchoVerbal: z.string().optional(),
  t7_v2GanchoVisual: z.string().optional(),
  t7_v2GanchoTextual: z.string().optional(),
  t7_v2Estructura: z.string().optional(),
  t7_v2PorQue: z.string().optional(),
  // 7.4 Análisis de Viralidad — Video #3
  t7_v3Cuenta: z.string().optional(),
  t7_v3GanchoVerbal: z.string().optional(),
  t7_v3GanchoVisual: z.string().optional(),
  t7_v3GanchoTextual: z.string().optional(),
  t7_v3Estructura: z.string().optional(),
  t7_v3PorQue: z.string().optional(),
  // 7.4 Patrones Identificados en mi Nicho
  t7_patronGanchoVerbal: z.string().optional(),
  t7_patronGanchoVisual: z.string().optional(),
  t7_caracteristicasComunes: z.string().optional(),
  t7_patronesIncorporar: z.string().optional(),
  // 7.4.1 Mis Estructuras de Guion
  t7_e1CuandoUso: z.string().optional(),
  t7_e1Ejemplo: z.string().optional(),
  t7_e2CuandoUso: z.string().optional(),
  t7_e2Ejemplo: z.string().optional(),
  t7_e3CuandoUso: z.string().optional(),
  t7_e3Ejemplo: z.string().optional(),
  t7_estructuraFavorita: z.string().optional(),
  t7_estructuraFavoritaPorque: z.string().optional(),
  // 7.5.1 La Fórmula del Gancho Verbal
  t7_tipoGanchoMejor: z.string().optional(),
  t7_gancho1: z.string().optional(),
  t7_gancho2: z.string().optional(),
  t7_gancho3: z.string().optional(),
  t7_gancho4: z.string().optional(),
  t7_gancho5: z.string().optional(),
  // 7.5.2 Forma en F y Sistema E.N.C.
  t7_estimuloNucleo: z.string().optional(),
  t7_nivelCargaCognitiva: z.string().optional(),
  t7_contextoENC: z.string().optional(),
  t7_ejemploGanchoVisual: z.string().optional(),
  // 7.5.3 Las 5 Formas Visuales
  t7_formaVisual: z.string().optional(),
  t7_comoAplicoFormaVisual: z.string().optional(),
  // 7.5.4 Bot de Ganchos Visuales
  t7_botGancho1: z.string().optional(),
  t7_botGancho2: z.string().optional(),
  t7_botGancho3: z.string().optional(),
  // 7.5.5 Cómo Analizás y Diseñás tus Ganchos
  t7_referenciaAnalizo: z.string().optional(),
  t7_mejorGanchoVisual1: z.string().optional(),
  t7_mejorGanchoVisual2: z.string().optional(),
  t7_mejorGanchoVisual3: z.string().optional(),
  // 7.6 Banco de CTAs (por plataforma y objetivo)
  t7_ctaReels: z.string().optional(),
  t7_ctaCarruseles: z.string().optional(),
  t7_ctaHistorias: z.string().optional(),
  t7_ctaComentarios: z.string().optional(),
  t7_ctaGuardados: z.string().optional(),
  t7_ctaDms: z.string().optional(),
  t7_ctaVentaDirecta: z.string().optional(),
  t7_ctaEfectivo1: z.string().optional(),
  t7_ctaEfectivo1Resultado: z.string().optional(),
  t7_ctaEfectivo2: z.string().optional(),
  t7_ctaEfectivo2Resultado: z.string().optional(),
  // 8.1 Regla del Calendario
  t8_frecuenciaPublicacion: z.string().optional(),
  t8_mejorHorario: z.string().optional(),
  // 8.2 Semana Actual
  t8_semanaLunes: z.string().optional(),
  t8_semanaMartes: z.string().optional(),
  t8_semanaMiercoles: z.string().optional(),
  t8_semanaJueves: z.string().optional(),
  t8_semanaViernes: z.string().optional(),
  t8_semanaSabado: z.string().optional(),
  t8_semanaDomingo: z.string().optional(),
  // 8.3 Ideas en Pipeline (próximas 2 semanas)
  t8_pipeline1: z.string().optional(),
  t8_pipeline2: z.string().optional(),
  t8_pipeline3: z.string().optional(),
  // 9.1 Índice de Carruseles
  t9_indice1: z.string().optional(),
  t9_indice2: z.string().optional(),
  // 9.2 Carrusel Completo #1
  t9_c1Tema: z.string().optional(),
  t9_c1Estilo: z.string().optional(),
  t9_c1Tipo: z.string().optional(),
  t9_c1Referencia: z.string().optional(),
  t9_c1Slides: z.string().optional(),
  t9_c1Resultado: z.string().optional(),
  // 9.2 Carrusel Completo #2
  t9_c2Tema: z.string().optional(),
  t9_c2Estilo: z.string().optional(),
  t9_c2Tipo: z.string().optional(),
  t9_c2Referencia: z.string().optional(),
  t9_c2Slides: z.string().optional(),
  t9_c2Resultado: z.string().optional(),
  // 10.1 Definición del Lead Magnet
  t10_nombre: z.string().optional(),
  t10_promesa: z.string().optional(),
  t10_formato: z.string().optional(),
  t10_tiempoConsumo: z.string().optional(),
  t10_dolorResponde: z.string().optional(),
  t10_comoConecta: z.string().optional(),
  t10_enlace: z.string().optional(),
  // 10.2 Métricas del Lead Magnet
  t10_cuantasPedido: z.string().optional(),
  t10_conversion: z.string().optional(),
  t10_ajustes: z.string().optional(),
  // 11.2 Secuencia URGENCIA
  t11_urgS1: z.string().optional(),
  t11_urgS2: z.string().optional(),
  t11_urgS3: z.string().optional(),
  t11_urgS4: z.string().optional(),
  t11_urgS5: z.string().optional(),
  // 11.2 Secuencias ONE SHOT, POLLS y LIBRE
  t11_oneShotS1: z.string().optional(),
  t11_pollsS1: z.string().optional(),
  t11_pollsS2: z.string().optional(),
  t11_pollsS3: z.string().optional(),
  t11_libreS1: z.string().optional(),
  t11_libreS2: z.string().optional(),
  // 11.2 Secuencia LEAD MAGNET
  t11_lmNombreRecurso: z.string().optional(),
  t11_lmS1: z.string().optional(),
  t11_lmS2: z.string().optional(),
  t11_lmS3: z.string().optional(),
  t11_lmPalabraClave: z.string().optional(),
  // 11.3 Banco de Ideas para Historias Diarias
  t11_ideaHistoria1: z.string().optional(),
  t11_ideaHistoria2: z.string().optional(),
  t11_ideaHistoria3: z.string().optional(),
  // 12.1 Apertura de Conversación
  t12_apertura1: z.string().optional(),
  t12_apertura2: z.string().optional(),
  t12_apertura3: z.string().optional(),
  // 12.2 Manejo de Objeciones
  t12_objecion1: z.string().optional(),
  t12_objecion2: z.string().optional(),
  t12_objecion3: z.string().optional(),
  // 12.3 Los Testimonios que te Hacen Vender
  t12_numeroCasos: z.string().optional(),
  t12_transformacion: z.string().optional(),
  t12_caso1ComoLlego: z.string().optional(),
  t12_caso1Victoria: z.string().optional(),
  t12_caso2ComoLlego: z.string().optional(),
  t12_caso2Victoria: z.string().optional(),
  t12_caso3ComoLlego: z.string().optional(),
  t12_caso3Victoria: z.string().optional(),
  // 13.1 CTAs por Formato
  t13_ctaReelsDetalle: z.string().optional(),
  t13_ctaCarruselesDetalle: z.string().optional(),
  t13_ctaHistoriasDetalle: z.string().optional(),
  // 13.2 Los 2 CTAs que Más te Funcionan
  t13_ctaTop1: z.string().optional(),
  t13_ctaTop1PorQue: z.string().optional(),
  t13_ctaTop2: z.string().optional(),
  t13_ctaTop2PorQue: z.string().optional(),
  // 14.1 Investigación de Competencia
  t14_competidor1: z.string().optional(),
  t14_competidor2: z.string().optional(),
  t14_competidor3: z.string().optional(),
  // 14.2 Mis Ángulos de Venta
  t14_angulo1: z.string().optional(),
  t14_angulo2: z.string().optional(),
  t14_angulo3: z.string().optional(),
  // 14.3 Guion de Anuncio #1
  t14_ad1Angulo: z.string().optional(),
  t14_ad1Formato: z.string().optional(),
  t14_ad1Gancho: z.string().optional(),
  t14_ad1Desarrollo: z.string().optional(),
  t14_ad1Cta: z.string().optional(),
  t14_ad1Metricas: z.string().optional(),
  // 14.3 Guion de Anuncio #2
  t14_ad2Angulo: z.string().optional(),
  t14_ad2Formato: z.string().optional(),
  t14_ad2Gancho: z.string().optional(),
  t14_ad2Desarrollo: z.string().optional(),
  t14_ad2Cta: z.string().optional(),
  t14_ad2Metricas: z.string().optional(),
  // 14.3 Guion de Anuncio #3
  t14_ad3Angulo: z.string().optional(),
  t14_ad3Formato: z.string().optional(),
  t14_ad3Gancho: z.string().optional(),
  t14_ad3Desarrollo: z.string().optional(),
  t14_ad3Cta: z.string().optional(),
  t14_ad3Metricas: z.string().optional(),
  // 15.1 Setup Inicial
  t15_pixelInstalado: z.string().optional(),
  t15_dominioVerificado: z.string().optional(),
  t15_cuentaAnuncios: z.string().optional(),
  t15_objetivoPrincipal: z.string().optional(),
  // 15.2 Campañas Activas
  t15_campana1: z.string().optional(),
  t15_campana2: z.string().optional(),
  // 15.3-15.4 Métricas y Aprendizajes de Campañas
  t15_metricasNotas: z.string().optional(),
  t15_aprendizajes: z.string().optional(),
  // 16.1-16.3 Análisis y Decisiones
  t16_analisisSemanal: z.string().optional(),
  t16_videosResucitar: z.string().optional(),
  t16_planAccion: z.string().optional(),
  // 16.4 Patrones Identificados
  t16_ganchosFuncionan: z.string().optional(),
  t16_estructurasRetencion: z.string().optional(),
  t16_diasHorarios: z.string().optional(),
  t16_formatosSeguidores: z.string().optional(),
  t16_formatosClientes: z.string().optional(),
  // 17.1 Estrategia de YouTube
  t17_esParteEstrategia: z.string().optional(),
  t17_formatoElegido: z.string().optional(),
  t17_frecuencia: z.string().optional(),
  // 17.2 Ideas Validadas para YouTube
  t17_idea1: z.string().optional(),
  t17_idea2: z.string().optional(),
  t17_idea3: z.string().optional(),
  // 18. Mis Prompts y Procesos Favoritos (opcional)
  t18_promptsGuionizacion: z.string().optional(),
  t18_promptsGanchos: z.string().optional(),
  t18_promptsCarruseles: z.string().optional(),
  t18_promptsHistorias: z.string().optional(),
  t18_promptsInvestigacion: z.string().optional(),
  t18_promptsAds: z.string().optional(),
  t18_promptsIAGenerativa: z.string().optional(),
  // 19.1-19.2 Nombre de la Oferta y Promesa
  t19_nombreOferta: z.string().optional(),
  t19_promesaFormato: z.string().optional(),
  t19_promesaLanding: z.string().optional(),
  // 19.3-19.4 Acciones y Entregables
  t19_accion1: z.string().optional(),
  t19_accion2: z.string().optional(),
  t19_accion3: z.string().optional(),
  t19_accion4: z.string().optional(),
  t19_entregable1: z.string().optional(),
  t19_entregable2: z.string().optional(),
  t19_entregable3: z.string().optional(),
  t19_entregable4: z.string().optional(),
  // 19.5-19.6 Mecanismo Diferenciador y Objeción Central
  t19_nombreSistema: z.string().optional(),
  t19_descripcionSistema: z.string().optional(),
  t19_objecionCentral: z.string().optional(),
  t19_textoObjecion: z.string().optional(),
  // 19.7 Estructura de la Sesión
  t19_bloque1: z.string().optional(),
  t19_bloque2: z.string().optional(),
  t19_bloque3: z.string().optional(),
  t19_bloque4: z.string().optional(),
  t19_bloque5: z.string().optional(),
  // 19.8-19.9 Prueba Mínima y Bonus
  t19_demo: z.string().optional(),
  t19_entregaExpress: z.string().optional(),
  t19_bonus1: z.string().optional(),
  t19_bonus2: z.string().optional(),
  t19_bonus3: z.string().optional(),
  // 19.10-19.13 Resultados y Resumen Final
  t19_resultadosFinales: z.string().optional(),
  t19_contenidoPrograma: z.string().optional(),
  t19_resumenFinal: z.string().optional(),
  t19_reporteLanzamiento: z.string().optional(),
});

export type Encuesta100kFormData = z.infer<typeof encuesta100kSchema>;
