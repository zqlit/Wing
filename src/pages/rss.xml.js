import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_CONFIG } from '../config';
import { formatDateKey } from '../utils/dataFormatte';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_CONFIG.title,
		description: SITE_CONFIG.description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/${formatDateKey(post.data.pubDate)}.html`,
		})),
	});
}
