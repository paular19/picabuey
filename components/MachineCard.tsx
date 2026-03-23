import React from 'react'
import Image from 'next/image'

export default function MachineCard({ image, title, desc, brand, style }: { image: string; title: string; desc: string; brand: string; style?: React.CSSProperties }) {
  const waBase = 'https://wa.me/5493874576655'
  const text = encodeURIComponent(`Hola, quiero consultar por ${title}`)
  const wa = `${waBase}?text=${text}`

  return (
    <div
      style={style}
      className="bg-white rounded-xl overflow-hidden shadow-soft text-gray-800 animate-fade-up transition-all duration-300 group hover:shadow-xl"
    >
      {/* Image Container */}
      <div className="relative h-56 w-full bg-white overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-4"
        />
      </div>

      {/* Content Container */}
      <div className="p-5">
        <h4 className="font-bold text-lg text-gray-900 line-clamp-2 mb-2">{title}</h4>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {desc}
        </p>

        {/* CTA Button */}
        <a
          href={wa}
          className="inline-block w-full text-center px-4 py-2.5 font-semibold rounded-lg btn-press transition-all duration-300 text-white hover:brightness-110"
          style={{ background: 'rgb(4, 83, 43)' }}
        >
          Consultar
        </a>
      </div>
    </div>
  )
}
