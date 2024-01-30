<template>
   <h5>Cadastrar Novo Cliente</h5>
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
    title: 'Formulario',
    capitions: '',
    route: {name: 'formCliente'}
}

export default defineComponent({
    name: 'FormClienteView',

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
