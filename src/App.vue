<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>

        <q-toolbar-title>
          Desafio de Desenvolvimento - Java Spring Boot e Vue js 3
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    
    <q-page-container>
      <TabelaClientes></TabelaClientes>
    </q-page-container>
  </q-layout>


  
</template>

<script>
import { ref } from 'vue'
import TabelaClientes from './components/TabelaClientes.vue'

export default {
  name: 'LayoutDefault',

  components: {
    TabelaClientes
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
