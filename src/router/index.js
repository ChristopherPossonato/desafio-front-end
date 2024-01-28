import { createRouter, createWebHistory } from 'vue-router'

import ListClienteView from '../views/clientes/ListClienteView.vue'
import FormClienteView from '../views/clientes/FormClienteView.vue'


const routes = [
  {
    path: '/clientes/list',
    name: 'listCliente',
    component: ListClienteView
  },
  {
    path: '/clientes/form',
    name: 'formClient',
    component: FormClienteView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
