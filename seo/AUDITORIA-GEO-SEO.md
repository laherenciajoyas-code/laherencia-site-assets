# Auditoría GEO / SEO — www.laherenciajoyas.cl

Fecha: 28-09-2026. Revisión hecha sobre el HTML público del sitio (home, sitemap, robots.txt,
llms.txt, categorías clave, un producto y un artículo del blog).

Búsquedas objetivo:

| Búsqueda | Página que debería posicionar | Estado actual |
|---|---|---|
| regalos de primera comunión | `/personalizados/primera-comunion` | Título: **"Primera Comunion"** (sin tilde, sin marca, sin "regalo") |
| regalo bautizo | `/personalizados/bautizo` | Título: **"Bautizo"** |
| medallas religiosas | `/medallas` | Título: **"Medallas"** |
| joyas religiosas | — | **No existe página** que use esa frase |
| joyas de oro chile | `/joyas-18-k` | Título correcto, pero no dice "joyas de oro" |
| joyas de oro santiago | — | La palabra **"Santiago" no aparece en ninguna página** |

> Nadie puede garantizar el 1er lugar en Google ni en ChatGPT/Perplexity. Lo que sí se puede hacer es
> eliminar los problemas que hoy impiden competir. Los de abajo están ordenados por impacto.

---

## Lo que ya está bien

- Sitemap completo, robots.txt correcto, canonical, `lang="es-CL"`, `og:locale es_CL`.
- `llms.txt` y endpoint MCP activos (Jumpseller) → los agentes de IA pueden leer el catálogo.
- Schema `JewelryStore` con dirección (Las Condes) y schema `Product` con precio en las fichas.
- Contenido de blog muy bien enfocado (medallas religiosas, bautizo, oro 18K vs 14K). Esto es lo que
  más cita la IA generativa.
- Meta descriptions de las categorías principales bien escritas.

## Problemas (por prioridad)

### 1. Títulos (`<title>`) de las categorías clave — CRÍTICO
El título es la señal más fuerte para Google y lo que muestran ChatGPT/Perplexity al citar.
Hoy las categorías más importantes se llaman "Bautizo", "Medallas", "Niña", "Niño".
Se corrige en **Jumpseller → Productos → Categorías → (categoría) → SEO → Título**.
Textos propuestos (≤ 60 caracteres):

| URL | Título SEO propuesto |
|---|---|
| `/personalizados/primera-comunion` | Regalos de Primera Comunión en Oro 18K \| La Herencia |
| `/personalizados/primera-comunion/nina` | Regalo Primera Comunión Niña — Medallas Oro 18K |
| `/personalizados/primera-comunion/nino` | Regalo Primera Comunión Niño — Medallas y Cruces Oro |
| `/personalizados/bautizo` | Regalo de Bautizo en Oro 18K — Medallas \| La Herencia |
| `/personalizados/bautizo/nina` | Regalo Bautizo Niña — Medallas y Aros Oro 18K |
| `/personalizados/bautizo/nino` | Regalo Bautizo Niño — Medallas y Cruces Oro 18K |
| `/personalizados/confirmacion` | Regalo de Confirmación — Joyas Religiosas Oro 18K |
| `/medallas` | Medallas Religiosas de Oro 18K y Plata 950 \| Chile |
| `/medallas/virgenes-santos` | Medallas de Vírgenes y Santos en Oro 18K \| La Herencia |
| `/joyas-18-k` | Joyas de Oro 18K en Santiago, Chile \| La Herencia Joyas |
| `/personalizados/recien-nacidos` | Regalos para Recién Nacidos en Oro 18K \| La Herencia |
| Home | La Herencia Joyas — Joyería en Oro 18K en Santiago, Chile |

`/medallas/virgenes-santos` además usa la descripción genérica de la tienda: escribirle una propia.

### 2. Dos `<h1>` en todas las páginas — ALTO
El tema pone "La Herencia Joyas — Joyería Artesanal en Oro 18K y Plata 950 hecha en Chile" como `<h1>`
en **todas** las páginas, antes del H1 real (ej. "Bautizo"). Google y la IA leen que todas las páginas
tratan de lo mismo. En el editor del tema, cambiar ese elemento del header a `<p>` o `<div>` y
dejarlo como `<h1>` solo en la home.

