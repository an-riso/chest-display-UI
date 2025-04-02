<template>
  <div
    class="relative flex flex-col items-center justify-between hover:cursor-pointer"
    @click="navigateToLoginPage"
  >
    <div :style="{ backgroundColor: bgColor }" class="absolute inset-0 z-0 w-full h-full"></div>
    <div class="absolute z-10 flex flex-col w-full h-full top-14">
      <template v-if="!reactiveModel.authentication">
        <div
          class="absolute font-normal text-oversonic-white left-8 top-[150px] text-[209px] tracking-[-6.18px] leading-none mt-[-0.125em]"
        >
          {{ model.name }}
        </div>

        <div
          class="absolute inline-flex flex-col items-start gap-1 left-[772px] top-[150px] text-oversonic-white leading-3 mb-[-0.1em]"
        >
          <div class="flex gap-6 items-center">
            <span class="text-[16px] font-bold">{{ formattedDate }}</span>
          </div>
          <div class="flex gap-6 items-center">
            <span class="text-[16px] font-bold uppercase">
              {{ formattedTime }}
            </span>
          </div>
        </div>

        <div
          class="absolute inline-flex flex-col items-start gap-1 text-oversonic-white top-[224px] left-[772px] leading-3 mt-[-0.125em]"
        >
          <div
            v-for="item in listItems"
            :key="item"
            :class="[
              'text-[16px] uppercase',
              {
                'font-bold': Array.isArray(model.activeItem)
                  ? model.activeItem.includes(item)
                  : model.activeItem === item,
                'font-normal opacity-45': Array.isArray(model.activeItem)
                  ? !model.activeItem.includes(item)
                  : model.activeItem !== item,
              },
            ]"
          >
            {{ item }}
          </div>
        </div>
      </template>
      <template v-else
        ><div
          class="relative text-oversonic-white font-bold text-[18px] flex justify-center items-center min-h-[94px] p-6"
        >
          <div v-if="password.length === 0" class="flex">Insert PIN</div>
          <div v-else class="flex gap-1 items-center h-6">
            <div
              v-for="(_, index) in password"
              :key="index"
              class="w-3 h-3 bg-oversonic-white rounded-full"
            ></div>
          </div>
        </div>
        <div class="relative font-normal text-oversonic-white w-screen">
          <div id="PIN" :class="{ shake: isShaking }" class="grid grid-cols-3 gap-[0.1rem]">
            <div
              v-for="i in 12"
              :key="i"
              :class="[
                'flex justify-center items-center flex-shrink-0 w-auto  h-[112px] option-box',
                {
                  //'bg-oversonic-dark/10': i === 10 || i === 12,
                  'bg-[#00000014]': i !== 10 && i !== 12,
                  clicked: clickedSquare === i && isClicking,
                },
              ]"
              @click="i === 12 ? handleOkClick() : handleClick(i)"
            >
              <span
                v-if="i === 10"
                class="text-[18px] leading-3 mt-[-0.125em] mb-[-0.1em] font-normal text-oversonic-white"
                ><IconDeleteInsert
              /></span>
              <span
                v-if="i === 12"
                class="text-[18px] uppercase leading-none font-normal text-oversonic-white"
                :class="[
                  {
                    'text-oversonic-dark font-bold': clickedSquare === i && isClicking,
                  },
                ]"
                >ok</span
              >

              <span
                v-if="i === 11"
                class="text-[18px] leading-3 mt-[-0.125em] mb-[-0.1em] font-normal text-oversonic-white"
                :class="[
                  {
                    'text-oversonic-dark font-bold': clickedSquare === i && isClicking,
                  },
                ]"
                >0</span
              >
              <span
                v-if="i !== 10 && i !== 12 && i !== 11"
                class="text-[18px] leading-3 mt-[-0.125em] mb-[-0.1em] font-normal text-oversonic-white"
                :class="[
                  {
                    'text-oversonic-dark font-bold': clickedSquare === i && isClicking,
                  },
                ]"
                >{{ i }}</span
              >
            </div>
          </div>
        </div>
      </template>

      <!--div
        class="absolute inline-flex flex-col items-start gap-1 text-oversonic-white top-[150px] left-[772px] leading-3 mt-[-0.125em]"
      >
        <div
          v-for="item in listItems"
          :key="item"
          :class="[
            'text-[16px] uppercase',
            {
              'font-bold': Array.isArray(model.activeItem)
                ? model.activeItem.includes(item)
                : model.activeItem === item,
              'font-normal opacity-45': Array.isArray(model.activeItem)
                ? !model.activeItem.includes(item)
                : model.activeItem !== item,
            },
          ]"
        >
          {{ item }}
        </div>
      </div>

      <div
        class="absolute inline-flex flex-col items-start gap-1 left-[772px] top-[272px] text-oversonic-white leading-3 mb-[-0.1em]"
      >
        <div class="flex gap-6 items-center">
          <span class="text-[16px] font-bold">{{ reactiveModel.battery }}%</span>
        </div>
        <div class="flex gap-6 items-center">
          <span class="text-[16px] font-bold">{{ reactiveModel.lang }}</span>
        </div>
        <div class="flex gap-6 items-center">
          <span class="text-[16px] font-bold uppercase">
            {{ model.status }}
          </span>
        </div>
      </div-->

      <!--div
        v-if="!reactiveModel.authentication"
        class="absolute pl-8 pr-8 bottom-8 w-full flex justify-center items-center"
      >
        <button class="flex w-10 h-10 flex-wrap">
          <IconMenuHome
            v-if="model.status.uppercase !== 'listening'.toUpperCase()"
            fillColor="#FFFFFF"
          />
          <IconListening
            v-if="model.status.uppercase == 'listening'.toUpperCase()"
            fillColor="#FFFFFF"
          />
        </button>
      </div>
      <div v-else class="absolute w-full flex justify-start pl-8 pr-8 bottom-4 items-center">
        <button class="flex w-10 h-10 flex-wrap items-center ml-0">
          <IconBack />
        </button>
      </div-->
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import IconDeleteInsert from '../../static/icons/IconDeleteInsert.vue'

