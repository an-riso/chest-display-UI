<template>
  <div id="app" class="relative top-[56px]">
    <div class="flex justify-center items-center m-auto p-6 gap-3">
      <button
        class="flex w-12 h-12 p-3 justify-center items-center rounded-[4px] bg-oversonic-white/10"
        @click="goBack"
      >
        <IconBack />
      </button>

      <input
        v-model="input"
        class="input border bg-transparent rounded-md w-full text-2xl border-none box-border text-oversonic-white font-bold !font-inter text-center"
        placeholder="Tap on the keyboard"
      />
      <button
        class="flex w-12 h-12 p-3 justify-center items-center rounded-[4px] bg-oversonic-white/10"
        @click="closeKeyboard"
      >
        <IconExit />
      </button>
    </div>
    <SimpleKeyboard @onChange="onChange" @onKeyPress="onKeyPress" :input="input" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconBack from '../../static/icons/IconBack.vue'
import IconExit from '../../static/icons/IconExit.vue'
import SimpleKeyboard from '../components/SimpleKeyboard.vue'

const input = ref('')

const keyboardVisible = ref(true)
const emit = defineEmits(['close', 'back'])

const onChange = (newInput: string) => {
  input.value = newInput
}

const onKeyPress = (button: string) => {
  console.log('Tasto premuto:', button)
}

const closeKeyboard = () => {
  keyboardVisible.value = false
  emit('close')
}

const goBack = () => {
  emit('back')
}
</script>
