<template>
  <section class="py-0 mx-auto mt-12 mb-0 w-full max-w-[1260px] max-md:px-5 max-md:py-0 max-sm:px-4 max-sm:py-0">
    <h2 class="mb-6 text-2xl font-bold leading-8 text-gray-800">Danh mục nổi bật</h2>
    <div class="flex gap-3.5 w-full max-md:flex-wrap max-md:gap-5 max-sm:flex-col max-sm:gap-4">
      <CategoryCard
        v-for="category in categories"
        :key="category.name"
        :category="category"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import CategoryCard from './CategoryCard.vue';

const categories = ref([
  {
    name: 'Laptop',
    icon: 'ti ti-device-laptop',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    name: 'Điện thoại',
    icon: 'ti ti-device-mobile',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    name: 'Tablet',
    icon: 'ti ti-device-tablet',
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  },
  {
    name: 'Tai nghe',
    icon: 'ti ti-headphones',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    name: 'Gaming',
    icon: 'ti ti-device-gamepad-2',
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600'
  }
]);
</script>
