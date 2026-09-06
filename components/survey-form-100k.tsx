"use client";

import { useState } from "react";
import { FORM_SECTIONS_100K } from "@/lib/constants-100k";

export function SurveyForm100k() {
  const [currentSection, setCurrentSection] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Record<string, any>>({});

  const section = FORM_SECTIONS_100K[currentSection];
  const isFirstSection = currentSection === 0;
  const isLastSection = currentSection === FORM_SECTIONS_100K.length - 1;

  const visibleFields = (section.fields as any[]).filter(
    (field) => !field.showIf || field.showIf(formData)
  );

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleNext = async () => {
    const missingFields = visibleFields.filter((field) => {
      if (!field.required) return false;
      const value = formData[field.name];
      return !value || value.trim() === "";
    });

    if (missingFields.length > 0) {
      const fieldNames = missingFields.map((f) => f.label).join(", ");
      alert(`Falta completar: ${fieldNames}`);
      return;
    }

    if (!isLastSection) {
      setCurrentSection(currentSection + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/encuesta-100k", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        alert("Error al enviar. Intentá de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el formulario.");
    } finally {
      setLoading(false);
    }
  };

  const handlePrev = () => {
    setCurrentSection(currentSection - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">¡Listo! 🙌</h2>
          <p className="text-lg text-slate-600 mb-2">
            Recibimos tu Tab 1 correctamente.
          </p>
          <p className="text-slate-600">
            Ya podés copiar tus respuestas y pegarlas en el prompt del manual para generar los tabs 2 al 6 y la optimización de tu perfil.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-slate-900">Mi Punto de Partida</h1>
            <div className="text-sm text-slate-600">
              Paso {currentSection + 1} de {FORM_SECTIONS_100K.length}
            </div>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-amber-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentSection + 1) / FORM_SECTIONS_100K.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="section-header mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">{section.title}</h2>
          {"description" in section && section.description && (
            <p className="text-slate-600">{section.description}</p>
          )}
        </div>

        <div className="space-y-6">
          {visibleFields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium text-slate-900 mb-2">
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </label>

              {field.type === "textarea" && (
                <textarea
                  id={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              )}

              {field.type === "select" && (
                <select
                  id={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                >
                  <option value="">Seleccioná una opción</option>
                  {field.options &&
                    field.options.map((opt: any) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                </select>
              )}

              {field.type === "text" && (
                <input
                  id={field.name}
                  type="text"
                  value={formData[field.name] || ""}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 justify-between">
        <button
          type="button"
          disabled={isFirstSection}
          onClick={handlePrev}
          className={`px-6 py-2 rounded-lg border border-amber-600 text-amber-600 font-medium ${
            isFirstSection ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-50"
          }`}
        >
          ← Anterior
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={loading}
          className="px-6 py-2 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 disabled:opacity-50"
        >
          {loading ? "Enviando..." : isLastSection ? "Enviar" : "Siguiente →"}
        </button>
      </div>
    </div>
  );
}
