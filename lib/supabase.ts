import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://wncxijoultaghhjzxwab.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials");
}

export const supabase = supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
    : (null as unknown as ReturnType<typeof createClient>);

export async function saveSurveyToDatabase(data: any) {
  if (!supabase) {
    throw new Error("Supabase no configurado (falta SUPABASE_SERVICE_ROLE_KEY)");
  }
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
  if (!supabase) {
    throw new Error("Supabase no configurado (falta SUPABASE_SERVICE_ROLE_KEY)");
  }
  const { data: result, error } = await supabase.from("web_briefs").insert([
    {
      reclutamiento: data.reclutamiento,
      propuesta_valor_dueno: data.propuestaValorDueno,
      modelo_comision: data.modeloComision,
      porcentaje_comision: data.porcentajeComision || "",
      moderacion: data.moderacion,
      requisitos_dueno: data.requisitosDueno,
      fotos: data.fotos,
      cobro_dueno: data.cobroDueno,
      resolucion_reclamos: data.resolucionReclamos,
      nombre_marca: data.nombreMarca,
      dominio: data.dominio,
      referencias_visuales: data.referenciasVisuales || "",
      logo_existente: data.logoExistente,
      alcance_lanzamiento: data.alcanceLanzamiento,
      moneda: data.moneda,
      mercado_pago: data.mercadoPago,
      inscripcion_fiscal: data.inscripcionFiscal,
      politica_cancelacion: data.politicaCancelacion,
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    console.error("Error saving web brief to Supabase:", error);
    throw error;
  }

  return result;
}

export async function saveEncuestaCompletaToDatabase(data: any) {
  if (!supabase) {
    throw new Error("Supabase no configurado (falta SUPABASE_SERVICE_ROLE_KEY)");
  }
  const { data: result, error } = await supabase.from("encuestas_completas").insert([
    {
      // Datos básicos
      nombre: data.nombre,
      edad: data.edad,
      ubicacion: data.ubicacion,
      experiencia: data.experiencia,
      // Negocio
      tipo_negocio: data.tipoNegocio,
      modelo_negocio: data.modeloNegocio,
      target_market: data.targetMarket,
      barreras: data.barreras,
      // Solución web
      tipo_web: data.tipoWeb,
      funcionalidades: data.funcionalidades,
      presupuesto: data.presupuesto,
      timeline: data.timeline,
      ciudades: data.ciudades || "",
      estrategia_marketing: data.estrategiaMarketing || "",
      redes_sociales: data.redesSociales || "",
      gestor_contenido: data.gestorContenido || "",
      // Expectativas
      motivacion: data.motivacion,
      comunicacion: data.comunicacion,
      observaciones: data.observaciones || "",
      // Punto de partida - La Puerta
      existe_algo_para_vender: data.existeAlgoParaVender,
      que_se_vende: data.queSeVende || "",
      a_quien_se_vende: data.aQuienSeVende || "",
      precio_comision: data.precioComision || "",
      facturacion_mensual: data.facturacionMensual || "",
      origen_clientes_hoy: data.origenClientesHoy || "",
      objecion_mas_frecuente: data.objecionMasFrecuente || "",
      que_no_funciona: data.queNoFunciona || "",
      que_sabe_hacer_rocio: data.queSabeHacerRocio || "",
      que_preguntan_hoy: data.quePreguntanHoy || "",
      a_quien_ayudo_informalmente: data.aQuienAyudoInformalmente || "",
      que_intento_antes: data.queIntentoAntes || "",
      tiempo_disponible_semana: data.tiempoDisponibleSemana || "",
      // Punto cero
      categoria_negocio: data.categoriaNegocio,
      moneda_entrada: data.monedaEntrada,
      rubro: data.rubro,
      nicho: data.nicho,
      // Paradigma único
      consenso_a_romper: data.consensoARomper,
      tu_postura: data.tuPostura,
      nombre_marca: data.nombreMarca,
      que_significa_en_concreto: data.queSignificaEnConcreto,
      // Historia
      cuando_empezo: data.cuandoEmpezo,
      el_fondo: data.elFondo,
      el_giro: data.elGiro,
      la_prueba: data.laPrueba,
      objecion_que_desarma: data.objecionQueDesarma,
      lo_que_todavia_cuesta: data.loQueTodaviaCuesta,
      frase_para_el_que_duda: data.fraseParaElQueDuda,
      // Testimonios
      primer_antes_despues: data.primerAntesDespues || "",
      // Presencia digital
      redes_existentes: data.redesExistentes || "",
      bio_actual: data.bioActual || "",
      foto_perfil_cumple: data.fotoPerfilCumple || "",
      // Objetivo medible
      como_se_va_a_saber: data.comoSeVaASaber,
      // Diagnóstico del negocio
      negocio_en_una_frase: data.negocioEnUnaFrase,
      diferenciacion_corta: data.diferenciacionCorta,
      cuello_de_botella: data.cuelloDeBotella,
      que_no_va_a_hacer: data.queNoVaAHacer,
      // Competencia
      competidores_concretos: data.competidoresConcretos,
      que_hacen_ellos: data.queHacenEllos,
      que_podes_hacer_vos: data.quePodesHacerVos,
      // Oportunidades
      oportunidades_identificadas: data.oportunidadesIdentificadas,
      // Avatar propietario
      propietario_escena_del_dia: data.propietarioEscenaDelDia,
      propietario_dolores: data.propietarioDolores,
      propietario_intento_antes: data.propietarioIntentoAntes,
      propietario_objeciones: data.propietarioObjeciones,
      propietario_frase_que_lo_convence: data.propietarioFraseQueLoConvence,
      // Avatar huésped
      huesped_escena_del_dia: data.huespedEscenaDelDia,
      huesped_dolores: data.huespedDolores,
      huesped_intento_antes: data.huespedIntentoAntes,
      huesped_objeciones: data.huespedObjeciones,
      huesped_frase_que_lo_convence: data.huespedFraseQueLoConvence,
      // Lenguaje
      frases_propietarios: data.frasesPropietarios,
      frases_huespedes: data.frasesHuespedes,
      contenido_que_consumen: data.contenidoQueConsumen,
      // Oferta al propietario
      promesa_propietario: data.promesaPropietario,
      incluye_oferta_propietario: data.incluyeOfertaPropietario,
      por_que_incomparable_propietario: data.porQueIncomparablePropietario,
      modelo_comision_propietario: data.modeloComisionPropietario,
      // Oferta al huésped
      promesa_huesped: data.promesaHuesped,
      incluye_oferta_huesped: data.incluyeOfertaHuesped,
      precio_condiciones_huesped: data.precioCondicionesHuesped,
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    console.error("Error saving encuesta completa to Supabase:", error);
    throw error;
  }

  return result;
}

export async function saveEncuestaCoachingToDatabase(data: any) {
  if (!supabase) {
    throw new Error("Supabase no configurado (falta SUPABASE_SERVICE_ROLE_KEY)");
  }
  const { data: result, error } = await supabase.from("encuestas_coaching").insert([
    {
      nombre: data.nombre,
      email: data.email,
      whatsapp: data.whatsapp,
      rol_actual: data.rolActual,
      empresa: data.empresa || "",
      ciudad: data.ciudad,
      quien_paga: data.quienPaga,
      personas_a_cargo: data.personasACargo,
      nivel_jerarquico: data.nivelJerarquico || "",
      modalidad_preferida: data.modalidadPreferida || "",
      hay_presupuesto: data.hayPresupuesto || "",
      quien_mas_deberia_estar: data.quienMasDeberiaEstar || "",
      situacion_laboral: data.situacionLaboral || "",
      proceso_previo: data.procesoPrevio || "",
      plazo_en_mente: data.plazoEnMente || "",
      desafio_principal: data.desafioPrincipal,
      que_hiciste_hasta_ahora: data.queHicisteHastaAhora,
      por_que_no_funciono: data.porQueNoFunciono,
      impacto_real: data.impactoReal,
      desde_cuando: data.desdeCuando,
      causas_de_fondo: data.causasDeFondo,
      consecuencias_no_resolver: data.consecuenciasNoResolver,
      solucion_optima: data.solucionOptima,
      impactos_tangibles: data.impactosTangibles,
      impacto_personal: data.impactoPersonal,
      condiciones_de_piso: data.condicionesDePiso || "",
      futuro_si_no_resuelve: data.futuroSiNoResuelve,
      que_esperas_del_proceso: data.queEsperasDelProceso,
      comunicacion_preferida: data.comunicacionPreferida,
      observaciones: data.observaciones || "",
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    console.error("Error saving encuesta coaching to Supabase:", error);
    throw error;
  }

  return result;
}
