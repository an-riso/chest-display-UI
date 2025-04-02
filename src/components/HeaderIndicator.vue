<template>
  <header class="flex items-center justify-between w-full h-14 gap-[1px]">
    <div
      v-if="navigation.active"
      class="flex items-center w-auto h-full relative px-8 gap-3 text-oversonic-white z-50 bg-oversonic-white/10"
    >
      <IconYoipad class="w-6 h-6" />
      <span class="text-sm font-medium">{{ navigation.value }}</span>
    </div>

    <div
      v-if="gesture.active"
      class="flex items-center justify-between w-auto h-full px-8 relative text-oversonic-white z-50 bg-oversonic-white/10"
    >
      <IconHand v-if="gesture.active" class="w-6 h-6 text-blue-500" />
      <IconHand v-else class="w-6 h-6 text-gray-500" />
    </div>

    <div
      class="flex items-center w-auto h-full relative px-8 gap-3 text-oversonic-white z-50 bg-oversonic-white/10"
    >
      <IconBattery v-if="battery.charging" :batteryPercentage="battery.value" />
      <IconBatteryCharge v-else />
      <span class="flex items-center justify-end text-base">{{ battery.value }}%</span>
    </div>

    <div
      class="flex items-center justify-between w-auto h-full px-8 relative text-oversonic-white z-50 bg-oversonic-white/10"
    >
      <IconWifi v-if="wifiStatus" />
      <IconNoWifi v-else />
    </div>

    <div
      class="flex items-center justify-center w-full h-full px-10 relative text-oversonic-white z-50 bg-oversonic-white/10"
    >
      <span v-if="user" class="flex items-center justify-center text-base">
        {{ user }}
      </span>
    </div>

    <div
      class="flex items-center justify-between px-8 w-auto h-full relative text-oversonic-white z-50 bg-oversonic-white/10"
    >
      <IconPower class="w-6 h-6 text-red-500 cursor-pointer" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import IconBattery from '../../static/icons/IconBattery.vue'
import IconBatteryCharge from '../../static/icons/IconBatteryCharge.vue'
import IconHand from '../../static/icons/IconHand.vue'
import IconNoWifi from '../../static/icons/IconNoWifi.vue'
import IconPower from '../../static/icons/IconPower.vue'
import IconWifi from '../../static/icons/IconWifi.vue'
import IconYoipad from '../../static/icons/IconYoipad.vue'
import { useAppStore } from '../stores/StoreGeneral'

const store = useAppStore()
const { battery, user, wifiStatus, navigation, gesture, charging } = storeToRefs(store)
</script>
