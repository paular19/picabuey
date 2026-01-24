import React from 'react'
import Header from '../components/Header'
import Badge from '../components/Badge'
import SolutionCard from '../components/SolutionCard'
import MachinesTabs from '../components/MachinesTabs'
import BrandsGrid from '../components/BrandsGrid'
import Timeline from '../components/Timeline'
import Benefits from '../components/Benefits'
import ContactForm from '../components/ContactForm'
import MapEmbed from '../components/MapEmbed'
import Footer from '../components/Footer'
import Image from 'next/image'

const heroImage = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80'
const machines = [
  { title: 'B2401', image: '/images/B2401.png', desc: '24 hp diesel - 4x4 - 3 puntos con 600 kg de levante; ancho total 1.11 m. Ideal para verdura y mantenimiento de espacios verdes.', brand: 'KUBOTA' },
  { title: 'B2401 Super Narrow', image: '/images/B2401SuperNarrow.png', desc: 'Versión trocha angosta (ancho total 0.90 m). Ideal para horticultura, verdura y mantenimiento de espacios verdes.', brand: 'KUBOTA' },
  { title: 'L3800', image: '/images/L3800.png', desc: '38 hp diesel - 4x4 - 3 puntos. Modelo más vendido de Kubota: sencillo, durable y de bajo mantenimiento.', brand: 'KUBOTA' },
  { title: 'MX5100', image: '/images/MX5100.png', desc: '51 hp diesel 4 cilindros - 4x4 - 3 puntos. Inversor mecánico.', brand: 'KUBOTA' },
  { title: 'M8540 Narrow', image: '/images/M8540Narrow.png', desc: '85 hp viñatero compacto - 3 puntos - inversor electrohidráulico - sistema bi-speed para mejor giro. Para viñedos angostos, invernaderos y frutales. Con y sin cabina.', brand: 'KUBOTA' },
  { title: 'M9540', image: '/images/M9540.png', desc: '95 hp diesel 4 cilindros turbo - 4x4 - 3 puntos - inversor electrohidráulico - eje delantero de engranaje cónico para maniobras fáciles. Con y sin cabina.', brand: 'KUBOTA' },
  { title: 'M108S', image: '/images/M108S.png', desc: '104 hp diesel 4 cilindros turbo - 4x4 - 3 puntos - inversor electrohidráulico - eje delantero de engranaje cónico. Cabina con suspensión, asiento neumático, aire acondicionado y filtros de carbono.', brand: 'KUBOTA' },
  { title: 'Fox', image: '/images/fox.png', desc: 'Escarificador ideal para el plantío directo, descompactando el suelo a una profundidad de 26 cm y manteniendo 70% del rastrojo en la superficie.', brand: 'STARA' },
  { title: 'Starplan', image: '/images/starplan.png', desc: 'Pala hidráulica niveladora reversible Starplan 5000.', brand: 'STARA' },
  { title: 'Imperador 3.0', image: '/images/imperador3.0.png', desc: 'Controlador completo para agricultura de precisión, diseñado y proyectado por Stara. Fácil de manejar. Proporciona interactividad entre la máquina y el operador.', brand: 'STARA' },
  { title: 'Imperador 4000', image: '/images/imperador4000.png', desc: 'Escarificador ideal para plantío directo con eficiencia en pulverización. Descompacta el suelo a 26 cm manteniendo 70% del rastrojo en la superficie.', brand: 'STARA' },
  { title: 'Imperador 3000', image: '/images/imperador3000.png', desc: 'Tecnología e innovación combinada con alta productividad. Mayor autonomía, capacidad de producto y excelencia en pulverización con paquete tecnológico exclusivo de Stara.', brand: 'STARA' },
  { title: 'Brava+', image: '/images/brava+.png', desc: 'Cabezal maicero para cosecha de diversas variedades de maíz con eficiencia, calidad y seguridad.', brand: 'STARA' },
  { title: 'Rebokeñinja', image: '/images/rebokeninja.png', desc: 'Tolvas agrícolas para transporte de granos. Modelos Reboke Ninja 33000 (33 m3) y Reboke Ninja 40000 (40 m3).', brand: 'STARA' },
  { title: 'Bruttus 12000', image: '/images/bruttus12000.png', desc: 'Distribuidor por gravedad con excelente uniformidad y precisión para productos en polvo y fertilizantes granulados.', brand: 'STARA' },
  { title: 'Hércules 10000', image: '/images/hercules10000.png', desc: 'Distribuidor de arrastre inoxidable para productos en polvo, fertilizantes y semillas con excelente uniformidad.', brand: 'STARA' },
  { title: 'Hércules 6.0', image: '/images/hercules6.0.png', desc: 'Distribuidor autopropulsado con excelente calidad de aplicación y precisión de dosis. Alto rendimiento operativo.', brand: 'STARA' },
  { title: 'Guapa', image: '/images/guapa.png', desc: 'Modelos de 24 a 28 líneas (ideal arroz) y Guapa Supra 44-60 líneas. Guapa Supra Winter para cultivos de invierno como trigo, avena y cebada.', brand: 'STARA' }
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
                <h1 className="text-4xl md:text-5xl font-bold max-w-xl">Maquinaria que trabaja como vos.</h1>
                <p className="mt-4 text-lg max-w-xl">Equipos agrícolas, repuestos y servicio técnico que responden cuando más lo necesitás.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/5493874576655?text=Hola%20PICABUEY%2C%20quiero%20consultar%20por%20VENTAS"
                      className="px-5 py-3 rounded font-semibold btn-press text-white shadow-sm hover:brightness-110 transition"
                      style={{ background: "#293A8A" }}
                    >
                      Contactar ventas
                    </a>

                    <a
                      href="https://wa.me/5493874576672?text=Hola%20PICABUEY%2C%20quiero%20consultar%20por%20REPUESTOS"
                      className="px-5 py-3 rounded font-semibold btn-press text-white shadow-sm hover:brightness-110 transition"
                      style={{ background: "#B87C23" }}
                    >
                      Repuestos
                    </a>
                    <a
                      href="https://wa.me/5493874842119?text=Hola%20PICABUEY%2C%20quiero%20consultar%20por%20POST%20VENTA"
                      className="px-5 py-3 rounded font-semibold btn-press border shadow-sm transition"
                      style={{
                        borderColor: "rgba(41, 58, 138, 0.45)",
                        background: "rgba(255, 255, 255, 0.10)",
                        color: "#ffffff",
                      }}
                    >
                      Post venta
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
          <div className="mt-6">
            <MachinesTabs machines={machines} />
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
          <div className="relative overflow-hidden rounded-2xl p-8 md:p-10">
            <div className="max-w-5xl mx-auto text-center">

              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Contacto directo</h2>
              <p className="mt-3 text-gray-700 text-lg">Elegí el área y escribinos por WhatsApp. El correo queda a mano.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                <div className="rounded-xl p-5 text-white shadow-soft" style={{ background: 'rgb(184, 124, 35)' }}>
                  <div className="text-sm uppercase tracking-wide text-white/85">Ventas</div>
                  <div className="mt-2 font-semibold text-xl">387 457 6655</div>
                  <div className="mt-1 text-sm text-white/90">ventas@picabueystl.com.ar</div>
                  <a
                    href="https://wa.me/5493874576655?text=Hola%2C%20quiero%20contactar%20con%20Ventas"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block w-full text-center px-4 py-2 font-semibold rounded-lg btn-press"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}
                  >
                    Escribir por WhatsApp
                  </a>
                </div>

                <div className="rounded-xl p-5 text-white shadow-soft" style={{ background: '#293A8A' }}>
                  <div className="text-sm uppercase tracking-wide text-white/85">Repuestos</div>
                  <div className="mt-2 font-semibold text-xl">387 457 6672</div>
                  <div className="mt-1 text-sm text-white/90">picabuey@picabueysrl.com.ar</div>
                  <a
                    href="https://wa.me/5493874576672?text=Hola%2C%20quiero%20contactar%20con%20Repuestos"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block w-full text-center px-4 py-2 font-semibold rounded-lg btn-press"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}
                  >
                    Escribir por WhatsApp
                  </a>
                </div>

                <div className="rounded-xl p-5 text-white shadow-soft" style={{ background: 'rgb(4, 83, 43)' }}>
                  <div className="text-sm uppercase tracking-wide text-white/85">Postventa</div>
                  <div className="mt-2 font-semibold text-xl">387 484 2119</div>
                  <div className="mt-1 text-sm text-white/90">Soporte dedicado</div>
                  <a
                    href="https://wa.me/5493874842119?text=Hola%2C%20quiero%20contactar%20con%20Postventa"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block w-full text-center px-4 py-2 font-semibold rounded-lg btn-press"
                    style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}
                  >
                    Escribir por WhatsApp
                  </a>
                </div>
              </div>
            </div>
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
                <div className="text-sm text-gray-600">administracion@picabueysrl.com.ar</div>
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

          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--verde)]">Ubicación</h3>
            <p className="text-gray-600 mt-2">Encontranos en nuestras sucursales.</p>
            <div className="mt-4">
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
