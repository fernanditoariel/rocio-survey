"use client";

import { useState } from "react";

interface Response {
  id: number;
  nombre: string;
  edad: string;
  ubicacion: string;
  experiencia: string;
  tipoNegocio: string;
  modeloNegocio: string;
  targetMarket: string;
  barreras: string;
  tipoWeb: string;
  funcionalidades: string;
  presupuesto: string;
  timeline: string;
  motivacion: string;
  comunicacion: string;
  observaciones?: string;
  ciudades?: string;
  estrategiaMarketing?: string;
  redesSociales?: string;
  gestorContenido?: string;
  created_at: string;
}

export default function Dashboard() {
  const [responses, setResponses] = useState<Response[]>([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    if (password === "Rocio2026") {
      setAuthenticated(true);
      fetchResponses();
    } else {
      alert("Contraseña incorrecta");
    }
  };

  const fetchResponses = async () => {
    try {
      const response = await fetch("/api/responses");
      if (response.ok) {
        const data = await response.json();
        setResponses(data);
      }
    } catch (error) {
      console.error("Error fetching responses:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">
            Dashboard
          </h1>
          <p className="text-slate-600 text-center mb-6">
            Respuestas de la encuesta de Rocío
          </p>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleLogin()}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={handleLogin}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            Ingresar
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-slate-600">Cargando respuestas...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            📋 Dashboard de Respuestas
          </h1>
          <p className="text-slate-600">
            Total de respuestas: <strong>{responses.length}</strong>
          </p>
        </div>

        {responses.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-slate-600">Aún no hay respuestas...</p>
          </div>
        ) : (
          <div className="space-y-8">
            {responses.map((response) => (
              <div
                key={response.id}
                className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                      {response.nombre}
                    </h2>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong className="text-slate-600">Edad:</strong>{" "}
                        {response.edad}
                      </p>
                      <p>
                        <strong className="text-slate-600">Ubicación:</strong>{" "}
                        {response.ubicacion}
                      </p>
                      <p>
                        <strong className="text-slate-600">Presupuesto:</strong>{" "}
                        {response.presupuesto}
                      </p>
                      <p>
                        <strong className="text-slate-600">Timeline:</strong>{" "}
                        {response.timeline}
                      </p>
                      <p>
                        <strong className="text-slate-600">Comunicación:</strong>{" "}
                        {response.comunicacion}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong className="text-slate-600 block mb-1">
                          Tipo de Negocio:
                        </strong>
                        <p className="text-slate-900">{response.tipoNegocio}</p>
                      </div>
                      <div>
                        <strong className="text-slate-600 block mb-1">
                          Tipo de Web:
                        </strong>
                        <p className="text-slate-900">{response.tipoWeb}</p>
                      </div>
                      <div>
                        <strong className="text-slate-600 block mb-1">
                          Fecha:
                        </strong>
                        <p className="text-slate-900">
                          {new Date(response.created_at).toLocaleString(
                            "es-AR"
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sección expandible con más detalles */}
                <details className="mt-6 pt-6 border-t border-slate-200">
                  <summary className="cursor-pointer font-semibold text-slate-900 hover:text-blue-600">
                    Ver todas las respuestas
                  </summary>
                  <div className="mt-4 space-y-3 text-sm">
                    {Object.entries(response).map(([key, value]) => {
                      if (
                        key !== "id" &&
                        key !== "created_at" &&
                        value !== null &&
                        value !== undefined &&
                        value !== ""
                      ) {
                        return (
                          <div key={key} className="pb-2 border-b border-slate-100 last:border-0">
                            <strong className="text-slate-600 text-xs uppercase block mb-1">
                              {key}
                            </strong>
                            <p className="text-slate-900">{String(value)}</p>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </details>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={() => {
              const csv = responses
                .map((r) =>
                  Object.entries(r)
                    .map(([k, v]) => `${k}: ${v}`)
                    .join(" | ")
                )
                .join("\n");
              const blob = new Blob([csv], { type: "text/plain" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `respuestas-${new Date().toISOString()}.txt`;
              a.click();
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            📥 Descargar respuestas
          </button>
        </div>
      </div>
    </div>
  );
}
