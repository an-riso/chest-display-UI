<template>
  <div class="simple-keyboard font-inter"></div>
</template>

<script setup lang="ts">
import Keyboard from 'simple-keyboard'
import 'simple-keyboard/build/css/index.css'
import { onMounted, watch } from 'vue'

const props = defineProps<{ input?: string; keyboardClass?: string }>()
const emit = defineEmits(['onChange', 'onKeyPress'])

let keyboard: Keyboard | null = null

onMounted(() => {
  keyboard = new Keyboard(props.keyboardClass ?? '.simple-keyboard', {
    onChange: (input) => emit('onChange', input),
    onKeyPress: (button) => {
      emit('onKeyPress', button)
      const buttons = document.querySelectorAll('.hg-button')
      buttons.forEach((btn) => {
        if (btn.textContent === button) {
          btn.classList.add('clicked')
          setTimeout(() => btn.classList.remove('clicked'), 50)
        }
      })
      if (button === '{shift}' || button === '{lock}') handleShift()
    },
    /* useMouseEvents: true,
    modules: [swipe],*/
    layout: {
      default: [
        '1 2 3 4 5 6 7 8 9 0 - = {backspace}',
        '{tab} q w e r t y u i o p [ ] \\',
        "{lock} a s d f g h j k l ; ' {enter}",
        '{shift} z x c v b n m , . /',
        '@ {space}',
      ],
      shift: [
        '~ ! @ # $ % ^ &amp; * ( ) _ + {backspace}',
        '{tab} Q W E R T Y U I O P { } |',
        '{lock} A S D F G H J K L : " {enter}',
        '{shift} Z X C V B N M &lt; &gt; ?',
        '@ {space}',
      ],
    },
    display: {
      '{tab}': 'Tab',
      '{lock}': '⇪',
      '{shift}': '⇧',
      '{backspace}': '⌫',
      '{enter}': 'Enter',
      '{space}': 'Space',
    },
    buttonTheme: [{ class: 'hg-medium', buttons: '{backspace}' }],
  })
})

const handleShift = () => {
  if (!keyboard) return
  const currentLayout = keyboard.options.layoutName
  const shiftToggle = currentLayout === 'default' ? 'shift' : 'default'

  keyboard.setOptions({
    layoutName: shiftToggle,
  })
}

watch(
  () => props.input,
  (newValue) => {
    if (keyboard) {
      keyboard.setInput(newValue || '')
    }
  },
)
</script>

<style>
/*
body {
  background: linear-gradient(180deg, #0040ff 0%, #001a67 100%);
}*/

.simple-keyboard.hg-theme-default {
  background: transparent;
  padding: 0;
  border-radius: 0;
}

.simple-keyboard.hg-rows {
  height: 449px;
}

.simple-keyboard.hg-theme-default .hg-row {
  padding: 0;
}
.simple-keyboard.hg-theme-default .hg-row:not(:last-child) {
  margin-bottom: 1px;
}

.simple-keyboard.hg-theme-default .hg-row .hg-button:not(:last-child) {
  margin-right: 1px;
}

.simple-keyboard.hg-theme-default .hg-button {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 1px;
  height: 89px;
  color: white;
}

.simple-keyboard.hg-theme-default .hg-button .hg-standardBtn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 34px;
  gap: 10px;
  align-self: stretch;
}
.simple-keyboard.hg-theme-default .hg-button.clicked {
  background: #00000029 !important;
}
.hg-medium {
  width: 11%;
}
</style>
