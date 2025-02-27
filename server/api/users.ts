export default defineEventHandler(async (event) => {
	const { apiUrl } = useRuntimeConfig(event)
	console.log(`${apiUrl}/users`)
	try {
		const response = await $fetch(`${apiUrl}/users`)
		return response
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	catch (error: any) {
		throw createError({
			statusCode: error.status || 404,
			statusMessage: 'Failed to fetch users',
		})
	}
})
