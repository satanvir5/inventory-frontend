<!-- <template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<template>
  <MainLayout>
    <router-view></router-view>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/components/Layout/MainLayout.vue'
</script>
