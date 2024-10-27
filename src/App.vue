<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
</script>

<template>
  <MainHeader/>
  <RouterView class="min-h-[70vh]" />
  <MainFooter />
</template>

<style scoped>
</style>
