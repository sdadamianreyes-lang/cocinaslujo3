# Cocinas Lujo · portada de la web

Portada de una sola página (Next.js 14, React 18, Tailwind). Lema: "Mismos muebles. Otra cocina."

## Qué tiene

- La promesa: la ves antes, sabes qué mueve el precio, tienes una fecha por escrito.
- Cómo funciona, en cuatro pasos: foto, visita de presentación, fabricación a medida, montaje.
- Qué cambia, qué se queda y qué se puede añadir.
- Preguntas frecuentes.
- Un solo botón: enviar la foto por WhatsApp.

No tiene formulario, subida de fotos, reserva ni pago: todo entra por WhatsApp.

## Origen del cliente

El botón de WhatsApp deja escrito en el primer mensaje de dónde viene el cliente (`lib/whatsapp.ts`).
Al publicar el enlace en cada canal se le añade el origen:

| Enlace | Primer mensaje del cliente |
|---|---|
| `…/?o=instagram` (o `google`, `facebook`, `tiktok`, `chatgpt`, `locallista`) | "os he conocido por Instagram" |
| `…/?p=Nombre` | "vengo de parte de Nombre" (quien recomienda) |

## Reglas del texto

- Sin precios y sin plazos en días. Se dice "con fecha por escrito".
- Nada que no se pueda cumplir, ni testimonios sin prueba.
- Sin nombrar al fabricante ni decir que la fabricación es propia.

## Uso

```
npm ci
npm run dev     # http://localhost:3000
npm run build
```

## Pendiente antes de publicar

- Confirmar dónde se publica (la web actual está en otro servicio) y a qué dominio apunta.
- Aviso legal, titular y política de privacidad en el pie, y la etiqueta de imagen generada (a revisar con abogado).
- Si la visita la hace solo el carpintero, cambiar "Un decorador y un carpintero" en el paso 2.
- Fotos reales de cocinas terminadas, con permiso del cliente.
