# Capítulo: Tienda online y operaciones — Five for Wild / Foundly

*Investigación a 7-nov-2026. Importes sin IVA salvo que se indique. "(sin verificar)" = el dato sale de un blog o agregador, no de la fuente primaria. "Estimación propia" = cálculo mío.*

---

## 1. Conclusión (lo que haría Damián mañana)

1. **Plataforma: Shopify Basic + app de Printful.** Es la opción que menos tiempo técnico exige y la integración Printful más madura (app con nota 4,8/5 y miles de reseñas, sincroniza productos, variantes, mockups y tarifas de envío) ([shopify-shipping-calc, sin verificar](https://shopify-shipping-calc.pages.dev/blog/shopify-printful-integration-tutorial/); [Printful en Shopify App Store](https://apps.shopify.com/printful?locale=pl)). WooCommerce sale más barato a largo plazo, pero obliga a gestionar hosting, seguridad, actualizaciones y conflictos de plugins ([Montonio](https://montonio.com/blog/shopify-vs-woocommerce-a-guide-to-choosing-the-right-platform); [mantrabrain](https://mantrabrain.com/blog/woocommerce-vs-shopify/)). Damián no es técnico: el tiempo pesa más que 10–20 €/mes.
2. **Coste fijo de arranque: ~25–40 €/mes** (Shopify Basic + dominio + una app legal de pago). El resto del stack cabe en planes gratuitos (estimación propia, desglose en §4).
3. **⚠️ Alerta de márgenes (estimación propia, revisar con el capítulo financiero):** con 34 € IVA incluido el ingreso neto es ~28,10 €. Restando Printful (~11,95 € la camiseta + ~3,60 € de envío) y la comisión de pago (~0,76 €), quedan **~11,80 €**. Después de los 10 € para fundación y fotógrafo, a la marca le quedan **~1,80 €, no 5 €**. Cálculo en §5.4. Hay que validar el precio real de Printful para Spain antes de comunicar "5+5+5".
4. **Legal: la camiseta de catálogo NO es "producto personalizado".** Se aplica el **desistimiento de 14 días naturales** y, desde el 19-jun-2026, un **botón de desistimiento** visible en la tienda ([ShippyPro](https://www.shippypro.com/blog/es/boton-desistimiento-obligatorio-ue-comerciantes-19-junio-2026); [iubenda](https://www.iubenda.com/es/blog/la-nueva-funcion-de-desistimiento-online-que-significa-la-directiva-ue-2023-2673-para-tu-empresa/)). Printful no paga los cambios de talla ([Printful Help](https://help.printful.com/hc/en-us/articles/360014006840-What-is-Printful-s-return-and-refund-policy)). Por eso la **guía de tallas** es la pieza que más dinero ahorra.
5. **Operaciones: casi todo se automatiza.** Printful confirma el pedido solo, Shopify Flow (gratis en Basic) etiqueta cada pedido por especie, y una Google Sheet calcula cada mes el pago a fundaciones y fotógrafos. Damián dedica ~2 h/mes al cierre (estimación propia).

---

## 2. Comparativa de plataformas

| Criterio | **Shopify Basic + Printful** ✅ | WooCommerce + Printful | Printful Quick Stores | Teemill (tienda propia) |
|---|---|---|---|---|
| Coste fijo | **24–36 €/mes** según pago anual o mensual. Las fuentes no coinciden: 27/36 € ([Dupple](https://dupple.com/pricing/shopify)); 24/32 € ([Craftshift](https://craftshift.com/shopify-pricing-plans-2026-complete-breakdown/); [Impulsa](https://impulsaecommerce.com/?p=3231)). Promo de 3 días gratis y luego 3 meses a 1 €/mes ([Impulsa, sin verificar](https://impulsaecommerce.com/?p=10001); [Shopify](https://www.shopify.com/es/oferta-prueba-gratis)) | Hosting, dominio, SSL y extensiones premium ([Gelato](https://www.gelato.com/blog/woocommerce-vs-shopify)). Una agencia estima <150 €/mes con mantenimiento ([Numen, sin verificar](https://numen.si/en/insights/woocommerce-in-slovenia/)) | **0 €**, solo pagas al vender ([Printful Help](https://help.printful.com/hc/en-us/articles/15045650586780-How-much-does-using-Quick-Stores-cost)) | App gratis. Teemill cobra comisión por pedido (producto + envío) ([Shopify App Store](https://apps.shopify.com/teemill)) |
| Comisión por venta | Shopify Payments ~1,5 % + 0,25 € con tarjetas UE. Pasarela externa: +2 % ([Dupple, sin verificar](https://dupple.com/pricing/shopify)) | Solo la pasarela (Stripe, Redsys…) ([Montonio](https://montonio.com/blog/shopify-vs-woocommerce-a-guide-to-choosing-the-right-platform)) | Incluida en el precio | Incluida |
| Esfuerzo técnico | Bajo: todo gestionado | **Alto**: tú respondes de hosting, seguridad, actualizaciones y conflictos ([mantrabrain](https://mantrabrain.com/blog/woocommerce-vs-shopify/)) | Mínimo | Mínimo |
| Coste de montaje con agencia | 2.000–4.000 € ([Kolonell, sin verificar](https://kolonell.com/en/blog/online-store-cost-for-smb-benchmark-london-2026)) | 9.000 € o más ([ídem](https://kolonell.com/en/blog/online-store-cost-for-smb-benchmark-london-2026)) | 0 | 0 |
| Dominio propio, marca blanca | Sí | Sí | **No**: sin dominio propio y sin marca blanca. **Solo EE. UU.** ([Merchloop](https://merchloop.com/blogs/news/best-free-on-demand-swag-store-platforms-in-2026-honest-comparison)) | Sí (sin verificar) |
| Páginas de impacto, especies y multi-idioma | Sí: metaobjetos, Translate & Adapt, Markets | Sí, con plugins | Muy limitado | Limitado |
| Encaje con Stanley/Stella Creator 2.0 fabricada en la UE | ✅ | ✅ | ❌ (solo EE. UU.) | ❌ Teemill tiene catálogo propio y fabrica en Reino Unido (sin verificar) |
| **Veredicto** | **Elegida** | Solo si en el futuro hay un socio técnico | Descartada | Descartada |

**Pagos.** Activa Shopify Payments (tarjetas, Apple/Google Pay) y PayPal. En España la tarjeta es el medio dominante y PayPal pesa mucho en compras internacionales ([Stripe](https://stripe.com/resources/more/payment-methods-in-spain); [Paynopain](https://paynopain.com/en/blog/payment-methods-spain-2025-consumer-trends-and-habits/)). Bizum no aparece como método nativo de Shopify Payments. Se añade con una pasarela como MONEI ([MONEI](https://monei.com/bizum-for-shopify/)). Es para la fase 2: Shopify cobra el +2 % de pasarela externa.

**Multi-idioma y moneda.** Markets es gratis en todos los planes ([getkanal](https://getkanal.com/blog/shopify-markets)). En la UE todo va en euros, así que no hay comisión de conversión. Managed Markets (3,5 %) solo sirve para tiendas con sede en EE. UU., Canadá o Reino Unido ([getkanal](https://getkanal.com/blog/shopify-markets)). Para Spain no hace falta.

---

## 3. Mapa de la tienda

```
fiveforwild.com
├── Inicio
│   ├── Héroe: foto del lince + "Con 5 € cualquiera puede ayudar a un animal" + CTA
│   ├── Bloque "Cómo funciona 5·5·5" (3 iconos: fundación · fotógrafo · marca)
│   ├── Contador de impacto (€ donados, camisetas, especies)
│   ├── Destacados: lanzamiento + más vendidos
│   └── Logos de fundaciones socias + reseñas
├── Tienda (colecciones)
│   ├── Por región: Península Ibérica · Europa · África · (América, fase EE. UU.)
│   ├── Por grupo: Mamíferos · Aves · Insectos y abejas · Árboles y plantas
│   ├── En peligro (filtro por estado UICN)
│   └── Packs (2 camisetas, 64 €)
├── Ficha de producto = ficha de especie   ← la página clave
│   ├── Galería: mockup claro + oscuro, foto lifestyle, primer plano del print, foto original
│   ├── Selector de talla + enlace "Guía de tallas" junto al selector
│   ├── Desglose visible: "5 € a [Fundación] · 5 € a [Fotógrafo] · 5 € a la marca"
│   ├── Bloque especie: estado UICN, amenaza, qué hace la fundación con 5 €
│   ├── Bloque fotógrafo: nombre, foto, enlace a su página
│   ├── Ficha GPSR (fabricante y responsable UE), composición, cuidado
│   └── Reseñas (Judge.me)
├── Especies (índice de 100, también con las "próximamente" para captar emails)
├── Impacto
│   ├── Contador acumulado + informe mensual (tabla por fundación)
│   ├── Justificantes de transferencia o certificados de donación (PDF)
│   └── Metodología: cuándo se considera "donado" (ver §6.3)
├── Fotógrafos (rejilla, cada uno con su página y especies)
├── Fundaciones socias (una página por ONG)
├── Sobre nosotros (Damián, por qué, Madrid, Stanley/Stella orgánica)
├── Ayuda: Envíos · Cambios y devoluciones · Guía de tallas · FAQ · Contacto
└── Footer legal: Aviso legal · Privacidad · Cookies · Condiciones de venta ·
                  Desistimiento (formulario + botón) · Configurar cookies
```

**Implementación sin programar (estimación propia).**
- **Especies, fotógrafos y fundaciones** se crean como **metaobjetos** de Shopify, enlazados a cada producto. Así una plantilla sirve para las 100 fichas.
- **Etiquetas por producto:** `region:iberia`, `grupo:mamifero`, `fundacion:wwf-es`, `fotografo:nombre`.
- Con esas etiquetas se construyen las colecciones automáticas y el informe de pagos.

**Tema: Horizon (gratis).** Es la base que Shopify está actualizando y la que se recomienda para tiendas nuevas ([Shopify Community](https://community.shopify.com/t/best-shopify-base-theme-in-2026-dawn-horizon-pitch/576488); [Craftshift](https://craftshift.com/best-free-shopify-themes-2026/)). Dawn es la alternativa más rápida y minimalista, con la imagen de producto en primer plano ([Craftshift](https://craftshift.com/best-shopify-themes-clothing-brands/)). Las dos son gratis, y un tema de pago (~300–400 €, estimación propia) no hace falta para arrancar.

---

## 4. Stack de apps con costes

| Función | App recomendada | Coste | Nota |
|---|---|---|---|
| Producción | **Printful** | Gratis. Pagas producción y envío por pedido. Plan Growth: 24,99 $/mes, gratis al superar 12.000 $/año de ventas ([Printful pricing](https://www.printful.com/pricing/a/free-tool); [ecommerceceo](https://ecommerceceo.com/printful-pricing/)) | Growth da un 25 % de descuento en muestras (el gratuito, un 20 %) |
| Reseñas | **Judge.me** | Plan gratuito permanente. "Awesome": 15 $/mes ([Capterra](https://www.capterra.com/p/215990/Judge-me/pricing/)) | El gratuito incluye solicitudes ilimitadas y reseñas con foto (las fuentes no coinciden en esto último) |
| Email | **Shopify Email** | 10.000 emails/mes gratis. Luego 1 $ por cada 1.000 ([PushOwl](https://pushowl.com/blog/best-free-email-app-for-shopify)) | Klaviyo gratis solo llega a 250 perfiles y 500 emails/mes ([ídem](https://pushowl.com/blog/best-free-email-app-for-shopify)). Migrar a partir de ~2.000 suscriptores |
| Traducción | **Shopify Translate & Adapt** | Gratis: traducción automática a 2 idiomas, manual ilimitada ([App Store](https://apps.shopify.com/translate-and-adapt)) | ES + EN automáticos, y FR/DE/IT a mano más adelante |
| Cookies y RGPD | **Pandectes GDPR** | Plan gratuito. De pago desde 9 $/mes ([App Store](https://apps.shopify.com/gdpr-cookie-consent); [analyzify, sin verificar](https://analyzify.com/shopify-apps/pandectes-gdpr-compliance)) | La AEPD exige un botón **"Rechazar" en la primera capa** ([Linklaters](https://techinsights.linklaters.com/post/102ijm9/spanish-data-regulator-changes-approach-and-requires-a-reject-button-in-cookie)). Confirma que el plan elegido lo incluye. Pandectes también ofrece botón de desistimiento UE ([Pandectes](https://pandectes.io/es/features/eu-withdrawal/)) |
| Textos legales España | **Lawwwing** o **iubenda**, o un abogado | Precio no verificado. Presupuestar 10–30 €/mes o ~300–600 € una vez (estimación propia) | El banner básico de Shopify no cumple la guía de la AEPD de 2023 ([Lawwwing, interesada](https://lawwwing.com/blog/la-politica-de-privacidad-y-cookies-en-tu-tienda-shopify)) |
| Contador de impacto | **Metaobjeto + bloque del tema**, actualizado a mano cada mes | 0 € | Alternativas: Sales CountUp (contador automático) o FairGeben (donación por pedido + contador) ([appnavigator](https://appnavigator.io/app/sales-countup); [pickyourapp](https://pickyourapp.com/products/fairgeben)), con precio sin verificar. Un contador mensual con datos auditados es más honesto que uno "en tiempo real" que incluye pedidos que luego se devuelven |
| Automatización | **Shopify Flow** | Gratis en Basic ([changelog Shopify](https://changelog.shopify.com/posts/shopify-flow-now-available-to-basic-plan)) | En Basic no tiene la acción "Send HTTP request" ([getkanal](https://getkanal.com/blog/shopify-flow)), pero sí Google Sheets |
| Chat y FAQ | **Shopify Inbox** | Gratis ([App Store](https://apps.shopify.com/inbox)) | Incluye respuestas instantáneas y "¿Dónde está mi pedido?" por defecto ([eseospace](https://eseospace.com/blog/shopify-customer-service-and-inbox/)) |
| GPSR | **Casilla GPSR de Printful** al publicar | 0 € | Añade la información de seguridad a la descripción ([Printful Support](https://support.printful.com/hc/en-us/articles/41396590225297-How-do-I-make-my-products-compliant-with-the-GPSR-requirements)) |
| Informes (opcional) | Report Pundit o Exportier | De pago, precio sin verificar ([Report Pundit](https://www.reportpundit.com/shopify-report/sales-by-variant-report)) | Solo si el informe nativo más la Sheet se quedan cortos |

**Total fijo de arranque (estimación propia):**

| Concepto | Coste |
|---|---|
| Shopify Basic | 24–36 €/mes |
| Dominio | ~1–2 €/mes |
| Textos legales | 0–30 €/mes |
| Apps de pago | 0 € |
| **Total** | **≈ 25–70 €/mes** |

**Regla:** no instalar más de ~8 apps. Cada app suma coste mensual (10–50 $ cada una es habitual) y ralentiza la web ([blog.mean.ceo](https://blog.mean.ceo/shopify-vs-woocommerce/)).

---

## 5. Producto, fotos y especificaciones

### 5.1 Archivo de impresión (DTG Printful)

| Parámetro | Especificación | Fuente |
|---|---|---|
| Formato | **PNG** (admite transparencia). Con JPG aparece un recuadro blanco | [Printful blog](https://www.printful.com/blog/everything-you-need-to-know-to-prepare-the-perfect-printfile) |
| Perfil de color | **sRGB IEC61966-2.1**. Printful convierte a CMYK | [Printful Help](https://help.printful.com/hc/en-us/articles/28491464259740-How-should-I-prepare-my-print-file-for-the-best-results) |
| Resolución | Mínimo **150 DPI**, ideal 300 | [Printful](https://www.printful.com/creating-dtg-file) |
| Área de camiseta | 12″×16″ estándar, ampliándose a 15″×18″ en algunos productos. Plantilla exacta en la pestaña "File guidelines" | [Printful Help](https://help.printful.com/hc/en-us/articles/28491464259740-How-should-I-prepare-my-print-file-for-the-best-results) |
| Píxeles (12×16″) | **1.800×2.400 px mínimo · 3.600×4.800 px ideal** | [MerchTitans](https://merchtitans.com/blog/print-ready-file-checker-dpi-guide) |
| Bordes | **Evitar semitransparencias, degradados a transparente y difuminados** | [Printful Help](https://help.printful.com/hc/en-us/articles/360019930999-Why-does-my-design-look-different-from-what-I-intended) |

**Pedir a cada fotógrafo:**
- El RAW o un TIFF/JPG de máxima calidad con el lado largo ≥4.800 px. Una foto de cámara moderna lo cumple de sobra.
- Licencia por escrito para impresión textil y uso en marketing.

### 5.2 Qué fotos funcionan en camiseta clara u oscura

| Situación | Funciona bien | Funciona mal |
|---|---|---|
| **Camiseta blanca o natural** (sin base blanca) | Fotos de fondo claro o nevado, acuarela, sombras suaves y degradados finos: se imprimen con fidelidad ([Printify](https://printify.com/knowledge-hub/master-dtg-underbase-for-dark-apparel/)) | Fotos con mucho negro: mancha pesada y tacto acartonado (estimación propia) |
| **Camiseta negra u oscura** (con base blanca automática, [Printful](https://help.printful.com/hc/en-us/articles/360014007360-When-is-a-white-underbase-used)) | Animal recortado con borde nítido, alto contraste, ojos y pelo detallados, fondo eliminado o encajado en una forma sólida (círculo o rectángulo con borde duro) | Fondos que se funden con la tela, viñeteados y sombras suaves: la transparencia sale gris o lavada ([Scribd, sin verificar](https://www.scribd.com/document/431480566/designing-for-dtg)). Detalles muy finos: la base blanca asoma por los bordes ([Fourthwall](https://help.fourthwall.com/create-and-sell-products/printing-techniques/what-is-a-white-underbase.md)) |

**Regla práctica (estimación propia).**
- Lanzar el lince en dos versiones: **natural** (foto completa, rectangular) y **oscura** (recorte con borde nítido).
- Pedir una **muestra física de cada combinación** antes de publicar. Printful da un 20–25 % de descuento en muestras, con 1 pedido al mes y hasta 3 artículos ([Printful pricing](https://www.printful.com/pricing/a/free-tool)).

### 5.3 Mockups y fotos de producto

- **Usar personas reales.** Baymard recomienda mostrar la prenda puesta para juzgar caída y largo ([Baymard](https://baymard.com/industries/apparel-ux)).
- **Fotos por ficha (estimación propia), 5 en total:**
  1. Mockup plano del generador de Printful.
  2. Foto lifestyle con modelo real (sesión propia con las muestras).
  3. Primer plano del print para ver la textura.
  4. Foto original del fotógrafo.
  5. Detalle de etiqueta y tejido.
- **Indicar la altura del modelo y la talla que lleva** (práctica de Zalando, Gap y otros en [Baymard](https://baymard.com/ecommerce-design-examples/size-guide)).
- **Avisar en la ficha** de que el color impreso puede variar ligeramente respecto al mockup. Printful lo documenta ([Printful Support](https://support.printful.com/hc/en-us/articles/41396623845393-Why-does-my-product-look-different-from-the-mockup)).

### 5.4 Coste unitario y alerta de margen (estimación propia)

| Concepto | Unidad (34 € con IVA) | Fuente |
|---|---|---|
| Ingreso sin IVA (21 %) | 28,10 € | cálculo |
| Printful Creator 2.0, un print | ~11,95 € (14,22 € con IVA del 19 % en DE) | [Printful (DE)](https://www.printful.com/custom/mens/t-shirts/unisex-organic-cotton-t-shirt-stanley-stella-sttu169) |
| Envío Printful | ~3,60 € (desde 4,29 €, supuesto con IVA) | [ídem](https://www.printful.com/custom/mens/t-shirts/unisex-organic-cotton-t-shirt-stanley-stella-sttu169) |
| Comisión de pago (1,5 % + 0,25 €) | ~0,76 € | [Dupple, sin verificar](https://dupple.com/pricing/shopify) |
| **Disponible antes del reparto** | **~11,80 €** | cálculo |
| Fundación + fotógrafo | 10,00 € | modelo |
| **Queda para la marca** (antes de fijos, devoluciones y muestras) | **~1,80 €** | cálculo |

**Qué hacer con esta alerta.**
- Verificar el precio real de Printful con país = España, color y talla. Las tallas 2XL o más y los prints traseros cuestan más.
- Decidir el modelo con el capítulo financiero. Opciones: subir PVP, ajustar a "5 € fundación + 5 € fotógrafo y el resto cubre costes", o negociar con los fotógrafos.
- **No publicar "5 € a la marca"** si no es cierto: daña la credibilidad de una marca que vende honestidad.
- Los cambios de talla (≈16 € de reimpresión) se comen el margen de varias ventas (estimación propia).

### 5.5 Guía de tallas (Stanley/Stella Creator 2.0)

- **Corte medio** (*medium fit*), tallas XXS a 5XL ([Stanley/Stella](https://stanleystella.com/en-gb/creator-2-0-sttu169)).
- Medidas orientativas de otro proveedor POD:

| Medida | XXS | 5XL |
|---|---|---|
| Medio pecho | 45,5 cm | 77,5 cm |
| Largo | 62 cm | 84 cm |

  Fuente: [Inkthreadable](https://inkthreadable.co.uk/creator-t-shirt). **Copiar la tabla oficial de la pestaña de Printful**, porque puede variar.
- **Buenas prácticas:**
  - Enlace a la guía **junto al selector de talla** ([Baymard](https://Baymard.com/blog/apparel-size-information)).
  - Tabla en cm.
  - Dibujo de cómo medir una camiseta propia.
  - Frase del tipo "Si dudas entre dos tallas, elige… / el modelo mide 1,80 y lleva M".
  - Nota "unisex: las mujeres suelen bajar una talla" (validar con las muestras).
- **Por qué importa:**
  - Talla y ajuste son el primer motivo de devolución en moda: 45 % según Narvar 2022 y ~1/3 en Zalando ([Wisepim](https://wisepim.com/reports/ecommerce-returns-report)).
  - El 83 % de las webs de moda en escritorio no daba información de talla suficiente ([Baymard](https://Baymard.com/blog/apparel-size-information)).

---

## 6. Benchmarks de referencia (para fijar expectativas)

| Métrica | Referencia | Fuente |
|---|---|---|
| Conversión moda/ropa | ~1,5–1,9 % (top 10 %: >6 %) | [Sizely](https://www.size.ly/blog/fashion-ecommerce-benchmarks); [Blend Commerce](https://blendcommerce.com/blogs/shopify/ecommerce-conversion-rate-benchmarks-2025) |
| Conversión media Shopify | ~1,4 % (top 20 %: >3,2 %; top 10 %: >4,7 %), según Littledata citado por terceros | [Nudgify, sin verificar](https://www.nudgify.com/shopify-conversion-rate-benchmarks/) |
| Ticket medio moda (UK, may-2026) | 91,53 £ | [Sizely / IRP](https://www.size.ly/blog/fashion-ecommerce-benchmarks) |
| Tasa de devolución moda | ~23,6 % en UK y ~26 % en Europa. DE/CH: 44–45 % | [EightX](https://eightx.co/blog/uk-ecommerce-kpi-benchmark-2026); [bestcolorfulsocks, sin verificar](https://bestcolorfulsocks.com/blogs/news/fashion-returns-statistics) |
| Abandono de carrito | ~70 %. Costes extra = primer motivo (39–48 %) | [Baymard](https://baymard.com/blog/reduce-cart-abandonment); [eMarketer](https://www.emarketer.com/content/extra-costs-are-the-top-reason-consumers-abandon-online-carts) |

**Lectura para Five for Wild (estimación propia).**
- **El "envío incluido" es una ventaja real:** el principal motivo de abandono son los costes que aparecen en el checkout. Hay que decirlo en el héroe y en la ficha.
- **El pack de 2 por 64 €** sube el ticket medio. Ofrecerlo en el carrito.
- **Esperar ~1,5 % de conversión** en tráfico frío. El tráfico de las ONG socias y de la prensa debería convertir más.
- **Presupuestar devoluciones del 5–10 %.** Son camisetas básicas, no moda de tendencia, pero hay que medirlo desde el primer mes.

---

## 7. Checklist legal (España/UE)

> No sustituye a un abogado o gestor. Con ~300–600 € de revisión inicial se cubre (estimación propia).

| # | Requisito | Qué hacer | Fuente |
|---|---|---|---|
| 1 | **Aviso legal (LSSI-CE art. 10)** | Titular, NIF, domicilio, email y datos registrales en el footer. Sanción de hasta 150.000 € | [Lawwwing](https://lawwwing.com/textos-legales-web-requisitos-obligatorios/); [Atico34](https://protecciondatos-lopd.com/empresas/tienda-online/) |
| 2 | **Política de privacidad (RGPD + LOPDGDD)** | Responsable, finalidades (pedidos, newsletter), encargados (Shopify, Printful en Letonia/EE. UU., Judge.me), transferencias internacionales y derechos. Enlace en cada formulario | [Atico34](https://protecciondatos-lopd.com/empresas/textos-legales-ecommerce/) |
| 3 | **Cookies (guía AEPD 2023)** | Banner con **Aceptar y Rechazar en la primera capa**, panel de configuración y nada de cookies no técnicas antes del consentimiento | [Linklaters](https://techinsights.linklaters.com/post/102ijm9/spanish-data-regulator-changes-approach-and-requires-a-reject-button-in-cookie) |
| 4 | **Condiciones de venta** | Precio final con IVA, envío incluido, plazos, pagos, garantía legal y desistimiento. Enlazadas en el paso final del checkout. **En castellano** | [Lawwwing](https://lawwwing.com/textos-legales-para-tu-web-que-necesitas-2026/) |
| 5 | **Desistimiento de 14 días naturales** | Formulario modelo e información clara. Diseños de catálogo con tallas estándar = **no aplica** la excepción de "bienes personalizados" del art. 103 LGDCU (inferencia: la talla y el color de catálogo no son "especificaciones del consumidor") | [Sepin](https://blog.sepin.es/derecho-desistimiento-consumidores); [Iberley art. 103](https://iberley.es/legislacion/articulo-103-ley-defensa-consumidores-usuarios) |
| 6 | **Botón o función de desistimiento** (Dir. 2023/2673, nuevo art. 11 bis) | Botón visible, "tan fácil como comprar". Obligatorio en la UE desde el 19-jun-2026. España con transposición pendiente o en curso: implantarlo igualmente | [ShippyPro](https://www.shippypro.com/blog/es/boton-desistimiento-obligatorio-ue-comerciantes-19-junio-2026); [iubenda](https://www.iubenda.com/es/blog/la-nueva-funcion-de-desistimiento-online-que-significa-la-directiva-ue-2023-2673-para-tu-empresa/) |
| 7 | **Sin enlace a la plataforma ODR** | La plataforma europea cerró el 20-jul-2025. No poner el enlace, que aún aparece en plantillas antiguas | [CEC Consumo](https://portal-cec.consumo.gob.es/es/comunicacion/noticias/2025/la-plataforma-europea-para-la-resolucion-de-litigios-en-linea-dejara-de) |
| 8 | **GPSR (Reg. UE 2023/988)** | Fabricante y responsable en la UE, contacto e información de seguridad en cada ficha. Usar la casilla GPSR de Printful | [Printful Support](https://support.printful.com/hc/en-us/articles/41396590225297-How-do-I-make-my-products-compliant-with-the-GPSR-requirements); [Euverify, sin verificar](https://euverify.com/resource/gpsr-compliance-for-printful-dropshipping/) |
| 9 | **Etiquetado textil** | Composición (100 % algodón orgánico) y cuidados en la ficha. La etiqueta física la pone Stanley/Stella | estimación propia |
| 10 | **IVA OSS (solo mencionar)** | Con más de 10.000 €/año en ventas B2C a otros países UE se declara el IVA del país de destino en el **modelo 369**. El alta es con el modelo 035. Por debajo, IVA español (303), con opción voluntaria de OSS. **Consultarlo con el gestor**, también si los envíos desde Letonia cambian el análisis | [Quaderno](https://quaderno.io/es/articulos/impuestos/modelo-369/); [Gestoria247](https://gestoria247.com/herramientas/iva-ventas-ue) |
| 11 | **RAP textil (vigilar)** | Hay un Real Decreto en tramitación (notificado a la CE en may-2026). Las marcas que venden con marca propia productos fabricados por terceros serían "productor": SCRAP y registro MITECO. No está aprobado a 7-nov-2026 | [Reconomy](https://www.reconomy.com/2026/07/06/spain-textile-epr-decree/); [Modaes](https://www.modaes.com/opinion/el-nuevo-rap-textil-ante-el-giro-simplificador-de-la-union-europea-un-regimen-administrativo-que-nace-ya-pendiente-de-reforma) |
| 12 | **Mensajes solidarios veraces** | Publicar cómo y cuándo se transfiere, con justificantes. Revisar con el gestor el tratamiento de las donaciones (convenio de colaboración o donación con certificado) | estimación propia |

---

## 8. Operaciones y automatización

### 8.1 Flujo del pedido (cero clics)

```
Cliente paga en Shopify
  → Printful importa el pedido y lo confirma automáticamente
      (Printful > Settings > Store > Orders: "Automatically confirm orders to be fulfilled";
       aprobación: "automático en 1 h" para poder cancelar errores)
  → Printful cobra de su Wallet o tarjeta y produce en 2–5 días hábiles
  → Envío desde Barcelona o Letonia; Shopify envía email con el tracking
  → Shopify Flow: etiqueta el pedido con fundacion:X / fotografo:Y (desde las etiquetas del producto)
      + añade una fila a Google Sheets "Ventas"
  → A los 7 días de la entrega: email de Judge.me pidiendo reseña con foto
```

- **Configuración de aprobación:** se puede elegir manual, automática a la hora o automática a las 24 h (la opción por defecto) ([Printful Help](https://help.printful.com/hc/en-us/articles/360014007320-Can-I-review-my-automatically-synced-orders-in-Printful-before-they-are-confirmed); [Printful Support](https://support.printful.com/hc/en-us/articles/41396423663249)).
- **Ojo:** si un pedido se marca como enviado en Shopify, Printful no lo importa ([Printful Help](https://help.printful.com/hc/en-us/articles/360014066019-Why-are-my-Shopify-orders-not-being-imported-to-Printful)).
- **Plazos a comunicar:** producción en 2–5 días hábiles ([Printful shipping](https://www.printful.com/shipping?identifier=FPfji9il)). Barcelona sirve sobre todo a Europa occidental ([Printful Help](https://help.printful.com/hc/en-us/articles/360014067239-Where-are-the-European-fulfillment-centers-located)). El plazo oficial de envío en Europa es amplio (5–20 días hábiles), y algunos vendedores reportan 3–5 días a Spain ([MerchTitans, sin verificar](https://merchtitans.com/blog/print-on-demand-europe-guide)). Comunicar "**entrega estimada 5–10 días hábiles**" y medir los plazos reales (estimación propia).
- **Limitaciones de Flow:** el trigger programado se ejecuta como mínimo cada 15 minutos, y Flow no recorre bien las líneas de pedido una a una ([Shopify Community](https://community.shopify.com/t/exporting-fulfilled-orders-data-to-google-sheets/191741/4)). Por eso conviene **una fila por pedido** y calcular el desglose por SKU en la Sheet, o usar el informe nativo (ver §8.3).

### 8.2 Devoluciones y atención al cliente con POD

**Quién paga qué:**

| Caso | Quién paga | Fuente |
|---|---|---|
| Defecto, daño o error de impresión | **Printful**: reimprime o reembolsa gratis. Hay que reclamarlo con fotos | [Printful Help](https://help.printful.com/hc/en-us/articles/360014006840-What-is-Printful-s-return-and-refund-policy) |
| Talla o color equivocado, o arrepentimiento | **La marca**: Printful no acepta devoluciones por talla ni por arrepentimiento | ídem |
| Dirección mal escrita por el cliente | Printful reenvía, pero cobra el envío | [ídem](https://help.printful.com/hc/en-us/articles/360014006840-What-is-Printful-s-return-and-refund-policy) |
| Paquete devuelto al almacén | Si no se reclama en 30 días, Printful lo dona | [Printful Help](https://help.printful.com/hc/en-us/articles/360019906419-Can-I-share-Printful-s-address-with-my-customers) |

**Política recomendada (estimación propia; validar con el abogado):**

1. **Desistimiento de 14 días (legal).**
   - El cliente devuelve la prenda **a una dirección de la marca en Madrid**, no a Printful.
   - **Los gastos de devolución los paga el cliente**, siempre que se le informe antes de comprar (la LGDCU lo permite).
   - Reembolso del precio y del envío original estándar.
2. **Cambio de talla.**
   - Se gestiona como "devolución + pedido nuevo", con un **código de descuento de envío gratis** en el nuevo pedido como gesto.
   - Coste para la marca: una nueva camiseta de Printful (~15,5 €).
   - **No ofrecer cambios gratis ilimitados**: con el margen del §5.4 no es sostenible.
3. **Prendas devueltas en buen estado.**
   - Se guardan como stock "segunda oportunidad": venta en mercadillos, sorteos o regalos a las ONG.
   - Nunca se revenden como nuevas sin decirlo.
4. **Donaciones y devoluciones.**
   - El 5+5 se computa **solo sobre pedidos no reembolsados con más de 30 días** (14 días de desistimiento + tránsito).
   - Este criterio se publica en la página de Impacto.

**Plantillas de email** (Shopify Notifications + respuestas guardadas en Gmail; estimación propia):
- **Confirmación de pedido** + "Tu compra acaba de reservar 5 € para [Fundación] y 5 € para [Fotógrafo]".
- **Enviado**: tracking + "historia de la especie" en 3 líneas.
- **Entregado + 7 días**: petición de reseña y "comparte tu foto con #FiveForWild".
- **"¿Dónde está mi pedido?"**: plazos, tracking y qué hacer si pasan 15 días hábiles.
- **Defecto**: "Mándanos una foto. Lo reponemos gratis" (se reclama a Printful).
- **Cambio de talla**: instrucciones, dirección en Madrid y código de envío gratis.
- **Desistimiento**: acuse de recibo + plazo de reembolso (máximo 14 días desde recibir la prenda).
- **Informe mensual a socios** (fundaciones y fotógrafos), ver §8.3.

Shopify Inbox (gratis) cubre el chat con respuestas instantáneas y seguimiento de pedido ([eseospace](https://eseospace.com/blog/shopify-customer-service-and-inbox/)).

### 8.3 Cierre mensual: pagos a fundaciones y fotógrafos (~2 h/mes)

**Convención de SKU (clave):** `ESPECIE-FUNDACION-FOTOGRAFO-COLOR-TALLA`, por ejemplo `LINCE-WWFES-JPEREZ-NAT-M`.

**El día 5 de cada mes:**

1. **Exportar datos.** Shopify → Analytics → Informes → "Ventas por variante de producto", filtrado por el mes M-1, en CSV ([Report Pundit](https://reportpundit.com/post/how-to-get-detailed-sales-reports-for-shopify-stores)). Restar los reembolsos del mismo periodo.
2. **Pegarlos en la Google Sheet "Liquidación".**
   - Una pestaña de mapeo lleva cada especie a su fundación y su IBAN, y cada fotógrafo a su IBAN.
   - Una tabla dinámica calcula: unidades netas × 5 € por fundación y por fotógrafo.
3. **Pagar** por transferencia en lote. Guardar el justificante PDF en Drive (`/Impacto/2026-11/`).
4. **Comunicar.**
   - Email a cada socio con su línea (plantilla).
   - Actualizar el metaobjeto "Contador de impacto" (€ acumulados, camisetas, especies).
   - Publicar la tabla del mes en la página de Impacto.
5. **Trimestral:** mandar al gestor la Sheet y los justificantes (IVA, OSS si aplica, tratamiento fiscal de las donaciones).

**Por qué no un contador "en tiempo real":** la credibilidad sale de la transparencia compartida entre la marca y la ONG ([Theseus](https://www.theseus.fi/handle/10024/785526)), no de un número que sube con cada clic. Un informe mensual con justificantes es más difícil de cuestionar (estimación propia).

**Opcional más adelante:** Flow (pedido pagado → fila en la Sheet) para un contador semanal, o una app de informes programados ([Exportier](https://apps.shopify.com/exportier-advanced-data-export?locale=pl)).

---

## 9. Checklist de lanzamiento

**Cuenta y base**
- [ ] Alta de autónomo o SL y cuenta bancaria separada (otro capítulo)
- [ ] Shopify Basic (aprovechar la promo de 1 €/mes si sigue activa) con dominio `fiveforwild.com` conectado
- [ ] Shopify Payments + PayPal activados, prueba de pago real y reembolso
- [ ] Tema Horizon: logo, colores, tipografía y favicon

**Producto**
- [ ] App de Printful conectada. Aprobación de pedidos: automática a la hora. Envío UE activado
- [ ] Muestras físicas del lince (natural + oscura, 2 tallas) revisadas y fotografiadas
- [ ] Ficha del lince completa: 5 fotos, desglose 5·5·5, bloque de especie y fotógrafo, GPSR, composición
- [ ] **Precio y margen recalculados con el coste real de Printful para Spain** (§5.4)
- [ ] Pack de 2 creado (bundle o descuento automático)
- [ ] Guía de tallas con tabla oficial en cm, cómo medir y altura del modelo
- [ ] Metaobjetos: Especie, Fotógrafo, Fundación. Etiquetas y colecciones automáticas

**Legal**
- [ ] Aviso legal, Privacidad, Cookies, Condiciones y Desistimiento (castellano + inglés)
- [ ] Banner de cookies con "Rechazar" en la 1ª capa, probado (sin cookies de marketing antes del consentimiento)
- [ ] Botón y formulario de desistimiento visibles
- [ ] Sin enlace ODR en ninguna plantilla
- [ ] Contrato o convenio firmado con WWF España / CBD-Hábitat y licencia del fotógrafo
- [ ] Gestor consultado sobre IVA, OSS y donaciones

**Operaciones**
- [ ] Notificaciones de Shopify personalizadas en ES y EN
- [ ] Shopify Email: secuencia de bienvenida + newsletter de lanzamiento
- [ ] Judge.me configurado (petición a los 7 días)
- [ ] Shopify Inbox con 8–10 FAQ
- [ ] Flow: etiquetar pedido por fundación y fotógrafo
- [ ] Sheet "Liquidación" con mapeo e IBANs
- [ ] Dirección de devoluciones en Madrid
- [ ] Página de Impacto con metodología y contador a 0

**Prueba final**
- [ ] 3 pedidos de prueba reales (ES, PT, DE): llega bien, emails correctos, la Sheet cuadra
- [ ] Test en móvil (la mayoría del tráfico vendrá de redes sociales), velocidad (Lighthouse) y ortografía
- [ ] Google Search Console + Shopify Analytics. Pixel de Meta solo tras el consentimiento
- [ ] Kit de prensa y de socios: fotos, textos, enlace UTM por ONG para medir qué socio trae ventas

---

## 10. Primeros 5 pasos (esta semana)

1. **Pedir hoy en Printful las muestras del lince.** Una natural y una oscura, en tallas M y L. Mientras llegan, anotar en una hoja el precio real de Printful con país = España, en cada color y talla, y rehacer el cálculo del §5.4. Pasarlo al capítulo financiero antes de comunicar "5+5+5".
2. **Abrir Shopify** con la promo de prueba, conectar el dominio, instalar Horizon y la app de Printful, y crear la ficha del lince en borrador.
3. **Encargar los textos legales.** Con Lawwwing o iubenda, o con un abogado (presupuesto cerrado). Instalar Pandectes (u otra app) con botón de rechazo y botón de desistimiento.
4. **Montar la Google Sheet "Liquidación" y fijar la convención de SKU** antes de crear más productos. Firmar con WWF/CBD-Hábitat y el fotógrafo cuándo y cómo se paga: mensual, con 30 días de margen por devoluciones.
5. **Hacer la sesión de fotos** con las muestras (modelo real, apuntar altura y talla). Completar la guía de tallas y hacer 3 pedidos de prueba de punta a punta antes del lanzamiento.
