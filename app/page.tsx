'use client'

import { Camera, CalendarCheck, Eye, Hammer, MessageCircle, Ruler, Scale } from 'lucide-react'
import { useEffect, useState } from 'react'
import { enlaceWhatsApp, TELEFONO_VISIBLE } from '@/lib/whatsapp'

const certezas = [
  {
    icono: Eye,
    titulo: 'La ves antes',
    texto: 'Te enviamos una imagen orientativa de tu cocina renovada, hecha sobre tu propia foto.',
  },
  {
    icono: Scale,
    titulo: 'Sabes qué mueve el precio',
    texto: 'Desde el primer presupuesto te explicamos qué incluye y qué hace que suba o baje. Lo que se añade lo eliges tú.',
  },
  {
    icono: CalendarCheck,
    titulo: 'Tienes una fecha',
    texto: 'Cuando tu pedido entra en fabricación te confirmamos por escrito la fecha de tu cocina terminada, con el montaje incluido.',
  },
]

const pasos = [
  {
    icono: Camera,
    titulo: 'Nos envías la foto',
    texto: 'Dos o tres fotos de tu cocina y tu código postal. Recibes un presupuesto orientativo gratis, con la imagen de cómo quedaría.',
  },
  {
    icono: Ruler,
    titulo: 'La visita de presentación',
    texto: 'Un decorador y un carpintero van a tu casa con muestras. Miden y cierran el diseño contigo. El importe de la visita se descuenta del total.',
  },
  {
    icono: MessageCircle,
    titulo: 'Se fabrica a medida',
    texto: 'Tus frentes se fabrican a la medida de tus muebles. Te avisamos de cada paso y la misma persona te responde de principio a fin.',
  },
  {
    icono: Hammer,
    titulo: 'Montaje incluido',
    texto: 'Montamos y repasamos la cocina contigo, en la fecha que te dimos por escrito.',
  },
]

const cambia = [
  'Puertas y frentes de cajón',
  'Laterales visibles y paneles',
  'Zócalos, cornisas y regletas',
  'Muebles abiertos en el mismo acabado',
]

const opciones = ['Encimera', 'Fregadero y grifo', 'Iluminación LED', 'Interiores de cajón', 'Módulos nuevos']

const preguntas = [
  {
    p: '¿Hay obra?',
    r: 'No. Tus muebles y la distribución se quedan como están. Cambiamos todo lo que se ve, a medida.',
  },
  {
    p: '¿Cuánto cuesta?',
    r: 'Depende de tu cocina. Por eso te enviamos un presupuesto orientativo gratis a partir de tus fotos, y el precio exacto se cierra en la visita.',
  },
  {
    p: '¿Cuándo estará terminada?',
    r: 'Antes de confirmar te decimos en qué semana estaría terminada. Cuando el pedido entra en fabricación te confirmamos la fecha por escrito, con el montaje incluido.',
  },
  {
    p: '¿Tenéis tienda?',
    r: 'Trabajamos en tu casa: en la visita llevamos las muestras para que las veas con tu luz y junto a tus muebles.',
  },
  {
    p: '¿Dónde trabajáis?',
    r: 'En Madrid y su Comunidad. Dinos tu código postal y te lo confirmamos.',
  },
]

