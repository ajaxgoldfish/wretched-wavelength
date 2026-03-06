// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: {
				'zh-CN': "Zachary's Blog",
				en: "Zachary's Blog",
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '文章目录',
					translations: { en: 'Articles' },
					autogenerate: { directory: 'articles' },
				},
				{
					label: 'AI提示词',
					translations: { en: 'AI Prompts' },
					autogenerate: { directory: 'ai-prompts' },
				},
				{
					label: '生活记录',
					translations: { en: 'Life Records' },
					autogenerate: { directory: 'life-records' },
				},
				{
					label: '技术文章',
					translations: { en: 'Tech Articles' },
					autogenerate: { directory: 'tech-articles' },
				},
			],
		}),
	],
});
