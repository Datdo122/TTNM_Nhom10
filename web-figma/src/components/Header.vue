<template>
  <header class="w-full bg-white shadow-sm h-[66px] border-b border-gray-200">
    <div class="flex items-center justify-between h-full px-4 max-w-screen-2xl mx-auto">
      <!-- Logo -->
      <div class="flex items-center gap-2 min-w-[160px]">
        <div class="flex justify-center items-center h-10 text-3xl text-blue-600 w-[30px]">
          <i class="ti ti-shopping-cart"></i>
        </div>
        <div class="text-2xl font-bold text-blue-600">TechShop</div>
      </div>

      <!-- Navigation - Hidden on mobile -->
      <nav class="hidden md:flex items-center gap-6">
        <CategoryMenu />
        <a href="#" class="text-base text-gray-700 hover:text-blue-600 transition-colors">Khuyến mãi</a>
      </nav>

      <!-- Search Bar - Hidden on small screens -->
      <div class="hidden lg:flex items-center flex-1 max-w-[500px] mx-8 gap-8">
        <div class="flex items-center w-full px-4 py-2 bg-gray-50 rounded-full border border-gray-300 focus-within:border-blue-500 focus-within:bg-white transition-all">
          <input 
            type="text" 
            placeholder="Tìm kiếm sản phẩm..." 
            class="flex-1 bg-transparent text-base text-gray-700 placeholder-gray-400 outline-none"
          />
          <button class="text-gray-600 hover:text-blue-600 transition-colors">
            <i class="ti ti-search"></i>
          </button>
        </div>
        <div class="relative">
          <button class="text-gray-700 hover:text-blue-600 transition-colors">
            <i class="ti ti-shopping-cart text-2xl"></i>
          </button>
          <div class="absolute -top-2 -right-2 w-5 h-5 text-xs leading-4 text-center text-white bg-blue-600 rounded-full">1</div>
        </div>
      </div>

      <!-- Right side actions -->
      <div class="flex items-center gap-4">
        <!-- Search icon for mobile -->
        <button class="lg:hidden text-gray-600 hover:text-blue-600 transition-colors">
          <i class="ti ti-search text-xl"></i>
        </button>

        <!-- Login Button -->
        <button class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer active:scale-95 duration-200 shadow-md hover:shadow-lg ">
          <i class="ti ti-user"></i>
          <span class="hidden sm:inline">Đăng nhập</span>
        </button>
      </div>
    </div>

    <!-- Mobile Search Bar -->
    <div class="lg:hidden px-4 pb-3">
      <div class="flex items-center w-full px-4 py-2 bg-gray-50 rounded-full border border-gray-300 focus-within:border-blue-500 focus-within:bg-white transition-all">
        <input 
          type="text" 
          placeholder="Tìm kiếm sản phẩm..." 
          class="flex-1 bg-transparent text-base text-gray-700 placeholder-gray-400 outline-none"
        />
        <button class="text-gray-600 hover:text-blue-600 transition-colors">
          <i class="ti ti-search"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="md:hidden px-4 pb-2">
      <nav class="flex items-center gap-6">
        <a href="#" class="text-sm text-gray-700 hover:text-blue-600 transition-colors">Danh mục</a>
        <a href="#" class="text-sm text-gray-700 hover:text-blue-600 transition-colors">Khuyến mãi</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import CategoryMenu from './CategoryMenu.vue'
</script>
