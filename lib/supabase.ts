import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function saveSurveyToDatabase(data: any) {
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
