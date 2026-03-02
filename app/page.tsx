'use client'

import { BeforeAfterSlider } from '@/components/BeforeAfterSlider'
import { FAQ } from '@/components/FAQ'
import { MessageCircle, Home, Zap, Recycle, DollarSign, Clock, Hammer, Leaf, Check, Star } from 'lucide-react'
import { useState } from 'react'

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola, me interesa renovar mi cocina. ¿Podrían darme más información?')
    window.open(`https://wa.me/34674481134?text=${message}`, '_blank')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\nMensaje: ${formData.message}`)
    window.open(`https://wa.me/34674481134?text=${message}`, '_blank')
  }

  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-blue-50 via-white to-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Logo/Título */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Cocinas Lujo Madrid
            </h1>
            <p className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              Renueva Tu Cocina Sin Cambiar Los Muebles
            </p>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-6">
              <span className="font-semibold text-blue-600">Los únicos en Madrid</span> especializados en renovación de cocinas cambiando solo las puertas
            </p>
            
            {/* Benefits badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
                ✅ Ahorra hasta un 70%
              </div>
              <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-semibold">
                ⚡ Montado en 3 días
              </div>
              <div className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-semibold">
                🌱 Sin obras ni escombros
              </div>
            </div>
          </div>

          {/* Comparador Principal */}
          <div className="max-w-4xl mx-auto mb-12">
            <BeforeAfterSlider
              imageBefore="/placeholder-before.jpg"
              imageAfter="/placeholder-after.jpg"
              alt="Transformación cocina Madrid"
            />
          </div>

          {/* Copy debajo comparador */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              El <span className="font-bold text-blue-600">80% del impacto visual</span> de tu cocina viene de las puertas y frentes. 
              ¿Para qué cambiar muebles que funcionan perfectamente?
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-6">
              <p className="text-lg"><span className="font-semibold">El secreto:</span> Solo cambiamos puertas, cajones y frentes</p>
              <p className="text-lg"><span className="font-semibold">El resultado:</span> Cocina completamente renovada</p>
              <p className="text-lg"><span className="font-semibold">La diferencia:</span> Ahorras miles de euros</p>
            </div>
          </div>

          {/* 3 Valores principales */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="card text-center hover:scale-105 transition-transform">
              <Zap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold text-xl mb-2">Rápido</h3>
              <p className="text-gray-600">Instalación en solo 2-3 días</p>
            </div>
            <div className="card text-center hover:scale-105 transition-transform">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-bold text-xl mb-2">Económico</h3>
              <p className="text-gray-600">Hasta 70% de ahorro vs cocina nueva</p>
            </div>
            <div className="card text-center hover:scale-105 transition-transform">
              <Recycle className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-bold text-xl mb-2">Sostenible</h3>
              <p className="text-gray-600">Aprovechas muebles funcionales</p>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="text-center">
            <button onClick={handleWhatsApp} className="btn-whatsapp text-lg">
              <MessageCircle className="w-6 h-6" />
              Pide Tu Presupuesto Gratis
            </button>
            <p className="text-sm text-gray-500 mt-3">Respuesta en menos de 1 hora</p>
          </div>
        </div>
      </section>

      {/* PLANES - 3 OPCIONES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="section-title text-center mb-4">
            Elige Tu Plan de Renovación
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Desde lo básico hasta la transformación completa. Tú decides.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan Básico - DESTACADO */}
            <div className="plan-card featured relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm">
                MÁS POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Plan Básico</h3>
                <p className="text-gray-600 mb-4">Renovación de Puertas</p>
                <div className="text-4xl font-bold text-blue-600 mb-2">Desde 2.000€</div>
                <p className="text-sm text-gray-500">Según tamaño y acabados</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Cambio completo de todas las puertas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Montado en 3 días</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Sin obras ni escombros</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Diseños modernos y clásicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Aprovechas la estructura existente</span>
                </li>
              </ul>

              <p className="text-sm text-gray-600 mb-6 italic">
                Ideal para actualizar el estilo sin hacer reforma completa. Rápido, económico, gran impacto visual.
              </p>

              <button onClick={handleWhatsApp} className="btn-primary w-full">
                Pedir Presupuesto
              </button>
            </div>

            {/* Plan Medio */}
            <div className="plan-card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Plan Medio</h3>
                <p className="text-gray-600 mb-4">Puertas + Mejoras</p>
                <div className="text-4xl font-bold text-gray-800 mb-2">Desde 3.500€</div>
                <p className="text-sm text-gray-500">Según tamaño y acabados</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Todo lo del Plan Básico</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Cambio de cajones interiores</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Sistemas de apertura modernos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Cierre amortiguado silencioso</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Mayor funcionalidad y confort</span>
                </li>
              </ul>

              <p className="text-sm text-gray-600 mb-6 italic">
                Renovación completa de frentes + mejora de la experiencia de uso diaria. Más cómodo, silencioso y duradero.
              </p>

              <button onClick={handleWhatsApp} className="btn-primary w-full bg-gray-700 hover:bg-gray-800">
                Pedir Presupuesto
              </button>
            </div>

            {/* Plan Premium */}
            <div className="plan-card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Plan Premium</h3>
                <p className="text-gray-600 mb-4">Transformación Completa</p>
                <div className="text-4xl font-bold text-gray-800 mb-2">Desde 6.500€</div>
                <p className="text-sm text-gray-500">Proyecto personalizado</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Todo lo del Plan Medio</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Encimera nueva de alta gama</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Fregadero y grifería premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Iluminación LED decorativa</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Suelo vinílico de calidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Electrodomésticos panelables</span>
                </li>
              </ul>

              <p className="text-sm text-gray-600 mb-6 italic">
                Cocina de lujo personalizada. Cada detalle pensado para excelencia, diseño y durabilidad.
              </p>

              <button onClick={handleWhatsApp} className="btn-primary w-full bg-gray-700 hover:bg-gray-800">
                Pedir Presupuesto
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ COCINAS LUJO */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="section-title text-center mb-16">
            Por Qué Clientes Eligen Cocinas Lujo
          </h2>

          <div className="space-y-12">
            <div className="card hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-3">Ahorro Real sin Sacrificar Calidad</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Trabajamos con los mismos proveedores que las grandes marcas de cocinas de lujo.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <span className="font-semibold">La diferencia:</span> Ellos te venden muebles completos nuevos. 
                    Nosotros solo las puertas que realmente necesitas cambiar.
                  </p>
                  <p className="text-lg font-semibold text-blue-600">
                    Misma calidad premium. Precio inteligente.
                  </p>
                </div>
              </div>
            </div>

            <div className="card hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-3">Proceso Diseñado Para Tu Vida</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    No tienes que vivir en una obra durante semanas.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-xl mb-3">
                    <p className="font-semibold mb-2">Nuestro proceso:</p>
                    <ul className="space-y-2">
                      <li><span className="font-semibold">Día 1:</span> Medición (30 minutos en tu casa)</li>
                      <li><span className="font-semibold">Días 2-10:</span> Fabricación (tú sigues tu vida normal)</li>
                      <li><span className="font-semibold">Días 11-13:</span> Instalación (2-3 días y listo)</li>
                    </ul>
                  </div>
                  <p className="text-lg font-semibold text-blue-600">
                    Tu cocina fuera de servicio solo 2-3 días. No 2 semanas.
                  </p>
                </div>
              </div>
            </div>

            <div className="card hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Hammer className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-3">Sin Obras Que Te Vuelvan Loco</h3>
                  <ul className="space-y-2 mb-3">
                    <li className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>No rompemos azulejos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>No tocamos instalaciones eléctricas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>No movemos tuberías</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>No generamos escombros masivos</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Solo desmontamos puertas viejas. Instalamos puertas nuevas. Limpiamos. Nos vamos.
                  </p>
                  <p className="text-lg font-semibold text-blue-600">
                    Tu casa sigue siendo tu casa.
                  </p>
                </div>
              </div>
            </div>

            <div className="card hover:scale-105 transition-transform">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-3">Renovación Sostenible y Ecológica</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Cada año, miles de cocinas funcionales terminan en el vertedero solo porque "se ven viejas".
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Nosotros creemos que <span className="font-semibold">si funciona, se aprovecha.</span>
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Si tus muebles abren bien, cierran bien, y aguantan peso sin problema... ¿para qué cambiarlos?
                  </p>
                  <p className="text-lg font-semibold text-green-600">
                    Renueva lo visual. Conserva lo funcional.
                    <br />
                    Tu bolsillo y el planeta te lo agradecen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO 5 PASOS */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Cómo Funciona el Proceso
          </h2>

          <div className="space-y-8 mb-12">
            {[
              { num: 1, title: "Contacta Por WhatsApp", desc: "Envíanos fotos de tu cocina. Te decimos si es candidata y te damos presupuesto estimado. Sin compromiso." },
              { num: 2, title: "Medición Profesional", desc: "30 minutos en tu casa. Tomamos medidas precisas y confirmamos presupuesto exacto." },
              { num: 3, title: "Elige Tu Estilo", desc: "Te mostramos catálogo completo de estilos, colores y acabados. Tú eliges lo que más te gusta." },
              { num: 4, title: "Fabricamos A Medida", desc: "Cada puerta se fabrica específica para tu cocina. Precisión milimétrica. 7-10 días fabricación." },
              { num: 5, title: "Instalamos En 2-3 Días", desc: "Equipo profesional instala todo con cuidado. Trabajo limpio y rápido. Tu cocina lista." }
            ].map((step) => (
              <div key={step.num} className="flex gap-4 items-start">
                <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-blue-50">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl mb-2">Así de simple.</p>
            <p className="text-xl mb-2">Así de rápido.</p>
            <p className="text-xl font-bold mb-8">Así de profesional.</p>
            
            <button onClick={handleWhatsApp} className="btn-whatsapp text-lg bg-green-500 hover:bg-green-600">
              <MessageCircle className="w-6 h-6" />
              Empezar Ahora - WhatsApp
            </button>
          </div>
        </div>
      </section>

      <FAQ />

      {/* TESTIMONIOS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="section-title text-center mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Clientes satisfechos que transformaron sus cocinas con nosotros
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card hover:scale-105 transition-transform">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "¡Increíble! Cocinas Lujo transformó mi cocina en un espacio moderno y funcional. Su atención al detalle y profesionalismo superaron mis expectativas. ¡Los recomiendo totalmente!"
              </p>
              <p className="font-bold">Ana García</p>
              <p className="text-sm text-gray-500">Madrid Centro</p>
            </div>

            <div className="card hover:scale-105 transition-transform">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Desde el primer momento, el equipo mostró un gran interés en entender mis necesidades. El resultado final es una cocina a medida que se adapta perfectamente a mi estilo de vida. ¡Gracias!"
              </p>
              <p className="font-bold">Pedro Martínez</p>
              <p className="text-sm text-gray-500">Pozuelo de Alarcón</p>
            </div>

            <div className="card hover:scale-105 transition-transform">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "La calidad de los materiales y la profesionalidad del equipo son inigualables. Estoy muy contenta con mi nueva cocina y la recomiendo a todos aquellos que buscan un trabajo bien hecho."
              </p>
              <p className="font-bold">Sofía López</p>
              <p className="text-sm text-gray-500">Las Rozas</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO CONTACTO */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="section-title text-center mb-4">
            ¿Listo Para Renovar Tu Cocina?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Completa el formulario y te respondemos en menos de 1 hora
          </p>

          <form onSubmit={handleSubmit} className="card max-w-xl mx-auto">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Cuéntanos sobre tu cocina *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tamaño aproximado, qué plan te interesa, cuándo te gustaría empezar..."
                />
              </div>

              <button type="submit" className="btn-primary w-full text-lg">
                Enviar Consulta por WhatsApp
              </button>

              <p className="text-sm text-gray-500 text-center">
                Al enviar, serás redirigido a WhatsApp para completar tu consulta
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Cocinas Lujo Madrid</h3>
              <p className="text-gray-400 mb-4">
                Especialistas en renovación de cocinas cambiando solo las puertas. 
                Rápido, económico y sostenible.
              </p>
              <p className="text-sm text-gray-500">
                Los únicos en Madrid enfocados 100% en este servicio
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Nuestros Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Plan Básico - Renovación de Puertas</li>
                <li>Plan Medio - Puertas + Mejoras</li>
                <li>Plan Premium - Transformación Completa</li>
                <li>Medición Gratuita</li>
                <li>Asesoramiento Personalizado</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contacto</h4>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <span>📍</span> Madrid, España
                </p>
                <p className="flex items-center gap-2">
                  <span>📱</span> <a href="https://wa.me/34674481134" className="hover:text-white">674 481 134</a>
                </p>
                <p className="flex items-center gap-2">
                  <span>✉️</span> <a href="mailto:info@cocinaslujo.com" className="hover:text-white">info@cocinaslujo.com</a>
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <span>🕐</span> Lun-Vie: 09:00 - 18:00
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400 mb-2">
              Renovación ecológica de cocinas · Ahorra hasta un 70% · Montado en 3 días
            </p>
            <p className="text-sm text-gray-500">
              © 2026 Cocinas Lujo Madrid. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
