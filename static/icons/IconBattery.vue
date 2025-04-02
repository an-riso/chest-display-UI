<template>
  <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" :width="batteryLevelWidth" height="12" rx="1" :fill="fillColor" />
    <rect
      x="0.75"
      y="0.75"
      width="23.5"
      height="14.5"
      rx="2.25"
      stroke="white"
      stroke-width="1.5"
    />
    <path
      d="M26.261 4.26099C26.752 4.26099 27.2382 4.3577 27.6919 4.54561C28.1455 4.73352 28.5577 5.00894 28.9049 5.35615C29.2522 5.70336 29.5276 6.11556 29.7155 6.56921C29.9034 7.02287 30.0001 7.50909 30.0001 8.00012C30.0001 8.49115 29.9034 8.97737 29.7155 9.43102C29.5276 9.88467 29.2522 10.2969 28.9049 10.6441C28.5577 10.9913 28.1455 11.2667 27.6919 11.4546C27.2382 11.6425 26.752 11.7392 26.261 11.7392L26.261 8.00012V4.26099Z"
      :fill="fillColor"
    />
  </svg>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  batteryPercentage: {
    type: Number,
    required: true,
    default: 0,
  },
  fillColor: {
    type: String,
    default: 'white',
  },
})

const batteryLevelWidth = computed(() => {
  const maxWidth = 21
  return (props.batteryPercentage / 100) * maxWidth
})
</script>
