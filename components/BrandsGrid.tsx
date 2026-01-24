import React from "react";
import Image from "next/image";

const brands = [
  { name: "STARA", logo: "/images/staradef.png" },
  { name: "KUBOTA", logo: "/images/Kubota-Logo.svg" },
  { name: "CLAAS", logo: "/images/Claas-Logo.svg" },
  { name: "PAUNY", logo: "/images/paunydef.png" },
  { name: "LOVOL", logo: "/images/lovoldef.png" },
];

export default function BrandsGrid() {
  const loop = [...brands, ...brands, ...brands];

  return (
    <div className="relative overflow-hidden rounded-lg bg-white">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="py-4">
        <div className="brand-marquee flex w-max gap-8">
          {loop.map((b, idx) => (
            <div key={`${b.name}-${idx}`} className="flex items-center justify-center flex-shrink-0">
              <div className="relative w-40 h-16">
                <Image
                  src={b.logo}
                  alt={b.name}
                  fill
                  sizes="150px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