export default function HomePage() {
  const [href, setHref] = useState(enlaceWhatsApp(''))
  useEffect(() => setHref(enlaceWhatsApp(window.location.search)), [])

  const BotonFoto = ({ texto = 'Enviar la foto de mi cocina' }: { texto?: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="btn-foto">
      <Camera className="h-5 w-5" aria-hidden />
      {texto}
    </a>
  )

  return (
    <main>
      {/* CABECERA */}
      <header className="bg-[var(--latte)]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <span className="text-base tracking-[0.15em] text-[var(--espresso)] sm:text-xl sm:tracking-[0.2em]" style={{ fontFamily: 'Georgia, serif' }}>
            COCINAS LUJO
          </span>
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[var(--espresso)] underline-offset-4 hover:underline">
            <span className="hidden sm:inline">WhatsApp </span>
            {TELEFONO_VISIBLE}
          </a>
        </div>
      </header>

      {/* PORTADA */}
      <section className="mx-auto max-w-5xl px-5 pb-16 pt-14 text-center md:pt-24">
        <p className="rotulo">Renovación de cocinas en Madrid</p>
        <h1 className="mt-4 text-5xl leading-tight md:text-7xl">
          Mismos muebles.
          <br />
          Otra cocina.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">
          Cambiamos la cara de tu cocina sin obra: puertas, frentes y todo lo que se ve, a medida.
          Envíanos una foto y te enseñamos cómo quedaría antes de decidir.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3">
          <BotonFoto />
          <p className="text-sm opacity-80">Por WhatsApp. Presupuesto orientativo gratis y sin compromiso.</p>
        </div>
      </section>

      {/* TRES CERTEZAS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-5">
          <p className="rotulo text-center">Sin sorpresas</p>
          <h2 className="mt-3 text-center text-3xl md:text-4xl">Tres cosas que sabes desde el principio</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {certezas.map(({ icono: Icono, titulo, texto }) => (
              <div key={titulo} className="tarjeta">
                <Icono className="h-8 w-8 text-[var(--dorado)]" aria-hidden />
                <h3 className="mt-4 text-2xl">{titulo}</h3>
                <p className="mt-2 leading-relaxed">{texto}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm opacity-70">
            La imagen es una simulación orientativa. El diseño final se cierra contigo en la visita.
          </p>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-5">
          <p className="rotulo text-center">Cómo funciona</p>
          <h2 className="mt-3 text-center text-3xl md:text-4xl">De la foto a la cocina terminada</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {pasos.map(({ icono: Icono, titulo, texto }, i) => (
              <li key={titulo} className="tarjeta flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--latte)] text-xl" style={{ fontFamily: 'Georgia, serif' }}>
                  {i + 1}
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-2xl">
                    <Icono className="h-5 w-5 text-[var(--dorado)]" aria-hidden />
                    {titulo}
                  </h3>
                  <p className="mt-2 leading-relaxed">{texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* QUÉ CAMBIA Y QUÉ SE QUEDA */}
      <section className="bg-[var(--espresso)] py-16 text-[var(--hueso)]">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 md:grid-cols-3">
          <div>
            <p className="rotulo">Lo que cambiamos</p>
            <ul className="mt-4 space-y-2 text-lg">
              {cambia.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="rotulo">Lo que se queda</p>
            <ul className="mt-4 space-y-2 text-lg">
              <li>Tus muebles</li>
              <li>La distribución</li>
              <li>Tu casa, sin obra</li>
            </ul>
          </div>
          <div>
            <p className="rotulo">Si quieres, también</p>
            <ul className="mt-4 space-y-2 text-lg">
              {opciones.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PREGUNTAS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center text-3xl md:text-4xl">Preguntas frecuentes</h2>
          <div className="mt-8 divide-y divide-[rgba(63,46,34,0.15)]">
            {preguntas.map(({ p, r }) => (
              <details key={p} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-xl" style={{ fontFamily: 'Georgia, serif' }}>
                  {p}
                  <span className="ml-4 text-[var(--dorado)] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed">{r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-4xl md:text-5xl">Ya la imaginaste. Te la hacemos real, con tus mismos muebles.</h2>
          <div className="mt-9 flex flex-col items-center gap-3">
            <BotonFoto texto="Ver mi cocina renovada" />
            <p className="text-sm opacity-80">Envía dos o tres fotos y tu código postal.</p>
          </div>
        </div>
      </section>

      {/* PIE */}
      <footer className="bg-[var(--latte)] py-10 text-[var(--espresso)]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-5 text-center text-sm">
          <span className="text-lg tracking-[0.2em]" style={{ fontFamily: 'Georgia, serif' }}>
            COCINAS LUJO
          </span>
          <p>Madrid · WhatsApp {TELEFONO_VISIBLE} · cocinaslujoadm@gmail.com</p>
          <p>Lunes a viernes, de 9:00 a 18:00</p>
          <p className="opacity-70">© 2026 Cocinas Lujo</p>
        </div>
      </footer>
    </main>
  )
}
