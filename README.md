# About

This project was made to demonstrate the features and benefits of the Composition API specifically for the masterclass.

The `Master` branch contains the final project with a ready-made solution.
The `Start` branch includes the start templates of the project components.

In addition to demonstrating the Composition API, the aim of this project was also to investigate the operation of Vite and GraphQL in order to apply these technologies to Sensand.

# Tech stack

Vue 3 + Typescript + Vite + Tailwind + GraphQL

# Dependencies versions

    axios: 0.21.1
    vue: 3.2.6
    vue-router: 4.0.11
    vuex: 4.0.2
    tailwindcss: 2.2.9
    typescript: 4.3.2
    vite: 2.5.2
    vue-tsc: 0.2.2

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
