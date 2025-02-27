export default defineNuxtPlugin(() => {
	const api = $fetch.create({ // Read from .env or runtime config
		headers: {
			'Content-Type': 'application/json',
		},
		onRequest({ request }) {
			console.log('📤 Request:', request)
		},
		onResponse({ response }) {
			console.log('✅ Response:', response)
			return response._data // Return parsed JSON
		},
		onResponseError({ response }) {
			console.error('❌ API Error:', response.status, response.statusText)
			throw response
		},
	})

	return {
		provide: {
			api,
		},
	}
})
