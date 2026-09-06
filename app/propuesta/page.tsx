"use client";

import { useState } from "react";

export default function PropuestaForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
    plataforma_precio: "",
    plataforma_cuotas: "",
    diseno_precio: "",
    diseno_cuotas: "",
    marketing_precio: "",
    marketing_cuotas: "",
    redes_precio: "",
    redes_cuotas: "",
    soporte_precio: "",
    soporte_cuotas: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre.trim()) {
      alert("Por favor completa el campo Nombre");
      return;
    }
    if (!formData.email.trim()) {
      alert("Por favor completa el campo Email");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/propuesta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        alert("Error al enviar. Por favor verifica los datos.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al conectar");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-12 max-w-md w-full text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">¡Listo! ✅</h2>
          <p className="text-slate-600">Tu propuesta fue enviada correctamente.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2 text-center">🏠 Propuesta</h1>
          <p className="text-center text-slate-600 mb-8">Marketplace de Propiedades</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-bold text-slate-900 mb-2">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-900 mb-2">WhatsApp</label>
                <input
                  type="text"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg"
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Servicios</h2>

              <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-3">1. Plataforma</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" name="plataforma_precio" placeholder="Precio $" value={formData.plataforma_precio} onChange={handleChange} className="px-4 py-2 border border-slate-300 rounded-lg" />
                  <input type="text" name="plataforma_cuotas" placeholder="Cuotas" value={formData.plataforma_cuotas} onChange={handleChange} className="px-4 py-2 border border-slate-300 rounded-lg" />
                </div>
              </div>

              <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-3">2. Diseño</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" name="diseno_precio" placeholder="Precio $" value={formData.diseno_precio} onChange={handleChange} className="px-4 py-2 border border-slate-300 rounded-lg" />
                  <input type="text" name="diseno_cuotas" placeholder="Cuotas" value={formData.diseno_cuotas} onChange={handleChange} className="px-4 py-2 border border-slate-300 rounded-lg" />
                </div>
              </div>

              <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-3">3. Marketing</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" name="marketing_precio" placeholder="Precio $" value={formData.marketing_precio} onChange={handleChange} className="px-4 py-2 border border-slate-300 rounded-lg" />
                  <input type="text" name="marketing_cuotas" placeholder="Cuotas" value={formData.marketing_cuotas} onChange={handleChange} className="px-4 py-2 border border-slate-300 rounded-lg" />
                </div>
              </div>

              <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-3">4. Redes Sociales</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" name="redes_precio" placeholder="Precio $" value={formData.redes_precio} onChange={handleChange} className="px-4 py-2 border border-slate-300 rounded-lg" />
                  <input type="text" name="redes_cuotas" placeholder="Cuotas" value={formData.redes_cuotas} onChange={handleChange} className="px-4 py-2 border border-slate-300 rounded-lg" />
                </div>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-3">5. Soporte Mensual</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" name="soporte_precio" placeholder="Precio $/mes" value={formData.soporte_precio} onChange={handleChange} className="px-4 py-2 border border-slate-300 rounded-lg" />
                  <input type="text" name="soporte_cuotas" placeholder="Cuotas" value={formData.soporte_cuotas} onChange={handleChange} className="px-4 py-2 border border-slate-300 rounded-lg" />
                </div>
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
              {loading ? "Enviando..." : "Enviar Propuesta"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
