<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
defineProps({});
</script>
<style scoped >
.layout-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.left,
.main,
.right {
  height: 100%;
  width: auto;
}
.main {
  flex: 1;
}
</style>