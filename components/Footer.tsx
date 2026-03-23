import React from "react";

export default function Footer() {
  return (
    <footer className="mt-0">
      <div className="h-1 w-full bg-gradient-to-r from-[#04532B] via-[#293A8A] to-[#B87C23]" />

      <div className="bg-[#02532B] text-white">
        <div className="mx-auto max-w-6xl px-6 py-10 grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-xl font-bold tracking-tight">
              PICABUEY <span className="text-[#B87C23]">SRL</span>
            </div>
            <p className="mt-2 text-sm text-white/80 max-w-sm">
              Maquinaria que trabaja como vos. Equipos agrícolas, repuestos y servicio
              técnico con respaldo real en el norte argentino.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="px-4 py-2 rounded font-semibold bg-[#293A8A] text-white hover:brightness-110 transition"
                href="https://wa.me/549XXXXXXXXXX?text=Hola%20PICABUEY%2C%20quiero%20consultar%20por%20VENTAS"
              >
                WhatsApp Ventas
              </a>

              <a
                className="px-4 py-2 rounded font-semibold bg-white/10 border border-white/20 hover:bg-white/15 transition"
                href="https://maps.app.goo.gl/KYSLSG2Ho81mVn4XA"
                target="_blank"
                rel="noreferrer"
              >
                Ver ubicación
              </a>
            </div>
          </div>

          <div>
            <div className="font-semibold text-[#A7A7A5]">Navegación</div>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                ["Inicio", "#inicio"],
                ["Soluciones", "#destacados"],
                ["Maquinaria destacada", "#maquinaria"],
                ["Marcas", "#marcas"],
                ["Nosotros", "#nosotros"],
                ["Contacto", "#contacto"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-white/85 hover:text-white transition">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-semibold text-[#A7A7A5]">Contacto</div>
            <div className="mt-3 text-sm text-white/85 space-y-3">
              <div>
                <div className="text-white font-medium">Email</div>
                <div>ventas@picabuey.com.ar</div>
              </div>

              <div>
                <div className="text-white font-medium">Horarios</div>
                <div>Lun a Vie 9:00–18:00 · Sáb 9:00–12:30</div>
                <div>Embarcación 8:30–12:30 y 16:00–20:00</div>
              </div>

              <div>
                <div className="text-white font-medium">Instagram</div>
                <a
                  href="https://instagram.com/picabueysrl"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white transition"
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-[#B87C23]" />
                  @picabueysrl
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs text-white/70">
            <div>© {new Date().getFullYear()} PICABUEY SRL. Todos los derechos reservados.</div>
            <div className="text-[#B87C23]">Todo para el campo, con respaldo real.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
