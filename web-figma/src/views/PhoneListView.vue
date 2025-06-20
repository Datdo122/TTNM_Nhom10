<template>
  <div class="w-full min-h-screen bg-gray-50 font-inter flex flex-col">
    <!-- Google font -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />

    <Header />

    <main class="flex-1 w-full max-w-[1260px] mx-auto px-4 py-10">
      <div class="flex flex-row gap-4 items-center">
      <!-- Filter Bar -->
      <div class="flex flex-col md:flex-row items-start md:items-center mb-8">
        <!-- Label -->
        <div class="flex items-center gap-2 px-5 py-4 bg-gray-100 rounded-l-lg md:w-[296px]">
          <i class="ti ti-filter text-blue-600 text-xl"></i>
          <span class="font-semibold text-base">Bộ lọc sản phẩm</span>
        </div>

        <!-- Selects container -->
        <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 items-center justify-items-center py-[3px] bg-white">
          <!-- Brand select -->
          <div class="relative w-fit">
            <select class="appearance-none w-full bg-white border border-gray-400 rounded-md py-3 px-4 pr-10 text-base font-semibold text-gray-900 outline-none">
              <option>Chọn theo hãng</option>
              <option v-for="b in brands" :key="b" :value="b">{{ b }}</option>
            </select>
            <i class="ti ti-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 pointer-events-none"></i>
          </div>

          <!-- Price range -->
          <div class="relative w-fit">
            <select class="appearance-none w-full bg-white border border-gray-400 rounded-md py-3 px-4 pr-10 text-base font-semibold text-gray-900 outline-none">
              <option>Mức giá</option>
              <option v-for="range in priceRanges" :key="range.label" :value="range.label">{{ range.label }}</option>
            </select>
            <i class="ti ti-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 pointer-events-none"></i>
          </div>

          <!-- Condition (placeholder) -->
          <div class="relative w-fit">
            <select class="appearance-none w-full bg-white border border-gray-400 rounded-md py-3 px-4 pr-10 text-base font-semibold text-gray-900 outline-none">
              <option>Tình trạng</option>
              <option v-for="c in conditions" :key="c" :value="c">{{ c }}</option>
            </select>
            <i class="ti ti-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 pointer-events-none"></i>
          </div>

          <!-- Purpose (placeholder) -->
          <div class="relative w-fit">
            <select class="appearance-none w-full bg-white border border-gray-400 rounded-md py-3 px-4 pr-10 text-base font-semibold text-gray-900 outline-none">
              <option>Mục đích sử dụng</option>
              <option v-for="p in purposes" :key="p" :value="p">{{ p }}</option>
            </select>
            <i class="ti ti-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 pointer-events-none"></i>
          </div>

        </div>
      </div>

      <!-- Apply button -->
      <div class="justify-center mb-8">
        <button @click="applyFilters" class="px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md whitespace-nowrap">
          Áp dụng
        </button>
      </div>
      </div>

      <!-- Products grid -->
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard v-for="product in paginatedProducts" :key="product.name" :product="product" />
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="flex justify-center mt-10">
        <div class="inline-flex border border-gray-300 rounded-lg overflow-hidden divide-x divide-gray-300 select-none">
          <!-- Prev -->
          <button
            class="h-[32px] px-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 w-9 cursor-pointer"
            :disabled="currentPage === 1"
            @click="currentPage--"
          >
            <i class="ti ti-chevron-left"></i>
          </button>

          <!-- Page numbers with ellipsis -->
          <template v-for="item in pagesToShow" :key="item">
            <span
              v-if="item === 'ellipsis'"
              class="h-[32px] px-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 w-12 cursor-default select-none">...</span>
            <button
              v-else
              class="h-[32px] px-10 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 w-12 cursor-pointer"
              :class="item === currentPage ? 'text-blue-600 font-semibold' : 'text-gray-600'"
              @click="changePage(item)"
            >
              {{ item }}
            </button>
          </template>

          <!-- Next -->
          <button
            class="h-[32px] px-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 w-9 cursor-pointer"
            :disabled="currentPage === totalPages"
            @click="currentPage++"
          >
            <i class="ti ti-chevron-right"></i>
          </button>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ProductCard from '../components/ProductCard.vue'

