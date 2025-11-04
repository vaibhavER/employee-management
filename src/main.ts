import { createApp } from 'vue'
import App from './App.vue'
//import router from './router'
import store from './store/index.js';

// ✅ Import Vuetify styles and setup
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'
// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
})

// Create Vue app
const app = createApp(App)

// Use router and vuetify
//app.use(router)
app.use(vuetify)
app.use(store)


// Mount the app
app.mount('#app')
