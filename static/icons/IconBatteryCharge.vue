<template>
  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.8713 25.5H12.7046L13.8713 17.3333H9.78793C8.76126 17.3333 9.40293 16.4583 9.42626 16.4233C10.9313 13.7633 13.1946 9.79667 16.2163 4.5H17.3829L16.2163 12.6667H20.3113C20.7779 12.6667 21.0346 12.8883 20.7779 13.4367C16.1696 21.475 13.8713 25.5 13.8713 25.5Z"
      :fill="fillColor"
    />
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  fillColor: {
    type: String,
    default: 'white',
  },
})
</script>
