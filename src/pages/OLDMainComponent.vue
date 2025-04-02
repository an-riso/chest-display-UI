<template>
  <div class="flex items-center justify-center w-screen h-screen bg-oversonic-dark">
    <div
      class="relative flex flex-col items-center justify-between hover:cursor-pointer"
      style="width: 1024px; height: 600px; font-family: sans-serif"
    >
      <div
        :style="{ background: colorBackground }"
        class="absolute inset-0 z-0 w-full h-full"
      ></div>
      <div class="relative w-full h-4 -mb-2">
        <div
          class="absolute h-full transition-all duration-500 bg-green-500"
          :style="{ width: battery + '%' }"
        ></div>
      </div>
      <div class="absolute inset-0 z-10 flex flex-col w-full h-full">
        <div class="absolute font-normal left-0 top-[146px]">
          <div
            v-if="selectedMenu"
            class="grid grid-cols-3 gap-[0.1rem] w-[731px] max-h-[340px] overflow-y-hidden"
          >
            <div
              v-for="(item, index) in selectedMenu.subItems"
              :key="index"
              @click="toggleSubItem(item)"
              :class="[
                'flex justify-center items-center flex-shrink-0 option-box',
                {
                  'bg-oversonic-dark/10 text-white/20': !isSelectedSubItem(item),
                  'bg-oversonic-white/10 text-white': isSelectedSubItem(item),
                },
              ]"
            >
              <span
                class="flex w-[243px] px-6 pt-6 pb-[72px] text-[18px] leading-3 mt-[-0.125em] mb-[-0.1em] font-normal capitalize"
              >
                {{ item }}
              </span>
              <span
                v-if="isSelectedSubItem(item) && selectedMenu.name === 'ai modes'"
                class="flex px-6 pt-6 pb-[72px] text-[14px] leading-3 mt-[-0.125em] mb-[-0.1em] font-normal capitalize"
              >
                AI
              </span>
            </div>
          </div>
        </div>

        <div class="absolute top-[103px] right-8 flex flex-col items-center">
          <button
            @click="scrollMenu(-1)"
            class="flex items-center justify-center w-8 h-8 text-white rounded-full mb-6"
          >
            <svg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L13.0622 9H0.937822L7 0Z" fill="white" />
            </svg>
          </button>

          <div class="flex flex-col items-center gap-2 relative w-10">
            <div
              v-for="menu in listItemsMenu"
              :key="menu.name"
              class="relative flex justify-center items-center"
            >
              <div
                :class="{
                  'w-[10px] h-[30px] bg-oversonic-white rounded-full duration-500 ease-in-out hover:bg-oversonic-white':
                    selectedMenu.name === menu.name,
                  'w-[10px] h-[10px] bg-oversonic-white/10 rounded-full duration-500 ease-in-out hover:bg-oversonic-white':
                    selectedMenu.name !== menu.name,
                }"
              ></div>
            </div>
          </div>

          <button
            @click="scrollMenu(1)"
            class="flex items-center justify-center w-8 h-8 text-white rounded-full mt-5"
          >
            <svg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 9L13.0622 0H0.937822L7 9Z" fill="white" />
            </svg>
          </button>
        </div>

        <!-- Menu laterale -->
        <div
          class="absolute inline-flex flex-col items-start gap-1 top-40 left-[772px] leading-3 mt-[-0.125em] mb-[-0.1em]"
        >
          <div
            v-for="menu in listItemsMenu"
            :key="menu.name"
            @click="selectMenu(menu)"
            :class="[
              'text-[16px] uppercase cursor-pointer',
              {
                'font-bold text-oversonic-white': selectedMenu.name === menu.name,
                'font-normal text-oversonic-white opacity-45': selectedMenu.name !== menu.name,
              },
            ]"
          >
            {{ menu.name }}
          </div>
        </div>

        <div class="absolute w-full flex justify-start pl-8 pr-8 bottom-4 items-center">
          <button class="flex w-10 h-10 flex-wrap items-center ml-0">
            <IconBack />
          </button>
          <div class="flex items-center gap-12 right-8 absolute">
            <div>
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.15729 4.99885C2.57571 3.58043 4.25961 2.45528 6.11286 1.68764C7.96611 0.920002 9.95241 0.524902 11.9584 0.524902C13.9643 0.524903 15.9506 0.920003 17.8038 1.68764C19.6571 2.45529 21.341 3.58043 22.7594 4.99885L11.9583 15.7999L1.15729 4.99885Z"
                  fill="white"
                />
              </svg>
            </div>
            <BatteryIndicator :battery-percentage="battery" />
            <div>
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.80849 3.12172C1.64585 4.28437 0.854081 5.76566 0.533309 7.37829C0.212537 8.99092 0.37717 10.6625 1.00639 12.1815C1.6356 13.7006 2.70114 14.9989 4.06826 15.9124C5.43539 16.8259 7.04268 17.3135 8.68691 17.3135C10.3311 17.3135 11.9384 16.8259 13.3055 15.9124C14.6727 14.9989 15.7382 13.7006 16.3674 12.1815C16.9966 10.6625 17.1613 8.99092 16.8405 7.37829C16.5197 5.76566 15.728 4.28436 14.5653 3.12172L13.2133 4.47376C14.1085 5.36899 14.7182 6.50959 14.9652 7.75132C15.2122 8.99304 15.0854 10.2801 14.6009 11.4498C14.1164 12.6195 13.2959 13.6192 12.2433 14.3226C11.1906 15.026 9.95296 15.4014 8.68691 15.4014C7.42086 15.4014 6.18324 15.026 5.13055 14.3226C4.07787 13.6192 3.2574 12.6195 2.77291 11.4498C2.28841 10.2801 2.16164 8.99304 2.40864 7.75132C2.65563 6.50959 3.26529 5.36899 4.16053 4.47376L2.80849 3.12172Z"
                  fill="white"
                />
                <line
                  x1="8.94897"
                  y1="0.778564"
                  x2="8.94897"
                  y2="7.81856"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, reactive, ref } from 'vue'
