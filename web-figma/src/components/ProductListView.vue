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
        <div class="flex-1 flex flex-row gap-2 justify-center py-[3px] px-4 bg-white">
          <!-- Brand select -->
          <div class="relative w-fit">
            <select v-model="tempBrand" class="appearance-none w-full bg-white border border-gray-400 rounded-md py-3 px-4 pr-10 text-base font-semibold text-gray-900 outline-none">
              <option value="">Chọn theo hãng</option>
              <option v-for="b in brands" :key="b" :value="b">{{ b }}</option>
            </select>
            <i class="ti ti-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 pointer-events-none"></i>
          </div>

          <!-- Price range -->
          <div class="relative w-fit">
            <select v-model="tempPrice" class="appearance-none w-full bg-white border border-gray-400 rounded-md py-3 px-4 pr-10 text-base font-semibold text-gray-900 outline-none">
              <option value="">Mức giá</option>
              <option v-for="range in priceRanges" :key="range.label" :value="range.label">{{ range.label }}</option>
            </select>
            <i class="ti ti-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 pointer-events-none"></i>
          </div>

          <!-- Condition -->
          <div class="relative w-fit">
            <select v-model="tempCondition" class="appearance-none w-full bg-white border border-gray-400 rounded-md py-3 px-4 pr-10 text-base font-semibold text-gray-900 outline-none">
              <option value="">Tình trạng</option>
              <option v-for="c in conditions" :key="c" :value="c">{{ c }}</option>
            </select>
            <i class="ti ti-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 pointer-events-none"></i>
          </div>

          <!-- Purpose -->
          <div class="relative w-fit">
            <select v-model="tempPurpose" class="appearance-none w-full bg-white border border-gray-400 rounded-md py-3 px-4 pr-10 text-base font-semibold text-gray-900 outline-none">
              <option value="">Mục đích sử dụng</option>
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

      <div class="mb-6">
        <p class="text-2xl font-semibold text-gray-900">{{ categoryName }}</p>
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
import Header from './Header.vue'
import Footer from './Footer.vue'
import ProductCard from './ProductCard.vue'

// Props
const props = defineProps({
  products: {
    type: Array,
    required: true
  },
  brands: {
    type: Array,
    default: () => []
  },
  purposes: {
    type: Array,
    default: () => ['Chụp ảnh', 'Gaming', 'Công việc', 'Học tập']
  },
  conditions: {
    type: Array,
    default: () => ['Mới', 'Đã qua sử dụng']
  },
  categoryName: {
    type: String,
    required: true
  }
})

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

function applyFilters() {
  selectedBrand.value = tempBrand.value
  selectedPrice.value = tempPrice.value
  currentPage.value = 1
}

// Price ranges (common for all product types)
const priceRanges = [
  { label: 'Dưới 5 triệu', min: 0, max: 5000000 },
  { label: '5 - 10 triệu', min: 5000000, max: 10000000 },
  { label: '10 - 20 triệu', min: 10000000, max: 20000000 },
  { label: '20 - 50 triệu', min: 20000000, max: 50000000 },
  { label: 'Trên 50 triệu', min: 50000000, max: Infinity }
]

// Filtering
const filteredProducts = computed(() => {
  return props.products.filter((p) => {
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
</style> 