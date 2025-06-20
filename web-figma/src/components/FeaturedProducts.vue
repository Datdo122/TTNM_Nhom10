<template>
  <section class="mt-16">
    <div class="flex justify-between items-center py-0 mx-auto mb-8 w-full max-w-[1256px] max-md:px-5 max-md:py-0 max-sm:flex-col max-sm:gap-4 max-sm:items-start max-sm:px-4 max-sm:py-0">
      <h2 class="text-2xl font-bold leading-8 text-gray-800">Sản phẩm nổi bật</h2>
      <div class="flex items-center">
        <span class="text-base leading-6 text-blue-600">Xem tất cả</span>
        <div class="ml-1 text-base text-blue-600">
          <i class="ti ti-arrow-right"></i>
        </div>
      </div>
    </div>

    <div class="flex gap-6 py-0 mx-auto w-full max-w-[1260px] max-md:flex-wrap max-md:px-5 max-md:py-0 max-sm:flex-col max-sm:gap-5 max-sm:px-4 max-sm:py-0">
      <ProductCard
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ProductCard from './ProductCard.vue';

const products = ref([
  {
    name: 'MacBook Pro 14" M2 Pro 2023 12CPU/19GPU/16GB/1TB',
    image: new URL('../assets/images/macbook-pro-14-m2-pro-2023.png', import.meta.url).href,
    salePrice: '39.990.000đ',
    originalPrice: '45.990.000đ',
    reviews: 18,
    discount: '-12%',
    badge: 'Hot'
  },
  {
    name: 'MacBook Pro 15" M2 Pro 2023 12CPU/19GPU/16GB/1TB',
    image: new URL('../assets/images/macbook-pro-15-m2-pro-2023.png', import.meta.url).href,
    salePrice: '39.990.000đ',
    originalPrice: '45.990.000đ',
    reviews: 18,
    discount: '-12%',
    badge: 'Hot'
  },
  {
    name: 'MacBook Pro 16" M2 Pro 2023 12CPU/19GPU/16GB/1TB',
    image: new URL('../assets/images/macbook-pro-16-m2-pro-2023.png', import.meta.url).href,
    salePrice: '39.990.000đ',
    originalPrice: '45.990.000đ',
    reviews: 18,
    discount: '-12%',
    badge: 'Hot'
  },
  {
    name: 'MacBook Pro 17" M2 Pro 2023 12CPU/19GPU/16GB/1TB',
    image: new URL('../assets/images/macbook-pro-17-m2-pro-2023.png', import.meta.url).href,
    salePrice: '39.990.000đ',
    originalPrice: '45.990.000đ',
    reviews: 18,
    discount: '-12%',
    badge: 'Hot'
  }
]);
</script>
