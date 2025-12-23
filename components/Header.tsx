'use client'
import React from 'react'

export default function Header() {
  const wa = 'https://wa.me/549XXXXXXXXXX?text=Hola%20PICABUEY%2C%20quiero%20consultar%20por%20VENTAS'
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 header-fade">
      <div className="mx-auto px-6 py-3 flex items-center justify-between container">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[var(--verde)] rounded flex items-center justify-center text-white font-bold">PB</div>
          <div>
            <div className="text-[14px] font-semibold text-[var(--verde)]">PICABUEY SRL</div>
            <div className="text-xs text-gray-600">Maquinaria que trabaja como vos.</div>
          </div>
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
          <a href={wa} className="inline-flex items-center gap-2 bg-[var(--verde)] hover:bg-[var(--verde-deep)] text-white px-3 py-2 rounded text-sm btn-press">WhatsApp</a>
          <button className="md:hidden p-2 text-gray-600">Menu</button>
        </div>
      </div>
    </header>
  )
}
