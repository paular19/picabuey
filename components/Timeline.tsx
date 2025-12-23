import React from "react";

export default function TimelineCards() {
  const items = [
    { year: "2007", text: "Nace PICABUEY SRL" },
    { year: "2009", text: "Primer puesto venta tractores Valtra en el país" },
    { year: "2010", text: "#1 en venta de repuestos" },
    { year: "2009", text: "Relación con CLAAS (continúa)" },
    { year: "2014", text: "Nueva etapa y expansión de servicio y repuestos" },
    { year: "Hoy", text: "Representamos STARA, PAUNY, LOVOL, KUBOTA, CLAAS" },
  ];

  return (
    <div className="relative pl-6 space-y-4">
      <div className="absolute left-2 top-2 bottom-2 w-px bg-gray-200" />
      {items.map((it, idx) => (
        <div
          key={`${it.year}-${idx}`}
          style={{ animationDelay: `${idx * 90}ms` }}
          className="animate-fade-up"
        >
          <div className="relative bg-white rounded-xl border border-gray-200 p-4 shadow-soft card-hover">
            <span
              className="absolute -left-[22px] top-5 w-3 h-3 rounded-full"
              style={{ background: "var(--dorado)" }}
            />
            <div className="flex items-start gap-4">
              <div className="w-16 shrink-0 font-bold text-[var(--verde)]">{it.year}</div>
              <div className="text-gray-700">{it.text}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
