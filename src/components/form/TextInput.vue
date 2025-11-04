<template>
    <v-text-field :model-value="modelValue" :label="label" :rules="rules" :required="req" v-bind="$attrs"
        @update:model-value="updateValue" />

    <!--Yes ✅ —
:model-value and @update:model-value are the default, fixed names
that Vue 3 uses internally for v-model.-->

</template>

<script setup>

import { defineProps, defineEmits } from '@/utils/index.js';


const props = defineProps({
    modelValue: {
        type: [String, Number, Boolean],
        required: true
    },
    label: {
        type: String,
        required: true
    },
    rules: {
        type: Array,
        required: true,
        default: () => []
    },
    req: {
        type: Boolean,
        required: true,
        default: false
    }
});

// Emit the update event when user selects something
const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
    emit('update:modelValue', value)
}

</script>
