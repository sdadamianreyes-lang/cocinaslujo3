import type { Metadata } from 'next'
import './globals.css'
import { WhatsAppFloating } from '@/components/WhatsAppFloating'

export const metadata: Metadata = {
  title: 'Cocinas Lujo · Mismos muebles. Otra cocina.',
  description:
    'Renovamos tu cocina en Madrid sin obra: puertas, frentes y todo lo que se ve, a medida y con montaje incluido. Envíanos una foto y te enseñamos cómo quedaría antes de decidir.',
  keywords: 'renovar cocina sin obra Madrid, cambiar puertas de cocina, frentes de cocina a medida, renovación de cocinas Madrid',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  )
}
