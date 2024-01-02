import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'My Awesome Project',
	description: 'A VitePress Site',
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/markdown-examples' },
		],

		sidebar: [
			{
				text: 'Examples',
				items: [
					{ text: 'Markdown Examples', link: '/markdown-examples' },
					{ text: 'Runtime API Examples', link: '/api-examples' },
				],
			},
			{
				text: 'EndOfTerm',
				items: [
					{ text: 'Marx', link: '/course/final/marx' },
					{ text: 'Finance', link: '/course/final/finance' },
					{ text: 'InternationalTrade', link: '/course/final/it' },
					{ text: 'Market', link: '/course/final/market' },
					{ text: 'Coinbank', link: '/course/final/coinbank' },
				],
			},
		],

		socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
	},
})
