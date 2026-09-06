import { z } from "zod";

export const encuestaCoachingSchema = z.object({
    // ===== Datos básicos =====
                                                 nombre: z.string().min(1, "El nombre es requerido"),
    email: z.string().min(1, "El email es requerido").email("Ingresá un email válido"),
    whatsapp: z.string().min(1, "El WhatsApp es requerido"),
    rolActual: z.string().min(1, "Contanos tu rol o cargo actual"),
    empresa: z.string().optional(),
    ciudad: z.string().min(1, "La ciudad es requerida"),

    // ===== Contexto: quién impulsa el proceso =====
    quienPaga: z.string().min(1, "Elegí una opción"),
    personasACargo: z.string().min(1, "Contanos si tenés personas a cargo hoy"),

    // Variante corporativa (showIf quienPaga === "empresa")
    nivelJerarquico: z.string().optional(),
    modalidadPreferida: z.string().optional(),
    hayPresupuesto: z.string().optional(),
    quienMasDeberiaEstar: z.string().optional(),

    // Variante carrera (showIf quienPaga === "propio")
    situacionLaboral: z.string().optional(),
    procesoPrevio: z.string().optional(),
    plazoEnMente: z.string().optional(),

    // ===== Situación =====
    desafioPrincipal: z.string().min(1, "Contanos tu desafío principal"),
    queHicisteHastaAhora: z.string().min(1, "Contanos qué hiciste hasta ahora"),
    porQueNoFunciono: z.string().min(1, "Contanos por qué creés que no funcionó"),
    impactoReal: z.string().min(1, "Contanos el impacto real que tiene hoy"),

    // ===== Conciencia del problema =====
    desdeCuando: z.string().min(1, "Contanos desde hace cuánto tenés este desafío"),
    causasDeFondo: z.string().min(1, "Contanos las causas de fondo"),
    consecuenciasNoResolver: z.string().min(1, "Contanos las consecuencias de no resolverlo"),

    // ===== Conciencia de la solución =====
    solucionOptima: z.string().min(1, "Contanos cómo sería una solución óptima"),
    impactosTangibles: z.string().min(1, "Contanos qué impactos tangibles produciría"),
    impactoPersonal: z.string().min(1, "Contanos qué diferencia haría para vos"),
    condicionesDePiso: z.string().optional(),

    // ===== Consecuencia de no resolverlo =====
    futuroSiNoResuelve: z.string().min(1, "Contanos cómo te imaginás el futuro si esto sigue igual"),

    // ===== Cierre =====
    queEsperasDelProceso: z.string().min(1, "Contanos qué esperás de un proceso de coaching"),
    comunicacionPreferida: z.string().min(1, "Elegí una opción"),
    observaciones: z.string().optional(),
});

export type EncuestaCoachingFormData = z.infer<typeof encuestaCoachingSchema>;
