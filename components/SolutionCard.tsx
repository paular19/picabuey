import React from "react";

export default function SolutionCard({
  title,
  desc,
  cta,
  icon,
  style,
}: {
  title: string;
  desc: string;
  cta: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className="group bg-white rounded-lg shadow-soft p-6 text-gray-800 animate-fade-up
                 transition-all duration-300 ease-out
                 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-center gap-4">


        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{desc}</p>
        </div>
      </div>

      {/* CONTENIDO DESPLEGABLE */}
      <div
        className="
          overflow-hidden
          max-h-0 opacity-0 translate-y-1
          transition-all duration-300 ease-out
          group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0
        "
      >
        <div className="pt-4">
          <div className="text-sm text-gray-600">
            {/* Texto extra (podés cambiarlo por props si querés) */}
            Te asesoramos para elegir la mejor alternativa según tu producción,
            disponibilidad y servicio postventa.
          </div>

          <div className="mt-4">
            <a
              href={cta}
              className="inline-flex items-center justify-center px-4 py-2 rounded font-semibold btn-press
                         text-white transition hover:brightness-110"
              style={{ background: "#293A8A" }}
            >
              Consultar
            </a>
          </div>
        </div>
      </div>

      {/* CTA visible en reposo (opcional). Si no lo querés, borrá este bloque */}
      
    </div>
  );
}
