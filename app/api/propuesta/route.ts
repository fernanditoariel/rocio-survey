import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://wncxijoultaghhjzxwab.supabase.co";
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { error: "Supabase not configured" },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("propuestas").insert([
      {
        nombre: data.nombre || "",
        email: data.email || "",
        whatsapp: data.whatsapp || "",
        plataforma_precio: data.plataforma_precio || "",
        plataforma_cuotas: data.plataforma_cuotas || "",
        diseno_precio: data.diseno_precio || "",
        diseno_cuotas: data.diseno_cuotas || "",
        marketing_precio: data.marketing_precio || "",
        marketing_cuotas: data.marketing_cuotas || "",
        redes_precio: data.redes_precio || "",
        redes_cuotas: data.redes_cuotas || "",
        soporte_precio: data.soporte_precio || "",
        soporte_cuotas: data.soporte_cuotas || "",
        total_monto: data.total_monto || "",
        total_cuotas: data.total_cuotas || "",
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Supabase error:", JSON.stringify(error));
      return NextResponse.json(
        { error: error.message || JSON.stringify(error) },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Error saving propuesta" },
      { status: 500 }
    );
  }
}
