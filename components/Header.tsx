'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const wa = 'https://wa.me/549XXXXXXXXXX?text=Hola%20PICABUEY%2C%20quiero%20consultar%20por%20VENTAS'

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 header-fade">
      <div className="mx-auto px-6 py-3 flex items-center justify-between container">
        <div className="relative h-16 w-40 sm:w-52 md:w-72">
          <Image
            src="/images/IMG_8581-removebg-preview.png"
            alt="PICABUEY SRL Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#inicio" className="text-gray-700 hover:text-[var(--verde-deep)]">Inicio</a>
          <a href="#maquinaria" className="text-gray-700 hover:text-[var(--verde-deep)]">Maquinaria</a>
          <a href="#destacados" className="text-gray-700 hover:text-[var(--verde-deep)]">Destacados</a>
          <a href="#repuestos" className="text-gray-700 hover:text-[var(--verde-deep)]">Repuestos</a>
          <a href="#servicios" className="text-gray-700 hover:text-[var(--verde-deep)]">Servicios</a>
          <a href="#marcas" className="text-gray-700 hover:text-[var(--verde-deep)]">Marcas</a>
          <a href="#nosotros" className="text-gray-700 hover:text-[var(--verde-deep)]">Nosotros</a>
          <a href="#contacto" className="text-gray-700 hover:text-[var(--verde-deep)]">Contacto</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href={wa} className="hidden sm:inline-flex items-center gap-2 bg-[var(--verde)] hover:bg-[var(--verde-deep)] text-white px-3 py-2 rounded text-sm btn-press">WhatsApp</a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[var(--verde-deep)] transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-3">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[var(--verde-deep)] py-2">Inicio</a>
            <a href="#maquinaria" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[var(--verde-deep)] py-2">Maquinaria</a>
            <a href="#destacados" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[var(--verde-deep)] py-2">Destacados</a>
            <a href="#repuestos" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[var(--verde-deep)] py-2">Repuestos</a>
            <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[var(--verde-deep)] py-2">Servicios</a>
            <a href="#marcas" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[var(--verde-deep)] py-2">Marcas</a>
            <a href="#nosotros" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[var(--verde-deep)] py-2">Nosotros</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-[var(--verde-deep)] py-2">Contacto</a>
            <a href={wa} className="inline-flex items-center justify-center gap-2 bg-[var(--verde)] hover:bg-[var(--verde-deep)] text-white px-4 py-3 rounded text-sm btn-press mt-2">WhatsApp</a>
          </nav>
        </div>
      )}
    </header>
  )
}
