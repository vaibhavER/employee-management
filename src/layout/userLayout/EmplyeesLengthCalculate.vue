<template>
  <v-btn color="primary" class="mt-xs-3 w-xs-100">{{ searchEmpl }}: {{ calc?.length }}</v-btn>

</template>


<script setup>
import { useStore, computed, watch, ref } from '@/utils/index.js';

const store = useStore();

const searchEmpl = ref('Total Employee');

const calc = computed(() => store.getters.filterDataStore)

const allDat = computed(() => store.getters.getAllEmpStore)

watch(calc, (newVal) => {
  if (allDat.value?.users?.length > newVal.length) {
    searchEmpl.value = 'Filter Results'
  } else {
    searchEmpl.value = 'Total Employees'
  }
})

</script>
