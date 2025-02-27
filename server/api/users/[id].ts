export default defineEventHandler(async (event) => {
	const id = getRouterParam(event, 'id')

	try {
		const response = await $fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		console.log({ response })
		return response
	}
	catch (error) {
		console.log({ error })
		throw createError({
			statusCode: 404,
			statusMessage: 'Failed to fetch users',
		})
	}
})
