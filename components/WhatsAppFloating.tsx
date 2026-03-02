'use client'

import { MessageCircle } from 'lucide-react'

interface WhatsAppFloatingProps {
  phoneNumber: string
}

export function WhatsAppFloating({ phoneNumber }: WhatsAppFloatingProps) {
  const handleClick = () => {
    const formattedNumber = phoneNumber.replace(/\s/g, '')
    const message = encodeURIComponent('Hola, me interesa renovar mi cocina. ¿Podrían darme más información?')
    window.open(`https://wa.me/34${formattedNumber}?text=${message}`, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="hidden group-hover:inline-block font-semibold pr-2 max-w-0 group-hover:max-w-xs transition-all duration-300 overflow-hidden whitespace-nowrap">
        WhatsApp
      </span>
    </button>
  )
}
