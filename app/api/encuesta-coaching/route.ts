import { NextRequest, NextResponse } from "next/server";
import { encuestaCoachingSchema } from "@/lib/schema-coaching";
import { saveEncuestaCoachingToDatabase } from "@/lib/supabase";
import { sendEncuestaCoachingEmailToFernando } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = encuestaCoachingSchema.parse(body);

    console.log("Encuesta coaching received:", validatedData);

    let dbResult = null;
    try {
      dbResult = await saveEncuestaCoachingToDatabase(validatedData);
      console.log("Saved encuesta coaching to Supabase successfully");
    } catch (dbError) {
      console.error("Database error:", dbError);
    }

    if (process.env.RESEND_API_KEY) {
      try {
        await sendEncuestaCoachingEmailToFernando(validatedData);
        console.log("Encuesta coaching email sent to Fernando");
      } catch (emailError) {
        console.error("Email error:", emailError);
      }
    } else {
      console.log("Resend API key not configured - skipping email");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Encuesta de coaching recibida correctamente",
        data: validatedData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing encuesta coaching:", error);
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
