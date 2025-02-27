import type { Ref } from 'vue'
import type { User } from '../domain/user.entity'

export interface IUserRepository {
	getUsers(): {
		data: Ref<User[] | null>
		pending: Ref<boolean>
		error: Ref<Error | null>
		refresh: () => void }
	getUser(id: number): {
		data: Ref<User | null>
		pending: Ref<boolean>
		error: Ref<Error | null>
		refresh: () => void }
}
