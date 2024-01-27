<template>
    <h1>ClientesView</h1>
    <div>
      <TabelaClientes></TabelaClientes>
    </div>
  </template>
  
  <script>
import { defineComponent } from 'vue';
import TabelaClientes from '@/components/TabelaClientes.vue';
const linkList = {
    title: 'Clientes',
    capitions: '',
    route: {name: 'clientes'}
}

export default defineComponent({
    name: 'HomeView',

    components: {
        TabelaClientes
    },

    setup () {


        return {
            tabelasClientes: linkList,
            
        }
    }
})

</script>
  