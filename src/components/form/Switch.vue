<template>
    <v-switch :model-value="modelValue" :label="label" :color="color" @update:model-value="updateValue"/>


</template>

<script setup>

import { defineProps, defineEmits } from '@/utils/index.js';


const props = defineProps({
    modelValue: {
        type: [Boolean],
        required: true
    },
    label: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },

});

// Emit the update event when user selects something
const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
    emit('update:modelValue', value)
}

</script>
