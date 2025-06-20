<template>
  <article class="relative p-4 bg-white rounded-lg shadow-sm h-[380px] w-[297px] max-md:w-[calc(50%_-_12px)] max-sm:w-full">
    <div class="absolute top-0 left-0 px-2 py-1.5 h-6 text-xs leading-4 text-white bg-red-500 rounded-none">{{ product.discount }}</div>
    <div class="absolute top-0 right-0 px-2 py-1.5 h-6 text-xs leading-4 text-white bg-red-500 rounded-none">{{ product.badge }}</div>

    <div class="mt-4 mb-4 h-[158px] w-[251px] mx-auto cursor-pointer">
      <router-link :to="{ name: 'product-detail' }" class="mt-4 mb-4 h-[158px] w-[251px] mx-auto cursor-pointer block">
        <img :src="product.image" :alt="product.name" class="product-image" style="width: 251px; height: 158px; margin: 16px auto 0; display: block"/>
      </router-link>
    </div>

    <h3 class="mt-4 text-base leading-6 text-black">{{ product.name }}</h3>

    <div class="flex items-center mt-2">
      <div class="flex gap-0.5 text-base text-yellow-400">
        <i v-for="star in 5" :key="star" class="ti ti-star-filled"></i>
      </div>
      <span class="ml-2 text-sm leading-5 text-gray-500">({{ product.reviews }})</span>
    </div>

    <div class="flex items-center mt-1 mb-4">
      <span class="text-base font-bold leading-7 text-blue-600">{{ product.salePrice }}</span>
      <span class="ml-2 text-sm leading-5 text-gray-500 line-through">{{ product.originalPrice }}</span>
    </div>

    <!-- Bottom section with buttons -->
    <div class="absolute bottom-4 left-4 right-4">
      <div class="flex items-center gap-3">
        <!-- Mua ngay button -->
        <button class="flex-1 inline-flex items-center justify-center py-2.5 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
          Mua ngay
        </button>
        
        <!-- Cart button -->
        <button class="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
          <i class="ti ti-shopping-cart text-white"></i>
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>
