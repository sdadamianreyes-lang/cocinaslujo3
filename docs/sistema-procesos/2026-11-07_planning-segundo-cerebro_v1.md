---
area: SIS
tipo: planning
fecha: 2026-11-07
estado: propuesta (no ejecutada)
viene_de: docs/sistema-procesos/2026-11-06_segundo-cerebro-karpathy_v1.md
---

# Planning · Segundo cerebro crítico

## Qué es, en una línea

Un sistema que guarda todo lo tuyo, lo ordena solo, y **cada semana te dice en qué fallaste, con pruebas**.

## Las 4 fases

| Fase | Cuándo | Qué se hace | Qué NO se hace |
|---|---|---|---|
| 0 · Preparar | Ya, mientras corre la cola de memoria | Responder las dudas abiertas de memoria · Empezar la entrevista (bloques 1-3) | Tocar `SISTEMA/memoria` o sus reglas |
| 1 · Montar | Cuando la bitácora diga `COLA COMPLETA` (~16-17/11, estimación mía) | Reglas v<N> con el modo crítico · Bandeja para lo nuevo · Índice único | Crear carpetas fuera de `SISTEMA` |
| 2 · Rutinas | Semana siguiente | Arrancan la diaria, la semanal y el registro de fallas | Automatizar algo que no se probó a mano 2 veces |
| 3 · Afinar | Mes 1 en adelante | Revisión mensual · Lint · Ajustar lo que no sirvió | Agregar rutinas nuevas sin quitar una vieja |

## Modo crítico: las reglas del "no te apaño"

Van escritas en el esquema (las reglas que Claude lee antes de todo). Son obligatorias, no un tono.

| # | Regla |
|---|---|
| C1 | Prohibido elogiar. Si algo salió bien, se anota en una línea y se pasa a lo que falló. |
| C2 | Cada informe arranca por lo peor: qué se prometió y no se hizo. |
| C3 | Toda crítica lleva prueba: fecha, archivo o mensaje. Sin prueba no se dice. |
| C4 | Si decís una cosa y hacés otra (ej.: "cierro lo empezado" y abrís un frente nuevo), se marca como **contradicción**. |
| C5 | Si una falla se repite 2 semanas, sube de nivel: deja de ser aviso y pasa a ser **la tarea número 1** de la semana siguiente. |
| C6 | Claude no cambia de opinión porque insistas. Solo con un argumento o un dato mejor (ya está en tus preferencias; acá se aplica a los informes). |
| C7 | Una vez al mes, Claude se critica a sí mismo: en qué te apañó, qué dato inventó, qué regla no cumplió. |

## Rutinas

| Rutina | Frecuencia | Cuánto te lleva | Qué te devuelve |
|---|---|---|---|
| Cierre del día | Diaria, 19:30 (proponela vos) | 3 min dictando | 3 líneas: qué cerraste, qué quedó abierto, qué te frenó |
| Registro de fallas | Cada vez que digas "está mal" | 0 min (lo detecta solo) | La falla queda en `aprendizajes/` con causa y regla para que no se repita |
| Análisis semanal | Domingo 20:00 | 10 min leyendo | Ver tabla de abajo |
| Revisión mensual | Primer domingo del mes | 30 min | Tendencia de fallas, horas perdidas, qué rutina sobra |
| Lint (salud del sistema) | Semanal, junto con el análisis | 0 min | Fichas viejas, precios desactualizados, clientes sin estado, contradicciones entre archivos |

### Qué trae el análisis semanal

Un bloque por área, **siempre en este orden**:

| Bloque | Pregunta que contesta | De dónde sale el dato |
|---|---|---|
| 1. Fallas | ¿Qué salió mal y por qué? | Correcciones "está mal" · pendientes vencidos de los ESTADO |
| 2. Promesas | ¿Qué dijiste que harías y no hiciste? | Chats de la semana · tareas de la semana anterior |
| 3. Plata | ¿Qué cobró, qué está trabado, qué presupuesto sin respuesta? | ESTADO de clientes · presupuestos enviados |
| 4. Tiempo | ¿Dónde se te fueron las horas en cosas repetitivas? | Calendario · chats repetidos |
| 5. Frentes | ¿Cuántos abiertos? ¿Abriste uno nuevo sin cerrar otro? | `01_INDICE.md` |
| 6. Una sola orden | Lo único que tenés que hacer primero la semana que viene | Lo anterior |

