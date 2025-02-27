<script lang="ts" setup>
const { users, fetchUsers } = useUsers()
fetchUsers()
</script>

<template>
	<client-only>
		<div class="container mx-auto sm:px-4 flex flex-col items-start min-h-screen w-screen py-[20px]">
			<div class="flex h-200px items-end">
				<h1 class="text-[40pt] text-stone-900 font-extrabold w-full">
					🧑🏽‍💻 User List
				</h1>
			</div>

			<div class="flex items-center justify-center w-full flex-1">
				<ul
					v-if="users"
					class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4"
				>
					<li
						v-for="user in users"
						:key="user.id"
					>
						<NuxtLink :to="`/user/${user.id}`">
							<UserCard :user="user" />
						</NuxtLink>
					</li>
				</ul>
				<div v-else>
					<UiLoader />
				</div>
			</div>
		</div>
	</client-only>
</template>
