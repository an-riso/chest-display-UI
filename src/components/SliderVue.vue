<template>
  <div
    ref="sliderRef"
    class="relative w-full cursor-pointer"
    :style="{ height: `${height}px` }"
    @mousedown="startDrag"
  >
    <!-- Sfondo -->
    <div
      class="absolute left-0 w-full"
      :style="{ height: '100%', backgroundColor: backgroundColor }"
    ></div>

    <!-- Progress Bar -->
    <div
      class="absolute left-0"
      :style="{ width: value + '%', height: '100%', backgroundColor: progressColor }"
    ></div>

    <!-- Cursore con valore -->
    <!--div
      class="absolute flex flex-col items-center -top-12"
      :style="{ left: `calc(${value}% - 15px)` }"
    >
      <span class="text-xs text-white bg-black/70 px-2 py-1 rounded">
        {{ Math.round(value) }}
      </span>
    </div-->
    <div class="absolute flex flex-col items-center" :style="{ left: `calc(${value}% )` }">
      <div
        class=""
        :style="{
          width: '2px',
          height: `${height}px`,
          backgroundColor: cursorColor,
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  modelValue: number
  height?: number
  backgroundColor?: string
  progressColor?: string
  cursorColor?: string
}>()

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', Math.min(100, Math.max(0, val))),
})

const isDragging = ref(false)
const sliderRef = ref<HTMLElement | null>(null)

const startDrag = (event: MouseEvent) => {
  isDragging.value = true
  updatePosition(event)
  document.addEventListener('mousemove', updatePosition)
  document.addEventListener('mouseup', stopDrag)
}

const stopDrag = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', updatePosition)
  document.removeEventListener('mouseup', stopDrag)
}

const updatePosition = (event: MouseEvent) => {
  if (!isDragging.value || !sliderRef.value) return
  const rect = sliderRef.value.getBoundingClientRect()
  const newValue = Math.round(((event.clientX - rect.left) / rect.width) * 100) // Arrotonda all'intero più vicino
  value.value = newValue
}

onMounted(() => {
  document.addEventListener('mouseup', stopDrag)
})

onUnmounted(() => {
  document.removeEventListener('mouseup', stopDrag)
})
</script>
