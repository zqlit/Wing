import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_CONFIG } from '../config';
import { formatDateKey } from '../utils/dataFormatte';

export async function GET(context) {
	const posts = await getCollection('blog');
	
	// 按日期排序，最新的在前
	const sortedPosts = posts.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);
	
	return rss({
		title: SITE_CONFIG.title,
		description: SITE_CONFIG.description,
		site: context.site,
		customData: `
			<language>zh-CN</language>
			<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
			<generator>Astro v5</generator>
			<managingEditor>${SITE_CONFIG.author}</managingEditor>
			<webMaster>${SITE_CONFIG.author}</webMaster>
			<image>
				<url>${new URL(SITE_CONFIG.avatar, context.site)}</url>
				<title>${SITE_CONFIG.title}</title>
				<link>${context.site}</link>
			</image>
		`,
		items: sortedPosts.map((post) => {
			const link = `/${formatDateKey(post.data.pubDate)}.html`;
			const fullUrl = new URL(link, context.site);
			
			return {
				title: post.data.title,
				description: post.data.description,
				link: link,
				pubDate: post.data.pubDate,
				content: post.body,
				customData: `
					<guid isPermaLink="true">${fullUrl}</guid>
					${post.data.updatedDate ? `<updated>${post.data.updatedDate.toISOString()}</updated>` : ''}
					<author>${SITE_CONFIG.author}</author>
				`,
			};
		}),
	});
}
