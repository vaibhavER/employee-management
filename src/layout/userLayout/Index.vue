<template>
  <v-container class="pa-6">
    <Header />
    <GetEmployeesLayout />
  </v-container>
</template>


<script setup>
import { GetEmployeesLayout, onMounted, useStore, Header } from '@/utils/index.js'

const store = useStore();

onMounted(() => {
  store.dispatch('getAllEmpAction');
})
</script>
