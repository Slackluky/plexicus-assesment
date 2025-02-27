<script setup lang="ts">
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { onMounted } from 'vue'
import type { Geo } from '~/composables/users/data/users.interface'

const props = defineProps<{ geo: Geo }>()

onMounted(() => {
	const map = L.map('map').setView([parseFloat(props.geo.lat), parseFloat(props.geo.lng)], 0)

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; OpenStreetMap contributors',
	}).addTo(map)

	L.marker([parseFloat(props.geo.lat), parseFloat(props.geo.lng)]).addTo(map).bindPopup('Location Here').openPopup()
})
</script>

<template>
	<div
		id="map"
		class="h-64 w-full"
	/>
</template>
