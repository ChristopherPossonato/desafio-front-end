import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { Notify } from 'quasar';
import TheMask from 'vue-the-mask'

createApp(App).use(Quasar, {
    plugins: [Notify], quasarUserOptions
  }).use(router, TheMask).mount('#app')
