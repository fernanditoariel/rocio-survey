import { SurveyFormCoaching } from "@/components/survey-form-coaching";

export default function EncuestaCoaching() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="text-4xl">🧭</div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Encuesta de Descubrimiento
          </h1>
          <p className="text-lg text-slate-600">
            Coaching Ejecutivo y Liderazgo con Fernando Di Fazio
          </p>
        </div>
      </div>
      <SurveyFormCoaching />
    </main>
  );
}
