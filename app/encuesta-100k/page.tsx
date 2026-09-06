import { SurveyForm100k } from "@/components/survey-form-100k";

export default function Encuesta100k() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="text-4xl">📘</div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Mi Punto de Partida
          </h1>
          <p className="text-lg text-slate-600">
            Manual de Negocio 100K
          </p>
        </div>
      </div>
      <SurveyForm100k />
    </main>
  );
}
