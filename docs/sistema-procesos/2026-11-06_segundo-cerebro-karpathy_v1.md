---
area: SIS
tipo: diseno-sistema
fecha: 2026-11-06
estado: propuesta (no aplicada en Drive)
fuente: video "El Segundo Cerebro de Claude Code que opera mis 2 empresas (método Karpathy)" · Claudio Conde · https://youtu.be/5HL7xWlOaJc
---

# Segundo cerebro (método Karpathy) aplicado al SISTEMA del grupo

## Conclusión

El SISTEMA de Drive ya sigue el método en un 80 %. No hace falta una carpeta nueva.
Faltan 4 piezas, y se agregan **dentro** de lo que existe, cuando termine la cola de `SISTEMA/memoria`.

## Fuentes

| Qué | De dónde | Estado |
|---|---|---|
| Título y canal del video | oEmbed de YouTube | verificado |
| Contenido del video | YouTube bloqueó la lectura desde la nube | **no lo vi**; el diseño sale del método original |
| Método original | Gist de Andrej Karpathy "LLM Wiki": https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f | leído |
| Estado del SISTEMA | Drive cocinaslujoadm, lectura sin tocar nada, 06/11 23:40 | verificado |

## El método en 3 capas + 3 operaciones

| Pieza | Qué es (Karpathy) | Regla clave |
|---|---|---|
| Fuentes crudas | Chats, PDFs, fotos, presupuestos | No se tocan nunca |
| Wiki | Páginas .md que escribe Claude: entidades, conceptos, resúmenes | Claude escribe, vos leés |
| Esquema | CLAUDE.md / reglas: cómo se ordena y se trabaja | Se afina con el uso |
| Ingest | Entra una fuente → resumen + actualiza índice, fichas y log | Una fuente toca 10-15 páginas |
| Query | Pregunta → lee índice → responde con citas | Las buenas respuestas se guardan como página nueva |
| Lint | Revisión de salud | Contradicciones, datos viejos, huérfanos, huecos |

## Qué ya tenés y qué falta

| Pieza Karpathy | En tu SISTEMA hoy | Estado |
|---|---|---|
| Fuentes crudas | `Claude/Clientes/...`, `memoria/02_ORIGINALES` (copia textual) | ✅ |
| Wiki: entidades | `areas/<AREA>/clientes/<Cliente>/FICHA.md` + `ESTADO.md` | ✅ |
| Wiki: conceptos/métodos | `areas/<AREA>/00_FICHA.md`, `temas/` | ✅ |
| Tu voz como verdad | `memoria/01_VOZ_DAMIAN` | ✅ (mejor que el original) |
| Esquema | `03_REGLAS.md` + `memoria/99_CONTROL/00_REGLAS_DEL_PROCESO` | ✅ |
| Índice | `01_INDICE.md` | ✅ |
| Log | `memoria/99_CONTROL/bitacora/` (un archivo por pasada) | ✅ |
| Ingest de lo viejo | Pasada automática cada 2 h (333 archivos) | 🔄 en curso |
| **Ingest de lo nuevo** | Nada que recoja los chats nuevos cuando la cola termine | ❌ falta |
| **Query → guardar respuesta** | `registrar-resultado` guarda resultados, no respuestas útiles | ⚠️ parcial |
| **Lint** | `revision-semanal` existe; no busca contradicciones ni huérfanos | ⚠️ parcial |
| **Una sola puerta de lectura** | `01_INDICE.md` y `memoria/00_INDICE` conviven | ⚠️ riesgo de duplicado |

## Las 4 piezas a agregar (cuando termine la cola)

| # | Pieza | Dónde va | Qué hace | Archivo nuevo |
|---|---|---|---|---|
| 1 | Bandeja de entrada | `SISTEMA/memoria/02_ORIGINALES` (la misma) | Al cerrar un chat, la copia textual entra como número nuevo de cola | `01_COLA_v<N>.md` sección B |
| 2 | Guardar respuestas | `areas/<AREA>/temas/` | Si una respuesta sirve más de una vez, queda como página | regla nueva en `03_REGLAS_v<N>` |
| 3 | Lint semanal | `SISTEMA/revisiones/` | Revisa: contradicciones, precios viejos, fichas sin enlaces, clientes sin ESTADO | `AAAA-MM-DD_lint.md` |
| 4 | Índice único | `01_INDICE.md` | `memoria/00_INDICE` apunta a él, no repite | ninguno (se resuelve con la duda de 03_TEMAS) |

## Por qué no se aplica hoy

| Motivo | Dato |
|---|---|
| Hay una tarea programada escribiendo en `SISTEMA/memoria` | "Memoria Cocinas Lujo · pasada lenta", cada 2 h, próxima 07/11 01:03 Madrid |
| Va por la pasada 1 de ~111 | 333 archivos, 3 por etapa y pasada → unos 9-10 días (estimación mía) |
| Las herramientas de Drive solo crean, no editan | Cualquier cambio de reglas es un `_v<N>` nuevo; dos sesiones a la vez = dos v<N> chocando |
| Hay dudas abiertas sin responder | `03_DUDAS_PARA_DAMIAN_v1.md` (incluye qué hacer con `03_TEMAS`) |

## Sesiones revisadas (06/11 23:40)

| Sesión | Qué hace | Choca con esto |
|---|---|---|
| Análisis de datos para ERP Cocinas Lujo | Dueña de `SISTEMA/memoria` y de la pasada cada 2 h | **Sí**: no tocar su carpeta |
| Foundly: remeras solidarias | Mismo repo, otra rama (`claude/foundly-solidarity-tshirts-ckikny`) | No |
| Configurar cuentas para skills | Esperando que crees un perfil | No |
| Claude Code en móvil | Esperando respuesta | No |
| Avisos de montaje (tarea 08/11 19:00) | Lee calendario | No |

## Orden para aplicarlo

1. Esperar a que la bitácora diga `COLA COMPLETA`.
2. Responder `03_DUDAS_PARA_DAMIAN`.
3. Crear `03_REGLAS_v<N>` con las piezas 1 y 2.
4. Crear el primer lint en `SISTEMA/revisiones/`.
