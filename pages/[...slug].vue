<template>
  <div>
    <Suspense>
      <template #default>
        <Mctesty />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
console.log(
  "PAGE_A",
  useNuxtApp().ssrContext?.url,
  useRouter().currentRoute.value.path,
  useRoute().path
);
const r = useRouter().currentRoute.value.path;
</script>
