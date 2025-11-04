<template>
  <v-btn color="primary" @click="resetfun" class="reset">Reset</v-btn>

</template>

<script setup>
import { defineEmits } from '@/utils/index';

const emit = defineEmits(['reset'])

const resetfun = () => {
  emit('reset', Math.random())

}

</script>
