<template>
  <div class="flex-shrink-0 flex items-center p-4 bg-white rounded-lg border border-gray-200 h-[120px] w-[350px] max-md:w-[320px] max-sm:w-[300px] hover:shadow-md transition-shadow">
    <!-- Product Image -->
    <img :src="product.image" :alt="product.name" class="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
    
    <!-- Product Info -->
    <div class="flex flex-col flex-1 ml-4 min-w-0">
      <!-- Product Name -->
      <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-2">{{ product.name }}</h3>
      
      <!-- Price Section -->
      <div class="flex items-center gap-2 mb-2">
        <span class="text-base font-bold text-red-600">{{ product.salePrice }}</span>
        <span class="text-xs text-gray-500 line-through">{{ product.originalPrice }}</span>
      </div>
      
      <!-- Progress Bar -->
      <div class="mb-1">
        <div class="w-full bg-gray-200 rounded-full h-1.5">
          <div class="h-1.5 bg-red-600 rounded-full transition-all duration-300" :style="{ width: `${product.soldPercentage}%` }"></div>
        </div>
      </div>
      
      <!-- Sold Info -->
      <div class="text-xs text-gray-500">
        Đã bán {{ product.sold }}/{{ product.total }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
