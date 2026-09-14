import rss from '@astrojs/rss';

export async function GET(context) {
  const posts = Object.values(import.meta.glob('./posts/*.md', { eager: true }));
  return rss({
    title: 'Con B de Biología',
    description: 'Investigación clínica, ensayos y divulgación — por Berta Muñoz Aranguren.',
    site: new URL(import.meta.env.BASE_URL, context.site),
    customData: '<language>es-ES</language>',
    items: posts
      .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      .map((post) => ({
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        pubDate: new Date(post.frontmatter.date),
        link: post.url,
      })),
  });
}
