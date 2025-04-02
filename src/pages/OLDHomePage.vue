<template>
  <div
    class="relative flex flex-col items-center justify-between"
    style="width: 1280px; height: 600px; font-family: sans-serif"
    @click="toggleScreen"
  >
    <div
      :style="{ backgroundColor: screenColor }"
      class="absolute inset-0 z-10 flex flex-col w-full h-full"
    >
      <div
        class="absolute font-normal text-oversonic-white left-12 top-40 text-[179px] tracking-[-8.95px]"
      >
        M04
      </div>

      <div
        class="absolute inline-flex flex-col items-start gap-1 text-oversonic-white top-40 right-[252rem]"
      >
        <div>Vision</div>
        <div>Error</div>
        <div>Mission</div>
      </div>

      <div class="absolute bottom-8 w-full flex justify-center">
        <button class="flex w-10 h-10 flex-wrap">
          <IconMenuHome />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconMenuHome from '../../static/icons/IconMenuHome.vue'

const showScreen = ref(false)
const screenColor = ref('#000')

const toggleScreen = () => {
  showScreen.value = !showScreen.value
  screenColor.value = showScreen.value ? getRandomColor() : '#000'
}

const getRandomColor = () => {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF']
  return colors[Math.floor(Math.random() * colors.length)]
}
</script>

<style scoped>
html {
  width: 1024;
  height: 600;
}
</style>
