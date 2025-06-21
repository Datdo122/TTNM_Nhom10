<template>
    <div class="flex overflow-hidden flex-col h-full px-6 py-7 mx-auto w-full bg-white rounded-lg shadow-md max-md:px-5 max-md:mt-6 max-md:max-w-full">
      <h1 class="self-start text-2xl font-bold leading-none text-gray-900">
        iPhone 12 mini - Chính hãng VN/A
      </h1>
  
      <div class="flex gap-3 self-start items-center mt-3.5">
        <div class="flex gap-1 grow text-base text-yellow-400">
          <i v-for="star in 4" :key="star" class="ti ti-star-filled"></i>
          <i class="ti ti-star-half-filled"></i>
        </div>
        <span class="text-base leading-loose text-gray-600">
          (125 đánh giá)
        </span>
      </div>
  
      <div class="px-4 py-4 mt-5 text-base leading-relaxed text-blue-700 bg-blue-50 max-md:pr-5 max-md:max-w-full">
        Giá tốt nhất thị trường - Bảo hành 12 tháng chính hãng
      </div>
  
      <div class="flex gap-2 items-start self-start mt-6">
        <div class="flex flex-col self-stretch text-base">
          <div class="text-2xl font-bold leading-none text-red-600">
            14.990.000₫
          </div>
          <div class="mt-2.5 leading-relaxed text-green-600 max-md:mr-2.5">
            Tiết kiệm: 1.000.000₫
          </div>
          <h3 class="self-start mt-9 leading-loose text-gray-900">
            Màu sắc:
          </h3>
        </div>
        <div class="text-lg leading-loose text-gray-500 line-through basis-auto">
          15.990.000₫
        </div>
        <div class="px-2 py-2 text-sm leading-loose text-red-800 whitespace-nowrap bg-red-100 rounded">
          -6%
        </div>
      </div>
  
      <ColorSelector v-model="selectedColor" />
  
      <h3 class="self-start mt-8 text-base leading-loose text-gray-900">
        Dung lượng:
      </h3>
  
      <StorageSelector v-model="selectedStorage" />
  
      <div class="flex flex-wrap gap-2 mt-6 text-center text-white max-md:max-w-full">
        <router-link to="/checkout" class="grow shrink-0 px-16 py-4 text-base leading-relaxed bg-blue-600 rounded-lg basis-0 w-fit max-md:px-5 max-md:max-w-full cursor-pointer active:scale-95 duration-200 shadow-md hover:shadow-lg flex items-center justify-center">
          Mua ngay
        </router-link>
        <router-link to="/cart" class="flex items-center justify-center px-9 py-4 text-sm leading-none whitespace-nowrap bg-blue-600 rounded-lg max-md:px-5 cursor-pointer active:scale-95 duration-200 shadow-md hover:shadow-lg">
          <i class="ti ti-shopping-cart"></i>
        </router-link>
      </div>
  
      <div class="flex flex-col items-start pt-5 pr-20 pb-0.5 mt-6 w-full border-t max-md:pr-5 max-md:max-w-full">
        <div class="flex gap-3 items-center">
          <i class="ti ti-refresh text-base text-blue-600"></i>
          <h4 class="text-base leading-loose text-gray-900 basis-auto">
            Đổi trả trong 30 ngày
          </h4>
        </div>
        <p class="mt-2 ml-7 text-sm leading-loose text-gray-600 max-md:ml-2.5">
          Nếu sản phẩm có lỗi từ nhà sản xuất
        </p>
  
        <div class="flex gap-3.5 items-center mt-5">
          <i class="ti ti-shield-check text-base text-blue-600"></i>
          <h4 class="text-base leading-loose text-gray-900 basis-auto">
            Bảo hành 12 tháng
          </h4>
        </div>
        <p class="mt-2 ml-7 text-sm leading-normal text-gray-600 max-md:ml-2.5">
          Chính hãng Apple Việt Nam
        </p>
  
        <div class="flex gap-3 items-center mt-5">
          <i class="ti ti-credit-card text-base text-blue-600"></i>
            <h4 class="self-start text-base leading-loose text-gray-900">
              Trả góp 0%
            </h4>
        </div>
            <p class="mt-2 ml-7 text-sm leading-normal text-gray-600 max-md:ml-2.5">
              Xét duyệt nhanh qua điện thoại
            </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import ColorSelector from './ColorSelector.vue'
  import StorageSelector from './StorageSelector.vue'
  
  const selectedColor = ref('purple')
  const selectedStorage = ref('128GB')
  </script>
  