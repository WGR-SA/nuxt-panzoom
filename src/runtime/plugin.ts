import { defineNuxtPlugin } from '#app'
import Panzoom from '@panzoom/panzoom'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('panzoom', {
    created (el, options) {
      Panzoom(el, options.value)
    }
  })
})
