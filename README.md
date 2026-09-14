# Con B de Biología — blog

Blog estático de Berta Muñoz Aranguren. Jekyll sobre GitHub Pages (sin build local necesario).

## Publicar un post

1. Crea `_posts/AAAA-MM-DD-titulo.md`
2. Cabecera:
   ```yaml
   ---
   layout: default
   title: "Título del post"
   description: "Resumen de una o dos líneas."
   ---
   ```
3. Escribe en Markdown, `git push`. GitHub Pages lo publica en ~1 minuto.

## Ver en local (opcional)

```bash
bundle install
bundle exec jekyll serve
```
