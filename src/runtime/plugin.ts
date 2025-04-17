import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async (nuxtApp) => {
  const PanzoomModule = await import('@panzoom/panzoom')
  const Panzoom = PanzoomModule.default || PanzoomModule

  nuxtApp.vueApp.directive('panzoom', {
    mounted (el, options) {
      const panzoom = Panzoom(el, options.value)
      el.panzoom = panzoom
    }
  })
})
