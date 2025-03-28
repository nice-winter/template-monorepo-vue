<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import axios from 'axios'

const counterStore = useCounterStore()

const msg = ref('')

onMounted(() => {
  axios
    .get('http://localhost:3001')
    .then((res) => (msg.value = res.data.msg as string))
    .catch(() => (msg.value = 'Oops! Http Error!'))
})
</script>

<template>
  <p>{{ msg }}</p>
  <button :title="`Count: ${counterStore.count}`" @click="counterStore.increment()">
    Count: {{ counterStore.count }}
  </button>
</template>
