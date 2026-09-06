import { NextRequest, NextResponse } from "next/server";
import { encuesta100kSchema } from "@/lib/schema-100k";
import { sendEncuesta100KEmailToFernando } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = encuesta100kSchema.parse(body);
    console.log("Encuesta 100k received:", validatedData);

    if (process.env.RESEND_API_KEY) {
      try {
        await sendEncuesta100KEmailToFernando(validatedData);
        console.log("Encuesta 100k email sent to Fernando");
      } catch (emailError) {
        console.error("Email error:", emailError);
      }
    } else {
      console.log("Resend API key not configured - skipping email");
    }

    return NextResponse.json(
      { success: true, message: "Encuesta recibida correctamente", data: validatedData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing encuesta 100k:", error);
    return NextResponse.json(
      { success: false, message: "Error al procesar la encuesta", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 400 }
    );
  }
}
