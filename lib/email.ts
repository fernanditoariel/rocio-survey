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
      to: process.env.SURVEY_EMAIL_TO || "fernando@agenciawebhispana.com",
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
      <p>Rocío completó las definiciones para la web en RentalHive</p>
    </div>

    <div class="section">
      <div class="section-title">Negocio y oferta</div>
      ${row("Cómo consigue propietarios", data.reclutamiento)}
      ${row("Diferenciación vs. sitios locales", data.diferenciacionLocal)}
      ${row("Propuesta de valor al dueño", data.propuestaValorDueno)}
      ${row("Modelo de comisión", data.modeloComision)}
      ${row("Porcentaje de comisión", data.porcentajeComision)}
      ${row("Moderación de publicaciones", data.moderacion)}
      ${row("Requisitos al dueño", data.requisitosDueno)}
      ${row("Fotos", data.fotos)}
      ${row("Doble booking / calendario", data.calendarioDoble)}
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
      ${row("Propiedades confirmadas", data.propiedadesConfirmadas)}
      ${row("Idioma", data.idioma)}
      ${row("Moneda", data.moneda)}
    </div>

    <div class="section">
      <div class="section-title">Pagos y legal</div>
      ${row("MercadoPago", data.mercadoPago)}
      ${row("Inscripción fiscal", data.inscripcionFiscal)}
      ${row("Política de cancelación", data.politicaCancelacion)}
    </div>

    <div class="section">
      <div class="section-title">Técnico (RentalHive)</div>
      ${row("WooCommerce confirmado", data.confirmaWooCommerce)}
      ${row("Google Maps API", data.googleMapsApi)}
      ${row("Reseñas desde el lanzamiento", data.resenasDesdeElLanzamiento)}
      ${row("Mensajería", data.mensajeria)}
      ${row("Soporte", data.soporte)}
      ${row("Observaciones técnicas", data.observacionesTecnicas)}
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
      to: process.env.SURVEY_EMAIL_TO || "fernando@agenciawebhispana.com",
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
