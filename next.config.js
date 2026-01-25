/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Usa el optimizador de Next y sirve AVIF/WebP cuando el navegador lo soporta.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
