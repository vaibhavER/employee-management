<template>
  <v-row class="w-100 justify-end">
    <v-col cols="12" lg="3" xl="2" sm="3" class="d-flex ">
      <TextInput v-model="search" label="Search" :rules="[]" :req="false" prepend-inner-icon="mdi-magnify"
        variant="outlined" hide-details single-line />
    </v-col>
    <v-col cols="12" lg="3" xl="2" sm="3" class="d-flex">
      <Select v-model="department" label="Department" :rules="[]" :req="false"
        :items="headerEmployeesKeys.find(item => item.value?.toLowerCase() === 'department')?.role"
        variant="outlined" />
    </v-col>
    <v-col cols="12" lg="3" xl="2" sm="3" class="d-flex">
      <Select v-model="status" label="status" :rules="[]" :req="false"
        :items="headerEmployeesKeys.find(item => item.value?.toLowerCase() === 'status')?.role" item-title="text"
        item-value="value" variant="outlined" />
    </v-col>
    <v-col cols="12" lg="2" xl="1" sm="3" class="d-flex">
      <ResetFilter @reset="resets" />
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, useStore, computed, watch, TextInput, headerEmployeesKeys, Select, ResetFilter } from '@/utils/index'

const search = ref('');

const store = useStore();
const status = ref('')
const department = ref('');
const getAllEmpStore = computed(() => store.getters.getAllEmpStore);

//pass emits from reset
const resets = () => {
  status.value = ''
  department.value = ''
  search.value = ''
  store.dispatch('filterDataAction', getAllEmpStore.value.users)
}

// ✅ computed filter
const filteredEmployees = computed(() => {
  const query = search.value.toLowerCase().trim()
  const dept = department.value.toLowerCase().trim();
  let allData = getAllEmpStore.value.users || []


  if (!query && !dept && typeof status.value != 'boolean') return allData;

  //dept filter
  if (dept) {
    allData = allData.filter(emp =>
      emp.department?.toLowerCase().includes(dept.toLowerCase())
    )
  }

  //search filter
  if (query) {
    allData = allData.filter(emp =>
      emp.name?.toLowerCase().includes(query) ||
      emp.email?.toLowerCase().includes(query) ||
      emp.department?.toLowerCase().includes(query) ||
      emp.role?.toLowerCase().includes(query)
    )
  }

  //status filter
  if (typeof status.value == 'boolean') {
    allData = allData.filter(emp => emp.status === status.value)
  }

  return allData;

})




watch(filteredEmployees, (newVal) => {
  // Only trigger if data actually exists
  if (!newVal || !Array.isArray(newVal)) return
  store.dispatch('filterDataAction', newVal)
}, { deep: true })

</script>
