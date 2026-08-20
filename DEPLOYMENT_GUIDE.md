# 🚀 Guía de Deployment - Encuesta Rocío

## ¿Qué tienes?

Una app **Next.js 15 lista para producción** que:
✅ Recolecta datos de Rocío via formulario de 4 secciones
✅ Guarda los datos en Supabase (base de datos)
✅ Envía un email automático a Fernando cuando Rocío completa
✅ Muestra página de éxito con preguntas para la reunión

## Paso 1: Crear cuenta en Supabase (2 minutos)

1. Abre https://supabase.com/
2. Crea cuenta con tu email
3. Crea un nuevo proyecto:
   - Nombre: `rocio-survey`
   - Región: América del Sur (ej. Brasil)
   - Contraseña: algo seguro

4. Espera a que se cree (1-2 minutos)

## Paso 2: Crear la tabla de datos (3 minutos)

1. En el proyecto de Supabase, ve a "SQL Editor"
2. Copia y ejecuta este código:

```sql
CREATE TABLE surveys (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  nombre VARCHAR(255) NOT NULL,
  edad VARCHAR(50),
  ubicacion VARCHAR(255),
  experiencia TEXT,
  tipo_negocio VARCHAR(255),
  modelo_negocio TEXT,
  target_market TEXT,
  barreras TEXT,
  tipo_web VARCHAR(255),
  funcionalidades TEXT,
  presupuesto VARCHAR(100),
  timeline VARCHAR(100),
  motivacion TEXT,
  comunicacion VARCHAR(255),
  observaciones TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

3. ✅ Tabla creada

## Paso 3: Obtener credenciales Supabase (2 minutos)

1. En Supabase, ve a **Settings → API**
2. Copia y guarda:
   - `Project URL` → copia
   - `Service Role Key` (bajo "secret") → copia

Deberías tener algo como:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Paso 4: Crear cuenta en Resend (para emails) (2 minutos)

1. Abre https://resend.com/
2. Crea cuenta con tu email
3. Verifica tu email (check inbox)
4. Ve a **Settings → API Keys**
5. Copia tu API key (comienza con `re_`)

Deberías tener:
```
RESEND_API_KEY=re_1234567890abcdef...
```

## Paso 5: Deploy a Vercel (5 minutos)

### Opción A: Con GitHub (recomendado para actualizaciones futuras)

```bash
cd /ruta/a/rocio-survey

# Inicializar git (si no lo hiciste)
git init
git add .
git commit -m "Initial commit: survey form"

# Crear repo en GitHub
# Abre https://github.com/new
# Crea repo llamado "rocio-survey"
# NO inicialices con README

# Luego en tu terminal:
git remote add origin https://github.com/tu-usuario/rocio-survey
git push -u origin main
```

Luego en Vercel:
1. Abre https://vercel.com/ y loguéate
2. Haz click en "Add New → Project"
3. Selecciona tu repo `rocio-survey`
4. Click en "Deploy"
5. Espera a que desee (verás un error de variables, es normal)

### Opción B: Deploy directo (más rápido, una sola vez)

```bash
cd /ruta/a/rocio-survey

# Instalar Vercel CLI
npm install -g vercel

# Hacer deploy
vercel deploy

# Sigue las instrucciones interactivas
```

## Paso 6: Configurar variables de entorno en Vercel (3 minutos)

Una vez que Vercel termina:

1. En tu proyecto en Vercel, ve a **Settings → Environment Variables**
2. Agrega 4 variables:

| Variable | Valor |
|----------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Tu `Project URL` de Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Tu `Service Role Key` de Supabase |
| `RESEND_API_KEY` | Tu API key de Resend |
| `SURVEY_EMAIL_TO` | `fernando@agenciawebhispana.com` |

3. Haz click en "Save" y Vercel va a redeploy automáticamente

## Paso 7: Configurar dominio personalizado (5 minutos)

En Vercel:
1. Ve a tu proyecto → **Settings → Domains**
2. Agrega un dominio:
   - Opción A: `rocio.agenciawebhispana.com` (subdominio recomendado)
   - Opción B: Tu dominio principal
3. Vercel te da instrucciones de DNS

En tu proveedor de dominios (HostGator):
1. Abre panel de control
2. Ve a "DNS" o "Manage Domain"
3. Agrega un CNAME record:
   - Nombre: `rocio` (solo la parte antes del dominio)
   - Apunta a: `cname.vercel-dns.com`
4. Espera 10-30 minutos para que se propague

## Paso 8: Probar que funciona (5 minutos)

1. Abre tu URL en el navegador: `https://rocio.agenciawebhispana.com`
2. Completa el formulario de prueba
3. Click en "Enviar Encuesta"
4. Deberías ver página de éxito ✅
5. Revisa:
   - **Supabase**: ve a "Table Editor" → `surveys` → deberías ver 1 fila
   - **Email**: Fernando debería recibir un email con los datos

## Paso 9: Compartir con Rocío 📤

Una vez todo funciona:

```
Hola Rocío! 👋

Completá esta encuesta antes de mañana. Son 10-15 minutos y me ayuda un montón:

👉 https://rocio.agenciawebhispana.com

¡Gracias! Nos vemos a las 16hs 🚀
```

---

## ¿Qué sigue después?

- **Próxima reunión (mañana)**: Fernando usa las preguntas presenciales en `lib/constants.ts`
- **Post-reunión**: Fernando arma la propuesta
- **Si quieres agregar datos**: Edita `lib/constants.ts` → `FORM_SECTIONS`
- **Si cambias el template de emails**: Edita `lib/email.ts`

## Troubleshooting

### "No recibí el email de Rocío"
- ✅ Verifica que `RESEND_API_KEY` esté correcto en Vercel
- ✅ Verifica que `SURVEY_EMAIL_TO` esté puesto en Vercel
- ✅ Revisa spam/promotions de tu email

### "No aparecen los datos en Supabase"
- ✅ Verifica que la tabla `surveys` existe
- ✅ Verifica que `SUPABASE_SERVICE_ROLE_KEY` es la correcta (no confundir con `anon_key`)
- ✅ En console del navegador, chequea si hay errores

### "Dominio no funciona"
- ✅ Espera 30 minutos para que el DNS se propague
- ✅ Verifica que agregaste el CNAME correcto en tu proveedor
- ✅ En Vercel → Settings → Domains, debería decir "Valid Configuration"

### "Formulario no envía datos"
- ✅ Abre DevTools (F12) → Console, completa el form y mira si hay errores
- ✅ Verifica que Supabase y Resend keys estén correctas en Vercel

---

## URLs importantes

- 🔗 Supabase: https://supabase.com/
- 🔗 Vercel: https://vercel.com/
- 🔗 Resend: https://resend.com/
- 🔗 Tu app: https://rocio.agenciawebhispana.com

---

**Tiempo total: ~30 minutos** ⏱️
**Dificultad: Fácil** (solo copiar/pegar credenciales) 💚

Cualquier duda, revisa el SETUP.md o la sección de Troubleshooting arriba.

¡Suerte con Rocío! 🚀
