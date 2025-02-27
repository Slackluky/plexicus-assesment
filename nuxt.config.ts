// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({

	modules: ['@nuxt/eslint', '@nuxt/icon'],
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	runtimeConfig: {
		apiUrl: process.env.NUXT_API_URL,
	},
	compatibilityDate: '2025-02-26',
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
			}, // <---
		},
	},
})
