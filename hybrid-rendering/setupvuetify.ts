import vuetify from "vite-plugin-vuetify"

const setupVuetify = () => {
  return (_options: any, nuxt: any) => {
    nuxt.hooks.hook('vite:extendConfig', (config: any) => {
      config.plugins.push(vuetify({ autoImport: true }))
    })
  }
}

export default setupVuetify