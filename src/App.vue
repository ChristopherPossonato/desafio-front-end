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
      <router-link to="/clientes/list" exact>
        <q-btn>Clientes</q-btn>
      </router-link>
    </q-page-container>
    <router-view />
  </q-layout>
</template>

<script>


export default {
  name: 'ListClientesView',
  setup() {

  },
};
</script>
