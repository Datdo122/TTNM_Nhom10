<template>
  <div :class="[`flex-1 min-w-[320px] rounded-xl shadow border-t-5 border-${color}-500 bg-white`]">
    <div class="p-6 space-y-4">
      <!-- Title -->
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-lg font-semibold text-slate-900 leading-6">{{ product.name }}</h2>
          <p class="text-sm text-gray-500">{{ product.brand }}</p>
        </div>
        <span :class="[`px-3 py-1 text-xs rounded-full bg-${color}-600 text-white`]">{{ product.tag }}</span>
      </div>

      <!-- Image -->
      <div class="bg-gray-50 flex items-center justify-center h-48 rounded">
        <img :src="product.img" alt="image" class="max-h-40 object-contain" />
      </div>

      <!-- Price + CTA -->
      <div class="flex items-center justify-between">
        <p class="text-xl font-bold text-slate-900">{{ formatCurrency(product.price) }}</p>
        <button :class="[`bg-${color}-600 hover:bg-${color}-700 text-white px-4 py-2 rounded-md text-sm flex items-center gap-1`]">
          <i class="ti ti-shopping-cart"></i>
          <span>Mua ngay</span>
        </button>
      </div>

      <!-- Rating -->
      <div class="flex items-center gap-1 text-yellow-500 text-sm">
        <i class="ti ti-star-filled" v-for="i in 5" :key="i" :class="i <= Math.round(product.rating) ? '' : 'text-gray-300'" />
        <span class="text-gray-600 ml-2">{{ product.rating }} ({{ product.reviews }} đánh giá)</span>
      </div>

      <!-- Highlights -->
      <ul class="space-y-1 list-disc pl-5 text-sm text-slate-800">
        <li v-for="(h, idx) in product.highlights" :key="idx">{{ h }}</li>
      </ul>

      <a href="#" :class="[`text-${color}-600 text-sm font-medium flex items-center gap-1`]">
        Xem chi tiết <i class="ti ti-chevron-right text-base"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: { type: Object, required: true },
  color: { type: String, default: 'blue' }
})

const formatCurrency = (v) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v)
</script>

<style scoped></style> 