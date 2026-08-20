import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Encuesta de Descubrimiento | Agencia Web Hispana",
  description: "Descubrimiento para tu proyecto de marketplace de propiedades",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen text-slate-900">
        {children}
      </body>
    </html>
  );
}
