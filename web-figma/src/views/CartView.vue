<template>
  <div class="min-h-screen flex flex-col font-inter bg-gray-50">
    <!-- Header -->
    <Header />

    <!-- Title bar -->
    <div class="w-full border-t-4 border-blue-600 py-4 bg-white">
      <div class="max-w-[1260px] mx-auto flex items-center gap-2 px-4">
        <i class="ti ti-shopping-cart text-blue-600"></i>
        <h1 class="text-blue-600 text-[18px] leading-6">Giỏ hàng</h1>
      </div>
    </div>

    <!-- Column labels bar -->
    <div class="w-full bg-gray-100 border-b border-gray-200 py-4 hidden lg:block">
      <div class="max-w-[1260px] mx-auto grid grid-cols-12 items-center px-4 text-sm font-medium text-gray-700">
        <div class="col-span-6 flex items-center gap-3">
          <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" class="w-4 h-4 rounded border-gray-300" />
          <span>Sản phẩm</span>
        </div>
        <div class="col-span-2 text-center">Đơn giá</div>
        <div class="col-span-2 text-center">Số lượng</div>
        <div class="col-span-1 text-center">Số tiền</div>
        <div class="col-span-1 text-center">Thao tác</div>
      </div>
    </div>

    <!-- Product rows -->
    <main class="flex-1 w-full bg-white">
      <div class="max-w-[1260px] mx-auto divide-y divide-gray-200">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="grid grid-cols-12 items-center py-6 gap-4 px-4"
        >
          <!-- checkbox & product -->
          <div class="col-span-12 lg:col-span-6 flex items-center gap-4">
            <input type="checkbox" v-model="item.selected" class="w-4 h-4 rounded border-gray-300" />
            <img :src="item.image" alt="product" class="w-20 h-20 rounded border border-gray-200 object-cover" />
            <div>
              <p class="text-sm text-gray-900 leading-5">{{ item.name }}</p>
              <p v-if="item.variant" class="text-xs text-gray-500 mt-1">Phân loại: {{ item.variant }}</p>
            </div>
          </div>

          <!-- price -->
          <div class="col-span-4 lg:col-span-2 text-blue-600 font-medium text-center mt-4 lg:mt-0">
            {{ formatCurrency(item.price) }}
            <span v-if="item.oldPrice" class="block text-xs text-gray-400 line-through">{{ formatCurrency(item.oldPrice) }}</span>
          </div>

          <!-- quantity -->
          <div class="col-span-4 lg:col-span-2 flex items-center justify-center mt-4 lg:mt-0">
            <button
              class="w-6 h-6 flex items-center justify-center border border-gray-300 text-gray-500 hover:bg-gray-100"
              @click="decreaseQty(item)"
            >
              -
            </button>
            <input
              type="number"
              v-model.number="item.quantity"
              min="1"
              class="w-12 h-6 border-t border-b border-gray-300 text-center text-sm outline-none"
            />
            <button
              class="w-6 h-6 flex items-center justify-center border border-gray-300 text-gray-500 hover:bg-gray-100"
              @click="increaseQty(item)"
            >
              +
            </button>
          </div>

          <!-- total -->
          <div class="col-span-4 lg:col-span-1 text-center font-medium text-blue-600 mt-4 lg:mt-0">
            {{ formatCurrency(item.price * item.quantity) }}
          </div>

          <!-- delete -->
          <div class="col-span-12 lg:col-span-1 flex justify-center lg:justify-center mt-4 lg:mt-0">
            <button @click="removeItem(item.id)" class="text-gray-500 hover:text-red-600">
              <i class="ti ti-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Summary bar -->
    <div class="w-full bg-[#f0f5ff] py-5 border-t border-gray-200">
      <div class="max-w-[1260px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-4 text-sm">
        <div class="flex items-center gap-3">
          <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" class="w-4 h-4 rounded border-gray-300" />
          <span class="text-gray-900">Chọn tất cả</span>
          <button @click="deleteSelected" class="flex items-center gap-1 text-gray-500 hover:text-red-600">
            <i class="ti ti-trash"></i>
            <span>Xóa chọn tất cả</span>
          </button>
        </div>

        <div class="flex items-center gap-2 lg:ml-auto">
          <span class="text-gray-900">Tổng thanh toán ({{ selectedCount }} sản phẩm):</span>
          <span class="text-blue-600 font-bold text-lg">{{ formatCurrency(totalSelectedPrice) }}</span>
        </div>

        <router-link to="/checkout"
          class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-sm font-medium whitespace-nowrap cursor-pointer"
        >
          Mua hàng
        </router-link>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

// Sample cart items (should come from store/api)
const cartItems = ref([
  {
    id: 1,
    name: 'Điện thoại iPhone 14 Pro Max (128GB) - Hàng chính hãng VN/A',
    variant: 'Tím, 128GB',
    image: new URL('@/assets/images/iphone-15-pro-max.png', import.meta.url).href,
    price: 26990000,
    oldPrice: 29990000,
    quantity: 1,
    selected: true
  },
  {
    id: 2,
    name: 'Điện thoại iPhone 14 Pro Max (128GB) - Hàng chính hãng VN/A',
    variant: 'Tím, 128GB',
    image: new URL('@/assets/images/iphone-15-pro-max.png', import.meta.url).href,
    price: 26990000,
    oldPrice: 29990000,
    quantity: 1,
    selected: true
  }
])

const formatCurrency = (value) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)

const selectAll = ref(true)

const toggleSelectAll = () => {
  cartItems.value.forEach((item) => (item.selected = selectAll.value))
}

const increaseQty = (item) => {
  item.quantity++
}

const decreaseQty = (item) => {
  if (item.quantity > 1) item.quantity--
}

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter((i) => i.id !== id)
}

const deleteSelected = () => {
  cartItems.value = cartItems.value.filter((i) => !i.selected)
}

const selectedCount = computed(() => cartItems.value.filter((i) => i.selected).length)
const totalSelectedPrice = computed(() => {
  return cartItems.value
    .filter((i) => i.selected)
    .reduce((sum, i) => sum + i.price * i.quantity, 0)
})
</script>

<style scoped></style> 