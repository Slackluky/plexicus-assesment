<script setup lang="ts">
import type { User } from '~/composables/users/domain/user.entity'

defineProps<{
	user?: User | null
}>()
</script>

<template>
	<UiCard class="hover:shadow-2xl time duration-1000 !bg-stone-100 border-2 border-stone-400 border-solid">
		<div v-if="!user">
			<UiLoader />
		</div>
		<div
			v-else
			class="flex flex-col gap-y-2"
		>
			<div class="flex gap-x-4 justify-start mb-4">
				<h1 class="text-2xl text-stone-700 text-bold font-[600]">
					{{ user?.name }}
				</h1>
			</div>
			<div class="w-full flex items-start gap-2">
				<span class="text-[16pt]">🤖 </span>
				<h3 class="text-lg text-amber-700 sm:break-words break-all">
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
					class="text-lg flex items-center sm:break-words break-all"
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
			<!-- company section -->
			<div>
				<UserCompany :company="user.company" />
			</div>
			<div class="flex items-start gap-2">
				<span class="text-[16pt]">🏠 </span><span>{{ joinAddress(user.address) }}</span>
			</div>
			<div class="w-full">
				<UiMap :geo="user.address.geo" />
			</div>
		</div>
	</UiCard>
</template>
