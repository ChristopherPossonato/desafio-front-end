<template>
  <div class="q-pa-md">
    <q-table
      :rows="dadosApi"
      :columns="columns"
      :visible-columns="visibleColumns"
      row-key="name"
    >

      <template v-slot:top>
        <q-input outlined label="Buscar cliente" v-model="search">
          <template v-slot:append>
            <q-icon name="search" @click="buscarCliente" class="cursor-pointer" />
          </template>
        </q-input>

        <router-link to="/">
          <q-btn @click="popUp" icon="add" color="primary">Novo Cliente</q-btn>
        </router-link>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>

          <q-td auto-width>
            <q-btn @click="editarCliente(props)" icon="edit" class="q-mr-xs" />
            <q-btn @click="excluirCliente(props)" icon="delete" class="q-mr-xs" />
            <q-btn @click="exibirMaisInformacoes(props)"  icon="info" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useQuasar } from 'quasar';
import { api } from '../boot/axios';

const $q = useQuasar();
const dadosApi = ref([]);
const columns = [
  { name: 'nome', label: 'Nome ', align: 'left', field: col => col.nome },
  { name: 'sobrenome', align: 'center', label: 'Sobrenome', field: 'sobrenome' },
  { name: 'email', align: 'center', label: 'Email', field: 'email' },
  { name: 'telefone', align: 'center', label: 'Telefone', field: 'telefone' },
  { name: 'cep', align: 'center', label: 'Cep', field: 'cep' }
];

const search = ref('');

const visibleColumns = ref(['nome', 'email', 'telefone', 'cep', 'sobrenome']);

const popUp = () => {
  // Lógica para mostrar o popup
};

const editarCliente = (cliente) => {
  // Lógica para editar o cliente
  console.log('Editar:', cliente);
};

const getPosts = async () => {
  try {
    const  response  = await api.get('/clientes');
    dadosApi.value = response.data
  } catch (error) {
    console.log('Erro:', error);
  }
};

const excluirCliente = async (cliente) => {
  const idDoCliente = cliente.row.id;
  const nomeDoClienteExcluido = cliente.row.nome;
  try {
    const response = await api.delete('/clientes/' + idDoCliente)
    console.log(response);
    getPosts();
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: `Cliente Id: ${idDoCliente} - Nome: ${nomeDoClienteExcluido} foi xcluido com sucesso!`
      
    });
  } catch (error) {
    console.log('Erro:', error);
  }
  
};


const exibirMaisInformacoes = (cliente) => {
  const idDoCliente = cliente.row.id;
  console.log( idDoCliente );
};

const buscarCliente = async () => {
  try {
    const response = await api.get('/clientes/buscarnome/' + search.value)
    dadosApi.value = response.data
  } catch (error) {
    console.log('Erro:', error);
  }
};

onMounted(() => {
  getPosts();
});

// Assista às mudanças na variável search e chame buscarCliente em resposta
watch(search, () => {
  buscarCliente();
});
</script>