const props = defineProps({
  model: {
    type: Object,
    required: true,
    default: () => ({
      name: 'M04',
      activeItem: ['conversation'],
      status: 'active', // Possible values: listening, offline, active, alarm
      authentication: false,
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
    }),
  },
})

const route = useRoute()
const bgColor = (route.query.bgColor as string) || 'transparent'
console.log(bgColor, route.query)

const formattedDate = ref('')
const formattedTime = ref('')

function updateTime() {
  const now = new Date()
  const optionsDate: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }
  formattedDate.value = now.toLocaleDateString('en-US', optionsDate)

  const optionsTime: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric' }
  formattedTime.value = now.toLocaleTimeString('en-US', optionsTime)
}

onMounted(() => {
  updateTime() // Imposta i valori iniziali

  setInterval(() => {
    updateTime() // Aggiorna ogni secondo
  }, 1000)
})

const isClicking = ref(false)
const clickedSquare = ref<number | null>(null)
const password = ref<number[]>([])
const maxPassword = 8
const isLocked = ref(false)
const isShaking = ref(false)

const handleClick = (number) => {
  if (number === 10) {
    password.value.pop()
  } else if (password.value.length < maxPassword && number !== 12) {
    if (number === 11) {
      password.value.push(0)
    } else {
      password.value.push(number)
    }
  }

  clickedSquare.value = number
  isClicking.value = true

  setTimeout(() => {
    isClicking.value = false
    clickedSquare.value = null
  }, 60)

  if (isShaking.value) {
    setTimeout(() => {
      isShaking.value = false
    }, 700)
  }
}

const handleOkClick = () => {
  const correctCode = [1, 2, 3, 4]
  console.log(password.value, correctCode)
  console.log(JSON.stringify(password.value) === JSON.stringify(correctCode))
  if (password.value.length < 4) {
    isShaking.value = true
    setTimeout(() => {
      isShaking.value = false
    }, 700)
    return
  }

  console.log(password.value, correctCode)
  if (JSON.stringify(password.value) === JSON.stringify(correctCode)) {
    reactiveModel.authentication = true
    isLocked.value = false
    password.value = []
  } else {
    isShaking.value = true
    setTimeout(() => {
      isShaking.value = false
    }, 100)
    password.value = []
  }
}

const reactiveModel = reactive(props.model)
/*
const navigateToPrevPage = () => {
  console.log('das')
  // history.go(-1)
  reactiveModel.authentication = false
}*/

const navigateToLoginPage = () => {
  if (!isLocked.value) {
    reactiveModel.authentication = !reactiveModel.authentication
    if (reactiveModel.authentication) {
      isLocked.value = true
    }
  }
}

const listItems = ['conversation', 'vision', 'movements', 'navigation', 'missions']
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

.option-box.clicked {
  background-color: rgba(0, 0, 0, 0.16);
}

#PIN.shake {
  animation: shake 0.7s 1;
}

@keyframes shake {
  0%,
  20%,
  40%,
  60%,
  80% {
    transform: translateX(17px);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-17px);
  }
}
</style>
