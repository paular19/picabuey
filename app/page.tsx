import React from 'react'
import Header from '../components/Header'
import Badge from '../components/Badge'
import SolutionCard from '../components/SolutionCard'
import MachinesTabs from '../components/MachinesTabs'
import BrandsGrid from '../components/BrandsGrid'
import Benefits from '../components/Benefits'
import ContactForm from '../components/ContactForm'
import MapEmbed from '../components/MapEmbed'
import Footer from '../components/Footer'
import Image from 'next/image'

const heroImage = '/images/bannernuevo2.jpeg'
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
  { title: 'Guapa', image: '/images/guapa.png', desc: 'Modelos de 24 a 28 líneas (ideal arroz) y Guapa Supra 44-60 líneas. Guapa Supra Winter para cultivos de invierno como trigo, avena y cebada.', brand: 'STARA' },
  { title: 'Trion 710, 720, 740', image: '/images/trion.png', desc: 'Tecnología de trilla APS + ROTO PLUS para alto rendimiento con cuidado del grano. Tolva de hasta 12.000 litros y descarga de hasta 130 l/s. Motores Cummins L9 eficientes (Stage V), automatización CEMOS DIALOG y CEMOS AUTOMATIC, y gran versatilidad con cabina confortable, TERRA TRAC y opción MONTANA para pendientes.', brand: 'CLAAS' },
  { title: 'Lexion 7700, 8800', image: '/images/lexion.png', desc: 'Sistema APS SYNFLOW con trilla eficiente y cuidadosa de la paja, con cambios rápidos entre cultivos. Automatización avanzada CEMOS (AUTO CROP FLOW, AUTO SLOPE y AUTO CLEANING), alta potencia y gran capacidad de descarga, tecnología TERRA TRAC, cabina confortable con CEBIS y adaptación ágil a distintos cultivos.', brand: 'CLAAS' },
  { title: 'Jaguar 900 Green Eye', image: '/images/jaguar.png', desc: 'Tambor de cuchillas V-FLEX. CEMOS AUTO KNIFE CONDITION para monitorear cuchillas y recomendar afilado óptimo. CLAAS NUTRIMETER para medir sustancia seca y componentes en tiempo real. Ejes delantero y trasero con regulación de presión de neumáticos para adaptar tracción y cuidado del suelo.', brand: 'CLAAS' },
  { title: 'Liner', image: '/images/liner.png', desc: 'Rastrillo hilerador CLAAS LINER para una formación de hileras uniforme, limpia y eficiente en distintos volúmenes de forraje.', brand: 'CLAAS' },
  { title: 'Segadora Disco', image: '/images/segadora.png', desc: 'Segadora de discos CLAAS diseñada para corte parejo, alta productividad y excelente calidad de trabajo en forrajes.', brand: 'CLAAS' },
  { title: 'Variant', image: '/images/variant.png', desc: 'Rotoenfardadora CLAAS VARIANT con alto rendimiento, compactación uniforme y configuración flexible para diferentes condiciones de trabajo.', brand: 'CLAAS' },
  { title: 'Axion 900', image: '/images/axion900.png', desc: 'Tractor CLAAS AXION 900 de alta potencia, pensado para tareas exigentes con gran eficiencia, tracción y confort operativo.', brand: 'CLAAS' },
  { title: 'Axion 800', image: '/images/axion800.png', desc: 'Tractor CLAAS AXION 800 versátil y robusto, ideal para labores mixtas con excelente relación entre potencia, consumo y maniobrabilidad.', brand: 'CLAAS' },
  { title: 'Arion 600', image: '/images/arion600.png', desc: 'Tractor CLAAS ARION 600 ágil y confiable para múltiples aplicaciones, con cabina cómoda y tecnología orientada a productividad diaria.', brand: 'CLAAS' },
  { title: 'LOVOL TE354', image: '/images/LOVOL TE354.png', desc: 'Lovol 354 - 35 hp doble tracción. Motor diésel 4 cilindros aspirado (2300 cc), transmisión sincronizada 8+8 con inversor mecánico, levante de 3 puntos (710 kg). Rodados: 7,5 x 16 delantero y 12,4 x 24 trasero.', brand: 'LOVOL' },
  { title: 'LOVOL TH754', image: '/images/LOVOL - TH754.png', desc: 'LOVOL TH754 - 75 hp doble tracción. Motor diésel 4 cilindros aspirado (2400 cc), transmisión mecánica sincronizada 12+12, inversor mecánico sincronizado, levante de 3 puntos (2400 kg). Rodado delantero 21,4 x 24 y trasero 18,4 x 30.', brand: 'LOVOL' },
  { title: 'LOVOL TH904', image: '/images/LOVOL 904-H.png', desc: 'LOVOL TH904 - 90 hp doble tracción. Motor diésel 4 cilindros turbo (2400 cc), transmisión mecánica sincronizada 12+12, inversor mecánico sincronizado, levante de 3 puntos (2400 kg). Rodado delantero 21,4 x 24 y trasero 18,4 x 30.', brand: 'LOVOL' },
  { title: 'LOVOL TD1004', image: '/images/LOVOL TD1004 – 100HP doble tracción.png', desc: '100 hp turbo alimentado, freno de disco húmedo, motor WEICHAI 4 cilindros, tracción 4x4, velocidades 16+8 sincronizado, dirección hidráulica, 2200 rpm, levante a 610 mm de 2000 kg, peso total 4740 kg. Rodados: 13,6 x 24 / 16,9 x 34.', brand: 'LOVOL' },
  { title: 'LOVOL TX1104', image: '/images/LOVOL TX1104.png', desc: '110 hp turbo alimentado, freno de disco húmedo, motor WEICHAI 4 cilindros, tracción 4x4, velocidades 12F + 12R sincronizado, toma de fuerza 540-1000 rpm, dirección hidráulica, 2200 rpm, levante a 610 mm de 2200 kg, peso total 4740 kg. Rodados: 13,6 x 24 / 16,9 x 34.', brand: 'LOVOL' },
  { title: 'LOVOL TX1204', image: '/images/LOVOL TX1204.png', desc: '120 hp turbo alimentado, freno de disco húmedo, motor WEICHAI 4 cilindros, tracción 4x4, velocidades 12+12 sincronizado, dirección hidráulica, 2200 rpm, levante a 610 mm > 2100 kg, peso total 5100 kg.', brand: 'LOVOL' },
  { title: 'LOVOL TD1454', image: '/images/LOVOL TD1454.png', desc: '145 hp turbo alimentado, embrague seco 13 doble, motor SHANGHAI 6 cilindros, tracción 4x4, velocidades 16+8 sincronizado, toma de fuerza 540-1000 rpm, dirección hidráulica, 2200 rpm, levante a 610 mm > 3500 kg.', brand: 'LOVOL' },
  { title: 'LOVOL TR1504', image: '/images/LOVOL TR1504.png', desc: '150 hp turbo alimentado, embrague seco 14 doble, motor SHANGHAI 6 cilindros, tracción 4x4, velocidades 16+16 sincronizado, dirección hidráulica, 2200 rpm, levante a 610 mm > 3500 kg, peso total 7620 kg. Modelo desarrollado por el equipo técnico europeo de Lovol para granjas medianas y grandes, con conducción cómoda y rendimiento confiable.', brand: 'LOVOL' },
  { title: 'Tractor EVO 205', image: '/images/Tractor EVO 205.png', desc: 'Tractor EVO 205 con la impronta de la marca más elegida por los argentinos. Sólido, funcional y versátil, con excelente desempeño para múltiples tareas en campo, ganadería y tambo. Ideal para actividades forrajeras, desmalezado, hilerado, picado, rollos, roturación, siembra de predios, tabaco, cosecha y traslado.', brand: 'PAUNY' },
  { title: 'Tractor EVO ASISTIDO 230-250-280 A', image: '/images/remplazopauny 280.png', desc: 'La línea EVO propone una amplia gama con óptima relación calidad/precio para llevar la fuerza de Pauny al campo. Tracción asistida, articulados doble tracción y tracción total P-Trac con variantes de potencia y motor para grandes extensiones, bajo consumo por hectárea y máxima fuerza de tracción.', brand: 'PAUNY' },
  { title: 'Tractor EVO ASISTIDO NG 250/280', image: '/images/remplazopauny 280.png', desc: 'La línea EVO NG ofrece tractores con tracción asistida y variantes de potencia y motor para grandes extensiones. Combina bajo consumo por hectárea, máxima fuerza de tracción, mejor rendimiento y mayor confort.', brand: 'PAUNY' },
  { title: 'Brioso 215', image: '/images/Brioso 215.png', desc: 'Un compacto de fuerza y agilidad. De gran potencia, es ideal para tareas difíciles y exigentes. Equipado con motor Cummins y sistema hidráulico Load Sensing Premium. Diseñado para siembra directa de última generación, con gran visibilidad, ergonomía, eficiencia de consumo y confiabilidad superadora.', brand: 'PAUNY' },
  { title: 'Tractor Línea BRAVO 540/580ie/710ie/780ie', image: '/images/TRACTOR LÍNEA BRAVO.png', desc: 'La línea BRAVO ofrece mayor capacidad hidráulica y eficiencia en consumo de combustible. Especialmente desarrollada para siembra directa neumática con caudal variable, incorpora tecnología para mínima compactación y mayor capacidad de tracción. Cabina totalmente presurizada, visión panorámica y máximo confort y seguridad del operario.', brand: 'PAUNY' }
]

