import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function saveSurveyToDatabase(data: any) {
  const { data: result, error } = await supabase
    .from("surveys")
    .insert([
      {
        nombre: data.nombre,
        edad: data.edad,
        ubicacion: data.ubicacion,
        experiencia: data.experiencia,
        tipo_negocio: data.tipoNegocio,
        modelo_negocio: data.modeloNegocio,
        target_market: data.targetMarket,
        barreras: data.barreras,
        tipo_web: data.tipoWeb,
        funcionalidades: data.funcionalidades,
        presupuesto: data.presupuesto,
        timeline: data.timeline,
        ciudades: data.ciudades || "",
        estrategia_marketing: data.estrategiaMarketing || "",
        redes_sociales: data.redesSociales || "",
        gestor_contenido: data.gestorContenido || "",
        motivacion: data.motivacion,
        comunicacion: data.comunicacion,
        observaciones: data.observaciones || "",
        created_at: new Date().toISOString(),
      },
    ]);

  if (error) {
    console.error("Error saving to Supabase:", error);
    throw error;
  }

  return result;
}

export async function saveWebBriefToDatabase(data: any) {
  const { data: result, error } = await supabase.from("web_briefs").insert([
    {
      reclutamiento: data.reclutamiento,
      diferenciacion_local: data.diferenciacionLocal,
      propuesta_valor_dueno: data.propuestaValorDueno,
      modelo_comision: data.modeloComision,
      porcentaje_comision: data.porcentajeComision || "",
      moderacion: data.moderacion,
      requisitos_dueno: data.requisitosDueno,
      fotos: data.fotos,
      calendario_doble: data.calendarioDoble,
      cobro_dueno: data.cobroDueno,
      resolucion_reclamos: data.resolucionReclamos,
      nombre_marca: data.nombreMarca,
      dominio: data.dominio,
      referencias_visuales: data.referenciasVisuales || "",
      logo_existente: data.logoExistente,
      alcance_lanzamiento: data.alcanceLanzamiento,
      propiedades_confirmadas: data.propiedadesConfirmadas,
      idioma: data.idioma,
      moneda: data.moneda,
      mercado_pago: data.mercadoPago,
      inscripcion_fiscal: data.inscripcionFiscal,
      politica_cancelacion: data.politicaCancelacion,
      confirma_woocommerce: data.confirmaWooCommerce,
      google_maps_api: data.googleMapsApi,
      resenas_desde_lanzamiento: data.resenasDesdeElLanzamiento,
      mensajeria: data.mensajeria,
      soporte: data.soporte,
      observaciones_tecnicas: data.observacionesTecnicas || "",
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    console.error("Error saving web brief to Supabase:", error);
    throw error;
  }

  return result;
}
