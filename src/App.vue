<script setup>
import HeaderPrincipal from './components/principal/HeaderPrincipal.vue'
import NavPrincipal from './components/principal/NavPrincipal.vue'
import Footer from './components/principal/Footer.vue'
</script>

<template>
  <HeaderPrincipal />

  <div class="bg-gray-400 py-50">
    <div class="bg-white container mx-auto px-5 py-4 rounded-xl">
      <RouterView />
    </div>
  </div>

  <Footer />

</template>
