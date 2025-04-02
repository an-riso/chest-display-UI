<template>
  <div class="relative flex flex-col items-center justify-between">
    <div class="relative top-14 flex justify-center items-center m-auto p-6 gap-3 w-full">
      <button
        class="flex w-12 h-12 p-3 justify-center items-center rounded-[4px] bg-oversonic-white/10"
        @click="goBack"
      >
        <IconBack />
      </button>
      <span class="text-lg text-oversonic-white font-bold font-inter text-center w-full -ml-12">
        Alarms
      </span>
    </div>

    <div class="absolute inset-0 top-[150px] w-full flex justify-center">
      <div class="absolute w-full grid grid-rows-3 gap-[1px]">
        <div
          v-for="(alarm, key) in alarmList"
          :key="key"
          class="flex items-center justify-between h-[75px] p-6 text-2xl font-normal capitalize transition"
          :class="{
            'bg-oversonic-dark/8 text-oversonic-white/20 cursor-not-allowed': alarm.count === 0,
            'bg-oversonic-white/10 text-oversonic-white': alarm.count > 0,
          }"
        >
          <span class="w-full">{{ alarm.label }}</span>
          <span class="text-xl">{{ alarm.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

import IconBack from '../../static/icons/IconBack.vue'
import { useAppStore } from '../stores/StoreGeneral'

const goBack = () => {
  history.go(-1)
}

const { pageData } = storeToRefs(useAppStore())

const alarmList = computed(() => [
  { label: 'critical', count: pageData.value.alarms.critical },
  { label: 'error', count: pageData.value.alarms.errors },
  { label: 'warning', count: pageData.value.alarms.warnings },
])
</script>

<style scoped>
.bg-oversonic-dark\/8 {
  background-color: rgba(0, 0, 0, 0.08);
}
</style>
