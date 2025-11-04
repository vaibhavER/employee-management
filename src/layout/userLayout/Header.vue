<template>
  <header>
  <v-card class="mb-2 pb-5">
    <v-card-title>
      <v-row class="align-center" >

        <v-col cols="12" xl="3" lg="5" xs="12" sm="12" class="d-flex justify-start flex-sm-wrap" >
          <AddEmplyeesForm />
          <EmplyeesLengthCalculate />
        </v-col>
        <v-col cols="12" xl="9" lg="7" xs="12" sm="12" class="d-flex justify-start">
          <FilterEmployees />
        </v-col>

      </v-row>
    </v-card-title>
    <!-- Table -->

  </v-card>
</header>
</template>

<script setup>
import { EmplyeesLengthCalculate, AddEmplyeesForm, FilterEmployees } from '@/utils/index.js'
</script>
