<template>
  <div>{{ $route.path }} - {{ r }}</div>
  <NuxtLink :to="(Math.floor(Math.random() * 4000) + 1000).toString()"
    >Random Link to test suspense</NuxtLink
  >
  <i18n-t :keypath="`vdv.brand.name`"> </i18n-t>
</template>
<script lang="ts" setup>
import { useTest } from "~/composables/useTest";

console.log(
  "COMP_A",
  useNuxtApp().ssrContext?.url,
  useRouter().currentRoute.value.path,
  useRoute().path
);
const test = await useTest();
console.log(
  "COMP_A",
  useNuxtApp().ssrContext?.url,
  useRouter().currentRoute.value.path,
  useRoute().path
);
const r = useRouter().currentRoute.value.path;
</script>
