<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/AppNavBar.vue'

//Importaçao do bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

</script>

<template>
  <NavBar/>
  


  <RouterView />
</template>

<style></style>