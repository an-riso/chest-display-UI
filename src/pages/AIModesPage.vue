<template>
  <div class="relative flex flex-col items-center justify-between hover:cursor-pointer">
    <div class="relative top-14 flex justify-center items-center m-auto p-6 gap-3 w-full">
      <button
        class="flex w-12 h-12 p-3 justify-center items-center rounded-[4px] bg-oversonic-white/10"
        @click="goBack"
      >
        <IconBack />
      </button>

      <span class="text-lg text-oversonic-white font-bold !font-inter text-center w-full -ml-12">
        AI modes</span
      >
    </div>
    <div class="absolute inset-0 z-10 flex flex-col h-full">
      <div class="absolute top-[150px] w-full">
        <div v-if="selectedMenu" class="grid grid-cols-4 gap-[1px] overflow-y-hidden">
          <div
            v-for="(item, index) in selectedMenu.subItems"
            :key="index"
            @click="toggleSubItem(item)"
            :class="[
              'flex start-0 flex-shrink-0 option-box h-[149px] p-6',
              {
                'bg-oversonic-dark/10 text-white/20': !isSelectedSubItem(item),
                'bg-oversonic-white/10 text-white': isSelectedSubItem(item),
              },
            ]"
          >
            <span class="flex w-full text-lg leading-normal font-normal capitalize">
              {{ item }}
            </span>
            <span
              v-if="isSelectedSubItem(item) && selectedMenu.name === 'ai modes'"
              class="flex w-auto pb-[72px] text-lg leading-normal font-normal capitalize"
            >
              AI
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, reactive, ref } from 'vue'
import IconBack from '../../static/icons/IconBack.vue'

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
    default: 50,
  },
  lang: {
    type: String,
    required: true,
    default: 'EN',
  },
})

const goBack = () => {
  history.go(-1)
}
const listItemsMenu = [
  {
    name: 'ai modes',
    subItems: ['conversation', 'head', 'movements', 'navigation', 'missions'],
  },
]

const selectedMenu = ref(listItemsMenu[0])
const menuSelections = reactive(
  listItemsMenu.reduce((acc, menu) => {
    acc[menu.name] = props.model.activeItem
    return acc
  }, {}),
)

const toggleSubItem = (item) => {
  const selectedItems = menuSelections[selectedMenu.value.name]
  if (selectedItems.includes(item)) {
    menuSelections[selectedMenu.value.name] = selectedItems.filter((i) => i !== item)
  } else {
    menuSelections[selectedMenu.value.name].push(item)
  }
}

const isSelectedSubItem = (item) => menuSelections[selectedMenu.value.name]?.includes(item)
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
