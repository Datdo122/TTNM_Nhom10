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
    imageSvg: `<svg id="I27:3053;27:2790" width="251" height="158" viewBox="0 0 251 158" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="product-image" style="width: 251px; height: 158px; margin: 16px auto 0; display: block">
<path d="M0 0H251V158H0V0Z" fill="url(#pattern0_248_297)"></path>
<defs>
<pattern id="pattern0_248_297" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_248_297" transform="scale(0.00398406 0.00632911)"></use>
</pattern>
</defs>
</svg>`,
    salePrice: '39.990.000đ',
    originalPrice: '45.990.000đ',
    reviews: 18,
    discount: '-12%',
    badge: 'Hot'
  },
  {
    name: 'MacBook Pro 14" M2 Pro 2023 12CPU/19GPU/16GB/1TB',
    imageSvg: `<svg id="I27:3071;27:2791" width="251" height="158" viewBox="0 0 251 158" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width:251px;height:158px;flex-shrink:0;fill:url(<path-to-image>) lightgray 50% / cover no-repeat;position:absolute;left:0px;top:0px">
<path d="M0 0H251V158H0V0Z" fill="url(#pattern0_248_400)"></path>
<defs>
<pattern id="pattern0_248_400" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_248_400" transform="scale(0.00398406 0.00632911)"></use>
</pattern>
</defs>
</svg>`,
    salePrice: '39.990.000đ',
    originalPrice: '45.990.000đ',
    reviews: 18,
    discount: '-12%',
    badge: 'Hot'
  },
  {
    name: 'MacBook Pro 14" M2 Pro 2023 12CPU/19GPU/16GB/1TB',
    imageSvg: `<svg id="I27:3089;27:2790" width="251" height="158" viewBox="0 0 251 158" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="product-image" style="width: 251px; height: 158px; margin: 16px auto 0; display: block">
<path d="M0 0H251V158H0V0Z" fill="url(#pattern0_248_154)"></path>
<defs>
<pattern id="pattern0_248_154" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_248_154" transform="scale(0.00398406 0.00632911)"></use>
</pattern>
</defs>
</svg>`,
    salePrice: '39.990.000đ',
    originalPrice: '45.990.000đ',
    reviews: 18,
    discount: '-12%',
    badge: 'Hot'
  },
  {
    name: 'MacBook Pro 14" M2 Pro 2023 12CPU/19GPU/16GB/1TB',
    imageSvg: `<svg id="I27:3107;27:2790" width="251" height="158" viewBox="0 0 251 158" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="product-image" style="width: 251px; height: 158px; margin: 16px auto 0; display: block">
<path d="M0 0H251V158H0V0Z" fill="url(#pattern0_248_10)"></path>
<defs>
<pattern id="pattern0_248_10" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_248_10" transform="scale(0.00398406 0.00632911)"></use>
</pattern>
</defs>
</svg>`,
    salePrice: '39.990.000đ',
    originalPrice: '45.990.000đ',
    reviews: 18,
    discount: '-12%',
    badge: 'Hot'
  }
]);
</script>
