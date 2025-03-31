<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { useHttp } from '@/utils/http'
import { add } from '@utils/index'

const http = useHttp()
const counterStore = useCounterStore()

const msg = ref('')

onMounted(async () => {
  try {
    msg.value = (await http.get('/msg')).data.msg as string
  } catch {
    msg.value = 'Oops! Something went wrong!'
  }
})
</script>

<template>
  <p>{{ msg }}</p>
  <p>{{ add(3, 4) }}</p>
  <UButton :title="`Count: ${counterStore.count}`" @click="counterStore.increment()">
    Count: {{ counterStore.count }}
  </UButton>
</template>
