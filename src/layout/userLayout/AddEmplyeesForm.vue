<template>
  <!-- Button to open modal -->
  <v-btn color="primary" @click="dialog = true" class="mr-2 w-xs-100">Add Employee</v-btn>

  <!-- Add Employee Modal -->
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <v-card-title>Add New Employee</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="isValid">
          <!-- Name -->
          <TextInput v-model="formData.name" label="Full Name" :rules="[rules.required, rules.min(3)]" :req="true" />



          <!-- Email -->
          <TextInput v-model="formData.email" label="Email" :rules="[rules.required, rules.email]" :req="true" />



          <!-- Department -->
          <Select v-model="formData.department" label="Department" :rules="[rules.required]" :req="true"
            :items="headerEmployeesKeys.find(item => item.value?.toLowerCase() === 'department')?.role" />



          <!-- Role -->
          <Select v-model="formData.role" label="Role" :rules="[rules.required]" :req="true" :items="headerEmployeesKeys
            .filter(item => item.value?.toLowerCase() === 'role')
            .flatMap(item => item.role)" />


          <!-- Status -->
          <Switch v-model="formData.status" :label="formData.status ? 'Active' : 'Inactive'" color="green" />

        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn text @click="dialog = false">Cancel</v-btn>
        <v-btn color="primary" @click="submitForm" :disabled="!isValid" :loading="loading">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, collection, addDoc, serverTimestamp, firebase, rules, Select, TextInput, Switch, useStore, headerEmployeesKeys, watch } from '@/utils/index.js'

// Modal state
const dialog = ref(false)
const isValid = ref(false)
const loading = ref(false)
const form = ref(true)

// Form data
const formData = ref({
  name: '',
  email: '',
  department: '',
  role: '',
  status: true,
})


watch(dialog, (val) => {
  if (!val) {
    formData.value = {
      name: "", email: "", department: '',
      role: '',
      status: true,
    }
  }

})


const store = useStore();
// Submit handler
const submitForm = async () => {
  const isFormValid = await form.value.validate()
  if (!isFormValid.valid) return

  loading.value = true

  try {
    await addDoc(collection(firebase, 'users'), {
      ...formData.value,
      createdAt: serverTimestamp(),
    })
    alert('✅ Employee added successfully!')
    dialog.value = false
    // 🔁 Refresh employees list
    store.dispatch('getAllEmpAction');
    // form.value.reset()
  } catch (err) {
    console.error('Error adding user:', err)
  } finally {
    loading.value = false

  }
}
</script>
