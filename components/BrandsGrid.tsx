import React from "react";

const brands = ["CLAAS", "PAUNY", "KUBOTA", "LOVOL", "STARA"];

export default function BrandsGrid() {
  const loop = [...brands, ...brands, ...brands];

  return (
    <div className="relative overflow-hidden rounded-lg bg-white">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="py-4">
        <div className="brand-marquee flex w-max gap-6">
          {loop.map((b, idx) => (
            <div key={`${b}-${idx}`} className="flex flex-col items-center gap-2">
              <div className="w-28 h-14 bg-gray-100 rounded flex items-center justify-center text-gray-700 font-bold">
                {b}
              </div>
              <div className="text-xs text-gray-600">{b}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
