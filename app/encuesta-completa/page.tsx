import { SurveyFormCompleta } from "@/components/survey-form-completa";

export default function EncuestaCompleta() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="text-4xl">📚</div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Encuesta Completa de Descubrimiento
          </h1>
          <p className="text-lg text-slate-600">
            Todas las preguntas del proyecto, en un solo lugar
          </p>
        </div>
      </div>
      <SurveyFormCompleta />
    </main>
  );
}
