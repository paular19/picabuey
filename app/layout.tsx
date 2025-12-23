import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'PICABUEY SRL — Maquinaria agrícola',
  description: 'PICABUEY. Maquinaria que trabaja como vos. Maquinaria agrícola, repuestos y servicio técnico con respaldo en el norte argentino.',
  openGraph: {
    title: 'PICABUEY SRL — Maquinaria agrícola',
    description: 'Maquinaria agrícola, repuestos y el mejor servicio de postventa para productores agrícolas.',
    url: 'https://tu-dominio.vercel.app',
    siteName: 'PICABUEY SRL'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}