import IconBack from '../../static/icons/IconBack.vue'
import BatteryIndicator from '../components/BatteryIndicator.vue'

const props = defineProps({
  model: {
    type: Object,
    required: true,
    default: () => ({
      name: 'M04',
      activeItem: ['conversation', 'head'],
      status: 'active',
      authentication: false,
    }),
  },
  battery: {
    type: Number,
    required: true,
    default: 20,
  },
  lang: {
    type: String,
    required: true,
    default: 'EN',
  },
})

const reactiveModel = reactive(props.model)

const listItemsMenu = [
  {
    name: 'ai modes',
    subItems: ['conversation', 'head', 'movements', 'navigation', 'missions'],
  },
  {
    name: 'settings',
    subItems: [
      'speaker',
      'microphone',
      'camera',
      'voice',
      'language',
      'mission',
      'motion',
      'safety',
    ],
  },
]

const selectedMenu = ref(listItemsMenu[0])
const menuSelections = reactive(
  listItemsMenu.reduce((acc, menu) => {
    acc[menu.name] = props.model.activeItem
    return acc
  }, {}),
)

const colorMap = {
  offline: 'linear-gradient(180deg, #555 0%, #111 100%)',
  active: 'linear-gradient(180deg, #090 0%, #050 100%)',
  allarm: 'linear-gradient(180deg, #B00 0%, #790000 100%)',
  listening: 'linear-gradient(180deg, #0040FF 0%, #001A67 100%)',
}
const colorBackground = computed(() => colorMap[reactiveModel.status] || colorMap.offline)

const selectMenu = (menu) => {
  selectedMenu.value = menu
}

const toggleSubItem = (item) => {
  const selectedItems = menuSelections[selectedMenu.value.name]
  if (selectedItems.includes(item)) {
    menuSelections[selectedMenu.value.name] = selectedItems.filter((i) => i !== item)
  } else {
    menuSelections[selectedMenu.value.name].push(item)
  }
}

const isSelectedSubItem = (item) => menuSelections[selectedMenu.value.name]?.includes(item)

const scrollMenu = (direction) => {
  const currentIndex = listItemsMenu.findIndex((menu) => menu.name === selectedMenu.value.name)
  const nextIndex = (currentIndex + direction + listItemsMenu.length) % listItemsMenu.length
  selectedMenu.value = listItemsMenu[nextIndex]
}
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 1024px;
  height: 600px;
  overflow: hidden;
}
.option-box {
  transition:
    transform 0.1s ease,
    background-color 0.1s ease;
}

.indicator .dot:hover,
.indicator .bar:hover {
  background-color: #ffffff;
}
</style>
