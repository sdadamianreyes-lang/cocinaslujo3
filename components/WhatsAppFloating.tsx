'use client'

import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { enlaceWhatsApp } from '@/lib/whatsapp'

export function WhatsAppFloating() {
  const [href, setHref] = useState(enlaceWhatsApp(''))
  useEffect(() => setHref(enlaceWhatsApp(window.location.search)), [])

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white shadow-xl transition hover:brightness-95"
      aria-label="Enviar la foto de mi cocina por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" aria-hidden />
      <span className="hidden sm:inline">Enviar mi foto</span>
    </a>
  )
}
