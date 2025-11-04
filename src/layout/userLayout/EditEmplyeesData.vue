<template>
  <!-- Button to open modal -->
  <v-btn color="primary" @click="dialog = true" class="mr-2">Update</v-btn>

  <!-- Add Employee Modal -->
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <v-card-title>Edit New Employee</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="isValid">
          <!-- Name -->
          <TextInput v-model="formData.name" label="Full Name" :rules="[rules.required, rules.min(3)]" :req="true" />


          <!-- Email -->
          <TextInput v-model="formData.email" label="Email" :rules="[rules.required, rules.email]" :req="true" />



          <!-- Department -->
          <Select v-model="formData.department" label="Department" :rules="[rules.required]" :req="true"
            :items="['Engineering', 'HR', 'Sales']" />



          <!-- Role -->
          <Select v-model="formData.role" label="Role" :rules="[rules.required]" :req="true"
            :items="['Developer', 'Manager', 'Tester']" />


          <!-- Status -->
          <Switch v-model="formData.status" :label="formData.status ? 'Active' : 'Inactive'"  color="green" />

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
import { ref, doc, firebase, rules, Select, TextInput, Switch, useStore, updateDoc, serverTimestamp } from '@/utils/index.js'

// Modal state
const dialog = ref(false)
const isValid = ref(false)
const loading = ref(false)
const form = ref(true)

const props = defineProps({ //get AddEmplyeesForm.vue
  employee: {
    type: Object,
    required: true
  }
});

// Form data
const formData = ref({ ...props.employee })


const store = useStore();
// Submit handler
const submitForm = async () => {
  const isFormValid = await form.value.validate()

  if (!isFormValid.valid) return

  loading.value = true

  try {
    await updateDoc(doc(firebase, 'users', formData.value.id), {
      // or localEmployee.value if you use a local copy
      updatedAt: serverTimestamp(),
      ...formData.value

    })

    alert('✅ Employee updated successfully!')
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
