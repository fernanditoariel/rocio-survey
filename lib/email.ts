import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendSurveyEmailToFernando(data: any) {
  try {
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
