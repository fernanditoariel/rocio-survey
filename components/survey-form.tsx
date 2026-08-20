"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { surveySchema, type SurveyFormData } from "@/lib/schema";
import { FORM_SECTIONS, PRESENTIAL_QUESTIONS } from "@/lib/constants";

export function SurveyForm() {
  const [currentSection, setCurrentSection] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<SurveyFormData>({
    resolver: zodResolver(surveySchema),
    mode: "onChange",
  });

  const section = FORM_SECTIONS[currentSection];
  const isFirstSection = currentSection === 0;
  const isLastSection = currentSection === FORM_SECTIONS.length - 1;

  const onSubmit = async (data: SurveyFormData) => {
    if (!isLastSection) {
      setCurrentSection(currentSection + 1);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Error al enviar el formulario. Intentá de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el formulario.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">¡Gracias Rocío! 🎉</h2>
          <p className="text-lg text-slate-600 mb-6">Recibimos tu encuesta. Fernando revisará tus respuestas y mañana en la reunión profundizaremos en los detalles.</p>
          <div className="bg-slate-50 rounded-lg p-6 mb-6 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4">Preguntas para la reunión de mañana:</h3>
            <div className="space-y-4 text-left">
              {PRESENTIAL_QUESTIONS.slice(0, 2).map((section, idx) => (
                <div key={idx}>
                  <p className="font-medium text-primary-600 mb-2">{section.section}</p>
                  <ul className="space-y-1 pl-4">
                    {section.questions.slice(0, 2).map((q, qIdx) => (
                      <li key={qIdx} className="text-sm text-slate-600">• {q}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-600 mb-8">Nos vemos mañana a las 16hs en Bahía Blanca 🚀</p>
          <p className="text-sm text-slate-500">Si tienes dudas, escribile a Fernando por WhatsApp</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-slate-900">Encuesta de Descubrimiento</h1>
              <div className="text-sm text-slate-600">
                Paso {currentSection + 1} de {FORM_SECTIONS.length}
              </div>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentSection + 1) / FORM_SECTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="section-header">
            <h2 className="section-title">{section.title}</h2>
            <p className="section-description">{section.description}</p>
          </div>

          <div className="space-y-6">
            {section.fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="label">
                  {field.label}
                  {field.required && <span className="text-red-500">*</span>}
                </label>

                {field.type === "textarea" && (
                  <textarea
                    id={field.name}
                    {...register(field.name as any)}
                    placeholder={field.placeholder}
                    rows={4}
                    className="textarea-field"
                  />
                )}

                {field.type === "select" && (
                  <select
                    id={field.name}
                    {...register(field.name as any)}
                    className="select-field"
                  >
                    <option value="">Seleccioná una opción</option>
                    {("options" in field && field.options) && field.options.map((opt) => (
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
                    {...register(field.name as any)}
                    placeholder={field.placeholder}
                    className="input-field"
                  />
                )}

                {field.type === "number" && (
                  <input
                    id={field.name}
                    type="number"
                    {...register(field.name as any)}
                    className="input-field"
                  />
                )}

                {errors[field.name as keyof SurveyFormData] && (
                  <p className="error-text">
                    {errors[field.name as keyof SurveyFormData]?.message}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 justify-between">
          <button
            type="button"
            disabled={isFirstSection}
            onClick={() => setCurrentSection(currentSection - 1)}
            className={`btn-secondary ${isFirstSection ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            ← Anterior
          </button>

          <button
            type="submit"
            disabled={isSubmitting || loading}
            className="btn-primary"
          >
            {isLastSection
              ? loading
                ? "Enviando..."
                : "Enviar Encuesta"
              : "Siguiente →"}
          </button>
        </div>
      </form>
    </div>
  );
}
