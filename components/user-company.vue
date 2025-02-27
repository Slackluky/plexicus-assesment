<script setup lang="ts">
import { splitWords } from '@/utils/splitWords'
import type { Company } from '~/composables/users/data/users.interface'

defineProps<{
	company: Company
}>()
</script>

<template>
	<div class="rounded-lg ">
		<div class="flex gap-2">
			<span class="text-xl">🧳</span>
			<div>
				<h3 class="text-lg font-semibold">
					{{ company.name }}
				</h3>

				<p class="italic text-gray-600">
					{{ company.catchPhrase }}
				</p>

				<div class="mt-4 flex flex-wrap gap-2">
					<span
						v-for="(word, index) in splitWords(company.bs)"
						:key="index"
						class="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full"
					>
						{{ word }}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