### 3. Cero señales de Santiago — ALTO (para "joyas de oro santiago")
- `geo.placename` dice "Chile", no hay `geo.position` ni coordenadas.
- El schema `JewelryStore` no tiene teléfono, coordenadas, horario ni mapa.
- Ningún texto visible menciona Santiago.
- **Lo más importante para búsquedas locales es el Perfil de Empresa de Google (Google Maps)**:
  crearlo/verificarlo con la dirección de Las Condes, categoría "Joyería", fotos, horario y pedir
  reseñas a clientas. Sin esto es muy difícil salir primero en "joyas de oro santiago".
- Usar el bloque `seo/schema-jsonld.html` de este repo (ver punto 6).

### 4. No existe página para "joyas religiosas" — ALTO
Crear una categoría o página `/joyas-religiosas` (título: "Joyas Religiosas en Oro 18K y Plata 950 |
Chile") que agrupe medallas, cruces, escapularios y denarios, con 300–500 palabras de texto y
enlaces a bautizo / primera comunión / confirmación.

### 5. Categorías con poco texto — MEDIO
Las categorías tienen ~240 palabras (casi todo es menú y footer). Agregar al final de cada categoría
clave 150–300 palabras + 3–4 preguntas frecuentes visibles. Ejemplo para Primera Comunión:

- ¿Qué se regala para una primera comunión? — Medalla religiosa (Virgen Niña, Ángel de la Guarda,
  Espíritu Santo), cruz o denario de oro 18K, idealmente con grabado de nombre y fecha.
- ¿Quién regala la joya? — Tradicionalmente los padrinos o abuelos.
- ¿Se puede grabar? — Sí, grabado personalizado en el reverso.
- ¿Hacen envíos? — A todo Chile; retiro/entrega en Santiago (Las Condes).

Estas respuestas directas son exactamente el formato que extraen Google (AI Overviews) y ChatGPT.

### 6. Datos estructurados incompletos — MEDIO
- `JewelryStore`: sin `telephone`, `geo`, `openingHoursSpecification`, `areaServed` Santiago,
  catálogo de ofertas. → Reemplazar por el bloque de `seo/schema-jsonld.html`.
- Artículos del blog sin schema `Article`/`BlogPosting`.
- Breadcrumb de la home sin `@id`.

### 7. Descripciones de producto — BAJO
Ej. Medalla Virgen Niña: "Algunos regalos se hacen solo una vez en la vida. Hecho a mano en Chile."
No menciona "medalla religiosa", "oro 18K", "bautizo" ni "primera comunión". Plantilla sugerida:
"Medalla [nombre] en oro 18K, hecha a mano en Chile. Ideal para regalo de [bautizo/primera
comunión]. Grabado personalizado. Envío a todo Chile."

### 8. Otros
- Perfiles externos: solo Instagram en `sameAs`. Agregar Facebook, Google Maps, Pinterest si existen.
- Menciones en otros sitios (blogs de mamás, guías de regalos, prensa) son la principal fuente que
  usa la IA generativa para recomendar marcas.
- Los scripts `laherencia-v*.js` de este repo **no aparecen cargados** en el HTML actual del sitio;
  cualquier cambio SEO debe ir en el admin de Jumpseller o en el tema, no aquí.

---

## Checklist

- [ ] Cambiar títulos SEO de la tabla del punto 1
- [ ] Quitar el `<h1>` global del header
- [ ] Crear/optimizar Perfil de Empresa de Google + pedir reseñas
- [ ] Pegar `seo/schema-jsonld.html` en el `<head>` del tema (completar teléfono y coordenadas)
- [ ] Crear página "Joyas Religiosas"
- [ ] Agregar texto + FAQ a Primera Comunión, Bautizo, Medallas, Joyas 18K
- [ ] Mejorar descripciones de productos religiosos
- [ ] Re-enviar sitemap en Google Search Console
