<template>
  <div class="q-pa-md">
    
    <q-form
      @submit="onSubmit">
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
import {  ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const $q = useQuasar();
const nome = ref(null);
const sobrenome = ref(null);
const email = ref(null);
const telefone = ref(null);
const cep = ref(null);
const route = useRoute();
const router = useRouter();
const clientId = ref('');


const buscarCliente = async (clientId) => {
  try {
    const response = await api.get(`/clientes/${clientId.value}`);
    const dadosCliente = response.data;
    
      nome.value =  dadosCliente.nome,
      sobrenome.value = dadosCliente.sobrenome,
      email.value = dadosCliente.email,
      telefone.value = dadosCliente.telefone,
      cep.value = dadosCliente.endereco.cep.replace("-", "")

    
  } catch (error) {
    console.error('Erro ao buscar cliente:', error);
  }
};



const onSubmit = async () => {
  if (clientId.value != null) {
    await editarCliente();
    
  } else {
    await criarCliente();
  }
};

const editarCliente = async () => {
  try {
    await api.put(`/clientes/${clientId.value}`, {
      nome: nome.value,
      sobrenome: sobrenome.value,
      email: email.value,
      telefone: telefone.value,
      cep: cep.value
    });

    notificarSucesso('Cliente editado com sucesso');
    limparCampos();
    setTimeout(() => {
      router.push('/clientes/list');
    }, 1000);
  } catch (error) {
    notificarErro('Erro ao editar cliente');
  }
};

const criarCliente = async () => {
  try {
    await api.post(`/clientes`, {
      nome: nome.value,
      sobrenome: sobrenome.value,
      email: email.value,
      telefone: telefone.value,
      cep: cep.value
    });

    notificarSucesso('Cliente criado com sucesso');
    limparCampos();
   

  } catch (error) {
    notificarErro('Erro ao criar cliente');
  }
};

const notificarSucesso = (mensagem) => {
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: mensagem
  });
};

const notificarErro = (mensagem) => {
  $q.notify({
    color: 'red-5',
    textColor: 'white',
    icon: 'warning',
    message: mensagem
  });
};

const limparCampos = () => {
  nome.value = '';
  sobrenome.value = '';
  email.value = '';
  telefone.value = '';
  cep.value = '';
};



onMounted(() => {
  
  clientId.value = route.params.id;
  clientId.value !== undefined && clientId.value !== null && clientId.value !== '' && buscarCliente(clientId);
});



</script>
