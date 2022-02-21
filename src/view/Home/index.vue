<template>
  <!-- <Layout>
    <template #left>
      <div class="left-box">左边</div>
    </template>
    <div class="main-box">
     
    </div>
  </Layout> -->

  <el-container class="container">
    <el-aside width="200px" class="left-box">
      <el-scrollbar>
        <p v-for="item in 100" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </el-scrollbar>
    </el-aside>

    <el-main class="main-box">
      <el-scrollbar>
        <router-view></router-view>
      </el-scrollbar>
    </el-main>
  </el-container>
</template>
<script setup>
import { ref } from "vue";
</script>
<style scoped >
.container {
  height: 100%;
  width: 100%;
}
.left-box {
  width: 200px;
  height: 100%;
  border: 1px solid #2c3e50;
  box-sizing: border-box;
}
.main-box {
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>