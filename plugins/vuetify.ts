import { createVuetify } from "vuetify"
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(({ vueApp }) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives
  })

  vueApp.use(vuetify)
})