const sortOption = ref('popular')
const currentPage = ref(1)
const perPage = 12

// Temporary selection holders before applying
const tempBrand = ref('')
const tempPrice = ref('')
const tempPurpose = ref('')
const tempCondition = ref('')

const selectedBrand = ref('')
const selectedPrice = ref('')
// purposes & condition selections are placeholders, not used in filtering yet

function applyFilters() {
  selectedBrand.value = tempBrand.value
  selectedPrice.value = tempPrice.value
  currentPage.value = 1
}

// Options
const brands = ['Apple', 'Samsung', 'Xiaomi', 'Oppo', 'Realme']
const priceRanges = [
  { label: 'Dưới 5 triệu', min: 0, max: 5000000 },
  { label: '5 - 10 triệu', min: 5000000, max: 10000000 },
  { label: '10 - 20 triệu', min: 10000000, max: 20000000 },
  { label: 'Trên 20 triệu', min: 20000000, max: Infinity }
]
const purposes = ['Chụp ảnh', 'Gaming', 'Công việc', 'Học tập']
const conditions = ['Mới', 'Đã qua sử dụng']

// Sample products (expand as needed)
const products = ref([
  {
    name: 'iPhone 15 Pro Max 256GB',
    brand: 'Apple',
    priceValue: 35990000,
    image: new URL('../assets/images/iphone-15-pro-max.png', import.meta.url).href,
    salePrice: '35.990.000đ',
    originalPrice: '37.990.000đ',
    reviews: 152,
    discount: '-5%',
    badge: 'Hot'
  },
  {
    name: 'Galaxy S23 Ultra 256GB',
    brand: 'Samsung',
    priceValue: 24990000,
    image: new URL('../assets/images/samsung-galaxy-buds-2-pro.png', import.meta.url).href,
    salePrice: '24.990.000đ',
    originalPrice: '28.990.000đ',
    reviews: 88,
    discount: '-13%',
    badge: 'Hot'
  },
  {
    name: 'Xiaomi 13 Pro 256GB',
    brand: 'Xiaomi',
    priceValue: 19990000,
    image: new URL('../assets/images/iphone-15-pro-max.png', import.meta.url).href,
    salePrice: '19.990.000đ',
    originalPrice: '22.990.000đ',
    reviews: 54,
    discount: '-13%',
    badge: 'Hot'
  },
  {
    name: 'Oppo Find X5',
    brand: 'Oppo',
    priceValue: 12990000,
    image: new URL('../assets/images/iphone-15-pro-max.png', import.meta.url).href,
    salePrice: '12.990.000đ',
    originalPrice: '15.990.000đ',
    reviews: 67,
    discount: '-19%',
    badge: 'New'
  },
  {
    name: 'Realme GT Neo 3',
    brand: 'Realme',
    priceValue: 7990000,
    image: new URL('../assets/images/iphone-15-pro-max.png', import.meta.url).href,
    salePrice: '7.990.000đ',
    originalPrice: '9.990.000đ',
    reviews: 32,
    discount: '-20%',
    badge: 'Hot'
  },
  // duplicated to reach more than one page
  {
    name: 'iPhone 14 Pro 128GB',
    brand: 'Apple',
    priceValue: 23990000,
    image: new URL('../assets/images/iphone-15-pro-max.png', import.meta.url).href,
    salePrice: '23.990.000đ',
    originalPrice: '27.990.000đ',
    reviews: 98,
    discount: '-14%',
    badge: 'Hot'
  },
  {
    name: 'iPhone 13 128GB',
    brand: 'Apple',
    priceValue: 18990000,
    image: new URL('../assets/images/iphone-15-pro-max.png', import.meta.url).href,
    salePrice: '18.990.000đ',
    originalPrice: '22.990.000đ',
    reviews: 176,
    discount: '-17%',
    badge: 'Hot'
  },
  {
    name: 'iPhone 12 64GB',
    brand: 'Apple',
    priceValue: 12990000,
    image: new URL('../assets/images/iphone-15-pro-max.png', import.meta.url).href,
    salePrice: '12.990.000đ',
    originalPrice: '15.990.000đ',
    reviews: 203,
    discount: '-19%',
    badge: 'Hot'
  },
  {
    name: 'iPhone 11 64GB',
    brand: 'Apple',
    priceValue: 9990000,
    image: new URL('../assets/images/iphone-15-pro-max.png', import.meta.url).href,
    salePrice: '9.990.000đ',
    originalPrice: '12.990.000đ',
    reviews: 312,
    discount: '-23%',
    badge: 'Hot'
  },
  {
    name: 'iPhone 11 64GB',
    brand: 'Apple',
    priceValue: 9990000,
    image: new URL('../assets/images/iphone-15-pro-max.png', import.meta.url).href,
    salePrice: '9.990.000đ',
    originalPrice: '12.990.000đ',
    reviews: 312,
    discount: '-23%',
    badge: 'Hot'
  },
  {
    name: 'iPhone 11 64GB',
    brand: 'Apple',
    priceValue: 9990000,
    image: new URL('../assets/images/iphone-15-pro-max.png', import.meta.url).href,
    salePrice: '9.990.000đ',
    originalPrice: '12.990.000đ',
    reviews: 312,
    discount: '-23%',
    badge: 'Hot'
  },
  {
    name: 'iPhone 11 64GB',
    brand: 'Apple',
    priceValue: 9990000,
    image: new URL('../assets/images/iphone-15-pro-max.png', import.meta.url).href,
    salePrice: '9.990.000đ',
    originalPrice: '12.990.000đ',
    reviews: 312,
    discount: '-23%',
    badge: 'Hot'
  },
  {
    name: 'iPhone 11 64GB',
    brand: 'Apple',
    priceValue: 9990000,
    image: new URL('../assets/images/iphone-15-pro-max.png', import.meta.url).href,
    salePrice: '9.990.000đ',
    originalPrice: '12.990.000đ',
    reviews: 312,
    discount: '-23%',
    badge: 'Hot'
  }
])

