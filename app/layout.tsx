import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { WhatsAppFloating } from '@/components/WhatsAppFloating'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cocinas Lujo Madrid - Renovación de Puertas de Cocina | Montado en 3 Días',
  description: 'Renueva tu cocina cambiando solo las puertas. Ahorra hasta un 70% vs cocina nueva. Montaje en 3 días sin obras. Los únicos en Madrid especializados en renovación de puertas.',
  keywords: 'renovación cocinas Madrid, cambio puertas cocina, cocinas a medida Madrid, renovación ecológica, cocinas lujo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <WhatsAppFloating phoneNumber="674481134" />
      </body>
    </html>
  )
}
