<template>
  <ProductListView 
    :products="laptopProducts" 
    :brands="laptopBrands"
    :purposes="laptopPurposes"
    categoryName="Laptop"
  />
</template>

<script setup>
import ProductListView from '../components/ProductListView.vue'

// Laptop-specific data
const laptopBrands = ['Apple', 'Dell', 'HP', 'Lenovo', 'Asus', 'MSI']
const laptopPurposes = ['Văn phòng', 'Gaming', 'Đồ họa', 'Lập trình', 'Học tập']

const laptopProducts = [
  {
    name: 'MacBook Pro 14" M2 Pro 512GB',
    brand: 'Apple',
    priceValue: 52990000,
    image: new URL('../assets/images/macbook-pro-14-m2-pro-2023.png', import.meta.url).href,
    salePrice: '52.990.000đ',
    originalPrice: '55.990.000đ',
    reviews: 89,
    discount: '-5%',
    badge: 'Hot'
  },
  {
    name: 'MacBook Pro 16" M2 Pro 1TB',
    brand: 'Apple',
    priceValue: 67990000,
    image: new URL('../assets/images/macbook-pro-16-m2-pro-2023.png', import.meta.url).href,
    salePrice: '67.990.000đ',
    originalPrice: '72.990.000đ',
    reviews: 76,
    discount: '-7%',
    badge: 'Hot'
  },
  {
    name: 'Dell XPS 13 Plus i7-1260P 512GB',
    brand: 'Dell',
    priceValue: 35990000,
    image: new URL('../assets/images/macbook-pro-15-m2-pro-2023.png', import.meta.url).href,
    salePrice: '35.990.000đ',
    originalPrice: '39.990.000đ',
    reviews: 54,
    discount: '-10%',
    badge: 'New'
  },
  {
    name: 'HP Spectre x360 14" i7-1255U',
    brand: 'HP',
    priceValue: 28990000,
    image: new URL('../assets/images/macbook-pro-17-m2-pro-2023.png', import.meta.url).href,
    salePrice: '28.990.000đ',
    originalPrice: '32.990.000đ',
    reviews: 43,
    discount: '-12%',
    badge: 'Hot'
  },
  {
    name: 'Lenovo ThinkPad X1 Carbon Gen 10',
    brand: 'Lenovo',
    priceValue: 42990000,
    image: new URL('../assets/images/macbook-pro-14-m2-pro-2023.png', import.meta.url).href,
    salePrice: '42.990.000đ',
    originalPrice: '47.990.000đ',
    reviews: 67,
    discount: '-10%',
    badge: 'Hot'
  },
  {
    name: 'Asus ZenBook Pro 15 OLED',
    brand: 'Asus',
    priceValue: 38990000,
    image: new URL('../assets/images/macbook-pro-15-m2-pro-2023.png', import.meta.url).href,
    salePrice: '38.990.000đ',
    originalPrice: '43.990.000đ',
    reviews: 32,
    discount: '-11%',
    badge: 'New'
  },
  {
    name: 'MSI Gaming GF63 Thin RTX 4050',
    brand: 'MSI',
    priceValue: 19990000,
    image: new URL('../assets/images/macbook-pro-16-m2-pro-2023.png', import.meta.url).href,
    salePrice: '19.990.000đ',
    originalPrice: '23.990.000đ',
    reviews: 128,
    discount: '-17%',
    badge: 'Hot'
  },
  {
    name: 'Dell Inspiron 15 3000 i5-1135G7',
    brand: 'Dell',
    priceValue: 15990000,
    image: new URL('../assets/images/macbook-pro-17-m2-pro-2023.png', import.meta.url).href,
    salePrice: '15.990.000đ',
    originalPrice: '18.990.000đ',
    reviews: 95,
    discount: '-16%',
    badge: 'Hot'
  }
]
</script> 