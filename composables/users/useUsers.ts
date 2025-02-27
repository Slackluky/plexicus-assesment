/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from 'vue'

import { UserApiRepository } from './domain/user.repository'
import type { User } from '~/composables/users/data/users.interface'
import { useToast } from '#imports'

const userApiRepository = new UserApiRepository()
export function useUsers() {
	// Reactive state
	const { addToast } = useToast()
	const users = ref<User[] | null>()
	const user = ref<User | null>()
	const pending = ref<boolean>(false)
	const error = ref()

	const fetchUsers = async () => {
		pending.value = true
		error.value = null

		try {
			const { data, error: usersError } = await userApiRepository.getUsers()
			users.value = data.value
			error.value = usersError.value
			if (usersError.value) {
				addToast('Error fetching users', 'error')
				throw createError({
					statusCode: (usersError.value as any).statusCode || 404,
					statusMessage: 'Failed to fetch users',
				})
			}
		}
		catch (err) {
			addToast('Error fetching users', 'error')
			error.value = err
			users.value = []
			throw createError({
				statusCode: 404,
				statusMessage: 'Failed to fetch users',
			})
		}
		finally {
			pending.value = false
		}
	}

	const fetchUserById = async (id: number) => {
		pending.value = true
		error.value = null

		try {
			const { data, error: usersError } = await userApiRepository.getUser(id)
			user.value = data.value
			error.value = usersError.value

			if (usersError.value) {
				console.log((usersError.value as any).statusCode, 'eko')
				error.value = usersError
				addToast('Error fetching user', 'error')
				throw createError({
					statusCode: (usersError.value as any).statusCode,
					statusMessage: 'Failed to fetch users',
				})
			}
		}
		catch (err) {
			console.log(err)
			addToast('Error fetching user', 'error')
			error.value = err
			user.value = null
			throw createError({
				statusCode: 404,
				statusMessage: 'Failed to fetch users',
			})
		}
		finally {
			pending.value = false
		}
	}

	return { users, user, pending, error, fetchUsers, fetchUserById }
}
