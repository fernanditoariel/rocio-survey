# ✅ Checklist de Deployment - Encuesta Rocío

## Paso 1: Preparación (5 min)
- [ ] Abrí `DEPLOYMENT_GUIDE.md` en mi editor favorito
- [ ] Tengo 30 minutos disponibles
- [ ] Tengo mi email abierto para verificaciones

## Paso 2: Supabase (10 min)

### 2.1 Crear cuenta
- [ ] Abrí https://supabase.com/
- [ ] Creé una cuenta con mi email
- [ ] Verifiqué el email
- [ ] Creé un nuevo proyecto llamado "rocio-survey"

### 2.2 Crear tabla
- [ ] Entré a SQL Editor en mi proyecto
- [ ] Copié y ejecuté el SQL de crear tabla (está en DEPLOYMENT_GUIDE.md)
- [ ] ✅ Tabla `surveys` creada

### 2.3 Obtener credenciales
- [ ] Copié `Project URL` → lo guardé en un archivo de texto
- [ ] Copié `Service Role Key` → lo guardé en el mismo archivo
- [ ] Tengo: `NEXT_PUBLIC_SUPABASE_URL=...`
- [ ] Tengo: `SUPABASE_SERVICE_ROLE_KEY=...`

## Paso 3: Resend (5 min)

### 3.1 Crear cuenta
- [ ] Abrí https://resend.com/
- [ ] Creé una cuenta con mi email
- [ ] Verifiqué el email

### 3.2 Obtener API key
- [ ] Fui a Settings → API Keys
- [ ] Copié mi API key (comienza con `re_`)
- [ ] Guardé en mi archivo: `RESEND_API_KEY=re_...`

## Paso 4: GitHub (5 min) - OPCIONAL pero RECOMENDADO

- [ ] Abrí https://github.com/new
- [ ] Creé un repo llamado "rocio-survey"
- [ ] NO inicialicé con README
- [ ] Copié el URL del repo (ej. https://github.com/miusuario/rocio-survey)

En terminal:
```bash
cd ~/rocio-survey-app
git init
git add .
git commit -m "Initial commit: survey app"
git remote add origin https://github.com/tu-usuario/rocio-survey
git push -u origin main
```

- [ ] Push exitoso a GitHub

## Paso 5: Deploy a Vercel (5 min)

### Opción A: Con GitHub (recomendado)
- [ ] Abrí https://vercel.com/
- [ ] Loguearme con GitHub
- [ ] Clickeé "Add New → Project"
- [ ] Seleccioné mi repo "rocio-survey"
- [ ] Vercel empezó a buildear
- [ ] ⏳ Esperé a que termine (puede fallar por env vars, es normal)

### Opción B: Deploy directo
```bash
npm install -g vercel
cd ~/rocio-survey-app
vercel deploy
```
- [ ] Seguí las instrucciones interactivas
- [ ] Deploy completado

## Paso 6: Agregar Variables de Entorno a Vercel (5 min)

En Vercel, en tu proyecto:
- [ ] Settings → Environment Variables
- [ ] Agregué 4 variables:

| Variable | Valor |
|----------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Tu Supabase URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Tu Supabase key |
| `RESEND_API_KEY` | Tu Resend API key |
| `SURVEY_EMAIL_TO` | fernando@agenciawebhispana.com |

- [ ] Guardé
- [ ] ⏳ Vercel redeploy automático (~2 min)

## Paso 7: Configurar Dominio (5 min)

En Vercel:
- [ ] Settings → Domains
- [ ] Agregué: `rocio.agenciawebhispana.com`
- [ ] Copié el CNAME: `cname.vercel-dns.com`

En HostGator (u otro proveedor):
- [ ] Abrí mis dominios
- [ ] Fui a DNS / Manage Domain
- [ ] Agregué CNAME record:
  - Host: `rocio`
  - Apunta a: `cname.vercel-dns.com`
- [ ] ⏳ Esperé propagación DNS (~30 min, algunos segundos en otros)

## Paso 8: Probar que Funciona (5 min)

- [ ] Abrí `https://rocio.agenciawebhispana.com` en el navegador
- [ ] Vi la página de encuesta ✅
- [ ] Completé el formulario de prueba
- [ ] Clickeé "Enviar Encuesta"
- [ ] Vi la página de éxito ✅

### Verificaciones:
- [ ] En Supabase → Table Editor → `surveys` → veo 1 fila con mis datos ✅
- [ ] Verifiqué mi email → recibí el email de Fernando ✅

## Paso 9: Compartir con Rocío (1 min)

Enviarle por WhatsApp/mail:
```
Hola Rocío! 👋

Completá esta encuesta antes de mañana. Son 10-15 minutos:

👉 https://rocio.agenciawebhispana.com

¡Gracias! Nos vemos a las 16hs 🚀
```

- [ ] Link enviado a Rocío ✅

---

## ✅ LISTO PARA MAÑANA

Ahora tienes:
- ✅ App deployada
- ✅ Encuesta lista
- ✅ Link compartido con Rocío
- ✅ Datos guardándose automáticamente
- ✅ Emails funcionando

## 🎯 Mañana en la reunión:

- Abre `lib/constants.ts` en tu editor
- Ve a `PRESENTIAL_QUESTIONS`
- Usa esas preguntas para profundizar en lo que Rocío respondió

---

## 📊 Resumen de tiempo

| Tarea | Tiempo |
|-------|--------|
| Supabase | 10 min |
| Resend | 5 min |
| GitHub | 5 min |
| Vercel Deploy | 5 min |
| Env Vars | 5 min |
| Dominio | 5 min |
| Prueba | 5 min |
| Compartir | 1 min |
| **TOTAL** | **~40 min** |

## 🆘 Si algo no funciona

Revisa **Troubleshooting** en DEPLOYMENT_GUIDE.md

---

**¡ÉXITO! 🎉**

Marcá cada casilla mientras avanzás. Cuando llegues al final, ¡estarás listo!
