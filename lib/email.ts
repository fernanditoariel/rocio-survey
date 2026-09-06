import { Resend } from "resend";

export async function sendSurveyEmailToFernando(data: any) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0284c7; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .section { background: #f8fafc; padding: 15px; margin: 10px 0; border-left: 4px solid #0284c7; }
    .section-title { font-weight: bold; color: #0284c7; margin-bottom: 8px; }
    .footer { text-align: center; color: #999; margin-top: 30px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📋 Nueva Encuesta Completada</h1>
      <p>Rocío completó la encuesta de descubrimiento</p>
    </div>

    <div class="section">
      <div class="section-title">👤 Datos Básicos</div>
      <p><strong>Nombre:</strong> ${data.nombre}</p>
      <p><strong>Edad:</strong> ${data.edad}</p>
      <p><strong>Ubicación:</strong> ${data.ubicacion}</p>
      <p><strong>Experiencia:</strong> ${data.experiencia}</p>
    </div>

    <div class="section">
      <div class="section-title">💼 Sobre el Negocio</div>
      <p><strong>Tipo:</strong> ${data.tipoNegocio}</p>
      <p><strong>Modelo:</strong> ${data.modeloNegocio}</p>
      <p><strong>Target Market:</strong> ${data.targetMarket}</p>
      <p><strong>Barreras:</strong> ${data.barreras}</p>
    </div>

    <div class="section">
      <div class="section-title">🌐 Sobre la Web</div>
      <p><strong>Tipo de Web:</strong> ${data.tipoWeb}</p>
      <p><strong>Funcionalidades:</strong> ${data.funcionalidades}</p>
      <p><strong>Presupuesto:</strong> ${data.presupuesto}</p>
      <p><strong>Timeline:</strong> ${data.timeline}</p>
    </div>

    <div class="section">
      <div class="section-title">🎯 Expectativas</div>
      <p><strong>Motivación:</strong> ${data.motivacion}</p>
      <p><strong>Comunicación:</strong> ${data.comunicacion}</p>
      ${data.observaciones ? `<p><strong>Observaciones:</strong> ${data.observaciones}</p>` : ""}
    </div>

    <div class="footer">
      <p>Esta encuesta fue completada el ${new Date().toLocaleString("es-AR")}</p>
      <p>Accede a tu dashboard de Vercel para ver todos los datos</p>
    </div>
  </div>
</body>
</html>
    `;

    const result = await resend.emails.send({
      from: "Rocío Survey <onboarding@resend.dev>",
      to: process.env.SURVEY_EMAIL_TO || "agenciawebhispana@gmail.com",
      subject: `📋 Nueva Encuesta: ${data.nombre}`,
      html: emailContent,
    });

    console.log("Email sent successfully:", result);
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

export async function sendConfirmationEmailToRocio(email: string, nombre: string) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return null;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: "Agencia Web Hispana <onboarding@resend.dev>",
      to: email,
      subject: "✅ Recibimos tu Encuesta - Nos vemos mañana",
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0284c7; color: white; padding: 20px; border-radius: 8px; text-align: center; }
    .content { padding: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✅ ¡Gracias ${nombre}!</h1>
    </div>
    <div class="content">
      <p>Recibimos tu encuesta de descubrimiento correctamente.</p>
      <p>Fernando revisará tus respuestas y mañana en la reunión profundizaremos en los detalles de tu proyecto.</p>
      <p><strong>Nos vemos mañana a las 16hs en Bahía Blanca 🚀</strong></p>
      <p>Si tienes dudas antes de la reunión, no dudes en escribirle a Fernando por WhatsApp.</p>
      <hr>
      <p style="font-size: 12px; color: #999;">Email enviado por Agencia Web Hispana</p>
    </div>
  </div>
</body>
</html>
      `,
    });

    return result;
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    // No throw, solo log - el survey ya se guardó
    return null;
  }
}

