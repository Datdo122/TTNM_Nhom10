<template>
  <ProductListView 
    :products="tabletProducts" 
    :brands="tabletBrands"
    :purposes="tabletPurposes"
    categoryName="Tablet"
  />
</template>

<script setup>
import ProductListView from '../components/ProductListView.vue'

// Tablet-specific data
const tabletBrands = ['Apple', 'Samsung', 'Xiaomi', 'Lenovo', 'Huawei']
const tabletPurposes = ['Giải trí', 'Học tập', 'Vẽ', 'Đọc sách', 'Công việc']

const tabletProducts = [
  {
    name: 'iPad Pro 12.9" M2 WiFi 128GB',
    brand: 'Apple',
    priceValue: 28990000,
    image: new URL('../assets/images/apple-tablet.webp', import.meta.url).href,
    salePrice: '28.990.000đ',
    originalPrice: '31.990.000đ',
    reviews: 124,
    discount: '-9%',
    badge: 'Hot'
  },
  {
    name: 'iPad Air 5 WiFi 64GB',
    brand: 'Apple',
    priceValue: 16990000,
    image: new URL('../assets/images/apple-tablet.webp', import.meta.url).href,
    salePrice: '16.990.000đ',
    originalPrice: '18.990.000đ',
    reviews: 89,
    discount: '-11%',
    badge: 'Hot'
  },
  {
    name: 'Samsung Galaxy Tab S8 Ultra',
    brand: 'Samsung',
    priceValue: 24990000,
    image: new URL('../assets/images/apple-tablet.webp', import.meta.url).href,
    salePrice: '24.990.000đ',
    originalPrice: '28.990.000đ',
    reviews: 67,
    discount: '-14%',
    badge: 'Hot'
  },
  {
    name: 'Samsung Galaxy Tab A8 WiFi',
    brand: 'Samsung',
    priceValue: 6990000,
    image: new URL('../assets/images/apple-tablet.webp', import.meta.url).href,
    salePrice: '6.990.000đ',
    originalPrice: '8.990.000đ',
    reviews: 156,
    discount: '-22%',
    badge: 'Hot'
  },
  {
    name: 'Xiaomi Pad 5 Pro 12.4"',
    brand: 'Xiaomi',
    priceValue: 12990000,
    image: new URL('../assets/images/apple-tablet.webp', import.meta.url).href,
    salePrice: '12.990.000đ',
    originalPrice: '15.990.000đ',
    reviews: 43,
    discount: '-19%',
    badge: 'New'
  },
  {
    name: 'Lenovo Tab P11 Plus',
    brand: 'Lenovo',
    priceValue: 8990000,
    image: new URL('../assets/images/apple-tablet.webp', import.meta.url).href,
    salePrice: '8.990.000đ',
    originalPrice: '10.990.000đ',
    reviews: 78,
    discount: '-18%',
    badge: 'Hot'
  },
  {
    name: 'Huawei MatePad Pro 12.6"',
    brand: 'Huawei',
    priceValue: 18990000,
    image: new URL('../assets/images/apple-tablet.webp', import.meta.url).href,
    salePrice: '18.990.000đ',
    originalPrice: '22.990.000đ',
    reviews: 32,
    discount: '-17%',
    badge: 'New'
  }
]
</script> 