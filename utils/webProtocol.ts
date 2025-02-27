import type { User } from '~/composables/users/data/users.interface'

export function webProtocol(website: User['website']) {
	return `https://${website}`
}
