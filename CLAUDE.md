# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Descripción del Proyecto

Sitio divulgativo sobre el **Brahman Rojo colombiano**, presentado por **RB Ganadería** (Colombia). **No** es transaccional, ni e-commerce, ni blog, y **no habla de la empresa**: RB solo aparece como firma discreta (logo en navbar y footer, "Una iniciativa de RB Ganadería"). Es como si RB entregara información de la raza, no de sí misma.

### Reglas de contenido (no olvidar)
- Todo el texto informa sobre la raza y el sector: adaptación al trópico, genética, cuidado y bienestar, dónde se cría, exportación, importancia, empleo que genera. Nunca "nuestra operación", "décadas de trayectoria", hectáreas o empleos propios.
- Sin contacto, correo, botones de CTA ni columnas corporativas en el footer.
- Audiencia mixta (gremio, aliados, autoridades, público); tono divulgativo de alto nivel, no comercial.
- Cada cifra lleva fuente verificable (FEDEGAN, ICA, DANE, Asocebú, literatura científica) en comentario o visible en la sección. Si no se puede verificar, no se usa.
- El mapa de `TerritorialImpact` se rehízo (contorno real por departamentos en `src/data/colombia-departamentos.json`, datos de vacunación ciclo I 2025). El logo (`public/rb-logo.webp`, fondo `#020101`) solo va sobre fondos de ese mismo color; sobre fotos se ve como sticker.
- Se trabaja por partes, una sección a la vez. Hecho: navbar, footer, Hero, Foundation, Excellence ("La ciencia"), TerritorialImpact (mapa interactivo) y textos de GlobalQuality. Pendiente: rediseño visual de Hero, Foundation, Gallery y GlobalQuality.
- Contexto de producto en `PRODUCT.md`.

## Stack Tecnológico

- **Framework:** Astro.js
- **CSS:** Tailwind CSS
- **Gestor de paquetes:** pnpm (obligatorio, nunca usar npm ni yarn)

## Comandos

```bash
pnpm install          # instalar dependencias
pnpm dev              # servidor de desarrollo
pnpm build            # compilar para producción
pnpm preview          # previsualizar el build
```

## Arquitectura y Estructura de Componentes

El proyecto sigue una arquitectura de componentes modulares en Astro. Cada sección de la landing es un componente independiente:

| Componente | Sección |
|---|---|
| `Hero` | Cabecera inmersiva con foto de fondo (100vh), sin video, overlay y flecha animada de scroll |
| `Foundation` | La raza y su escala: contadores animados con cifras del sector |
| `Excellence` | La ciencia de la raza: tres capítulos (trópico, genética, bienestar/SSPi) con datos y fuentes |
| `TerritorialImpact` | Mapa topográfico de Colombia con puntos luminosos |
| `GlobalQuality` | Exportación de ganado colombiano y destinos |
| `Footer` | Firma discreta de RB, índice de secciones y nota de fuentes |

## Dirección de Arte

- **Tipografía:** Playfair Display (h1/h2 editoriales, `font-serif`) + Poppins (h3, labels, UI, `font-sans`) + Inter (párrafos de lectura, `font-body`)
- **Paleta:** carbón cálido (`superficie-*`), oro `#C9963A`/`#E0B86A`, carmesí `#8B1A1A` (ver `tailwind.config.mjs`)
- **Animaciones:** Sutiles — fade-ins, parallax suave, reveal al scroll (CSS puro, sin librerías pesadas)
- **Sin botones de CTA comerciales** en el hero

## Convenciones

- Código limpio y modular; comentarios solo donde el `por qué` no sea obvio
- Mobile-first con Tailwind; accesibilidad con atributos ARIA y contraste adecuado
- Los placeholders de media deben quedar claramente marcados: `src="/placeholder-foto.jpg"`. No usar videos en el sitio
- Seguir las convenciones de componentes `.astro` y no generar archivos innecesarios
