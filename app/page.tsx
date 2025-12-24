import React from 'react'
import Header from '../components/Header'
import Badge from '../components/Badge'
import SolutionCard from '../components/SolutionCard'
import MachineCard from '../components/MachineCard'
import BrandsGrid from '../components/BrandsGrid'
import Timeline from '../components/Timeline'
import Benefits from '../components/Benefits'
import ContactForm from '../components/ContactForm'
import MapEmbed from '../components/MapEmbed'
import Footer from '../components/Footer'
import Image from 'next/image'

const heroImage = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80'
const machines = [
  { title: 'Tractores', image: 'https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=2000&q=80', desc: 'Fuerza y eficiencia para las tareas del campo.', brand: 'CLAAS' },
  { title: 'Cosechadoras', image: 'https://images.unsplash.com/photo-1598514982841-9a0aa8c5c9b5?auto=format&fit=crop&w=2000&q=80', desc: 'Rendimiento y capacidad en cosecha.', brand: 'STARA' },
  { title: 'Sembradoras', image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=2000&q=80', desc: 'Precisión y rendimiento en siembra.', brand: 'PAUNY' },
  { title: 'Pulverizadoras', image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=2000&q=80', desc: 'Cobertura y exactitud en aplicación.', brand: 'KUBOTA' },
  { title: 'Implementos y tolvas', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80', desc: 'Versatilidad para cada cultivo.', brand: 'LOVOL' },
  { title: 'Equipos para forraje', image: 'https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?auto=format&fit=crop&w=2000&q=80', desc: 'Soluciones para producción de forraje.', brand: 'CLAAS' }
]

export default function Page() {
  return (
    <main id="inicio" className="min-h-screen text-gray-900">
      <Header />
      <section className="relative">
        <div className="relative h-[520px] w-full">
          <Image src={heroImage} alt="Hero campo" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'var(--gradient-overlay)' }} />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 text-white">
              <div className="max-w-3xl animate-pop" style={{ animationDelay: '80ms' }}>
                <div className="mb-4">
                  <Badge>Desde 2007</Badge>
                  <span className="ml-3"><Badge>Postventa fuerte</Badge></span>
                  <span className="ml-3"><Badge>Respaldo regional</Badge></span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">Maquinaria que trabaja como vos.</h1>
                <p className="mt-4 text-lg max-w-xl">Equipos agrícolas, repuestos y servicio técnico que responden cuando más lo necesitás.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/549XXXXXXXXXX?text=Hola%20PICABUEY%2C%20quiero%20consultar%20por%20VENTAS"
                      className="px-5 py-3 rounded font-semibold btn-press text-white shadow-sm hover:brightness-110 transition"
                      style={{ background: "#293A8A" }}
                    >
                      Contactar ventas
                    </a>

                    <a
                      href="https://wa.me/549XXXXXXXXXX?text=Hola%20PICABUEY%2C%20quiero%20consultar%20por%20VENTAS"
                      className="px-5 py-3 rounded font-semibold btn-press text-white shadow-sm hover:brightness-110 transition"
                      style={{ background: "#B87C23" }}
                    >
                      Repuestos
                    </a>
                    <a
                      href="https://wa.me/549XXXXXXXXXX?text=Hola%20PICABUEY%2C%20quiero%20consultar%20por%20SERVICIOS"
                      className="px-5 py-3 rounded font-semibold btn-press border shadow-sm transition"
                      style={{
                        borderColor: "rgba(41, 58, 138, 0.45)",
                        background: "rgba(255, 255, 255, 0.10)",
                        color: "#ffffff",
                      }}
                    >
                      Servicios
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="destacados" className="py-16 bg-gray-50 text-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-[var(--verde)]">Soluciones</h2>
          <p className="text-gray-600 mt-2">Todo para el campo, con respaldo real.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <SolutionCard title="Venta de maquinaria" desc="Equipos robustos y listos para trabajar." cta="https://wa.me/549XXXXXXXXXX?text=Hola%20PICABUEY%2C%20quiero%20consultar%20por%20VENTAS" style={{ animationDelay: '80ms' }} />
            <SolutionCard title="Repuestos" desc="Stock y envío rápido a toda la región." cta="https://wa.me/549XXXXXXXXXX?text=Hola%20PICABUEY%2C%20quiero%20consultar%20por%20REPUESTOS" style={{ animationDelay: '160ms' }} />
            <SolutionCard title="Servicio técnico" desc="Postventa y mantenimiento especializado." cta="https://wa.me/549XXXXXXXXXX?text=Hola%20PICABUEY%2C%20quiero%20consultar%20por%20SERVICIOS" style={{ animationDelay: '240ms' }} />
          </div>
        </div>
      </section>

      <section id="maquinaria" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-[var(--verde)]">Maquinaria destacada</h2>
          <p className="text-gray-600 mt-2">Selección de equipos listos para trabajar fuerte en el campo.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {machines.map((m, i) => (
              <MachineCard key={m.title} image={m.image} title={m.title} desc={m.desc} brand={m.brand} style={{ animationDelay: `${i * 80}ms` }} />
            ))}
          </div>
          <div className="mt-8 bg-[var(--verde)] text-white p-6 rounded-lg flex flex-col md:flex-row items-center justify-between">
            <div>
              <div className="font-semibold text-lg">¿Buscás algo específico? Te asesoramos según tu producción.</div>
              <div className="text-sm mt-1">Contanos qué necesitás y te proponemos la mejor opción.</div>
            </div>
            <div className="mt-4 md:mt-0">
              <a href="https://wa.me/549XXXXXXXXXX?text=Hola%20PICABUEY%2C%20quiero%20consultar%20por%20VENTAS" className="px-4 py-2 bg-[var(--dorado)] text-[var(--verde)] font-semibold rounded btn-press">Contactar a ventas</a>
            </div>
          </div>
        </div>
      </section>

      <section id="marcas" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-[var(--verde)]">Marcas representadas</h2>
          <p className="text-gray-600 mt-2">Representamos marcas líderes en maquinaria agrícola.</p>
          <div className="mt-6">
            <BrandsGrid />
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-16">
        <div className="container mx-auto px-6">
          {/* Header de sección (más potente) */}
          <div className="relative overflow-hidden rounded-2xl p-8 md:p-10 text-white"
            style={{
              background: "#B87C23",           // #B87C23
              border: "1px solid rgba(255,255,255,0.22)",
            }}>
            <div className="max-w-3xl">

              <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                Casi 20 años acompañando al productor.
              </h2>
              <p className="mt-3 text-white/85 text-lg">
                PICABUEY SRL ofrece soluciones integrales en maquinaria agrícola, repuestos y servicio técnico
                con presencia y respaldo en todo el norte argentino.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">

                <a
                  href="#marcas"
                  className="px-5 py-3 rounded font-semibold btn-press"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "white",
                  }}
                >
                  Hablar con un asesor
                </a>
              </div>
            </div>

            {/* detalle decorativo */}
            <div className="pointer-events-none absolute -right-24 -bottom-24 w-72 h-72 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(184,124,35,0.35) 0%, rgba(184,124,35,0) 60%)" }} />
          </div>

          {/* Hitos + Beneficios */}
          <div className="mt-10 grid lg:grid-cols-12 gap-8">
            {/* Timeline en cards (más visual) */}
            <div className="lg:col-span-7">
              <h3 className="text-lg font-semibold text-[var(--verde)]">Nuestra historia</h3>
              <p className="text-gray-600 mt-2">
                Crecimos con un foco claro: servicio, repuestos y equipos que rinden cuando importa.
              </p>
              <div className="mt-5">
                <Timeline />
              </div>
            </div>

            {/* Beneficios en bloque lateral */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl p-6 bg-gray-50 border border-gray-200">
                <h3 className="text-lg font-semibold text-[var(--verde)]">Por qué elegirnos</h3>
                <p className="text-gray-600 mt-2">Confianza, respuesta y respaldo real.</p>
                <div className="mt-5">
                  <Benefits />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="contacto" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[var(--verde)]">Contacto</h2>
            <p className="text-gray-600 mt-2">Maquinaria agrícola, repuestos y el mejor servicio de postventa para productores agrícolas.</p>
            <div className="mt-6 space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-soft text-gray-800">
                <div className="font-semibold">Email</div>
                <div className="text-sm text-gray-600">ventas@picabuey.com</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-soft text-gray-800">
                <div className="font-semibold">Horarios - Salta</div>
                <div className="text-sm text-gray-600">Lun a Vie: 9:00 a 18:00<br />Sáb: 9:00 a 12:30</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-soft text-gray-800">
                <div className="font-semibold">Horarios - Embarcación</div>
                <div className="text-sm text-gray-600">8:30 a 12:30 y 16:00 a 20:00</div>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <div className="w-full max-w-xl">
                <MapEmbed />
              </div>
            </div>

          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--verde)]">Escribinos</h3>
            <p className="text-gray-600 mt-2">Completá el formulario y te respondemos a la brevedad.</p>
            <div className="mt-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
