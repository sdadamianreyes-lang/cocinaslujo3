'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: '¿Funciona con cualquier cocina?',
    answer: 'Sí, si tus muebles base están estructuralmente bien. Necesitamos que las puertas actuales abran y cierren, los cajones corran sin trabarse, y no haya humedad grave. Si tienes dudas, te hacemos una valoración rápida por WhatsApp con fotos. Sin compromiso.',
  },
  {
    question: '¿Realmente se monta en 3 días?',
    answer: 'Sí. El proceso completo incluye: Medición (30 minutos), Fabricación de puertas a medida (7-10 días), Instalación (2-3 días). Tu cocina queda fuera de servicio solo durante la instalación final de 2-3 días, no semanas.',
  },
  {
    question: '¿Mis electrodomésticos y encimera se quedan?',
    answer: 'En el plan Básico, sí. Solo cambiamos las puertas y frentes de armarios. Horno, nevera, lavavajillas, encimera... todo permanece igual. En los planes Medio y Premium puedes agregar mejoras si lo deseas.',
  },
  {
    question: '¿Cuánto ahorro realmente vs una cocina nueva?',
    answer: 'Hasta un 70%. Una reforma tradicional completa en Madrid cuesta entre 8.000-15.000€. Renovar solo puertas cuesta 2.000-4.500€ dependiendo del tamaño y acabados. El impacto visual es prácticamente el mismo.',
  },
  {
    question: '¿Qué estilos y colores tienen disponibles?',
    answer: 'Trabajamos con varios proveedores premium. Estilos: modernos, clásicos, minimalistas, rústicos. Acabados: mate, brillo, texturado. Colores: blancos, grises, negros, maderas. Contacta por WhatsApp y te enviamos catálogo completo con muestras.',
  },
  {
    question: '¿Tengo que vaciar toda la cocina durante la instalación?',
    answer: 'No completamente. Solo necesitamos acceso a los armarios para desmontar/montar puertas. Puedes dejar electrodomésticos en su sitio, cosas dentro de armarios (las cuidamos con protección), y mesa/sillas si no molestan.',
  },
  {
    question: '¿Qué incluye cada plan exactamente?',
    answer: 'Plan Básico: Cambio de todas las puertas. Plan Medio: Puertas + cajones interiores con sistemas modernos. Plan Premium: Puertas + encimera + fregadero + suelo vinílico + LED + electrodomésticos panelables. Cada plan se adapta a diferentes necesidades y presupuestos.',
  },
  {
    question: '¿Y si algo no encaja perfectamente?',
    answer: 'Por eso medimos con precisión milimétrica antes de fabricar nada. Cada puerta se fabrica a medida exacta de TU cocina. Si algo no encaja (muy raramente sucede), lo ajustamos sin costo adicional hasta que quede perfecto.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="section-title text-center mb-4">
          Preguntas Frecuentes
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Todo lo que necesitas saber sobre la renovación de tu cocina
        </p>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="card">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-lg text-gray-900">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
