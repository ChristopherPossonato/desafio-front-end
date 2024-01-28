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

        <router-link to="/clientes/form">
          <q-btn icon="add" color="primary" >Novo Cliente</q-btn>
        </router-link>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>

          <q-td auto-width>
            <router-link :to="{ path: '/clientes/form' }"
          >
              <q-btn @click="editarCliente(props)" icon="edit" class="q-mr-xs" /> 
            </router-link>
            <q-btn @click="excluirCliente(props)"  icon="delete" class="q-mr-xs" />
            <q-btn @click="exibirMaisInformacoes(props)"  icon="info" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <DialogConfirmDelete v-model="showConfirm"  @confirmar="confirmarExclusao"></DialogConfirmDelete>
    <DialogDetalhesCliente v-model="showDetalhes" :data="clienteSelecionado"></DialogDetalhesCliente>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useQuasar } from 'quasar';
import { api } from '../boot/axios';
import DialogDetalhesCliente from './DialogDetalhesCliente.vue';
import DialogConfirmDelete from './DialogConfirmDelete.vue';

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
const showDetalhes = ref(false);
const showConfirm = ref(false);
const clienteSelecionado = ref(null);
let idCliente;


const editarCliente = async (cliente) => {
  const idCliente = cliente.row.id
  
  try {
    const response = await api.get("/clientes/" + idCliente)
    
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
  
};

const getClientes = async () => {
  try {
    const  response  = await api.get('/clientes');
    dadosApi.value = response.data
  } catch (error) {
    console.log('Erro:', error);
  }
};

const excluirCliente = async (cliente) => {
  idCliente = cliente.row.id;
  clienteSelecionado.value = cliente.row;
  showConfirm.value = true;
};

const confirmarExclusao = async (opcao) => {
  if (opcao === 'excluir') {
    try {
      await api.delete('/clientes/' + idCliente);
      
      getClientes();
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: `Cliente foi excluído com sucesso!`
      });
    } catch (error) {
      
      $q.notify({
        color: 'red-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: `Erro ao exlcuir! Erro: ${error}`
      });

    }
  } 
};


const exibirMaisInformacoes = async (cliente) => {
  try {
    const response = await api.get('/clientes/' + cliente.row.id);
    
    clienteSelecionado.value = response.data;
    showDetalhes.value = true;
  } catch (error) {
    console.log('Erro:', error);
  }
};

const buscarCliente = async () => {
  try {
    const response = await api.get('/clientes/buscarnome?nome=' + search.value)
    dadosApi.value = response.data
  } catch (error) {
    console.log('Erro:', error);
  }
};

onMounted(() => {
  getClientes();
});

watch(search, () => {
  buscarCliente();
});
</script>
