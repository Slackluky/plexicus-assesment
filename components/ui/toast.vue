<script setup lang="ts">
import type { Toast } from '@/composables/useToast'
import { useToast } from '@/composables/useToast'

const { toasts, removeToast } = useToast()

const toastProperties = {
	success: {
		color: 'text-green-600',
		icon: '🎉',
	},
	error: {
		color: 'text-red-600',
		icon: '‼️',
	},
	info: {
		color: 'text-blue-600',
		icon: 'ℹ️',
	},
	warning: {
		color: 'text-yellow-600',
		icon: '⚠️',
	},
}

const getToastProperty = (type: Toast['type']) => {
	return toastProperties[type]
}
</script>

<template>
	<div class="fixed top-5 right-5 z-50 space-y-3">
		<div
			v-for="toast in toasts"
			:key="toast.id"
			class="flex items-start justify-start p-4 bg-white rounded-xl shadow-xl min-w-80 gap-x-4 h-full"
			:class="`${getToastProperty(toast.type).color}`"
		>
			<div class="flex items-center h-full">
				<span class="text-[26px]">{{ getToastProperty(toast.type).icon }}</span>
			</div>

			<div class="flex flex-col h-full w-full">
				<span class="font-bold text-lg">{{ toast.type }}</span>
				<span class="text-left text-sm">{{ toast.message }}</span>
			</div>

			<div class="flex items-start justify-start h-full">
				<button
					class="text-slate-700 focus:outline-none cursor-pointer"
					@click="removeToast(toast.id)"
				>
					<Icon name="lucide:x" />
				</button>
			</div>
		</div>
	</div>
</template>
