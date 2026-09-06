import { NextRequest, NextResponse } from "next/server";
import { encuestaCompletaSchema } from "@/lib/schema-completa";
import { saveEncuestaCompletaToDatabase } from "@/lib/supabase";
import { sendEncuestaCompletaEmailToFernando } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = encuestaCompletaSchema.parse(body);

    console.log("Encuesta completa received:", validatedData);

    let dbResult = null;
    try {
      dbResult = await saveEncuestaCompletaToDatabase(validatedData);
      console.log("Saved encuesta completa to Supabase successfully");
    } catch (dbError) {
      console.error("Database error:", dbError);
    }

    if (process.env.RESEND_API_KEY) {
      try {
        await sendEncuestaCompletaEmailToFernando(validatedData);
        console.log("Encuesta completa email sent to Fernando");
      } catch (emailError) {
        console.error("Email error:", emailError);
      }
    } else {
      console.log("Resend API key not configured - skipping email");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Encuesta completa recibida correctamente",
        data: validatedData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing encuesta completa:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error al procesar la encuesta",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 400 }
    );
  }
}
