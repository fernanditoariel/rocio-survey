import { z } from "zod";

export const surveySchema = z.object({
  // Datos básicos
  nombre: z.string().min(1, "El nombre es requerido"),
  edad: z.string().min(1, "La edad es requerida"),
  ubicacion: z.string().min(1, "La ubicación es requerida"),
  experiencia: z.string().min(1, "Describí tu experiencia previa"),

  // Sobre el negocio
  tipoNegocio: z.string().min(1, "Seleccioná el tipo de negocio"),
  modeloNegocio: z.string().min(1, "Describí tu modelo de negocio"),
  targetMarket: z.string().min(1, "Describí tu target market"),
  barreras: z.string().min(1, "Describí las barreras que ves"),

  // Sobre la solución web
  tipoWeb: z.string().min(1, "Seleccioná el tipo de web"),
  funcionalidades: z.string().min(1, "Describí las funcionalidades clave"),
  presupuesto: z.string().min(1, "Seleccioná un rango de presupuesto"),
  timeline: z.string().min(1, "Seleccioná el timeline deseado"),

  // Expectativas
  motivacion: z.string().min(1, "Describí tu motivación"),
  comunicacion: z.string().min(1, "¿Cómo prefieren comunicarse?"),
  observaciones: z.string().optional(),

  // Campos adicionales (guardados como JSON, no en columnas específicas)
  ciudades: z.string().optional(),
  estrategiaMarketing: z.string().optional(),
  redesSociales: z.string().optional(),
  gestorContenido: z.string().optional(),
});

export type SurveyFormData = z.infer<typeof surveySchema>;
