import React from 'react'

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-[var(--plata)] text-[var(--verde)] text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
      {children}
    </span>
  )
}
