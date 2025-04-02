<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 22H22V6H6V22ZM10 10H18V18H10V10Z" :fill="fillColor" />
    <path d="M6 42H22V26H6V42ZM10 30H18V38H10V30Z" :fill="fillColor" />
    <path d="M26 6V22H42V6H26ZM38 18H30V10H38V18Z" :fill="fillColor" />
    <path d="M42 38H38V42H42V38Z" :fill="fillColor" />
    <path d="M30 26H26V30H30V26Z" :fill="fillColor" />
    <path d="M34 30H30V34H34V30Z" :fill="fillColor" />
    <path d="M30 34H26V38H30V34Z" :fill="fillColor" />
    <path d="M34 38H30V42H34V38Z" :fill="fillColor" />
    <path d="M38 34H34V38H38V34Z" :fill="fillColor" />
    <path d="M38 26H34V30H38V26Z" :fill="fillColor" />
    <path d="M42 30H38V34H42V30Z" :fill="fillColor" />
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
    default: '48',
  },
})
</script>
