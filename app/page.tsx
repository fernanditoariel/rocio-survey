import { SurveyForm } from "@/components/survey-form";

export default function Home() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="text-4xl">🏠</div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Tu Marketplace de Propiedades
          </h1>
          <p className="text-lg text-slate-600">
            Ayudemos a Rocío a entender qué necesitás para digitalizar tu negocio
          </p>
        </div>
      </div>
      <SurveyForm />
    </main>
  );
}
