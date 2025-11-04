<template>
  <v-select :model-value="modelValue" :label="label" :items="items" :rules="rules"
    :required="req" @update:model-value="updateValue" class="selectField"/>


</template>

<script setup>

import { defineProps } from 'vue';


const props = defineProps({
  label: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  rules: {
    type: Array,
    required: false,
    default: () => []
  },
  req: {
    type: Boolean,
    required: false,
    default: false
  },
  items: {
    type: Array,
    required: true,
    default: () => []
  },
   modelValue: {
        type: [String, Number, Boolean],
        required: true
    },
});

// Emit the update event when user selects something
const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
    emit('update:modelValue', value)
}
</script>
