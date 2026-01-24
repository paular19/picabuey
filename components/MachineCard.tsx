'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function MachineCard({ image, title, desc, brand, style }: { image: string; title: string; desc: string; brand: string; style?: React.CSSProperties }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const waBase = 'https://wa.me/5493874576655'
  const text = encodeURIComponent(`Hola, quiero consultar por ${title}`)
  const wa = `${waBase}?text=${text}`

  const brandColors: { [key: string]: { bg: string; text: string; border: string } } = {
    'KUBOTA': { bg: 'rgba(41, 58, 138, 0.1)', text: '#293A8A', border: '#293A8A' },
    'STARA': { bg: 'rgba(184, 124, 35, 0.1)', text: 'rgb(184, 124, 35)', border: 'rgb(184, 124, 35)' }
  }

  const colors = brandColors[brand] || { bg: 'rgba(4, 83, 43, 0.1)', text: 'var(--verde)', border: 'var(--verde)' }

  return (
    <div
      style={style}
      className={`bg-white rounded-xl overflow-hidden shadow-soft text-gray-800 card-hover animate-fade-up transition-all duration-300 group ${isExpanded ? 'fixed inset-0 z-50 rounded-none m-0 overflow-auto' : ''
        }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Overlay cuando está expandido */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsExpanded(false)} />
      )}

      <div className={isExpanded ? 'fixed inset-0 z-50 flex items-center justify-center p-4' : ''}>
        <div className={isExpanded ? 'bg-white rounded-xl max-w-2xl w-full shadow-2xl' : ''}>
          {/* Image Container */}
          <div className={`relative ${isExpanded ? 'h-80' : 'h-56'} w-full bg-white overflow-hidden transition-all duration-300`}>
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            />
            {/* Brand Badge */}
            <div className="absolute top-3 right-3">
              <div className="relative w-16 h-8">
                <Image
                  src={brand === 'KUBOTA' ? '/images/Kubota-Logo.svg' : '/images/staradef.png'}
                  alt={brand}
                  fill
                  sizes="70px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className={`p-5 ${isExpanded ? 'max-h-96 overflow-y-auto' : ''}`}>
            <h4 className="font-bold text-lg text-gray-900 line-clamp-2 mb-2">{title}</h4>
            <p className={`text-sm text-gray-600 mb-4 ${isExpanded ? '' : 'line-clamp-2'}`}>{desc}</p>

            {/* CTA Button */}
            <a
              href={wa}
              className="inline-block w-full text-center px-4 py-2.5 font-semibold rounded-lg btn-press transition-all duration-300 text-white hover:brightness-110"
              style={{
                background: 'rgb(4, 83, 43)'
              }}
            >
              Consultar
            </a>

            {/* Close button cuando está expandido */}
            {isExpanded && (
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
