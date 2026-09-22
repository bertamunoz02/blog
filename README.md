# Con B de Biología — blog

Astro + GitHub Pages. Los posts se escriben en Markdown; el sitemap, el RSS,
los `canonical` y los datos estructurados se generan solos en cada build.

## Escribir un post

1. Crea `src/pages/posts/titulo-del-post.md`
2. Cabecera (la fecha manda el orden, la descripción es el texto que sale en Google):
   ```yaml
   ---
   layout: ../../layouts/Post.astro
   title: "Título del post"
   description: "Resumen de 1-2 líneas, unos 155 caracteres."
   date: 2026-10-01
   image: "img/mi-foto.webp"        # portada, en public/img/ (1600px de ancho, webp)
   imageAlt: "Qué se ve en la foto"
   imageCredit: "Foto: Autor, <a href='...'>Wikimedia Commons</a>, CC BY 4.0"
   tags: ["Animales", "Noticias"]
   lede: "Frase de entrada, opcional."
   ---
   ```
3. Escribe en Markdown y haz `git push`. Formato "paper": las secciones `##` y las figuras se numeran solas.
   Foto dentro del post: `<figure><img src="/blog/img/foto.webp" alt="..."><figcaption>Pie. Foto: Autor, licencia</figcaption></figure>`.
   Cierra con `<div class="refs"><span class="small">Referencias</span> ...</div>`.
   Fotos con licencia libre: busca en Wikimedia Commons y pon siempre autor y licencia en el pie. GitHub Actions compila y publica solo.

La URL sale del nombre del archivo: `fases-ensayo-clinico.md` → `/blog/posts/fases-ensayo-clinico/`.
No renombres un archivo ya publicado: rompe el enlace y pierdes el posicionamiento.

## En local

```bash
npm install     # solo la primera vez
npm run dev     # http://localhost:4321/blog/
```

## SEO incluido

`sitemap-index.xml`, `robots.txt`, RSS, `canonical`, Open Graph, Twitter Card,
JSON-LD (`Blog` y `BlogPosting`), HTML semántico y cero JavaScript en el cliente.

## Dominio propio

En `astro.config.mjs` cambia `site` al dominio y pon `base: '/'`. Añade el dominio
en Settings → Pages y un archivo `public/CNAME` con el dominio dentro.
