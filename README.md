# Picabuey Landing Page

Landing page para PICABUEY - Maquinaria agrícola, repuestos y servicio técnico.

## Tecnologías

- **Next.js 14** - Framework React
- **Tailwind CSS** - Estilos
- **TypeScript** - Tipado estático

## Características

- 🚜 Catálogo de maquinaria agrícola
- 📱 Diseño responsive
- ⚡ Optimizado para performance
- 🎨 Interfaz moderna con animaciones
- 📧 Formulario de contacto
- 🗺️ Integración con Google Maps

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## Estructura del proyecto

```
picabuey-landing/
├── app/
│   ├── globals.css      # Estilos globales
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
├── components/          # Componentes reutilizables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── MachineCard.tsx
│   └── ...
├── next.config.js       # Configuración de Next.js
└── tailwind.config.ts   # Configuración de Tailwind
```

## Configuración

### Variables de entorno

Crea un archivo `.env.local` con:

```env
# URLs de contacto de WhatsApp
NEXT_PUBLIC_WA_VENTAS=549XXXXXXXXXX
NEXT_PUBLIC_WA_REPUESTOS=549XXXXXXXXXX
NEXT_PUBLIC_WA_SERVICIOS=549XXXXXXXXXX
```

### Imágenes

Las imágenes se cargan desde Unsplash. Para usar imágenes propias, actualiza las URLs en `app/page.tsx`.

## Deploy

### Vercel (Recomendado)

1. Conecta tu repositorio en [vercel.com](https://vercel.com)
2. Configura las variables de entorno
3. Deploy automático en cada push

### Otros servicios

También puedes deployar en:
- Netlify
- AWS Amplify
- Railway
- Render

## Contacto

Para más información: ventas@picabuey.com

---

Desarrollado con ❤️ para PICABUEY
