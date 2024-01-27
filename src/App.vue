<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-toolbar-title>
          Desafio de Desenvolvimento - Java Spring Boot e Vue js 3
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-link to="/" exact>
        <q-btn>Home</q-btn>
      </router-link>
      
      <router-link to="/clientes">
        <q-btn>Clientes</q-btn>
      </router-link>
    </q-page-container>
    <router-view />
  </q-layout>
</template>

<script>


export default {
  name: 'ClientesView',
  setup() {

  },
};
</script>
