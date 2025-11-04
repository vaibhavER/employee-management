<template>
  <v-data-table :headers="headerEmployeesKeys" :items="filterData || getAllEmpStore?.users"
    :loading="getAllEmpStore.loading" class="elevation-1 mt-10">
    <!-- Text columns -->

    <template v-for="header in headerEmployeesKeys" :key="header.value" #[`item.${header.value}`]="{ item, index }">
      <span :data-attr="header?.title" v-if="header?.value == 'createdAt'">{{ formatDate(item[header.value]) }}</span>
      <span v-else-if="header?.value == 'action'">
        <EditEmplyeesData :employee="item" />
        <DeleteEmployeForm :employee="item" />
      </span>
      <span :data-attr="header?.title" v-else-if="header?.value == 'status'"> {{ item[header.value] ? "Active" :
        "Inactive" }}</span>
      <span :data-attr="header?.title" v-else-if="header?.value == 'id'"> {{ index + 1 }}</span>
      <span :data-attr="header?.title" v-else>{{ item[header.value] }}</span>
    </template>
  </v-data-table>

  <!--
  <v-data-table :items="users">
  for each (item, index) in users:
    render row with slot "item.<column_value>" and pass { item, index }-->


</template>

<script setup>
import { headerEmployeesKeys, useStore, computed, EditEmplyeesData, DeleteEmployeForm } from '@/utils/index.js'



const store = useStore();

const getAllEmpStore = computed(() => store.getters.getAllEmpStore);

const filterData = computed(() => store.getters.filterDataStore);



// ✅ Format Firestore timestamp
const formatDate = (timestamp) => {
  if (!timestamp) return '-'
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  return date.toLocaleString()
}
</script>

