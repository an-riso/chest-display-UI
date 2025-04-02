<template>
  <footer class="flex items-center justify-between w-full h-14 gap-[1px]">
    <div
      class="flex items-center w-auto h-full relative px-14 gap-3 text-oversonic-white z-50 bg-oversonic-white/10"
    >
      <span class="text-center font-inter text-base leading-normal">AI </span>
    </div>

    <div
      class="flex items-center justify-between w-auto h-full px-14 text-oversonic-white z-50 bg-oversonic-white/10"
    >
      <span class="text-center font-inter text-base leading-normal">Services</span>
    </div>

    <div
      class="flex items-center justify-between w-full h-full px-14 gap-3 text-oversonic-white z-50 bg-oversonic-white/10"
    >
      <div class="flex items-center relative">
        <p class="text-center font-inter text-base leading-normal">Alarms</p>
      </div>
      <div class="flex items-center justify-end text-base">{{ 0 }}</div>
    </div>

    <div
      class="flex items-center justify-between w-auto h-full px-14 text-oversonic-white z-50 bg-oversonic-white/10"
    >
      <span class="text-center font-inter text-base leading-normal">Lang</span>
    </div>
    <div
      class="flex items-center justify-between w-auto h-full px-14 text-oversonic-white z-50 bg-oversonic-white/10"
    >
      <span class="text-center font-inter text-base leading-normal">Status</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  model: {
    type: Object,
    required: true,
    default: () => ({
      name: 'M04',
      activeItem: ['conversation', 'head'],
      status: 'offline',
      authentication: false,
      battery: 50,
      lang: 'EN',
    }),
  },
})

const navigateTo = (route?: string, buttonId?: string) => {
  if (route) {
    router.push(route)
  }
  activeButton.value = buttonId || null
}

const buttons = [
  { id: 'ai', label: 'AI', route: '/' },
  { id: 'services', label: 'Services', route: '/settings' },
  { id: 'alarms', label: 'Alarms' },
  { id: 'lang', label: 'Lang', route: '/keyboard' },
  { id: 'status', label: 'Status', route: '/main' },
]
const activeButton = ref<string | null>(null)
</script>
