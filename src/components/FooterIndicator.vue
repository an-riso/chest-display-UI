<template>
  <footer class="flex items-center justify-between w-full h-14 gap-[1px]">
    <router-link
      v-for="button in buttons"
      :key="button.id"
      :to="button.route"
      class="flex items-center w-auto h-full relative px-14 gap-3 text-oversonic-white z-50 bg-oversonic-white/10"
      :class="{
        'w-full justify-center ': button.id === 'alarms',
      }"
      @click="activeButton = button.id"
    >
      <span
        class="text-center font-inter text-base leading-normal"
        :class="{
          'text-oversonic-white/50':
            button.id === 'alarms' || button.id === 'lang' || button.id === 'status',
        }"
        >{{ button.label }}</span
      >
      <span v-if="button.id === 'alarms'">{{ totalAlarms }}</span>
      <span v-if="button.id === 'lang'">{{ lang }}</span>
      <span v-if="button.id === 'status'">{{ status }}</span>
    </router-link>
  </footer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useAppStore } from '../stores/StoreGeneral'

const store = useAppStore()
const { lang, status, pageData } = storeToRefs(store)

const totalAlarms = computed(() => {
  const { critical, errors, warnings } = pageData.value.alarms
  return critical + errors + warnings
})

const activeButton = ref<string | null>(null)
watch(totalAlarms, (newVal) => {
  console.log('totalAlarms aggiornato:', newVal)
})
const buttons = [
  { id: 'ai', label: 'AI', route: '/aimodes' },
  { id: 'services', label: 'Services', route: '/services' },
  { id: 'alarms', label: 'Alarms', route: '/alarms' },
  { id: 'lang', label: 'Lang', route: '/keyboard' },
  { id: 'status', label: 'Status', route: '/mainLogin' },
]

setInterval(() => {
  store.updatePageData('alarms', { critical: 1, errors: 2, warnings: 3 })
}, 3000)
</script>
