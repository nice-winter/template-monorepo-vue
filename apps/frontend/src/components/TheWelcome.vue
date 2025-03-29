<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { useHttp } from '@/utils/http'

const http = useHttp()
const counterStore = useCounterStore()

const msg = ref('')

onMounted(async () => {
  try {
    msg.value = (await http.get('/msg')).data.msg as string
  } catch (error) {
    msg.value = 'Oops! Something went wrong!'
  }
})
</script>

<template>
  <p>{{ msg }}</p>
  <button :title="`Count: ${counterStore.count}`" @click="counterStore.increment()">
    Count: {{ counterStore.count }}
  </button>
</template>
