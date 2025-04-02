<template>
  <div class="flex items-center justify-center w-screen h-screen bg-oversonic-dark">
    <MainLogin :model="pageModel" :bgColor="bgColor" />
  </div>
</template>

<script setup lang="ts">
import MainLogin from './MainLogin.vue'

defineProps({
  bgColor: {
    type: String,
    required: true,
  },
})

const pageModel = {
  name: 'M04x',
  activeItem: ['missions', 'vision'],
  status: 'active', // Possible values: listening, offline, active, alarm
  authentication: false,
  battery: 20,
  lang: 'IT',
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
