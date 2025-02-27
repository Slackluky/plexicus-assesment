import type { Address } from '~/composables/users/data/users.interface'

export function joinAddress(address: Address) {
	return `${address.suite} ${address.street} ${address.city} ${address.zipcode}`
}
