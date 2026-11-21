// Enlace de WhatsApp con el origen del cliente ya escrito en el primer mensaje.
// Uso: añade ?o=instagram (o google, facebook, tiktok, chatgpt, locallista) al enlace que publiques en cada canal,
// o ?p=NOMBRE para un prescriptor (interiorista, inmobiliaria, cliente que recomienda).
export const TELEFONO = '34674481134'
export const TELEFONO_VISIBLE = '674 48 11 34'

const ORIGENES: Record<string, string> = {
  google: 'Google',
  instagram: 'Instagram',
  facebook: 'Facebook',
  tiktok: 'TikTok',
  chatgpt: 'ChatGPT',
  locallista: 'Locallista',
}

export function textoInicial(search: string): string {
  const q = new URLSearchParams(search)
  const o = (q.get('o') || q.get('utm_source') || '').toLowerCase()
  const p = (q.get('p') || '').replace(/[^\p{L}\p{N} .-]/gu, '').trim().slice(0, 40)
  const pedido = 'Quiero ver cómo quedaría mi cocina. Os envío fotos y mi código postal.'
  if (p) return `Hola, vengo de parte de ${p}. ${pedido}`
  if (ORIGENES[o]) return `Hola, os escribo desde la web (os he conocido por ${ORIGENES[o]}). ${pedido}`
  return `Hola, os escribo desde la web. ${pedido}`
}

export function enlaceWhatsApp(search: string): string {
  return `https://wa.me/${TELEFONO}?text=${encodeURIComponent(textoInicial(search))}`
}
