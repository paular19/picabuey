'use client'
import React, { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const waVentas =
    'https://wa.me/549XXXXXXXXXX?text=Hola%20PICABUEY%2C%20quiero%20consultar%20por%20VENTAS'
  const waRepuestos =
    'https://wa.me/549XXXXXXXXXX?text=Hola%20PICABUEY%2C%20quiero%20consultar%20por%20REPUESTOS'
  const waServicios =
    'https://wa.me/549XXXXXXXXXX?text=Hola%20PICABUEY%2C%20quiero%20consultar%20por%20SERVICIOS'

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const to = 'ventas@picabuey.com'
    const subject = encodeURIComponent('Contacto desde sitio - ' + name)
    const body = encodeURIComponent(
      `Nombre: ${name}\nTeléfono: ${phone}\n\nMensaje:\n${message}`
    )
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-soft text-gray-800 animate-fade-up"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#293A8A]/30"
        />
        <input
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Teléfono"
          className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#293A8A]/30"
        />
      </div>

      <textarea
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Mensaje"
        className="w-full mt-4 p-3 border rounded h-28 focus:outline-none focus:ring-2 focus:ring-[#293A8A]/30"
      />

      {/* Acciones */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
        <button
          type="submit"
          className="px-4 py-3 rounded font-semibold text-white btn-press hover:brightness-110 transition"
          style={{ background: '#293A8A' }}
        >
          Enviar
        </button>

       
      </div>
    </form>
  )
}
