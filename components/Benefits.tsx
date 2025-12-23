import React from "react";

const benefits = [
  { title: "Respaldo regional", desc: "Cobertura en todo el norte argentino" },
  { title: "Postventa fuerte", desc: "Servicio técnico y repuestos originales" },
  { title: "Calidad y confianza", desc: "Equipos de marcas líderes" },
];

export default function BenefitsStack() {
  return (
    <div className="space-y-3">
      {benefits.map((b, i) => (
        <div
          key={b.title}
          style={{ animationDelay: `${i * 80}ms` }}
          className="bg-white rounded-xl border border-gray-200 p-4 shadow-soft animate-fade-up card-hover"
        >
          <div className="flex items-start gap-3">
            <div
              className="mt-1 w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold"
              style={{ background: "#293A8A" }}
            >
              ✓
            </div>
            <div>
              <div className="font-semibold text-[var(--verde)]">{b.title}</div>
              <div className="text-sm text-gray-600 mt-1">{b.desc}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
