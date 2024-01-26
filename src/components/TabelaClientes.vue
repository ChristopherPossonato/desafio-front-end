<template>
  <div class="q-pa-md">
    <q-table
      :rows="rows"
      :columns="columns"
      :visible-columns="visibleColumns"
      row-key="name"
    >

      <template v-slot:top>
        <q-input outlined label="Buscar cliente">
          <template v-slot:append>
            <q-icon name="search" @click="buscarCliente" class="cursor-pointer" />
          </template>
        </q-input>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
      
          <q-td auto-width>
            <q-btn @click="editarCliente(props)" icon="edit" class="q-mr-xs" />
            <q-btn @click="excluirCliente(props)" icon="delete" class="q-mr-xs" />
            <q-btn @click="exibirMaisInformacoes(props)" icon="info" />
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue'

const columns = [ 
  {
    name: 'name',
    label: 'Nome Sobrenome',
    align: 'left',
    field: col => col.name
  },
  { name: 'email', align: 'center', label: 'Email', field: 'email'},
  { name: 'telefone', align: 'center', label: 'Telefone', field: 'telefone' },
  { name: 'cep', align: 'center', label: 'Cep', field: 'cep'}
]

const rows = [
  {
    name: 'Letícia Reis', email: 'le@gmail.com', telefone: '(15) 99876-3456', cep: '18.044-000',
  },
  {
    name: 'Jordan Bellford', email: 'jordi@gmail.com', telefone: '(15) 99765-4352', cep: '18.190-000'
  }
]

const editarCliente = (cliente) => {
  // Lógica para editar o cliente
  console.log('Editar:', cliente);
}

const excluirCliente = (cliente) => {
  // Lógica para excluir o cliente
  console.log('Excluir:', cliente);
}

const exibirMaisInformacoes = (cliente) => {
  // Lógica para exibir mais informações do cliente
  console.log('Mais Informações:', cliente);
}

const buscarCliente = () => {
  // Lógica para buscar o cliente
  console.log('Buscar cliente');
}

export default {
  setup () {
    return {
      visibleColumns: ref(['name', 'email', 'telefone', 'cep', 'mmmm']),
      columns,
      rows,
      editarCliente,
      excluirCliente,
      exibirMaisInformacoes,
      buscarCliente
    }
  }
}
</script>
