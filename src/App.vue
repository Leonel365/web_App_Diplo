<script setup>
import HeaderPrincipal from './components/principal/HeaderPrincipal.vue'
import NavPrincipal from './components/principal/NavPrincipal.vue'
import Footer from './components/principal/Footer.vue'
</script>

<template>
  <div>
  <HeaderPrincipal />
</div>
  <div class="bg-gray-200  py-8">
    <div class="bg-white container  mx-auto px-5  py-4 rounded-md">
      <RouterView />
    </div>
  </div>

  <Footer />

</template>
