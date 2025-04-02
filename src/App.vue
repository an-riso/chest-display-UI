<template>
  <main class="font-inter h-screen" :style="{ background: colorBackground }">
    <HomePage :bgColor="colorBackground" />
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import HomePage from './pages/HomePage.vue'

const model = ref({
  status: 'active',
})

const colorMap = {
  offline: '#090909',
  active: '#081',
  allarm: '#922',
  listening: '#224AB5',
  progessing: '#A868DD',
}
const colorBackground = computed(() => colorMap[model.value.status] || colorMap.offline)
console.log(colorBackground.value)
</script>

<style>
html {
  width: 1024;
  height: 600;
}
</style>
