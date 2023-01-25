# Nuxt-panzoom Module

nuxt-panzoom is a simple and easy to use Nuxt 3 module that makes it easy to add zooming and panning functionality to your application. It's built on top of the [panzoom]((https://github.com/timmywil/panzoom)) library and provides a Vue.js directive that can be used to zoom any element in your template.

## Installation
You can install the module by running the following command:

`npm install @wgr-sa/nuxt-panzoom`

## Usage
Add nuxt-panzoom to the modules section of your nuxt.config.js file:
```
export default {
  modules: [
    '@wgr-sa/nuxt-panzoom'
  ],
  panzoom: {
    addControls: true, // Add PanzoomControls component 
  }
}
```

In your template, add the panzoom directive to the element you want to make zoomable.
```
<template>
  <div>
    <img src="image.jpg" v-panzoom="{ contain: 'outside' }">
  </div>
</template>
```

The v-panzoom directive accepts an options object. You can find all the options available in the panzoom library documentation https://github.com/timmywil/panzoom

## `PanzoomControls`

`PanzoomControls` is a simple controls component. Put it anywhere and pass the element in props. It will show simple zoomIn, zoomOut and reset buttons
```
<template>
  <main>
    <section>
      <img ref="zoom" v-panzoom="{ contain: 'outside' }" :src="image">
    </section>
    <PanzoomControls v-if="zoom" :el="zoom" />
  </main>
</template>
```

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
