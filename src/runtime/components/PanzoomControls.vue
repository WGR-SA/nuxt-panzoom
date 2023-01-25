<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { PanzoomObject } from '@panzoom/panzoom'

export interface PanzoomHtmlElement extends HTMLAllCollection {
  panzoom: PanzoomObject
}

const props = defineProps<{
  el: PanzoomHtmlElement
}>()

const zoomInButton = ref<HTMLButtonElement>()
const zoomOutButton = ref<HTMLButtonElement>()
const resetButton = ref<HTMLButtonElement>()

onMounted(() => {
  zoomInButton.value?.addEventListener('click', props.el.panzoom.zoomIn)
  zoomOutButton.value?.addEventListener('click', props.el.panzoom.zoomOut)
  resetButton.value?.addEventListener('click', props.el.panzoom.reset)
})
</script>

<template>
  <div class="nuxt-panzoom-controls">
    <button ref="zoomInButton">+</button>
    <button ref="zoomOutButton">-</button>
    <button ref="resetButton">reset</button>
  </div>
</template>

<style scoped></style>
