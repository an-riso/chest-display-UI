<template>
  <main class="font-inter" :style="{ background: colorBackground }">
    <div class="relative w-full flex justify-center top-0 items-center">
      <HeaderIndicator :model="headerData" />
    </div>

    <router-view
      :to="{
        query: { bgColor: colorBackground },
      }"
    />

    <div class="absolute w-full flex justify-center bottom-0 items-center">
      <FooterIndicator :model="footerModel" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import FooterIndicator from './components/FooterIndicator.vue'
import HeaderIndicator from './components/HeaderIndicator.vue'

const headerData = ref({
  name: 'John Doe',
  activeItem: 'ready',
  status: 'online',
  authentication: true,
  battery: 30,
  charging: false,
  wifiConnected: true,
})

const footerModel = ref({
  name: 'M04',
  activeItem: ['conversation', 'head'],
  status: 'offline',
  authentication: false,
  battery: 50,
  lang: 'EN',
})

const colorMap = {
  offline: 'linear-gradient(180deg, #555 0%, #111 100%)',
  active: 'linear-gradient(180deg, #090 0%, #050 100%)',
  allarm: 'linear-gradient(180deg, #B00 0%, #790000 100%)',
  listening: 'linear-gradient(180deg, #0040FF 0%, #001A67 100%)',
}
const colorBackground = computed(() => colorMap[footerModel.value.status] || colorMap.offline)
console.log(colorBackground.value)
</script>

<style>
html {
  width: 1024;
  height: 600;
}
</style>
