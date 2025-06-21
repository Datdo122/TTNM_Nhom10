<template>
  <ProductListView 
    :products="phoneProducts" 
    :brands="phoneBrands"
    :purposes="phonePurposes"
    categoryName="Điện thoại"
  />
</template>

<script setup>
import ProductListView from '../components/ProductListView.vue'

// Phone-specific data
const phoneBrands = ['Apple', 'Samsung', 'Xiaomi', 'Oppo', 'Realme']
const phonePurposes = ['Chụp ảnh', 'Gaming', 'Công việc', 'Học tập']

const phoneProducts = [
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
  }
]
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