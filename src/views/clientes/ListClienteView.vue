<template>
    <h5>Clientes</h5>
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
    route: {name: 'listCliente'}
}

export default defineComponent({
    name: 'ListClienteView',

    components: {
        TabelaClientes
    },

    setup () {
        return {
            tabelasClientes: linkList
        }
    }
})

</script>
  