<template>
  <div
    ref="container"
    class="relative mt-14 pt-36 pb-24 w-full max-w-[700px] overflow-y-auto overflow-x-hidden text-oversonic-white text-[36px] rounded-lg font-normal leading-tight"
    :style="{ height: `${containerHeight}px` }"
  >
    <pre class="font-inter whitespace-pre-wrap break-words">{{ displayedText }}</pre>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = defineProps<{ text: string }>()
const displayedText = ref('')
const container = ref<HTMLElement | null>(null)
const containerHeight = ref(window.innerHeight - 112) // Altezza dinamica

const randomChars =
  '___________________________________!@#$%^&*(_+]}|;:,.>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZaxbcdefghijklmnopqrstuvwxyz'
let revealedText = ''
let currentIndex = 0
const wordArray = props.text.split(' ')

const updateContainerHeight = () => {
  containerHeight.value = window.innerHeight - 112
}

const typeEffect = () => {
  if (currentIndex >= wordArray.length) return

  const randomLength = Math.floor(Math.random() * 15) + 5
  let tempText = revealedText

  const randomWord = Array(randomLength)
    .fill(null)
    .map(() => randomChars.charAt(Math.floor(Math.random() * randomChars.length)))
    .join('')

  tempText += randomWord + ' '
  displayedText.value = tempText

  setTimeout(() => {
    revealedText += wordArray[currentIndex] + ' '
    currentIndex++
    displayedText.value = revealedText
    updateScroll()
    typeEffect()
  }, 100)
}

const updateScroll = () => {
  if (container.value) {
    requestAnimationFrame(() => {
      if (container.value) {
        container.value.scrollTo({
          top: container.value.scrollHeight,
          behavior: 'smooth',
        })
      }
    })
  }
}

onMounted(() => {
  typeEffect()
  window.addEventListener('resize', updateContainerHeight)
})

watch(
  () => props.text,
  () => {
    revealedText = ''
    displayedText.value = ''
    currentIndex = 0
    typeEffect()
  },
)
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0px;
}
</style>
