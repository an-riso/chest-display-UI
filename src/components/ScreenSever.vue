<template>
  <div
    class="flex items-center justify-center w-screen h-screen bg-oversonic-dark hover:cursor-pointer"
    @click="navigateToNextPage"
  >
    <div class="relative flex flex-col items-center justify-between">
      <div class="absolute inset-0 z-0 bg-[#090909]">
        <div class="flex flex-col items-center justify-between h-full w-full">
          <div class="flex items-center justify-center flex-grow">
            <LogoRobee fillColor="white" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import LogoRobee from '../../static/icons/LogoRobee.vue'

const router = useRouter()

const navigateToNextPage = () => {
  router.push({ name: 'MainPage' })
}
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 1024px;
  height: 600px;
  overflow: hidden;
}
</style>
