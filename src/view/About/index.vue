<template>
  <div class="about-container">
    <p v-for="item in 100" :key="item.id">{{ item }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
</script>
<style scoped >
.about-container {
  width: 100%;
  height: 100%;
}
</style>