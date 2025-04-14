import { defineNuxtPlugin } from '#app'
// @ts-ignore
import Panzoom from '@panzoom/panzoom'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('panzoom', {
    mounted (el, options) {
      const panzoom = Panzoom(el, options.value)
      el.panzoom = panzoom
    }
  })
})
