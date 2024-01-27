<template>
   <h1>Cadastrar Novo Cliente</h1>
    <q-layout>
        
        <q-page-container>
            <FormularioCliente></FormularioCliente>
        </q-page-container>
    </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import FormularioCliente from '@/components/FormularioCliente.vue';

const linkList = {
    title: 'Home',
    capitions: '',
    icon: 'home',
    route: {name: 'home'}
}

export default defineComponent({
    name: 'HomeView',

    components: {
        FormularioCliente
    },

    setup () {


        return {
            tabelasClientes: linkList,
            
        }
    }
})

</script>
