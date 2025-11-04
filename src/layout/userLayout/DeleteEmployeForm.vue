<template>
  <!-- Delete button -->
  <v-btn color="error" @click="showConfirm = true">
    Delete
  </v-btn>

  <!-- Confirm Delete Dialog -->
  <v-dialog v-model="showConfirm" max-width="400">
    <v-card>
      <v-card-title class="text-h6">
        Confirm Deletion
      </v-card-title>

      <v-card-text>
        Are you sure you want to delete <strong>{{ employee.name }}</strong>?
        This action cannot be undone.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <!-- Cancel -->
        <v-btn text @click="showConfirm = false">
          Cancel
        </v-btn>

        <!-- Confirm -->
        <v-btn color="error" @click="confirmDelete" :loading="loading">
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  </template>

<script setup>
import { ref, doc, firebase, useStore, deleteDoc} from '@/utils/index.js'

// Modal state
const showConfirm = ref(false)
const loading = ref(false)

const props = defineProps({
  employee: {
    type: Object,
    required: true
  }
});




const store = useStore();
// Submit handler

const confirmDelete = async () => {
  loading.value = true
  try {
    await deleteDoc(doc(firebase, 'users', props.employee.id))
    alert('✅ Employee deleted successfully!')
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
