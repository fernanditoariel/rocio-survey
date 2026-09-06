import { SurveyFormWeb } from "@/components/survey-form-web";

export default function FormularioWeb() {
  return (
    <main className="min-h-screen py-12 bg-slate-50">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="text-4xl">🧭</div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Antes de Construir tu Web</h1>
          <p className="text-lg text-slate-600">
            Definiciones de negocio y técnicas para armar la plataforma
          </p>
        </div>
      </div>
      <SurveyFormWeb />
    </main>
  );
}
