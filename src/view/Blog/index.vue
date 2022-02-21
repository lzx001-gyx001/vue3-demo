<template>
  <div>
     <p v-for="item in 100" :key="item.id">{{"blog"+item}}</p>
  </div>
</template>
<script setup>

import { ref } from 'vue';
defineProps({
});

</script>
<style scoped >
  
</style>