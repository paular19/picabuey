import React from 'react'
import Image from 'next/image'

export default function MachineCard({ image, title, desc, brand, style }: { image: string; title: string; desc: string; brand: string; style?: React.CSSProperties }) {
  const waBase = 'https://wa.me/549XXXXXXXXXX'
  const text = encodeURIComponent(`Hola, quiero consultar por ${title}`)
  const wa = `${waBase}?text=${text}`
  return (
    <div style={style} className="bg-white rounded-lg overflow-hidden shadow-soft text-gray-800 card-hover animate-fade-up">
      <div className="relative h-44 w-full">
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{title}</h4>
          <span className="text-xs bg-[var(--plata)] text-[var(--verde)] px-2 py-1 rounded">{brand}</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">{desc}</p>
        <div className="mt-4">
          <a href={wa} className="inline-block px-3 py-2 bg-[var(--verde)] text-white rounded btn-press">Consultar disponibilidad</a>
        </div>
      </div>
    </div>
  )
}
