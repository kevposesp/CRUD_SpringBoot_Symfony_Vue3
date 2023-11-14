<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <div>
    <Header></Header>
    <div class="container">
      <router-view class="mt-4"></router-view>
    </div>
  </div>
</template>

<style scoped></style>
