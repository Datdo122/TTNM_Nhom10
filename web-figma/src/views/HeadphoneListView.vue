<template>
  <ProductListView 
    :products="headphoneProducts" 
    :brands="headphoneBrands"
    :purposes="headphonePurposes"
    categoryName="Tai nghe"
  />
</template>

<script setup>
import ProductListView from '../components/ProductListView.vue'

// Headphone-specific data
const headphoneBrands = ['Sony', 'Apple', 'Samsung', 'Bose', 'JBL', 'Sennheiser']
const headphonePurposes = ['Nghe nhạc', 'Gaming', 'Gọi điện', 'Thể thao', 'Studio']

const headphoneProducts = [
  {
    name: 'Sony WH-1000XM5 Wireless',
    brand: 'Sony',
    priceValue: 8990000,
    image: new URL('../assets/images/sony-headphones.png', import.meta.url).href,
    salePrice: '8.990.000đ',
    originalPrice: '10.990.000đ',
    reviews: 245,
    discount: '-18%',
    badge: 'Hot'
  },
  {
    name: 'AirPods Pro 2nd Gen',
    brand: 'Apple',
    priceValue: 6990000,
    image: new URL('../assets/images/samsung-galaxy-buds-2-pro.png', import.meta.url).href,
    salePrice: '6.990.000đ',
    originalPrice: '7.990.000đ',
    reviews: 189,
    discount: '-13%',
    badge: 'Hot'
  },
  {
    name: 'Samsung Galaxy Buds2 Pro',
    brand: 'Samsung',
    priceValue: 4990000,
    image: new URL('../assets/images/samsung-galaxy-buds-2-pro.png', import.meta.url).href,
    salePrice: '4.990.000đ',
    originalPrice: '5.990.000đ',
    reviews: 156,
    discount: '-17%',
    badge: 'Hot'
  },
  {
    name: 'Bose QuietComfort 45',
    brand: 'Bose',
    priceValue: 7990000,
    image: new URL('../assets/images/sony-headphones.png', import.meta.url).href,
    salePrice: '7.990.000đ',
    originalPrice: '9.990.000đ',
    reviews: 98,
    discount: '-20%',
    badge: 'Hot'
  },
  {
    name: 'JBL Live 660NC Wireless',
    brand: 'JBL',
    priceValue: 2990000,
    image: new URL('../assets/images/sony-headphones.png', import.meta.url).href,
    salePrice: '2.990.000đ',
    originalPrice: '3.990.000đ',
    reviews: 134,
    discount: '-25%',
    badge: 'Hot'
  },
  {
    name: 'Sennheiser HD 660S2',
    brand: 'Sennheiser',
    priceValue: 12990000,
    image: new URL('../assets/images/sony-headphones.png', import.meta.url).href,
    salePrice: '12.990.000đ',
    originalPrice: '15.990.000đ',
    reviews: 67,
    discount: '-19%',
    badge: 'New'
  },
  {
    name: 'Sony WF-1000XM4 True Wireless',
    brand: 'Sony',
    priceValue: 5990000,
    image: new URL('../assets/images/samsung-galaxy-buds-2-pro.png', import.meta.url).href,
    salePrice: '5.990.000đ',
    originalPrice: '7.990.000đ',
    reviews: 178,
    discount: '-25%',
    badge: 'Hot'
  },
  {
    name: 'JBL Tune 760NC',
    brand: 'JBL',
    priceValue: 1990000,
    image: new URL('../assets/images/sony-headphones.png', import.meta.url).href,
    salePrice: '1.990.000đ',
    originalPrice: '2.990.000đ',
    reviews: 203,
    discount: '-33%',
    badge: 'Hot'
  }
]
</script> 