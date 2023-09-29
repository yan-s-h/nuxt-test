<template>
  <h1>{{ $route.params.id }}</h1>
  <ul>
    <li>{{ data.userId }}</li>
    <li>{{ data.id }}</li>
    <li>{{ data.title }}</li>
    <li>{{ data.body }}</li>
  </ul>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const { data } = useFetch<IPost>('https://jsonplaceholder.typicode.com/posts/1')
// const id = 1
// let id:number = 1
// let category:'computer'|'book'='book'
// const sum = (number1: number, number2: number): number => {
//   return number1 + number2
// }
// sum('a', 'b')
// interface IPost {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }
// const post: IPost = {
//   userId: 1,
//   id: 1,
//   title: 'asd',
//   body: 'asd'
// }
// const arr: number[] = [1, 2, 3, 4]
// const arr2: [number] = [1]
// const posts: IPost[] = [{
//   userId: 1,
//   id: 1,
//   title: 'asd',
//   body: 'asd'
// }, {
//   userId: 1,
//   id: 1,
//   title: 'asd',
//   body: 'asd'
// }]
</script>