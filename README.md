# Encuesta de Descubrimiento - Rocío

App Next.js 15 para encuesta de descubrimiento de cliente (Rocío).

## Estructura

- **app/** - Rutas y layout de Next.js
- **components/** - Componentes React (formulario principal)
- **lib/** - Esquemas Zod, constantes y utilidades
- **public/** - Archivos estáticos

## Instalación local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Funcionalidades

✅ Formulario de 4 secciones (datos básicos, negocio, web, expectativas)
✅ Validación de campos con Zod + react-hook-form
✅ Diseño responsivo y profesional (Tailwind v4)
✅ Guardado automático en Supabase
✅ Emails automáticos a Fernando (Resend)
✅ Página de éxito con recomendaciones para la reunión presencial
✅ API endpoint para procesamiento de datos
✅ Deploy listo para Vercel

## Configuración Requerida

### ⚠️ IMPORTANTE: Antes de deployar, seguir SETUP.md

Pasos necesarios:
1. **Supabase** - crear tabla `surveys` y obtener credenciales
2. **Resend** - crear cuenta y obtener API key para emails
3. **Variables de entorno** - configurar `.env.local` con credenciales
4. **Vercel** - agregar variables de entorno al deploy

Ver `SETUP.md` para instrucciones completas.

## Customización

### Agregar/cambiar preguntas
Editar `lib/constants.ts` → `FORM_SECTIONS` array

### Cambiar colores
Editar `tailwind.config.ts` → `theme.colors.primary`

### Cambiar email destinatario
Editar `.env.local` → `SURVEY_EMAIL_TO`

### Cambiar template de emails
Editar `lib/email.ts` → funciones `sendSurveyEmailToFernando()` y `sendConfirmationEmailToRocio()`

## Deploy a Vercel

```bash
vercel deploy
```

O conectar GitHub → Vercel automáticamente.

## Próximos pasos

1. 📋 **Seguir SETUP.md** - configurar Supabase, Resend y variables de entorno
2. 🧪 **Probar localmente** - `npm run dev` y completar el formulario
3. 🚀 **Deploy a Vercel** - `vercel deploy` o conectar GitHub
4. 🌐 **Configurar dominio** - agregar CNAME en tu proveedor de dominios
5. 📤 **Compartir con Rocío** - enviarle el link de la encuesta

---

**Notas para Fernando:**
- Las preguntas presenciales están en `lib/constants.ts` → `PRESENTIAL_QUESTIONS`
- Personaliza el mensaje de éxito en `components/survey-form.tsx`
- La validación es strict - todos los campos con `required: true` son obligatorios
