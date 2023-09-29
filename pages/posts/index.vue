<template>
  <input type="button" :value="id" @click="onBtnClick">
  <ul>
    <li>{{ data.userId }}</li>
    <li>{{ data.id }}</li>
    <li>{{ data.title }}</li>
    <li>{{ data.body }}</li>
  </ul>
</template>
<script setup lang="ts">
interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const id: Ref<number> = ref(1)
const { data, refresh } = useFetch<IPost>(() => 'https://jsonplaceholder.typicode.com/posts/' + id.value)
const onBtnClick = (): void => {
  id.value++
  refresh()
}
</script>