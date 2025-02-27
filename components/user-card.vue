<script setup lang="ts">
import type { User } from '~/composables/users/domain/user.entity'

defineProps<{
	user: User
}>()
</script>

<template>
	<UiCard class="hover:shadow-2xl time duration-1000 !bg-stone-100 border-2 border-stone-400 border-solid">
		<div class="flex flex-col">
			<div class="flex gap-x-4 justify-start mb-4">
				<h1 class="text-2xl text-stone-700 text-bold font-[600]">
					{{ user?.name }}
				</h1>
			</div>
			<div class="w-full flex items-start gap-2">
				<span class="text-[16pt]">🤖 </span>
				<h3 class="text-lg text-amber-700">
					{{ user?.username }}
				</h3>
			</div>
			<div class="w-full flex items-start gap-2">
				<span class="text-[16pt]">☎️ </span>
				<h3 class="text-lg text-stone-700 flex items-center">
					{{ user?.phone }}
				</h3>
			</div>
			<div class="w-full flex items-center gap-2 text-blue-500">
				<span class="text-[16pt]">🌐</span> <a
					class="text-lg flex items-center"
					:href="webProtocol(user.website)"
					target="_blank"
					@click.stop
				>
					{{ user?.website }} <Icon name="lucide:external-link" />
				</a>
			</div>
			<div class="w-full flex items-center gap-2">
				<span class="text-[16pt]">✉️</span>
				<h3 class="text-lg text-amber-700">
					{{ user?.email }}
				</h3>
			</div>
			<div class="flex items-start gap-2">
				<span class="text-[16pt]">🏠 </span><span>{{ joinAddress(user.address) }}</span>
			</div>
		</div>
	</UiCard>
</template>
