<template>
  <svg :width="sizeW" :height="sizeH" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.668945 7.00004L6.16713 1.59607L6.16713 12.404L0.668945 7.00004Z"
      :fill="fillColor"
    />
    <path d="M8 7.00004L13.4982 1.59607L13.4982 12.404L8 7.00004Z" :fill="fillColor" />
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  fillColor: {
    type: String,
    default: 'white',
  },
  sizeW: {
    type: String,
    default: '16',
  },
  sizeH: {
    type: String,
    default: '14',
  },
})
</script>
