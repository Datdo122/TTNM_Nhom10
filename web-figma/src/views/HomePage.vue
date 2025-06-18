<template>
  <div class="w-full min-h-screen bg-white font-inter">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />

    <Header />

    <main>
      <HeroBanner />
      <FlashSale />
      <CategoryGrid />
      <FeaturedProducts />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import HeroBanner from '../components/HeroBanner.vue';
import FlashSale from '../components/FlashSale.vue';
import CategoryGrid from '../components/CategoryGrid.vue';
import FeaturedProducts from '../components/FeaturedProducts.vue';
import Footer from '../components/Footer.vue';
</script>

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}
</style>
