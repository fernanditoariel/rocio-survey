"use client";

import { useState } from "react";
import { FORM_SECTIONS_COMPLETA } from "@/lib/constants-completa";

export function SurveyFormCompleta() {
  const [currentSection, setCurrentSection] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [submittedData, setSubmittedData] = useState<Record<string, any>>({});

  const section = FORM_SECTIONS_COMPLETA[currentSection];
  const isFirstSection = currentSection === 0;
  const isLastSection = currentSection === FORM_SECTIONS_COMPLETA.length - 1;

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
      const response = await fetch("/api/survey-completa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmittedData(formData);
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
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-12">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              ¡Gracias Rocío! 🎉
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Recibimos la encuesta completa correctamente.
            </p>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 mb-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              📋 Resumen de tu encuesta:
            </h3>
            <div className="space-y-4 text-left">
              {Object.entries(submittedData).map(([key, value]) => (
                <div key={key} className="pb-3 border-b border-slate-300 last:border-0">
                  <p className="text-sm font-medium text-slate-600 uppercase">
                    {key}
                  </p>
                  <p className="text-slate-900 mt-1">{String(value)}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                const text = Object.entries(submittedData)
                  .map(([k, v]) => `${k}: ${v}`)
                  .join("\n");
                navigator.clipboard.writeText(text);
                alert("✅ Respuestas copiadas al portapapeles");
              }}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              📋 Copiar todas las respuestas
            </button>
          </div>

          <div className="text-center">
            <p className="text-slate-600 mb-4">
              Fernando revisará tus respuestas. 🚀
            </p>
            <p className="text-sm text-slate-500">
              Si tienes dudas, escribile a Fernando por WhatsApp
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-slate-900">
              Encuesta Completa
            </h1>
            <div className="text-sm text-slate-600">
              Paso {currentSection + 1} de {FORM_SECTIONS_COMPLETA.length}
            </div>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentSection + 1) / FORM_SECTIONS_COMPLETA.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="section-header mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            {section.title}
          </h2>
          {"description" in section && section.description && (
            <p className="text-slate-600">{section.description}</p>
          )}
        </div>

        <div className="space-y-6">
          {visibleFields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-slate-900 mb-2"
              >
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </label>

              {field.type === "textarea" && (
                <textarea
                  id={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                  placeholder={field.placeholder}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              )}

              {field.type === "select" && (
                <select
                  id={field.name}
                  value={formData[field.name] || ""}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                  placeholder={field.placeholder}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
          className={`px-6 py-2 rounded-lg border border-blue-600 text-blue-600 font-medium ${
            isFirstSection ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-50"
          }`}
        >
          ← Anterior
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={loading}
          className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Enviando..." : isLastSection ? "Enviar Encuesta" : "Siguiente →"}
        </button>
      </div>
    </div>
  );
}