export async function sendWebBriefEmailToFernando(data: any) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const row = (label: string, value: any) =>
      value ? `<p><strong>${label}:</strong> ${value}</p>` : "";

    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0e6b6b; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .section { background: #f8fafc; padding: 15px; margin: 10px 0; border-left: 4px solid #0e6b6b; }
    .section-title { font-weight: bold; color: #0e6b6b; margin-bottom: 8px; }
    .footer { text-align: center; color: #999; margin-top: 30px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Formulario "Antes de Construir tu Web"</h1>
      <p>Rocío completó las definiciones para la web</p>
    </div>

    <div class="section">
      <div class="section-title">Negocio y oferta</div>
      ${row("Cómo consigue propietarios", data.reclutamiento)}
      ${row("Propuesta de valor al dueño", data.propuestaValorDueno)}
      ${row("Modelo de comisión", data.modeloComision)}
      ${row("Porcentaje de comisión", data.porcentajeComision)}
      ${row("Moderación de publicaciones", data.moderacion)}
      ${row("Requisitos al dueño", data.requisitosDueno)}
      ${row("Fotos", data.fotos)}
      ${row("Cuándo cobra el dueño", data.cobroDueno)}
      ${row("Resolución de reclamos", data.resolucionReclamos)}
    </div>

    <div class="section">
      <div class="section-title">Marca y dominio</div>
      ${row("Nombre de marca", data.nombreMarca)}
      ${row("Dominio", data.dominio)}
      ${row("Referencias visuales", data.referenciasVisuales)}
      ${row("Logo existente", data.logoExistente)}
    </div>

    <div class="section">
      <div class="section-title">Alcance y contenido</div>
      ${row("Alcance del lanzamiento", data.alcanceLanzamiento)}
      ${row("Moneda", data.moneda)}
    </div>

    <div class="section">
      <div class="section-title">Pagos y legal</div>
      ${row("MercadoPago", data.mercadoPago)}
      ${row("Inscripción fiscal", data.inscripcionFiscal)}
      ${row("Política de cancelación", data.politicaCancelacion)}
    </div>

    <div class="footer">
      <p>Completado el ${new Date().toLocaleString("es-AR")}</p>
    </div>
  </div>
</body>
</html>
    `;

    const result = await resend.emails.send({
      from: "Formulario Web Rocío <onboarding@resend.dev>",
      to: process.env.WEB_BRIEF_EMAIL_TO || "agenciawebhispana@gmail.com",
      subject: `Formulario web completado: ${data.nombreMarca || "Rocío"}`,
      html: emailContent,
    });

    console.log("Web brief email sent successfully:", result);
    return result;
  } catch (error) {
    console.error("Error sending web brief email:", error);
    throw error;
  }
}

export async function sendEncuestaCompletaEmailToFernando(data: any) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const row = (label: string, value: any) =>
      value ? `<p><strong>${label}:</strong> ${String(value).replace(/\n/g, "<br>")}</p>` : "";

    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { max-width: 640px; margin: 0 auto; padding: 20px; }
    .header { background: #7c3aed; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .section { background: #f8fafc; padding: 15px; margin: 10px 0; border-left: 4px solid #7c3aed; }
    .section-title { font-weight: bold; color: #7c3aed; margin-bottom: 8px; }
    .footer { text-align: center; color: #999; margin-top: 30px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📚 Encuesta Completa Recibida</h1>
      <p>Rocío completó la encuesta unificada de descubrimiento</p>
    </div>

    <div class="section">
      <div class="section-title">👤 Datos Básicos</div>
      ${row("Nombre", data.nombre)}
      ${row("Edad", data.edad)}
      ${row("Ubicación", data.ubicacion)}
      ${row("Experiencia", data.experiencia)}
    </div>

    <div class="section">
      <div class="section-title">💼 Sobre el Negocio</div>
      ${row("Tipo", data.tipoNegocio)}
      ${row("Modelo", data.modeloNegocio)}
      ${row("Target Market", data.targetMarket)}
      ${row("Barreras", data.barreras)}
    </div>

    <div class="section">
      <div class="section-title">🌐 Sobre la Web</div>
      ${row("Tipo de Web", data.tipoWeb)}
      ${row("Funcionalidades", data.funcionalidades)}
      ${row("Presupuesto", data.presupuesto)}
      ${row("Timeline", data.timeline)}
      ${row("Ciudades", data.ciudades)}
      ${row("Estrategia de marketing", data.estrategiaMarketing)}
      ${row("Redes sociales", data.redesSociales)}
      ${row("Gestor de contenido", data.gestorContenido)}
    </div>

    <div class="section">
      <div class="section-title">🎯 Expectativas</div>
      ${row("Motivación", data.motivacion)}
      ${row("Comunicación", data.comunicacion)}
      ${row("Observaciones", data.observaciones)}
    </div>

    <div class="section">
      <div class="section-title">🚪 Punto de Partida</div>
      ${row("¿Ya existe algo para vender hoy?", data.existeAlgoParaVender)}
      ${row("Qué se vende", data.queSeVende)}
      ${row("A quién se le vende", data.aQuienSeVende)}
      ${row("Precio / comisión", data.precioComision)}
      ${row("Facturación mensual", data.facturacionMensual)}
      ${row("Origen de clientes hoy", data.origenClientesHoy)}
      ${row("Objeción más frecuente", data.objecionMasFrecuente)}
      ${row("Qué no funciona", data.queNoFunciona)}
      ${row("Qué sabe hacer Rocío", data.queSabeHacerRocio)}
      ${row("Qué le preguntan hoy", data.quePreguntanHoy)}
      ${row("A quién ayudó informalmente", data.aQuienAyudoInformalmente)}
      ${row("Qué intentó antes", data.queIntentoAntes)}
      ${row("Tiempo disponible por semana", data.tiempoDisponibleSemana)}
    </div>

    <div class="section">
      <div class="section-title">🎯 Punto Cero</div>
      ${row("Categoría de negocio", data.categoriaNegocio)}
      ${row("Moneda de entrada", data.monedaEntrada)}
      ${row("Rubro", data.rubro)}
      ${row("Nicho", data.nicho)}
    </div>

    <div class="section">
      <div class="section-title">💡 Paradigma Único</div>
      ${row("Consenso a romper", data.consensoARomper)}
      ${row("Su postura", data.tuPostura)}
      ${row("Nombre de marca", data.nombreMarca)}
      ${row("Qué significa en concreto", data.queSignificaEnConcreto)}
    </div>

    <div class="section">
      <div class="section-title">⭐ La Historia</div>
      ${row("Cuándo empezó", data.cuandoEmpezo)}
      ${row("El fondo", data.elFondo)}
      ${row("El giro", data.elGiro)}
      ${row("La prueba", data.laPrueba)}
      ${row("Objeción que desarma", data.objecionQueDesarma)}
      ${row("Lo que todavía cuesta", data.loQueTodaviaCuesta)}
      ${row("Frase para el que duda", data.fraseParaElQueDuda)}
    </div>

    <div class="section">
      <div class="section-title">🏆 Testimonios y Presencia Digital</div>
      ${row("Primer antes/después", data.primerAntesDespues)}
      ${row("Redes existentes", data.redesExistentes)}
      ${row("Bio actual", data.bioActual)}
      ${row("Foto de perfil cumple", data.fotoPerfilCumple)}
      ${row("Cómo se va a saber que se logró", data.comoSeVaASaber)}
    </div>

    <div class="section">
      <div class="section-title">📊 Diagnóstico del Negocio</div>
      ${row("En una frase", data.negocioEnUnaFrase)}
      ${row("Diferenciación corta", data.diferenciacionCorta)}
      ${row("Cuello de botella", data.cuelloDeBotella)}
      ${row("Qué no va a hacer", data.queNoVaAHacer)}
    </div>

    <div class="section">
      <div class="section-title">🔍 Competencia y Oportunidades</div>
      ${row("Competidores concretos", data.competidoresConcretos)}
      ${row("Qué hacen ellos", data.queHacenEllos)}
      ${row("Qué puede hacer Rocío", data.quePodesHacerVos)}
      ${row("Oportunidades identificadas", data.oportunidadesIdentificadas)}
    </div>

    <div class="section">
      <div class="section-title">🧑‍💼 Avatar: Propietario</div>
      ${row("Escena del día", data.propietarioEscenaDelDia)}
      ${row("Dolores", data.propietarioDolores)}
      ${row("Qué intentó antes", data.propietarioIntentoAntes)}
      ${row("Objeciones", data.propietarioObjeciones)}
      ${row("Frase que lo convence", data.propietarioFraseQueLoConvence)}
    </div>

    <div class="section">
      <div class="section-title">🧳 Avatar: Huésped</div>
      ${row("Escena del día", data.huespedEscenaDelDia)}
      ${row("Dolores", data.huespedDolores)}
      ${row("Qué intentó antes", data.huespedIntentoAntes)}
      ${row("Objeciones", data.huespedObjeciones)}
      ${row("Frase que lo convence", data.huespedFraseQueLoConvence)}
    </div>

    <div class="section">
      <div class="section-title">🗣️ Lenguaje</div>
      ${row("Frases de propietarios", data.frasesPropietarios)}
      ${row("Frases de huéspedes", data.frasesHuespedes)}
      ${row("Contenido que consumen", data.contenidoQueConsumen)}
    </div>

    <div class="section">
      <div class="section-title">🤝 Oferta al Propietario</div>
      ${row("Promesa", data.promesaPropietario)}
      ${row("Qué incluye", data.incluyeOfertaPropietario)}
      ${row("Por qué es incomparable", data.porQueIncomparablePropietario)}
      ${row("Modelo de comisión", data.modeloComisionPropietario)}
    </div>

    <div class="section">
      <div class="section-title">🧳 Oferta al Huésped</div>
      ${row("Promesa", data.promesaHuesped)}
      ${row("Qué incluye", data.incluyeOfertaHuesped)}
      ${row("Precio / condiciones", data.precioCondicionesHuesped)}
    </div>

    <div class="footer">
      <p>Esta encuesta fue completada el ${new Date().toLocaleString("es-AR")}</p>
    </div>
  </div>
</body>
</html>
    `;

    const result = await resend.emails.send({
      from: "Encuesta Completa Rocío <onboarding@resend.dev>",
      to: process.env.ENCUESTA_COMPLETA_EMAIL_TO || "agenciawebhispana@gmail.com",
      subject: `📚 Encuesta Completa: ${data.nombre}`,
      html: emailContent,
    });

    console.log("Encuesta completa email sent successfully:", result);
    return result;
  } catch (error) {
    console.error("Error sending encuesta completa email:", error);
    throw error;
  }
}

export async function sendEncuestaCoachingEmailToFernando(data: any) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const row = (label: string, value: any) =>
      value ? `<p><strong>${label}:</strong> ${String(value).replace(/\n/g, "<br>")}</p>` : "";

    const esCorporativo = data.quienPaga === "empresa";

    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { max-width: 640px; margin: 0 auto; padding: 20px; }
    .header { background: #059669; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .section { background: #f8fafc; padding: 15px; margin: 10px 0; border-left: 4px solid #059669; }
    .section-title { font-weight: bold; color: #059669; margin-bottom: 8px; }
    .footer { text-align: center; color: #999; margin-top: 30px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🧭 Nueva Encuesta de Coaching</h1>
      <p>${data.nombre} completó la encuesta de descubrimiento de coaching ejecutivo</p>
    </div>

    <div class="section">
      <div class="section-title">👤 Datos Básicos</div>
      ${row("Nombre", data.nombre)}
      ${row("Email", data.email)}
      ${row("WhatsApp", data.whatsapp)}
      ${row("Rol actual", data.rolActual)}
      ${row("Empresa", data.empresa)}
      ${row("Ciudad", data.ciudad)}
    </div>

    <div class="section">
      <div class="section-title">🏢 Contexto</div>
      ${row("¿Quién paga?", esCorporativo ? "La empresa" : "El propio prospecto")}
      ${row("Personas a cargo", data.personasACargo)}
      ${esCorporativo ? row("Nivel jerárquico", data.nivelJerarquico) : ""}
      ${esCorporativo ? row("Modalidad preferida", data.modalidadPreferida) : ""}
      ${esCorporativo ? row("¿Hay presupuesto asignado?", data.hayPresupuesto) : ""}
      ${esCorporativo ? row("Quién más debería estar", data.quienMasDeberiaEstar) : ""}
      ${!esCorporativo ? row("Situación laboral", data.situacionLaboral) : ""}
      ${!esCorporativo ? row("¿Proceso de coaching previo?", data.procesoPrevio) : ""}
      ${!esCorporativo ? row("Plazo en mente", data.plazoEnMente) : ""}
    </div>

    <div class="section">
      <div class="section-title">📍 Situación (X)</div>
      ${row("Desafío principal", data.desafioPrincipal)}
      ${row("Qué hizo hasta ahora", data.queHicisteHastaAhora)}
      ${row("Por qué no funcionó", data.porQueNoFunciono)}
      ${row("Impacto real", data.impactoReal)}
    </div>

    <div class="section">
      <div class="section-title">🔍 Conciencia del Problema</div>
      ${row("Desde cuándo", data.desdeCuando)}
      ${row("Causas de fondo", data.causasDeFondo)}
      ${row("Consecuencias de no resolverlo (Y)", data.consecuenciasNoResolver)}
    </div>

    <div class="section">
      <div class="section-title">🎯 Conciencia de la Solución (Z)</div>
      ${row("Solución óptima", data.solucionOptima)}
      ${row("Impactos tangibles", data.impactosTangibles)}
      ${row("Impacto personal", data.impactoPersonal)}
      ${row("Condiciones de piso", data.condicionesDePiso)}
    </div>

    <div class="section">
      <div class="section-title">⏳ Consecuencia de No Resolverlo</div>
      ${row("Futuro si esto sigue igual", data.futuroSiNoResuelve)}
    </div>

    <div class="section">
      <div class="section-title">✅ Cierre</div>
      ${row("Qué espera del proceso", data.queEsperasDelProceso)}
      ${row("Comunicación preferida", data.comunicacionPreferida)}
      ${row("Observaciones", data.observaciones)}
    </div>

    <div class="footer">
      <p>Esta encuesta fue completada el ${new Date().toLocaleString("es-AR")}</p>
    </div>
  </div>
</body>
</html>
    `;

    const result = await resend.emails.send({
      from: "Encuesta Coaching <onboarding@resend.dev>",
      to: process.env.ENCUESTA_COACHING_EMAIL_TO || "agenciawebhispana@gmail.com",
      subject: `🧭 Nueva Encuesta de Coaching: ${data.nombre}`,
      html: emailContent,
    });

    console.log("Encuesta coaching email sent successfully:", result);
    return result;
  } catch (error) {
    console.error("Error sending encuesta coaching email:", error);
    throw error;
  }
}

export async function sendEncuesta100KEmailToFernando(data: any) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const row = (label: string, value: any) =>
      value ? `<p><strong>${label}:</strong> ${String(value).replace(/\n/g, "<br>")}</p>` : "";

    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; color: #333; }
    .container { max-width: 640px; margin: 0 auto; padding: 20px; }
    .header { background: #d97706; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .section { background: #f8fafc; padding: 15px; margin: 10px 0; border-left: 4px solid #d97706; }
    .section-title { font-weight: bold; color: #d97706; margin-bottom: 8px; }
    .footer { text-align: center; color: #999; margin-top: 30px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📘 Nueva Encuesta — Manual de Negocio 100K</h1>
      <p>${data.nombre} completó su Tab 1 (Mi Punto de Partida)</p>
    </div>

    <div class="section">
      <div class="section-title">👤 Datos Básicos</div>
      ${row("Nombre", data.nombre)}
      ${row("Email", data.email)}
      ${row("Negocio / Nicho", data.negocioNicho)}
      ${row("Objetivo en 12 meses", data.objetivo12Meses)}
    </div>

    <div class="section">
      <div class="section-title">🚪 1.1 La Puerta</div>
      ${row("¿Ya tiene algo concreto que vender?", data.puerta === "si" ? "Sí (Puerta A)" : "No (Puerta B)")}
    </div>

    <div class="section">
      <div class="section-title">📍 1.2 Mi Info Actual / Mi Punto de Arranque</div>
      ${row("Qué vende actualmente", data.queVendesActualmente)}
      ${row("A quién le vende", data.aQuienLeVendes)}
      ${row("A qué precio vende", data.aQuePrecioVendes)}
      ${row("Cuánto factura al mes", data.cuantoFacturasAlMes)}
      ${row("De dónde llegan los clientes", data.deDondeLleganClientes)}
      ${row("Objeción que más escucha", data.objecionMasEscuchas)}
      ${row("Qué no está funcionando", data.queNoEstaFuncionando)}
      ${row("Qué sabe hacer que a otro le costaría", data.queSabesHacer)}
      ${row("Qué le preguntan sus conocidos", data.quePreguntanConocidos)}
      ${row("A quién ha ayudado (aunque gratis)", data.aQuienHasAyudado)}
      ${row("Qué intentó antes que no funcionó", data.queIntentasteAntes)}
      ${row("Tiempo real por semana disponible", data.cuantoTiempoDedicas)}
    </div>

    <div class="section">
      <div class="section-title">🎯 1.3 Mi Punto Cero</div>
      ${row("Categoría de vida", data.categoriaVida)}
      ${row("Moneda de entrada", data.monedaEntrada)}
      ${row("Rubro", data.rubro)}
      ${row("Nicho", data.nicho)}
    </div>

    <div class="section">
      <div class="section-title">💡 1.4 Mi Paradigma Único</div>
      ${row("Consenso de su rubro (a matar)", data.consensoDeMiRubro)}
      ${row("Lo que sostiene", data.loQueYoSostengo)}
      ${row("Cómo lo llama", data.comoLoLlamo)}
      ${row("Qué significa en concreto", data.queSignificaEnConcreto)}
    </div>

    <div class="section">
      <div class="section-title">⭐ 1.5 Mi Historia</div>
      ${row("Cuándo empezó", data.cuandoEmpezo)}
      ${row("El fondo", data.elFondo)}
      ${row("La emoción", data.laEmocion)}
      ${row("El giro", data.elGiro)}
      ${row("La prueba", data.laPrueba)}
      ${row("Objeción que deja sin argumento", data.laObjecionSinArgumento)}
      ${row("Lo que todavía le cuesta", data.loQueTodaviaCuesta)}
      ${row("Frase para quien está donde él/ella estaba", data.laFraseParaOtro)}
    </div>

    <div class="section">
      <div class="section-title">⭐ 1.6 Testimonios y Pruebas</div>
      ${row("Testimonios y pruebas", data.testimoniosYPruebas)}
    </div>

    <div class="section">
      <div class="section-title">📱 1.7 Presencia Digital</div>
      ${row("Instagram", data.instagram)}
      ${row("TikTok", data.tiktok)}
      ${row("YouTube", data.youtube)}
      ${row("Bio actual", data.bioActual)}
      ${row("Foto de perfil actual", data.fotoPerfilActual)}
    </div>

    <div class="section">
      <div class="section-title">🏁 1.8 Objetivo Personal</div>
      ${row("Qué quiere lograr", data.queQuieresLograr)}
      ${row("Cómo sabrá que lo logró", data.comoSabrasQueLoLograste)}
      ${row("Observaciones", data.observaciones)}
    </div>

    <div class="section">
      <div class="section-title">Tab 6 — Mi Estrategia de Contenido</div>
      ${row("Pilar #1 (PROBLEMA) — Nombre del pilar", data.t6_pilar1Nombre)}
      ${row("Pilar #1 (PROBLEMA) — Líneas narrativas de este pilar", data.t6_pilar1Lineas)}
      ${row("Pilar #1 (PROBLEMA) — Palabras clave para investigación", data.t6_pilar1Palabras)}
      ${row("Pilar #2 (SOLUCIÓN) — Nombre del pilar", data.t6_pilar2Nombre)}
      ${row("Pilar #2 (SOLUCIÓN) — Líneas narrativas de este pilar", data.t6_pilar2Lineas)}
      ${row("Pilar #2 (SOLUCIÓN) — Palabras clave para investigación", data.t6_pilar2Palabras)}
      ${row("Pilar #3 (RESULTADO) — Nombre del pilar", data.t6_pilar3Nombre)}
      ${row("Pilar #3 (RESULTADO) — Líneas narrativas de este pilar", data.t6_pilar3Lineas)}
      ${row("Pilar #3 (RESULTADO) — Palabras clave para investigación", data.t6_pilar3Palabras)}
      ${row("Palabra clave #1 (volumen/relevancia y pilar al que pertenece)", data.t6_keyword1)}
      ${row("Palabra clave #2 (volumen/relevancia y pilar al que pertenece)", data.t6_keyword2)}
      ${row("Palabra clave #3 (volumen/relevancia y pilar al que pertenece)", data.t6_keyword3)}
      ${row("Competidores del rubro que analicé", data.t6_competidoresAnalizados)}
      ${row("Ideas que más se repiten en mi nicho", data.t6_ideasRepiten)}
      ${row("Formatos que más se repiten", data.t6_formatosRepiten)}
      ${row("Nivel 1 — Consciencia Baja (público frío, recién descubre su problema): qué formatos o ideas creás", data.t6_nivel1Formatos)}
      ${row("Nivel 2 — Consciencia Media (ya conoce su problema, compara opciones): qué formatos o ideas creás", data.t6_nivel2Formatos)}
      ${row("Nivel 3 — Consciencia Avanzada (ya probó soluciones, no le funcionaron): qué formatos o ideas creás", data.t6_nivel3Formatos)}
      ${row("Nivel 4 — Consciencia Total (listo para comprar): qué formatos o ideas creás", data.t6_nivel4Formatos)}
      ${row("Formato priorizado #1 (y a qué nivel de consciencia corresponde)", data.t6_formatoPriorizado1)}
      ${row("Formato priorizado #2 (y a qué nivel de consciencia corresponde)", data.t6_formatoPriorizado2)}
      ${row("Formato priorizado #3 (y a qué nivel de consciencia corresponde)", data.t6_formatoPriorizado3)}
      ${row("Idea #1", data.t6_idea1)}
      ${row("Idea #2", data.t6_idea2)}
      ${row("Idea #3", data.t6_idea3)}
      ${row("Idea #4", data.t6_idea4)}
      ${row("Idea #5", data.t6_idea5)}
      ${row("Idea #6", data.t6_idea6)}
      ${row("Clasificación #1 (Idea → Propósito → Formato)", data.t6_clasifica1)}
      ${row("Clasificación #2 (Idea → Propósito → Formato)", data.t6_clasifica2)}
      ${row("Clasificación #3 (Idea → Propósito → Formato)", data.t6_clasifica3)}
      ${row("Clasificación #4 (Idea → Propósito → Formato)", data.t6_clasifica4)}
      ${row("Clasificación #5 (Idea → Propósito → Formato)", data.t6_clasifica5)}
    </div>

    <div class="section">
      <div class="section-title">Tab 7 — Banco de Guiones</div>
      ${row("Guion #1 (idea, formato, gancho textual, gancho visual, CTA)", data.t7_indice1)}
      ${row("Guion #2 (idea, formato, gancho textual, gancho visual, CTA)", data.t7_indice2)}
      ${row("Guion #3 (idea, formato, gancho textual, gancho visual, CTA)", data.t7_indice3)}
      ${row("Fecha", data.t7_g1Fecha)}
      ${row("Plataforma", data.t7_g1Plataforma)}
      ${row("Pilar", data.t7_g1Pilar)}
      ${row("Estructura usada", data.t7_g1Estructura)}
      ${row("Gancho verbal (primeras 1-3 frases)", data.t7_g1GanchoVerbal)}
      ${row("Gancho visual (qué se ve en pantalla)", data.t7_g1GanchoVisual)}
      ${row("Gancho textual (texto superpuesto)", data.t7_g1GanchoTextual)}
      ${row("Desarrollo", data.t7_g1Desarrollo)}
      ${row("CTA", data.t7_g1Cta)}
      ${row("Resultado (llenar después de publicar)", data.t7_g1Resultado)}
      ${row("Notas de mejora", data.t7_g1Notas)}
      ${row("Fecha", data.t7_g2Fecha)}
      ${row("Plataforma", data.t7_g2Plataforma)}
      ${row("Pilar", data.t7_g2Pilar)}
      ${row("Estructura usada", data.t7_g2Estructura)}
      ${row("Gancho verbal (primeras 1-3 frases)", data.t7_g2GanchoVerbal)}
      ${row("Gancho visual (qué se ve en pantalla)", data.t7_g2GanchoVisual)}
      ${row("Gancho textual (texto superpuesto)", data.t7_g2GanchoTextual)}
      ${row("Desarrollo", data.t7_g2Desarrollo)}
      ${row("CTA", data.t7_g2Cta)}
      ${row("Resultado (llenar después de publicar)", data.t7_g2Resultado)}
      ${row("Notas de mejora", data.t7_g2Notas)}
      ${row("Fecha", data.t7_g3Fecha)}
      ${row("Plataforma", data.t7_g3Plataforma)}
      ${row("Pilar", data.t7_g3Pilar)}
      ${row("Estructura usada", data.t7_g3Estructura)}
      ${row("Gancho verbal (primeras 1-3 frases)", data.t7_g3GanchoVerbal)}
      ${row("Gancho visual (qué se ve en pantalla)", data.t7_g3GanchoVisual)}
      ${row("Gancho textual (texto superpuesto)", data.t7_g3GanchoTextual)}
      ${row("Desarrollo", data.t7_g3Desarrollo)}
      ${row("CTA", data.t7_g3Cta)}
      ${row("Resultado (llenar después de publicar)", data.t7_g3Resultado)}
      ${row("Notas de mejora", data.t7_g3Notas)}
      ${row("Tu contexto de marca en una línea", data.t7_contextoMarca)}
      ${row("Tus palabras o frases características", data.t7_palabrasCaracteristicas)}
      ${row("Tu tono principal", data.t7_tonoPrincipal)}
      ${row("Pegá acá el resultado final del Brand Voice (si ya lo generaste con IA)", data.t7_brandVoiceResultado)}
      ${row("Cuenta / URL", data.t7_v1Cuenta)}
      ${row("Gancho verbal (primeras 3 segundos)", data.t7_v1GanchoVerbal)}
      ${row("Gancho visual (qué se ve en pantalla)", data.t7_v1GanchoVisual)}
      ${row("Gancho textual (texto superpuesto)", data.t7_v1GanchoTextual)}
      ${row("Estructura usada", data.t7_v1Estructura)}
      ${row("Por qué creés que funcionó", data.t7_v1PorQue)}
      ${row("Cuenta / URL", data.t7_v2Cuenta)}
      ${row("Gancho verbal (primeras 3 segundos)", data.t7_v2GanchoVerbal)}
      ${row("Gancho visual (qué se ve en pantalla)", data.t7_v2GanchoVisual)}
      ${row("Gancho textual (texto superpuesto)", data.t7_v2GanchoTextual)}
      ${row("Estructura usada", data.t7_v2Estructura)}
      ${row("Por qué creés que funcionó", data.t7_v2PorQue)}
      ${row("Cuenta / URL", data.t7_v3Cuenta)}
      ${row("Gancho verbal (primeras 3 segundos)", data.t7_v3GanchoVerbal)}
      ${row("Gancho visual (qué se ve en pantalla)", data.t7_v3GanchoVisual)}
      ${row("Gancho textual (texto superpuesto)", data.t7_v3GanchoTextual)}
      ${row("Estructura usada", data.t7_v3Estructura)}
      ${row("Por qué creés que funcionó", data.t7_v3PorQue)}
      ${row("Tipo de gancho verbal que más se repite", data.t7_patronGanchoVerbal)}
      ${row("Tipo de gancho visual que más se repite", data.t7_patronGanchoVisual)}
      ${row("Características comunes en las estructuras de guion", data.t7_caracteristicasComunes)}
      ${row("Patrones que VOS querés incorporar", data.t7_patronesIncorporar)}
      ${row("Estructura #1 — Cuándo la usás", data.t7_e1CuandoUso)}
      ${row("Estructura #1 — Ejemplo de guion tuyo que la usó", data.t7_e1Ejemplo)}
      ${row("Estructura #2 — Cuándo la usás", data.t7_e2CuandoUso)}
      ${row("Estructura #2 — Ejemplo de guion tuyo que la usó", data.t7_e2Ejemplo)}
      ${row("Estructura #3 — Cuándo la usás", data.t7_e3CuandoUso)}
      ${row("Estructura #3 — Ejemplo de guion tuyo que la usó", data.t7_e3Ejemplo)}
      ${row("Tu estructura favorita hasta ahora", data.t7_estructuraFavorita)}
      ${row("Por qué", data.t7_estructuraFavoritaPorque)}
      ${row("Tipo de gancho que mejor te funciona (pregunta / dato / confesión / afirmación)", data.t7_tipoGanchoMejor)}
      ${row("Tus 5 mejores ganchos verbales creados — #1", data.t7_gancho1)}
      ${row("Tus 5 mejores ganchos verbales creados — #2", data.t7_gancho2)}
      ${row("Tus 5 mejores ganchos verbales creados — #3", data.t7_gancho3)}
      ${row("Tus 5 mejores ganchos verbales creados — #4", data.t7_gancho4)}
      ${row("Tus 5 mejores ganchos verbales creados — #5", data.t7_gancho5)}
      ${row("Tu patrón ganador analizado con el sistema E.N.C. — Estímulo núcleo", data.t7_estimuloNucleo)}
      ${row("Nivel de carga cognitiva", data.t7_nivelCargaCognitiva)}
      ${row("Contexto", data.t7_contextoENC)}
      ${row("Ejemplo de gancho visual que harás", data.t7_ejemploGanchoVisual)}
      ${row("Forma visual que usarás", data.t7_formaVisual)}
      ${row("Cómo la aplicás en tu nicho", data.t7_comoAplicoFormaVisual)}
      ${row("Gancho visual #1 que el bot te generó y querés usar", data.t7_botGancho1)}
      ${row("Gancho visual #2 que el bot te generó y querés usar", data.t7_botGancho2)}
      ${row("Gancho visual #3 que el bot te generó y querés usar", data.t7_botGancho3)}
      ${row("Referencia que analizás antes de crear (qué cuenta, hashtag o video)", data.t7_referenciaAnalizo)}
      ${row("Tus 3 mejores ganchos visuales hasta ahora — #1", data.t7_mejorGanchoVisual1)}
      ${row("Tus 3 mejores ganchos visuales hasta ahora — #2", data.t7_mejorGanchoVisual2)}
      ${row("Tus 3 mejores ganchos visuales hasta ahora — #3", data.t7_mejorGanchoVisual3)}
      ${row("CTA para Reels / TikTok", data.t7_ctaReels)}
      ${row("CTA para Carruseles", data.t7_ctaCarruseles)}
      ${row("CTA para Historias", data.t7_ctaHistorias)}
      ${row("CTA para generar comentarios", data.t7_ctaComentarios)}
      ${row("CTA para generar guardados", data.t7_ctaGuardados)}
      ${row("CTA para generar DMs / leads", data.t7_ctaDms)}
      ${row("CTA para venta directa", data.t7_ctaVentaDirecta)}
      ${row("Tu CTA #1 más efectivo", data.t7_ctaEfectivo1)}
      ${row("Resultado / respuesta que generó", data.t7_ctaEfectivo1Resultado)}
      ${row("Tu CTA #2 más efectivo", data.t7_ctaEfectivo2)}
      ${row("Resultado / respuesta que generó", data.t7_ctaEfectivo2Resultado)}
    </div>

    <div class="section">
      <div class="section-title">Tab 8 — Calendario de Contenido</div>
      ${row("Frecuencia de publicación semanal elegida", data.t8_frecuenciaPublicacion)}
      ${row("Mejor horario de publicación (según tus métricas)", data.t8_mejorHorario)}
      ${row("Lunes — idea, nivel de energía, formato y ganchos", data.t8_semanaLunes)}
      ${row("Martes — idea, nivel de energía, formato y ganchos", data.t8_semanaMartes)}
      ${row("Miércoles — idea, nivel de energía, formato y ganchos", data.t8_semanaMiercoles)}
      ${row("Jueves — idea, nivel de energía, formato y ganchos", data.t8_semanaJueves)}
      ${row("Viernes — idea, nivel de energía, formato y ganchos", data.t8_semanaViernes)}
      ${row("Sábado — idea, nivel de energía, formato y ganchos", data.t8_semanaSabado)}
      ${row("Domingo — idea, nivel de energía, formato y ganchos", data.t8_semanaDomingo)}
      ${row("Idea en pipeline #1 (idea, formato, prioridad)", data.t8_pipeline1)}
      ${row("Idea en pipeline #2 (idea, formato, prioridad)", data.t8_pipeline2)}
      ${row("Idea en pipeline #3 (idea, formato, prioridad)", data.t8_pipeline3)}
    </div>

    <div class="section">
      <div class="section-title">Tab 9 — Banco de Carruseles</div>
      ${row("Carrusel #1 (tema, estilo, tipo, resultado)", data.t9_indice1)}
      ${row("Carrusel #2 (tema, estilo, tipo, resultado)", data.t9_indice2)}
      ${row("Tema", data.t9_c1Tema)}
      ${row("Estilo de carrusel usado", data.t9_c1Estilo)}
      ${row("Tipo", data.t9_c1Tipo)}
      ${row("Referencia visual (cuenta que inspiró el formato)", data.t9_c1Referencia)}
      ${row("Guion completo, slide por slide (texto principal y elemento visual de cada uno)", data.t9_c1Slides)}
      ${row("Resultado (llenar después de publicar)", data.t9_c1Resultado)}
      ${row("Tema", data.t9_c2Tema)}
      ${row("Estilo de carrusel usado", data.t9_c2Estilo)}
      ${row("Tipo", data.t9_c2Tipo)}
      ${row("Referencia visual (cuenta que inspiró el formato)", data.t9_c2Referencia)}
      ${row("Guion completo, slide por slide (texto principal y elemento visual de cada uno)", data.t9_c2Slides)}
      ${row("Resultado (llenar después de publicar)", data.t9_c2Resultado)}
    </div>

    <div class="section">
      <div class="section-title">Tab 10 — Mi Lead Magnet</div>
      ${row("Nombre del lead magnet", data.t10_nombre)}
      ${row("Promesa principal (qué aprenden / obtienen)", data.t10_promesa)}
      ${row("Formato", data.t10_formato)}
      ${row("Tiempo de consumo", data.t10_tiempoConsumo)}
      ${row("¿A qué dolor del avatar responde?", data.t10_dolorResponde)}
      ${row("¿Cómo conecta con la oferta principal?", data.t10_comoConecta)}
      ${row("Enlace al lead magnet (si ya existe)", data.t10_enlace)}
      ${row("Cuántas personas lo han pedido", data.t10_cuantasPedido)}
      ${row("Conversión a compra (aprox.)", data.t10_conversion)}
      ${row("Ajustes realizados", data.t10_ajustes)}
    </div>

    <div class="section">
      <div class="section-title">Tab 11 — Secuencias de Historias</div>
      ${row("Story 1 — Situación de urgencia", data.t11_urgS1)}
      ${row("Story 2 — Prueba breve (testimonio)", data.t11_urgS2)}
      ${row("Story 3 — Detalle concreto de urgencia", data.t11_urgS3)}
      ${row("Story 4 — CTA clara", data.t11_urgS4)}
      ${row("Story 5 (opcional) — Recordatorio final", data.t11_urgS5)}
      ${row("ONE SHOT — Story 1: Impacto visual (el resultado)", data.t11_oneShotS1)}
      ${row("POLLS — Story 1: Identificación (encuesta)", data.t11_pollsS1)}
      ${row("POLLS — Story 2: Segunda encuesta / profundización", data.t11_pollsS2)}
      ${row("POLLS — Story 3+: Profundización y CTA estratégica", data.t11_pollsS3)}
      ${row("LIBRE/LIFESTYLE — Story 1: Escena real (lo que estás haciendo)", data.t11_libreS1)}
      ${row("LIBRE/LIFESTYLE — Story 2: Micro enseñanza (tip o reflexión)", data.t11_libreS2)}
      ${row("Nombre del recurso a entregar", data.t11_lmNombreRecurso)}
      ${row("Story 1 — Presentación del recurso", data.t11_lmS1)}
      ${row("Story 2 — Para quién es y por qué vale la pena", data.t11_lmS2)}
      ${row("Story 3 — Cómo pedirlo (CTA)", data.t11_lmS3)}
      ${row("Palabra clave de activación", data.t11_lmPalabraClave)}
      ${row("Idea #1 para historia (idea, tipo: educar/entretener/vender, CTA)", data.t11_ideaHistoria1)}
      ${row("Idea #2 para historia (idea, tipo: educar/entretener/vender, CTA)", data.t11_ideaHistoria2)}
      ${row("Idea #3 para historia (idea, tipo: educar/entretener/vender, CTA)", data.t11_ideaHistoria3)}
    </div>

    <div class="section">
      <div class="section-title">Tab 12 — Scripts de DMs y Setteo</div>
      ${row("Apertura #1 (de dónde sale la conversación, mensaje de apertura, respuesta típica, ¿funciona?)", data.t12_apertura1)}
      ${row("Apertura #2 (de dónde sale la conversación, mensaje de apertura, respuesta típica, ¿funciona?)", data.t12_apertura2)}
      ${row("Apertura #3 (de dónde sale la conversación, mensaje de apertura, respuesta típica, ¿funciona?)", data.t12_apertura3)}
      ${row("Objeción #1 (objeción, tu respuesta, ¿funciona?, notas de mejora)", data.t12_objecion1)}
      ${row("Objeción #2 (objeción, tu respuesta, ¿funciona?, notas de mejora)", data.t12_objecion2)}
      ${row("Objeción #3 (objeción, tu respuesta, ¿funciona?, notas de mejora)", data.t12_objecion3)}
      ${row("Número de casos de éxito", data.t12_numeroCasos)}
      ${row("Transformación que logran", data.t12_transformacion)}
      ${row("Caso de éxito 1 — ¿Cómo llegó?", data.t12_caso1ComoLlego)}
      ${row("Caso de éxito 1 — Su victoria resumida en 1 línea", data.t12_caso1Victoria)}
      ${row("Caso de éxito 2 — ¿Cómo llegó?", data.t12_caso2ComoLlego)}
      ${row("Caso de éxito 2 — Su victoria resumida en 1 línea", data.t12_caso2Victoria)}
      ${row("Caso de éxito 3 — ¿Cómo llegó?", data.t12_caso3ComoLlego)}
      ${row("Caso de éxito 3 — Su victoria resumida en 1 línea", data.t12_caso3Victoria)}
    </div>

    <div class="section">
      <div class="section-title">Tab 13 — Banco de CTAs</div>
      ${row("CTAs para Reels/TikToks que probaste (CTA, contexto de uso, cuántos comentarios genera)", data.t13_ctaReelsDetalle)}
      ${row("CTAs para Carruseles que probaste (CTA, contexto de uso, cuántos comentarios genera)", data.t13_ctaCarruselesDetalle)}
      ${row("CTAs para Historias que probaste (CTA, contexto de uso, cuántos comentarios genera)", data.t13_ctaHistoriasDetalle)}
      ${row("CTA #1", data.t13_ctaTop1)}
      ${row("Por qué funciona", data.t13_ctaTop1PorQue)}
      ${row("CTA #2", data.t13_ctaTop2)}
      ${row("Por qué funciona", data.t13_ctaTop2PorQue)}
    </div>

    <div class="section">
      <div class="section-title">Tab 14 — Banco de Ads</div>
      ${row("Competidor #1 (nombre, ángulo que usa, gancho que usa, qué lo hace efectivo)", data.t14_competidor1)}
      ${row("Competidor #2 (nombre, ángulo que usa, gancho que usa, qué lo hace efectivo)", data.t14_competidor2)}
      ${row("Competidor #3 (nombre, ángulo que usa, gancho que usa, qué lo hace efectivo)", data.t14_competidor3)}
      ${row("Ángulo #1 (ángulo, dolor del avatar que aborda, prioridad para probar)", data.t14_angulo1)}
      ${row("Ángulo #2 (ángulo, dolor del avatar que aborda, prioridad para probar)", data.t14_angulo2)}
      ${row("Ángulo #3 (ángulo, dolor del avatar que aborda, prioridad para probar)", data.t14_angulo3)}
      ${row("Ángulo", data.t14_ad1Angulo)}
      ${row("Formato", data.t14_ad1Formato)}
      ${row("Gancho (primeras 3 segundos / primera línea)", data.t14_ad1Gancho)}
      ${row("Desarrollo", data.t14_ad1Desarrollo)}
      ${row("CTA", data.t14_ad1Cta)}
      ${row("Métricas (llenar cuando esté activo: CTR / CPL / ROAS)", data.t14_ad1Metricas)}
      ${row("Ángulo", data.t14_ad2Angulo)}
      ${row("Formato", data.t14_ad2Formato)}
      ${row("Gancho (primeras 3 segundos / primera línea)", data.t14_ad2Gancho)}
      ${row("Desarrollo", data.t14_ad2Desarrollo)}
      ${row("CTA", data.t14_ad2Cta)}
      ${row("Métricas (llenar cuando esté activo: CTR / CPL / ROAS)", data.t14_ad2Metricas)}
      ${row("Ángulo", data.t14_ad3Angulo)}
      ${row("Formato", data.t14_ad3Formato)}
      ${row("Gancho (primeras 3 segundos / primera línea)", data.t14_ad3Gancho)}
      ${row("Desarrollo", data.t14_ad3Desarrollo)}
      ${row("CTA", data.t14_ad3Cta)}
      ${row("Métricas (llenar cuando esté activo: CTR / CPL / ROAS)", data.t14_ad3Metricas)}
    </div>

    <div class="section">
      <div class="section-title">Tab 15 — Mis Campañas</div>
      ${row("Pixel de Meta instalado", data.t15_pixelInstalado)}
      ${row("Dominio verificado", data.t15_dominioVerificado)}
      ${row("Cuenta de anuncios", data.t15_cuentaAnuncios)}
      ${row("Objetivo principal de las campañas", data.t15_objetivoPrincipal)}
      ${row("Campaña #1 (nombre, objetivo, público, presupuesto diario, fecha de inicio)", data.t15_campana1)}
      ${row("Campaña #2 (nombre, objetivo, público, presupuesto diario, fecha de inicio)", data.t15_campana2)}
      ${row("Resumen de tus métricas de campañas hasta ahora (inversión, CPL, CTR, leads, ventas, ROAS)", data.t15_metricasNotas)}
      ${row("Aprendizajes de campañas (qué cambiaste, por qué, si funcionó)", data.t15_aprendizajes)}
    </div>

    <div class="section">
      <div class="section-title">Tab 16 — Mis Métricas de Contenido</div>
      ${row("Análisis semanal de contenido (video con más alcance, mejor retención, más conversiones, insight clave)", data.t16_analisisSemanal)}
      ${row("Banco de videos a resucitar (video, fecha original, por qué funcionó, qué cambio harías)", data.t16_videosResucitar)}
      ${row("Tu plan de acción después de ver las métricas", data.t16_planAccion)}
      ${row("Qué tipos de gancho te funcionan mejor", data.t16_ganchosFuncionan)}
      ${row("Qué estructuras de guion dan más retención", data.t16_estructurasRetencion)}
      ${row("Qué días/horarios tienen más alcance", data.t16_diasHorarios)}
      ${row("Qué formatos convierten más a seguidores", data.t16_formatosSeguidores)}
      ${row("Qué formatos convierten más a clientes", data.t16_formatosClientes)}
    </div>

    <div class="section">
      <div class="section-title">Tab 17 — Banco de YouTube</div>
      ${row("¿YouTube es parte de tu estrategia?", data.t17_esParteEstrategia)}
      ${row("Formato elegido para YouTube", data.t17_formatoElegido)}
      ${row("Frecuencia de publicación", data.t17_frecuencia)}
      ${row("Idea #1 (idea/tema, título propuesto, concepto de miniatura, palabras clave)", data.t17_idea1)}
      ${row("Idea #2 (idea/tema, título propuesto, concepto de miniatura, palabras clave)", data.t17_idea2)}
      ${row("Idea #3 (idea/tema, título propuesto, concepto de miniatura, palabras clave)", data.t17_idea3)}
    </div>

    <div class="section">
      <div class="section-title">Tab 18 — Prompts y Procesos</div>
      ${row("Prompts favoritos para Guionización (proceso, propósito, resultado, prompt base)", data.t18_promptsGuionizacion)}
      ${row("Prompts favoritos para Ganchos", data.t18_promptsGanchos)}
      ${row("Prompts favoritos para Carruseles", data.t18_promptsCarruseles)}
      ${row("Prompts favoritos para Historias", data.t18_promptsHistorias)}
      ${row("Prompts favoritos para Investigación", data.t18_promptsInvestigacion)}
      ${row("Prompts favoritos para Ads", data.t18_promptsAds)}
      ${row("Prompts favoritos de IA generativa (Higgsfield / Gemini / Nanobanana)", data.t18_promptsIAGenerativa)}
    </div>

    <div class="section">
      <div class="section-title">Tab 19 — Mi Plan de Lanzamiento</div>
      ${row("Nombre oficial del programa/masterclass/entrenamiento", data.t19_nombreOferta)}
      ${row("Promesa principal — formato recomendado (Hoy, en X tiempo, vas a... y saldrás con... sin..., usando...)", data.t19_promesaFormato)}
      ${row("Promesa principal — versión para landing (Resultado concreto en duración aunque objeción)", data.t19_promesaLanding)}
      ${row("Qué harán hoy — Acción #1", data.t19_accion1)}
      ${row("Qué harán hoy — Acción #2", data.t19_accion2)}
      ${row("Qué harán hoy — Acción #3", data.t19_accion3)}
      ${row("Qué harán hoy — Acción #4 (opcional)", data.t19_accion4)}
      ${row("Qué se llevan listos — Entregable #1", data.t19_entregable1)}
      ${row("Qué se llevan listos — Entregable #2", data.t19_entregable2)}
      ${row("Qué se llevan listos — Entregable #3", data.t19_entregable3)}
      ${row("Qué se llevan listos — Entregable #4", data.t19_entregable4)}
      ${row("Nombre del sistema", data.t19_nombreSistema)}
      ${row("Cómo funciona tu método y qué lo vuelve único (en 1 frase)", data.t19_descripcionSistema)}
      ${row("Objeción central que neutralizás", data.t19_objecionCentral)}
      ${row("Texto: \"En esta sesión eliminamos [objeción] porque [razón práctica]\"", data.t19_textoObjecion)}
      ${row("Bloque 1 — Nombre y qué se hará", data.t19_bloque1)}
      ${row("Bloque 2 — Nombre y qué se ejecutará", data.t19_bloque2)}
      ${row("Bloque 3 — Nombre y entrega del activo", data.t19_bloque3)}
      ${row("Bloque 4 — Nombre y prueba mínima", data.t19_bloque4)}
      ${row("Bloque 5 — Cierre + CTA: qué acción deben tomar después", data.t19_bloque5)}
      ${row("Demo en vivo (antes→después real / creación de un recurso en vivo / corrección de un ejemplo)", data.t19_demo)}
      ${row("Entrega express (\"[Plantilla X] completada en directo\")", data.t19_entregaExpress)}
      ${row("Bonus #1 (qué es + valor percibido)", data.t19_bonus1)}
      ${row("Bonus #2 (qué es + valor percibido)", data.t19_bonus2)}
      ${row("Bonus #3 (qué es + valor percibido)", data.t19_bonus3)}
      ${row("Resultados finales esperables (\"Saldrás con...\", \"Tendrás listo...\")", data.t19_resultadosFinales)}
      ${row("Contenido del programa (tema/habilidad, aplicación, recurso entregado — en lista)", data.t19_contenidoPrograma)}
      ${row("Resumen final en 1 párrafo para la landing / guion del pitch", data.t19_resumenFinal)}
      ${row("Notas del reporte de resultados del lanzamiento (si ya lo hiciste)", data.t19_reporteLanzamiento)}
    </div>

    <div class="footer">
      <p>Esta encuesta fue completada el ${new Date().toLocaleString("es-AR")}</p>
    </div>
  </div>
</body>
</html>
    `;

    const result = await resend.emails.send({
      from: "Manual de Negocio 100K <onboarding@resend.dev>",
      to: process.env.ENCUESTA_100K_EMAIL_TO || "agenciawebhispana@gmail.com",
      subject: `📘 Nueva Encuesta 100K: ${data.nombre}`,
      html: emailContent,
    });

    console.log("Encuesta 100k email sent successfully:", result);
    return result;
  } catch (error) {
    console.error("Error sending encuesta 100k email:", error);
    throw error;
  }
}
