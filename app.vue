<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import { use } from "h3";

console.log(
  "APP A",
  useNuxtApp().ssrContext?.url,
  useRouter().currentRoute.value.path,
  useRoute().path
);
await useRedirect();
const test = await useTest();
console.log(
  "APP B",
  useNuxtApp().ssrContext?.url,
  useRouter().currentRoute.value.path,
  useRoute().path
);
</script>
