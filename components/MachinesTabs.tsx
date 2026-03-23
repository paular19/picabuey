'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import MachineCard from './MachineCard'

interface Machine {
    title: string
    image: string
    desc: string
    brand: string
}

interface MachinesTabsProps {
    machines: Machine[]
}

export default function MachinesTabs({ machines }: MachinesTabsProps) {
    const [activeTab, setActiveTab] = useState('kubota')

    const kubotaMachines = machines.filter(m => m.brand === 'KUBOTA')
    const staraMachines = machines.filter(m => m.brand === 'STARA')
    const claasMachines = machines.filter(m => m.brand === 'CLAAS')

    const displayedMachines = activeTab === 'kubota'
        ? kubotaMachines
        : activeTab === 'stara'
            ? staraMachines
            : claasMachines

    return (
        <div>
            {/* Tab Navigation */}
            <div className="flex gap-8 mb-8 border-b-2 border-gray-200 pb-0">
                {/* Stara Tab */}
                <button
                    onClick={() => setActiveTab('stara')}
                    className="relative pb-4 transition-all duration-300 group"
                >
                    <div className="relative w-32 h-16">
                        <Image
                            src="/images/staradef.png"
                            alt="Stara"
                            fill
                            sizes="140px"
                            className="object-contain"
                            style={{
                                opacity: activeTab === 'stara' ? 1 : 0.5
                            }}
                        />
                    </div>
                    {/* Active Indicator */}
                    {activeTab === 'stara' && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-t-full" />
                    )}
                </button>

                {/* Kubota Tab */}
                <button
                    onClick={() => setActiveTab('kubota')}
                    className="relative pb-4 transition-all duration-300 group"
                >
                    <div className="relative w-24 h-14">
                        <Image
                            src="/images/Kubota-Logo.svg"
                            alt="Kubota"
                            fill
                            sizes="120px"
                            className="object-contain"
                            style={{
                                opacity: activeTab === 'kubota' ? 1 : 0.5
                            }}
                        />
                    </div>
                    {/* Active Indicator */}
                    {activeTab === 'kubota' && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-t-full" />
                    )}
                </button>

                {/* CLAAS Tab */}
                <button
                    onClick={() => setActiveTab('claas')}
                    className="relative pb-4 transition-all duration-300 group"
                >
                    <div className="relative w-24 h-14">
                        <Image
                            src="/images/Claas-Logo.svg"
                            alt="CLAAS"
                            fill
                            sizes="120px"
                            className="object-contain"
                            style={{
                                opacity: activeTab === 'claas' ? 1 : 0.5
                            }}
                        />
                    </div>
                    {/* Active Indicator */}
                    {activeTab === 'claas' && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-t-full" />
                    )}
                </button>
            </div>

            {/* Tab Content */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {displayedMachines.length > 0 ? (
                    displayedMachines.map((m, i) => (
                        <div key={`${m.title}-${i}`} style={{ animationDelay: `${i * 80}ms` }}>
                            <MachineCard
                                image={m.image}
                                title={m.title}
                                desc={m.desc}
                                brand={m.brand}
                            />
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-8 text-gray-400">
                        No hay máquinas disponibles para esta marca.
                    </div>
                )}
            </div>
        </div>
    )
}
