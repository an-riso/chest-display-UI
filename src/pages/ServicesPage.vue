<template>
  <div class="relative flex items-center justify-between hover:cursor-pointer">
    <!-- Header con Bottone Back -->
    <div class="relative top-14 flex justify-center items-center m-auto p-6 gap-3 w-full">
      <button
        class="flex w-12 h-12 p-3 justify-center items-center rounded-[4px] bg-oversonic-white/10"
        @click="handleGoBack"
      >
        <IconBack />
      </button>
      <span class="text-lg text-oversonic-white font-bold font-inter text-center w-full -ml-12">
        {{ currentTitle }}
      </span>
    </div>

    <div class="absolute inset-0 z-10 h-full">
      <!-- Menu principale -->
      <div v-if="!showSlider && !showMission" class="absolute top-[150px] w-full">
        <div ref="scrollContainer" class="scroll-container">
          <div class="flex gap-[1px]">
            <div
              v-for="(chunk, chunkIndex) in chunkedSubItems"
              :key="chunkIndex"
              class="grid grid-cols-4 grid-rows-2 gap-[1px] flex-shrink-0 w-max"
            >
              <div
                v-for="(item, index) in chunk"
                :key="index"
                @click="handleItemClick(item)"
                :class="[
                  'flex start-0 flex-shrink-0 option-box h-[149px] p-6 w-[255px]',
                  {
                    'bg-oversonic-dark/10 text-white/20': !isSelectedSubItem(item),
                    'bg-oversonic-white/10 text-white': isSelectedSubItem(item),
                  },
                ]"
              >
                <span class="flex w-full text-lg leading-normal font-normal capitalize">
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="relative flex justify-center items-center m-auto p-8 gap-3 w-full">
          <div class="scrollbar w-24 h-1 bg-gray-500 rounded-full">
            <div
              class="scrollbar-thumb h-1 bg-white rounded-full transition-all"
              :style="{ width: `${scrollProgress}%` }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Slider per Speakers e Microphone -->
      <div
        v-if="showSlider"
        class="absolute inset-0 flex flex-col items-center justify-center top-[150px]"
      >
        <p class="absolute textValue right-0 text-[80px] top-[182px] mx-6">
          {{ sliderValue }}
        </p>
        <div
          class="absolute w-full h-[150px] bg-oversonic-white/10 flex flex-col justify-center items-center"
        >
          <SliderVue
            v-model="sliderValue"
            :height="150"
            backgroundColor="rgba(0, 0, 0, 0.08)"
            progressColor="rgba(0, 0, 0, 0.08)"
            cursorColor="white"
          />
        </div>
      </div>

      <!-- Lista delle Missioni -->
      <div v-if="showMission" class="absolute inset-0 flex flex-col items-center justify-center">
        <ul class="absolute list-disc h-[150px]">
          <li v-for="(name, index) in missionNames" :key="index" class="text-white cursor-pointer">
            {{ name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import IconBack from '../../static/icons/IconBack.vue'
import SliderVue from '../components/SliderVue.vue'

// Gestione navigazione
const currentTitle = ref('Services')

const sliderValue = ref(50)
const goBack = () => {
  history.go(-1)
}

const handleGoBack = () => {
  if (showSlider.value || showMission.value) {
    showSlider.value = false
    showMission.value = false
    currentTitle.value = 'Services'
  } else {
    goBack()
  }
}

// Menu con sottovoci
const listItemsMenu = [
  {
    name: 'services',
    subItems: [
      'speakers',
      'microphone',
      'cameras',
      'language',
      'missions',
      'motion',
      'safety',
      'battery',
      'alarms',
      'joystick',
      'wi-fi',
      'gestures',
      'powers',
    ],
  },
]

const selectedMenu = ref(listItemsMenu[0])
const scrollContainer = ref<HTMLElement | null>(null)

const scrollProgress = ref(0)

const showSlider = ref(false)
const showMission = ref(false)
const selectedSlider = ref('')
const missionNames = ref<string[]>(['Name 1', 'Name 2', 'Name 3'])

const chunkedSubItems = computed(() => {
  const items = selectedMenu.value.subItems
  const chunks: string[][] = []
  for (let i = 0; i < items.length; i += 8) {
    chunks.push(items.slice(i, i + 8))
  }
  return chunks
})

const menuSelections = ref<{ [key: string]: string[] }>({
  services: [],
})

const isSelectedSubItem = (item: string) =>
  menuSelections.value[selectedMenu.value.name]?.includes(item)

const updateScrollState = () => {
  if (scrollContainer.value) {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value
    scrollProgress.value = (scrollLeft / (scrollWidth - clientWidth)) * 100
  }
}

const handleItemClick = (item: string) => {
  if (item === 'speakers' || item === 'microphone') {
    showSlider.value = true
    showMission.value = false
    selectedSlider.value = item
    currentTitle.value = item.charAt(0).toUpperCase() + item.slice(1) // Capitalize
  } else if (item === 'missions') {
    showSlider.value = false
    showMission.value = true
    currentTitle.value = 'Missions'
  } else {
    showSlider.value = false
    showMission.value = false
  }
}

onMounted(() => {
  nextTick(updateScrollState)
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', updateScrollState)
  }
})
</script>

<style scoped>
.scroll-container {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 10px;
  white-space: nowrap;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.scrollbar {
  position: relative;
  width: 100px;
  height: 8px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  overflow: hidden;
}

.scrollbar-thumb {
  height: 100%;
  background: white;
  transition: width 0.2s ease;
}

.textValue {
  color: #fff;
  text-align: right;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -2.4px;
}
</style>
