# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Descripción del Proyecto

Landing page institucional de posicionamiento corporativo para **RB Ganadería** (Colombia). **No** es una página transaccional ni de e-commerce — es un portal de diplomacia corporativa que proyecta autoridad, solidez técnica, vanguardia científica y respeto ambiental.

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
| `Hero` | Cabecera inmersiva con video de fondo (100vh), overlay y flecha animada de scroll |
| `Foundation` | Identidad/escala con contadores animados (count-ups) |
| `Excellence` | Paneles interactivos: Mejoramiento Genético, SSPi, Bienestar Animal |
| `TerritorialImpact` | Mapa topográfico de Colombia con puntos luminosos |
| `GlobalQuality` | Estándares de inocuidad y mercados de exportación |
| `Footer` | Footer corporativo con enlaces institucionales |

## Dirección de Arte

- **Tipografía:** Playfair Display (h1/h2 editoriales, `font-serif`) + Poppins (h3, labels, UI, `font-sans`) + Inter (párrafos de lectura, `font-body`)
- **Paleta:** Verdes profundos/oliva, tonos tierra, `hueso: #F8F6F0` (balance con carbón), gris carbón (nunca negro puro)
- **Animaciones:** Sutiles — fade-ins, parallax suave, reveal al scroll (CSS puro, sin librerías pesadas)
- **Sin botones de CTA comerciales** en el hero

## Convenciones

- Código limpio y modular; comentarios solo donde el `por qué` no sea obvio
- Mobile-first con Tailwind; accesibilidad con atributos ARIA y contraste adecuado
- Los placeholders de media deben quedar claramente marcados: `src="/placeholder.mp4"`, `src="/placeholder-foto.jpg"`
- Seguir las convenciones de componentes `.astro` y no generar archivos innecesarios
