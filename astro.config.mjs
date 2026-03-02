// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: '博客',
					autogenerate: { directory: 'blog' },
				},
				{
					label: '项目',
					autogenerate: { directory: 'projects' },
				},
				{
					label: '笔记',
					autogenerate: { directory: 'notes' },
				},
			],
		}),
	],
});
