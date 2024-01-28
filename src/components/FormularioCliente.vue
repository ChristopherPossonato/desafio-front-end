<template>
  <div class="q-pa-md">
    <q-form
      @submit="onSubmit"
    >
      <div class="row">
        <div class="col-6 q-mb-md">
          <q-input
            filled
            v-model="nome"
            label="Seu nome *"
            hint="Nome"
            lazy-rules
            :rules="[val => val && val.length > 0 || 'Por favor digite seu nome']"
          />
        </div>
        <div class="col-6 q-pl-xs q-mb-md">
          <q-input
            filled
            v-model="sobrenome"
            label="Seu sobrenome *"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Por favor digite seu sobrenome'
            ]"
          />
        </div>
        <div class="col-6 q-mb-md">
          <q-input
            filled
            v-model="email"
            label="Seu email *"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Por favor digite um email válido'
            ]"
          />
        </div>
        <div class="col-3 q-pl-xs q-mb-md">
          <q-input
            filled
            v-model="telefone"
            label="Seu telefone *"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Por favor digite seu telefone'
            ]"
          />
        </div>
        <div class="col-3 q-pl-xs q-mb-md">
          <q-input
            filled
            v-model="cep"
            label="Seu CEP *"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Por favor digite seu CEP '
            ]"
          />
        </div>
      </div>

      <div>
        <q-btn label="Salvar" type="submit" color="primary"/>
      </div>
    </q-form>
  </div>
</template>


<script setup>
import { api } from '@/boot/axios';
import { useQuasar } from 'quasar';
import { ref} from 'vue';

const $q = useQuasar();
const nome = ref(null);
const sobrenome = ref(null);
const email = ref(null);
const telefone = ref(null);
const cep = ref(null);

const onSubmit = async () => {
  try {
    
    await api.post("/clientes", {
      nome: nome.value,
      sobrenome: sobrenome.value,
      email: email.value,
      telefone: telefone.value,
      cep: cep.value
    });

    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Cliente salvo com sucesso'
    });

    nome.value = '';
    sobrenome.value = '';
    email.value = '';
    telefone.value = '';
    cep.value = '';

  } catch (error) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'Erro ao salvar cliente'
    });
  }
};


</script>
