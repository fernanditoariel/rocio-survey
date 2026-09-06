import { NextRequest, NextResponse } from "next/server";
import { webBriefSchema } from "@/lib/schema-web";
import { saveWebBriefToDatabase } from "@/lib/supabase";
import { sendWebBriefEmailToFernando } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = webBriefSchema.parse(body);

    console.log("Web brief received:", validatedData);

    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
      try {
        await saveWebBriefToDatabase(validatedData);
        console.log("Saved web brief to Supabase successfully");
      } catch (dbError) {
        console.error("Database error (non-fatal):", dbError);
      }
    } else {
      console.log("Supabase not configured - skipping database save");
    }

    if (process.env.RESEND_API_KEY) {
      try {
        await sendWebBriefEmailToFernando(validatedData);
        console.log("Web brief email sent to Fernando");
      } catch (emailError) {
        console.error("Email error:", emailError);
      }
    } else {
      console.log("Resend API key not configured - skipping email");
    }

    return NextResponse.json(
      { success: true, message: "Formulario recibido correctamente", data: validatedData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing web brief:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error al procesar el formulario",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 400 }
    );
  }
}
