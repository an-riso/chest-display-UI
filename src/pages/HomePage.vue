<template>
  <main class="font-inter" :style="{ background: bgColor }">
    <div class="absolute w-full flex justify-center top-0 items-center">
      <HeaderIndicator
        :model="headerData"
        :class="{ 'opacity-35': route.path === '/screensaver' }"
      />
    </div>

    <router-view
      :to="{
        query: { bgColor: bgColor },
      }"
    />

    <div class="absolute w-full flex justify-center bottom-0 items-center">
      <FooterIndicator
        :model="footerModel"
        :class="{ 'opacity-35': route.path === '/screensaver' }"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import FooterIndicator from '../components/FooterIndicator.vue'
import HeaderIndicator from '../components/HeaderIndicator.vue'

const route = useRoute()
defineProps({
  bgColor: {
    type: String,
    required: true,
  },
})

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
  offline: '#090909',
  active: '#081',
  allarm: '#922',
  listening: '#224AB5',
  progessing: '#A868DD',
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
