<template>
  <svg width="26" height="18" viewBox="0 0 26 18" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1096_2196)">
      <path
        d="M1.23845 5.00847C2.82634 3.42059 4.71143 2.16102 6.78609 1.30166C8.86076 0.442304 11.0844 -2.94475e-07 13.33 0C15.5756 2.94476e-07 17.7992 0.442305 19.8739 1.30166C21.9485 2.16102 23.8336 3.4206 25.4215 5.00848L13.33 17.1L1.23845 5.00847Z"
        :fill="fillColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_1096_2196">
        <rect width="25.2" height="18" :fill="fillColor" transform="translate(0.72998)" />
      </clipPath>
    </defs>
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
