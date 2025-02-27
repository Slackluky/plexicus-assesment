import { ref } from 'vue'

export interface Toast {
	id: number
	message: string
	type: 'success' | 'error' | 'info' | 'warning'
	duration?: number
}

const toasts = ref<Toast[]>([])
let idCounter = 0

export function useToast() {
	const addToast = (message: string, type: Toast['type'] = 'info', duration = 3000) => {
		const id = idCounter++
		toasts.value.push({ id, message, type, duration })

		if (duration > 0) {
			setTimeout(() => removeToast(id), duration)
		}
	}

	const removeToast = (id: number) => {
		toasts.value = toasts.value.filter(toast => toast.id !== id)
	}

	return { toasts, addToast, removeToast }
}
