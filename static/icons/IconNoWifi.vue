<template>
  <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1148_464)">
      <mask id="path-1-inside-1_1148_464" :fill="fillColor">
        <path
          d="M0.508473 5.00847C2.09636 3.42059 3.98145 2.16102 6.05611 1.30166C8.13078 0.442304 10.3544 -2.94475e-07 12.6 0C14.8456 2.94476e-07 17.0692 0.442305 19.1439 1.30166C21.2186 2.16102 23.1036 3.4206 24.6915 5.00848L12.6 17.1L0.508473 5.00847Z"
        />
      </mask>
      <path
        d="M0.508473 5.00847C2.09636 3.42059 3.98145 2.16102 6.05611 1.30166C8.13078 0.442304 10.3544 -2.94475e-07 12.6 0C14.8456 2.94476e-07 17.0692 0.442305 19.1439 1.30166C21.2186 2.16102 23.1036 3.4206 24.6915 5.00848L12.6 17.1L0.508473 5.00847Z"
        stroke="white"
        stroke-opacity="0.5"
        stroke-width="3.2"
        mask="url(#path-1-inside-1_1148_464)"
      />
    </g>
    <defs>
      <clipPath id="clip0_1148_464">
        <rect width="25.2" height="18" :fill="fillColor" />
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
