<template>
  <div class="flex flex-col gap-3 items-center px-0 pt-4 pb-5 h-32 bg-white rounded-lg shadow-sm w-[241px] max-md:w-[calc(50%_-_10px)] max-sm:w-full">
    <div class="flex justify-center items-center p-5 w-16 h-16 rounded-full" :class="category.bgColor">
      <div class="text-2xl leading-8" :class="category.iconColor">
        <i :class="category.icon"></i>
      </div>
    </div>
    <span class="text-base leading-6 text-center text-black">{{ category.name }}</span>
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: Object,
    required: true
  }
});
</script>
