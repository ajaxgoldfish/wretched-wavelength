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
			editLink: {
				baseUrl: 'https://github.com/zhangzongboStarlight/wretched-wavelength/edit/main/',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '博客',
					translations: { en: 'Blog' },
					autogenerate: { directory: 'blog' },
				},
				{
					label: '项目',
					translations: { en: 'Projects' },
					autogenerate: { directory: 'projects' },
				},
				{
					label: '笔记',
					translations: { en: 'Notes' },
					autogenerate: { directory: 'notes' },
				},
			],
		}),
	],
});
