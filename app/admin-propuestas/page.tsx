"use client";

import { useEffect, useState } from "react";

interface Propuesta {
  id: number;
  nombre: string;
  email: string;
  whatsapp: string;
  plataforma_precio: string;
  plataforma_cuotas: string;
  diseno_precio: string;
  diseno_cuotas: string;
  marketing_precio: string;
  marketing_cuotas: string;
  redes_precio: string;
  redes_cuotas: string;
  soporte_precio: string;
  soporte_cuotas: string;
  total_monto: string;
  total_cuotas: string;
  created_at: string;
}

export default function AdminPropuestas() {
  const [propuestas, setPropuestas] = useState<Propuesta[]>([]);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    if (password === "Rocio2026") {
      setAuthenticated(true);
      fetchPropuestas();
    } else {
      alert("Contraseña incorrecta");
    }
  };

  const fetchPropuestas = async () => {
    try {
      const response = await fetch("/api/propuestas");
      if (response.ok) {
        const data = await response.json();
        setPropuestas(data);
      }
    } catch (error) {
      console.error("Error fetching propuestas:", error);
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
            Propuestas de Rocío
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
        <div className="text-xl text-slate-600">Cargando propuestas...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            📋 Propuestas Recibidas
          </h1>
          <p className="text-slate-600">
            Total: <strong>{propuestas.length}</strong>
          </p>
        </div>

        {propuestas.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-slate-600">Aún no hay propuestas...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {propuestas.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {p.nombre}
                  </h2>
                  <p className="text-sm text-slate-500">
                    {new Date(p.created_at).toLocaleString("es-AR")}
                  </p>
                </div>

                {/* Datos de contacto */}
                <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                  <h3 className="font-bold text-slate-900 mb-3">
                    📧 Datos de Contacto
                  </h3>
                  <p className="text-slate-700">
                    <strong>Email:</strong> {p.email}
                  </p>
                  <p className="text-slate-700">
                    <strong>WhatsApp:</strong> {p.whatsapp}
                  </p>
                </div>

                {/* Servicios y precios */}
                <div className="mb-6">
                  <h3 className="font-bold text-slate-900 mb-4">
                    💰 Servicios y Precios
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Plataforma */}
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="font-bold text-slate-900">Plataforma</p>
                      <p className="text-slate-700">
                        <strong>Precio:</strong> {p.plataforma_precio || "—"}
                      </p>
                      <p className="text-slate-700">
                        <strong>Cuotas:</strong> {p.plataforma_cuotas || "—"}
                      </p>
                    </div>

                    {/* Diseño */}
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="font-bold text-slate-900">Diseño & Marca</p>
                      <p className="text-slate-700">
                        <strong>Precio:</strong> {p.diseno_precio || "—"}
                      </p>
                      <p className="text-slate-700">
                        <strong>Cuotas:</strong> {p.diseno_cuotas || "—"}
                      </p>
                    </div>

                    {/* Marketing */}
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="font-bold text-slate-900">Marketing</p>
                      <p className="text-slate-700">
                        <strong>Precio:</strong> {p.marketing_precio || "—"}
                      </p>
                      <p className="text-slate-700">
                        <strong>Cuotas:</strong> {p.marketing_cuotas || "—"}
                      </p>
                    </div>

                    {/* Redes Sociales */}
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="font-bold text-slate-900">Redes Sociales</p>
                      <p className="text-slate-700">
                        <strong>Precio:</strong> {p.redes_precio || "—"}
                      </p>
                      <p className="text-slate-700">
                        <strong>Cuotas:</strong> {p.redes_cuotas || "—"}
                      </p>
                    </div>

                    {/* Soporte */}
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="font-bold text-slate-900">Soporte Mensual</p>
                      <p className="text-slate-700">
                        <strong>Precio:</strong> {p.soporte_precio || "—"}
                      </p>
                      <p className="text-slate-700">
                        <strong>Cuotas:</strong> {p.soporte_cuotas || "—"}
                      </p>
                    </div>

                    {/* Total */}
                    <div className="p-4 bg-blue-600 text-white rounded-lg">
                      <p className="font-bold">TOTAL INICIAL</p>
                      <p className="text-blue-100">
                        <strong>Monto:</strong> {p.total_monto || "—"}
                      </p>
                      <p className="text-blue-100">
                        <strong>Cuotas:</strong> {p.total_cuotas || "—"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
