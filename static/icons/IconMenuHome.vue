<template>
  <svg :width="size" :height="size" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="3.125" :fill="fillColor" />
    <circle cx="20" cy="10" r="3.125" :fill="fillColor" />
    <circle cx="30" cy="10" r="3.125" :fill="fillColor" />
    <circle cx="10" cy="20" r="3.125" :fill="fillColor" />
    <circle cx="20" cy="20" r="3.125" :fill="fillColor" />
    <circle cx="30" cy="20" r="3.125" :fill="fillColor" />
    <circle cx="10" cy="30" r="3.125" :fill="fillColor" />
    <circle cx="20" cy="30" r="3.125" :fill="fillColor" />
    <circle cx="30" cy="30" r="3.125" :fill="fillColor" />
  </svg>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  fillColor: {
    type: String,
    default: 'white',
  },
  size: {
    type: String,
    default: '40',
  },
})
</script>
