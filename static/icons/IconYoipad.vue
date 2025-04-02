<template>
  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="3" r="3" :fill="fillColor" :fill-opacity="fillOpacity" />
    <circle cx="10" cy="17" r="3" :fill="fillColor" :fill-opacity="fillOpacity" />
    <circle cx="3" cy="10" r="3" :fill="fillColor" :fill-opacity="fillOpacity" />
    <circle cx="17" cy="10" r="3" :fill="fillColor" :fill-opacity="fillOpacity" />
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  fillColor: {
    type: String,
    default: 'white',
  },
  fillOpacity: {
    type: String,
    default: '0.5',
  },
})
</script>
