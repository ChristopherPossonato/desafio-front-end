<template>
  <q-dialog persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="delete" color="primary" text-color="white" />
        <span class="q-ml-sm">Tem certeza que deseja excluir cliente?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn  label="Cancelar" color="primary" @click="confirmarExclusao('cancelar')" v-close-popup />
        <q-btn  label="Excluir" color="primary" @click="confirmarExclusao('excluir')" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
  </template>
  
  <script>

  import { defineComponent } from 'vue';

  export default defineComponent({
      name: 'DialogConfirmDelete',
      methods: {
        confirmarExclusao(opcao) {
      this.$emit('confirmar', opcao); 
    }
  }
      
  });

  </script>
  