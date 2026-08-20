# Setup Completo - Encuesta de Descubrimiento

## Paso 1: Crear tabla en Supabase

### 1.1 Ir a Supabase
1. Abre https://supabase.com/
2. Crea una cuenta (o loguéate si ya tienes)
3. Crea un nuevo proyecto (elige la región más cercana)

### 1.2 Crear tabla `surveys`
En el editor SQL de Supabase, ejecuta:

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

### 1.3 Copiar credenciales
1. Copia tu `NEXT_PUBLIC_SUPABASE_URL` (Project URL)
2. Copia la `SUPABASE_SERVICE_ROLE_KEY` (bajo Settings → API)
3. Pégalas en `.env.local`

## Paso 2: Configurar Resend para emails

### 2.1 Crear cuenta en Resend
1. Abre https://resend.com/
2. Crea una cuenta con tu email
3. Verifica tu email

### 2.2 Obtener API key
1. Ve a Settings → API Keys
2. Copia tu API key (comienza con `re_`)
3. Pégala en `.env.local` como `RESEND_API_KEY`

### 2.3 Configurar dominio personalizado (opcional)
Por defecto Resend envía desde `onboarding@resend.dev`.
Para usar tu dominio:
1. Ve a Domains en Resend
2. Agrega `agenciawebhispana.com`
3. Sigue las instrucciones para agregar registros DNS

## Paso 3: Variables de entorno

Editar `.env.local` con tus datos:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://tuproyecto.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Resend
RESEND_API_KEY=re_1234567890abcdef...
SURVEY_EMAIL_TO=fernando@agenciawebhispana.com
```

## Paso 4: Probar localmente

```bash
npm run dev
```

Abre http://localhost:3000 y completa el formulario.
- Los datos se guardarán en Supabase
- Fernando recibirá un email en SURVEY_EMAIL_TO

## Paso 5: Deploy a Vercel

### 5.1 Conectar GitHub (recomendado)
```bash
# Desde el directorio del proyecto:
git init
git add .
git commit -m "Initial commit: survey form"
git remote add origin https://github.com/tuusuario/rocio-survey
git push -u origin main
```

Luego en Vercel:
1. Abre https://vercel.com/
2. Importa tu repositorio
3. Agrega las variables de entorno (igual que en `.env.local`)
4. Deploy

### 5.2 Deploy manual (sin GitHub)
```bash
npm install -g vercel
vercel deploy
# Sigue las instrucciones interactivas
# Agrega las env vars cuando pida
```

## Paso 6: Configurar dominio

### En Vercel:
1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega `rocio.agenciawebhispana.com` (o el subdominio que prefieras)

### En tu proveedor de dominios (HostGator, GoDaddy, etc.):
1. Agrega un CNAME record:
   - Host: `rocio` (o tu subdominio)
   - Points to: `cname.vercel-dns.com`
2. Espera ~30 minutos para que se propague

## Paso 7: Compartir con Rocío

Una vez deployado:
```
Hola Rocío! 👋

Completá esta encuesta antes de mañana:
[URL_DE_TU_DOMINIO]

Me ayuda a preparar mejor la reunión. Son 10-15 minutos.

¡Gracias!
```

---

## Troubleshooting

### "Error: Supabase credentials missing"
→ Falta configurar `.env.local` con Supabase URL y keys

### "Email not sending"
→ Verificar que `RESEND_API_KEY` esté correcto
→ Si usas dominio personalizado en Resend, verificar DNS records

### "Surveys not saving to database"
→ Verificar que la tabla `surveys` existe en Supabase
→ Verificar que `SUPABASE_SERVICE_ROLE_KEY` tiene permisos

### Deploy a Vercel falla
→ Verificar que todas las variables de entorno estén configuradas en Vercel
→ Correr `npm run build` localmente para ver errores

---

## URLs útiles

- Supabase: https://supabase.com/
- Resend: https://resend.com/
- Vercel: https://vercel.com/
- Your app: [TU_URL_DE_DOMINIO]

