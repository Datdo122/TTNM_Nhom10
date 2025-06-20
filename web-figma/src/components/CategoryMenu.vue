<template>
  <div ref="menuRef" class="relative">
    <!-- Trigger button -->
    <button
      @click="toggleMenu"
      class="flex items-center gap-1 text-base text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
    >
      Danh mục
    </button>

    <!-- Dropdown -->
    <div
      v-if="open"
      class="absolute -left-36 top-8 mt-3 z-50 max-w-7xl bg-white border border-gray-200 shadow-lg flex"
      :class="{ 'w-56': !activeCategory, 'w-screen': activeCategory }"
      @mouseleave="activeCategory = null"
    >
      <!-- Main categories list -->
      <ul class="w-56 bg-gray-50 border-r border-gray-200">
        <li
          v-for="cat in categories"
          :key="cat.name"
          @mouseenter="activeCategory = cat"
          class="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 cursor-pointer"
          :class="{ 'bg-blue-50 text-blue-600': activeCategory && activeCategory.name === cat.name }"
        >
          <span>{{ cat.name }}</span>
          <i class="ti ti-chevron-right text-xs"></i>
        </li>
      </ul>

      <!-- Sub menu -->
      <div v-if="activeCategory" class="flex-1 p-6 grid grid-cols-3 gap-8 min-w-[600px]">
        <div>
          <h4 class="mb-2 text-sm font-semibold text-orange-500">Chọn theo hãng</h4>
          <ul class="space-y-1">
            <li
              v-for="brand in activeCategory.brands"
              :key="brand"
              class="text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              {{ brand }}
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-2 text-sm font-semibold text-orange-500">Chọn theo mức giá</h4>
          <ul class="space-y-1">
            <li
              v-for="price in activeCategory.prices"
              :key="price"
              class="text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              {{ price }}
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-2 text-sm font-semibold text-orange-500">Mục đích dùng</h4>
          <ul class="space-y-1">
            <li
              v-for="purpose in activeCategory.purposes"
              :key="purpose"
              class="text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              {{ purpose }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Data for categories
const categories = [
  {
    name: 'Điện thoại',
    brands: ['iPhone', 'Redmi', 'Motorola', 'Samsung', 'Xiaomi', 'Tecno', 'Realme', 'Poco', 'Oppo', 'Hãng khác'],
    prices: ['Dưới 2 triệu', '2 - 4 triệu', '4 - 7 triệu', '7 - 13 triệu', '13 - 20 triệu', 'Trên 20 triệu'],
    purposes: ['Chơi game / Cấu hình cao', 'Pin khủng trên 5000 mAh', 'Sạc pin nhanh', 'Chụp ảnh đẹp', 'Làm máy hotline', 'Phù hợp học sinh']
  },
  {
    name: 'Máy tính bảng',
    brands: ['iPad', 'Samsung', 'Xiaomi', 'Lenovo'],
    prices: ['Dưới 3 triệu', '3 - 6 triệu', '6 - 10 triệu', '10 - 15 triệu', 'Trên 15 triệu'],
    purposes: ['Giải trí', 'Học tập / Online', 'Công việc', 'Vẽ & Thiết kế']
  },
  {
    name: 'Laptop',
    brands: ['MacBook', 'Dell', 'HP', 'Lenovo', 'Asus', 'Acer'],
    prices: ['Dưới 10 triệu', '10 - 15 triệu', '15 - 25 triệu', 'Trên 25 triệu'],
    purposes: ['Học tập', 'Văn phòng', 'Đồ hoạ', 'Gaming']
  },
  {
    name: 'Gaming',
    brands: ['Console', 'PC Gaming', 'Gaming Gear'],
    prices: [],
    purposes: []
  },
  {
    name: 'Phụ kiện',
    brands: ['Tai nghe', 'Loa', 'Chuột', 'Bàn phím', 'Pin dự phòng'],
    prices: [],
    purposes: []
  },
  { name: 'Hàng cũ', brands: [], prices: [], purposes: [] },
  { name: 'iPad Cũ', brands: [], prices: [], purposes: [] },
  { name: 'Smartwatch', brands: [], prices: [], purposes: [] },
  { name: 'Âm thanh', brands: [], prices: [], purposes: [] }
]

const open = ref(false)
const activeCategory = ref(null)
const menuRef = ref(null)

const toggleMenu = () => {
  open.value = !open.value
}

const handleClickOutside = (e) => {
  if (menuRef.value && !menuRef.value.contains(e.target)) {
    open.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Hide scrollbar for main category list */
ul::-webkit-scrollbar {
  display: none;
}
</style> 