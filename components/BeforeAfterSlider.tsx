'use client'

import { useState, useRef, useEffect } from 'react'

interface BeforeAfterSliderProps {
  imageBefore: string
  imageAfter: string
  alt: string
}

export function BeforeAfterSlider({ imageBefore, imageAfter, alt }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX)
  }
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    window.addEventListener('mouseup', handleGlobalMouseUp)
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl cursor-col-resize select-none shadow-2xl"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* Imagen DESPUÉS (fondo completo) */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-7xl mb-4">✨</div>
          <p className="text-3xl font-bold text-gray-800 mb-2">DESPUÉS</p>
          <p className="text-xl text-gray-600">Cocina Renovada</p>
          <p className="text-lg text-gray-500 mt-2">Solo cambiando puertas</p>
        </div>
      </div>
      
      {/* Imagen ANTES (con clip) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-7xl mb-4">🏚️</div>
            <p className="text-3xl font-bold text-white mb-2">ANTES</p>
            <p className="text-xl text-gray-200">Cocina Antigua</p>
            <p className="text-lg text-gray-300 mt-2">Puertas desgastadas</p>
          </div>
        </div>
      </div>
      
      {/* Línea divisoria + handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl transition-transform duration-75"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle circular */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-blue-600 hover:border-blue-700 transition-colors cursor-col-resize">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
      
      {/* Labels ANTES/DESPUÉS */}
      <div className="absolute top-4 left-4 bg-black/80 text-white px-5 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
        ANTES
      </div>
      <div className="absolute top-4 right-4 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
        DESPUÉS
      </div>
      
      {/* Instrucción deslizar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-sm shadow-xl border border-gray-200">
        ← Desliza para comparar →
      </div>
    </div>
  )
}
