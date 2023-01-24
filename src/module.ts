import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'

export interface ModuleOptions {
  addControls: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@wgr-sa/nuxt-panzoom',
    configKey: 'panzoom'
  },
  defaults: {
    addControls: false
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    addPlugin(resolve(runtimeDir, 'plugin'))

    if (options.addControls) {
      addComponent({
        name: 'PanzoomControls',
        filePath: resolve(runtimeDir, 'components', 'PanzoomControls.vue')
      })
    }
  }
})