export default function Page() {
  return (
    <main id="inicio" className="min-h-screen text-gray-900">
      <Header />
      <section className="relative">
        <div className="relative h-[620px] md:h-[760px] w-full">
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
                <h1 className="text-4xl md:text-5xl font-bold max-w-xl">Maquinarias y servicios</h1>
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
          </div>
        </div>
      </section>

      <section id="repuestos" className="py-16">
        <div className="container mx-auto px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-bold text-[var(--verde)]">Repuestos Originales</h2>
            <p className="mt-4 text-gray-700">
              En Picabuey sabemos que cada hora cuenta en el campo. Por eso ofrecemos un servicio integral de repuestos
              originales para garantizar el máximo rendimiento, seguridad y vida útil de tu maquinaria agrícola.
            </p>
            <p className="mt-4 text-gray-700">
              Trabajamos con repuestos oficiales de marcas líderes como Stara, CLAAS, Pauny, Kubota, Lovol, Genovese, Valtra y Massey Ferguson.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-[var(--verde)]">¿Por qué elegir repuestos originales?</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>✔ Compatibilidad 100% garantizada</li>
              <li>✔ Mayor durabilidad y rendimiento</li>
              <li>✔ Seguridad operativa</li>
              <li>✔ Respaldo oficial de fábrica</li>
              <li>✔ Mejor valor a largo plazo</li>
            </ul>
            <p className="mt-4 text-gray-700">
              Contamos con stock permanente y un equipo de asesores especializados que te ayudan a identificar el
              repuesto correcto de forma rápida y precisa.
            </p>
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
                  <div className="mt-1 text-sm text-white/90">ventas@picabuey.com.ar</div>
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

          <div className="mt-10">
            <div className="rounded-2xl p-6 bg-gray-50 border border-gray-200">
              <h3 className="text-lg font-semibold text-[var(--verde)]">Por qué elegirnos</h3>
              <p className="text-gray-600 mt-2">Confianza, respuesta y respaldo real.</p>
              <div className="mt-5">
                <Benefits />
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
                <div className="text-sm text-gray-600">9:00–18:00 · Sáb 9:00–12:30</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-soft text-gray-800">
                <div className="font-semibold">Horarios - Embarcación</div>
                <div className="text-sm text-gray-600">8:30–12:30 y 16:00–20:00</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-soft text-gray-800">
                <div className="font-semibold">Direcciones</div>
                <div className="text-sm text-gray-600">Av. Paraguay 2720 - Salta
                  <br></br>Av. España 565 - Embarcación</div>
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

      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/5493875889649"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:brightness-110 transition-all"
        style={{ background: '#25D366' }}
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-white">
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.469 2.027 7.77L0 32l8.454-2.012A15.94 15.94 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm8.07 22.226c-.336.943-1.97 1.797-2.7 1.912-.73.115-1.647.163-2.655-.166-.612-.196-1.397-.457-2.399-.895-4.22-1.82-6.977-6.083-7.19-6.366-.212-.283-1.733-2.307-1.733-4.4 0-2.093 1.097-3.12 1.487-3.543.39-.423.85-.529 1.133-.529.283 0 .566.003.814.015.26.013.609-.099.953.727.355.847 1.207 2.94 1.313 3.155.106.212.177.46.035.742-.141.283-.212.46-.424.707-.212.248-.446.554-.637.744-.212.212-.433.44-.186.864.247.424 1.097 1.81 2.353 2.933 1.617 1.44 2.98 1.885 3.404 2.097.424.212.67.177.917-.106.247-.283 1.062-1.238 1.345-1.662.283-.424.566-.353.954-.212.388.141 2.47 1.167 2.894 1.38.424.212.707.318.813.494.106.177.106 1.02-.23 1.963z" />
        </svg>
      </a>
    </main>
  )
}
