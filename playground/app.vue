<template>
  <main>
    <section ref="zoom" v-panzoom><!-- ="{ contain: 'inside' }" -->
      <img src="https://avatars.githubusercontent.com/u/1822085?v=4">
    </section>
    <PanzoomControls v-if="zoom" :el="zoom" />
  </main>
</template>

<script setup>
import { ref } from 'vue'
const zoom = ref(null)
</script>

<style>
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
