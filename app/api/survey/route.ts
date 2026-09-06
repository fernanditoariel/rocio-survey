import { NextRequest, NextResponse } from "next/server";
import { surveySchema } from "@/lib/schema";
import { saveSurveyToDatabase } from "@/lib/supabase";
import { sendSurveyEmailToFernando, sendConfirmationEmailToRocio } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar con Zod
    const validatedData = surveySchema.parse(body);

    console.log("Survey received:", validatedData);

    // Guardar en Supabase
    let dbResult = null;
    try {
      dbResult = await saveSurveyToDatabase(validatedData);
      console.log("Saved to Supabase successfully");
    } catch (dbError) {
      console.error("Database error:", dbError);
      // No throw - continuamos incluso si la BD falla
    }

    // Enviar email a Fernando
    if (process.env.RESEND_API_KEY) {
      try {
        await sendSurveyEmailToFernando(validatedData);
        console.log("Email sent to Fernando");
      } catch (emailError) {
        console.error("Email error:", emailError);
      }

      // Enviar confirmación a Rocío (si tenemos su email)
      // Por ahora usamos un email genérico
      try {
        // await sendConfirmationEmailToRocio("rocio@example.com", validatedData.nombre);
        console.log("Confirmation email skipped - would need Rocio's email");
      } catch (confirmError) {
        console.error("Confirmation email error:", confirmError);
      }
    } else {
      console.log("Resend API key not configured - skipping emails");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Encuesta recibida correctamente",
        data: validatedData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing survey:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Error al procesar la encuesta",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 400 }
    );
  }
}
