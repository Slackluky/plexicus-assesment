import type { Ref } from 'vue'
import type { IUserRepository } from '../data/user.repository.interface'
import type { User } from './user.entity'

export class UserApiRepository implements IUserRepository {
	getUsers(): {
		data: Ref<User[] | null>
		pending: Ref<boolean>
		error: Ref<Error | null>
		refresh: () => void } {
		return useAPI('/api/users')
	}

	getUser(id: number): {
		data: Ref<User | null>
		pending: Ref<boolean>
		error: Ref<Error | null>
		refresh: () => void } {
		return useAPI(`/api/users/${id}`)
	}
}
