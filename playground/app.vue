<template>
  <main>
    <section>
      <img ref="zoom" v-panzoom="{ contain: 'outside' }" :src="image">
    </section>
    <PanzoomControls v-if="zoom" :el="zoom" />
  </main>
</template>

<script setup>
import { ref } from 'vue'
import image from '~/assets/img/image.png'
const zoom = ref(null)
</script>

<style>
  body {
    margin: 0;
  }
  section {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  .nuxt-panzoom-controls {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 10;
  }
</style>
