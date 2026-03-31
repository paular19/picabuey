import React from 'react'

export default function MapEmbed() {
  return (
    <div className="bg-white rounded-lg shadow-soft overflow-hidden">
      <div className="w-full h-64">
        <iframe
          title="ubicacion-picabuey"
          src="https://www.google.com/maps?q=-24.7821,-65.4232&center=-24.7821,-65.4232&z=15&output=embed&hl=es"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div>
            <div className="text-sm font-semibold">PICABUEY SRL</div>
            <div className="text-xs text-gray-600">Av. Paraguay 2720 en Salta</div>
            <div className="text-xs text-gray-600">Av. España 565 en Embarcación</div>
          </div>

          <a
            href="https://maps.app.goo.gl/KYSLSG2Ho81mVn4XA"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center px-3 py-2 text-white rounded font-semibold btn-press hover:brightness-110 transition"
            style={{ background: '#293A8A' }}
          >
            Ver en Google Maps
          </a>
        </div>
      </div>
    </div>
  )
}
