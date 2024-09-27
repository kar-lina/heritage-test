<template>
  <div class="pt-4 pt-md-6 pb-12 pb-md-15 px-4 px-md-8">
    <ProductsCategoriesFilter />
    <ProductsList />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>