Áreas que cubre: Cocinas Lujo · ARG Construcciones · Manitas · Proveedores · Administración y cobros · Proyectos nuevos (Foundly, música, e-commerce) · Personal (día, energía, agenda).

## La entrevista: que el sistema sepa todo de vos

10-15 minutos por día, dictado por voz. Claude pregunta, vos contestás. Tus palabras se guardan textuales.

| Bloque | Tema | Ejemplos de preguntas |
|---|---|---|
| 1 | Objetivos | ¿Cuánto querés facturar en 12 meses por empresa? ¿Cuántas horas por semana querés trabajar? |
| 2 | Tu día real | ¿A qué hora arrancás y terminás? ¿Qué hacés que odiás hacer? |
| 3 | Fallas que ya conocés | ¿Qué te dijeron clientes o socios que hacés mal? ¿Qué se te olvida siempre? |
| 4 | Cocinas Lujo | Proceso de visita a cobro, margen objetivo, proveedor por partida, cuellos de botella |
| 5 | ARG Construcciones | Igual que el bloque 4 |
| 6 | Manitas | Igual que el bloque 4 |
| 7 | Equipo | Quién hace qué, quién falla, qué delegarías mañana si pudieras |
| 8 | Plata | Cobros típicos, retrasos, gastos fijos del grupo (en números redondos) |
| 9 | Proyectos nuevos | Para cada uno: qué es, cuánto lleva, cuándo da plata, si lo cortarías |
| 10 | Vida | Salud, descanso, familia, deporte: lo que quieras que el sistema cuide |

Reglas de la entrevista:
- Una pregunta por vez.
- Si una respuesta choca con algo que dijiste antes, Claude lo marca en el momento.
- No se guardan contraseñas, cuentas bancarias, DNI ni datos de salud con detalle (regla de `SISTEMA/03_REGLAS.md` §8).

## Dónde va cada cosa (sin carpetas nuevas)

| Qué | Dónde | ¿Existe hoy? |
|---|---|---|
| Respuestas de la entrevista | `SISTEMA/areas/PER_personal/` (bloques 1-3, 10) y el área de cada empresa (bloques 4-9) | Sí |
| Fallas y lecciones | `SISTEMA/aprendizajes/` | Sí |
| Análisis semanal, mensual y lint | `SISTEMA/revisiones/` | Sí |
| Reglas del modo crítico | `SISTEMA/03_REGLAS_v<N>.md` | Se crea en la fase 1 |
| Cierre del día | El `ESTADO.md` del tema o cliente que corresponda | Sí |

## Calendario propuesto

| Fecha | Paso | Depende de |
|---|---|---|
| Esta semana | Bloques 1-3 de la entrevista | Que lo apruebes |
| Esta semana | Responder `03_DUDAS_PARA_DAMIAN_v1.md` de memoria | Nada |
| ~16-17/11 (estimación) | Fase 1: reglas v<N>, modo crítico, índice único | `COLA COMPLETA` |
| Semana del ~23/11 | Fase 2: arrancan las rutinas, primer análisis semanal | Fase 1 |
| Primer domingo de diciembre | Primera revisión mensual y autocrítica de Claude | 2 análisis semanales hechos |
| En paralelo, desde la fase 1 | Bloques 4-10 de la entrevista | Fase 1 |

## Riesgos

| Riesgo | Qué lo evita |
|---|---|
| Que el modo crítico se ablande con el tiempo | Regla C7: autocrítica mensual de Claude |
| Que las rutinas se vuelvan una carga | Máximo 15 min por día entre todas. La que no se usa 2 semanas se corta |
| Que se dupliquen carpetas entre sesiones | Todo va dentro de `SISTEMA`. Nada se crea mientras corra la cola de memoria |
| Análisis con datos flojos | Sin fuente no hay crítica (regla C3) |

## Pendiente de tu decisión

1. ¿Empezamos la entrevista (bloques 1-3) ya, o esperamos a la fase 1?
2. Horarios: cierre del día a las 19:30 y análisis el domingo a las 20:00 son propuestas mías; corregilos.
