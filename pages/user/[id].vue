<script setup lang="ts">
const route = useRoute()
const router = useRouter()

// When accessing /posts/1, route.params.id will be 1
const { user, fetchUserById, pending, error } = useUsers()
await fetchUserById(route.params.id as unknown as number)

if (error.value) {
	throw createError({
		statusCode: error.value?.statusCode || 404,
		statusMessage: error.value?.statusMessage || 'Failed to fetch user',
	})
}
</script>

<template>
	<client-only>
		<div class="flex items-center justify-center w-screen min-h-screen px-4 sm:container mx-auto">
			<div v-if="pending && !user">
				<UiLoader />
			</div>
			<div
				v-else
				class="w-full h-full flex justify-center flex-col items-center"
			>
				<UiButton
					class="!w-fit"
					@click="router.back()"
				>
					<Icon name="lucide:arrow-left" />	Back
				</UiButton>
				<UserDetailedCard
					class="max-w-xl"
					:user="user"
				/>
			</div>
		</div>
	</client-only>
</template>