// Filtering
const filteredProducts = computed(() => {
  return products.value.filter((p) => {
    const brandOk = selectedBrand.value ? p.brand === selectedBrand.value : true
    const priceOk = selectedPrice.value
      ? (() => {
          const range = priceRanges.find((r) => r.label === selectedPrice.value)
          return range ? p.priceValue >= range.min && p.priceValue < range.max : true
        })()
      : true
    return brandOk && priceOk
  })
})

// Sorting
const sortedProducts = computed(() => {
  const list = [...filteredProducts.value]
  switch (sortOption.value) {
    case 'priceAsc':
      list.sort((a, b) => a.priceValue - b.priceValue)
      break
    case 'priceDesc':
      list.sort((a, b) => b.priceValue - a.priceValue)
      break
    default:
      break
  }
  return list
})

// Pagination
const totalPages = computed(() => Math.ceil(sortedProducts.value.length / perPage))
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return sortedProducts.value.slice(start, start + perPage)
})

// Pages shown like 1 2 3 ... n
const pagesToShow = computed(() => {
  const pages = []
  const total = totalPages.value
  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i)
  } else {
    pages.push(1, 2, 3)
    pages.push('ellipsis')
    pages.push(total)
  }
  return pages
})

// Watch sort option to reset page
watch(sortOption, () => {
  currentPage.value = 1
})

function changePage(page) {
  currentPage.value = page
}
</script>

<style scoped>
.font-inter {
  font-family: 'Inter', sans-serif;
}
.select-filter {
  @apply w-full border border-gray-400 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 bg-white;
}
.page-btn {
  @apply h-[42px] px-10 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50;
}
</style> 