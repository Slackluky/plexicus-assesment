import type { UseFetchOptions } from 'nuxt/app'

export function useAPI<T>(
	url: string | (() => string),
	options?: UseFetchOptions<T>,
) {
	return useFetch(url, {
		...{ ...options, cache: 'no-cache' },
		$fetch: useNuxtApp().$api as typeof $fetch,
	})
}
