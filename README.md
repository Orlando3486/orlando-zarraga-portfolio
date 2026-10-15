# Orlando Zárraga — Portafolio

Portafolio profesional de **Orlando Zárraga**, Full Stack Developer con foco en backend. Reúne experiencia, proyectos, stack tecnológico y datos de contacto, disponible en español e inglés.

🔗 **Sitio:** [orlando-zarraga-portfolio.vercel.app](https://orlando-zarraga-portfolio.vercel.app)

## Características

- Contenido en español (`/`) e inglés (`/en`) con diccionarios tipados, sin dependencias de i18n.
- Renderizado estático con Next.js App Router: el contenido llega completo en el HTML.
- SEO por idioma: metadata, Open Graph y Twitter, `hreflang`, JSON-LD (`Person`), `sitemap.xml` y `robots.txt`.
- Imágenes de vista previa generadas con `next/og`.
- Descarga de CV (Full Stack o Backend) en el idioma de la página.
- Diseño responsive, contraste WCAG AA y respeto de `prefers-reduced-motion`.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router) y React 19
- TypeScript
- CSS con tokens de diseño propios
- react-icons
- Despliegue en Vercel

## Estructura

```
front/
├── app/          # Rutas, layouts, metadata, imagen OG, sitemap y robots
├── components/   # Secciones del sitio y componentes de interfaz
├── data/         # Contenido tipado por idioma (perfil, experiencia, proyectos…)
├── i18n/         # Textos de interfaz por idioma
├── lib/          # Configuración del sitio, idiomas y SEO
├── public/       # Imágenes y CV en PDF
└── styles/       # Estilos por sección
```

## Correr en local

Requisitos: Node.js 20 o superior.

```bash
cd front
npm install
npm run dev
```

La aplicación queda en [http://localhost:3000](http://localhost:3000) (español) y [http://localhost:3000/en](http://localhost:3000/en) (inglés).

Otros comandos:

```bash
npm run build   # build de producción
npm run start   # sirve el build
npm run lint    # ESLint
```

## Contacto

- LinkedIn: [orlando-ismael-zarraga-medina](https://www.linkedin.com/in/orlando-ismael-zarraga-medina)
- GitHub: [Orlando3486](https://github.com/Orlando3486)
