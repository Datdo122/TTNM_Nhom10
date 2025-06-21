<template>
  <ProductListView 
    :products="gamingProducts" 
    :brands="gamingBrands"
    :purposes="gamingPurposes"
    categoryName="Gaming"
  />
</template>

<script setup>
import ProductListView from '../components/ProductListView.vue'

// Gaming-specific data
const gamingBrands = ['Razer', 'Logitech', 'SteelSeries', 'HyperX', 'Corsair', 'ASUS ROG']
const gamingPurposes = ['FPS Gaming', 'MOBA', 'RPG', 'Streaming', 'Esports']

const gamingProducts = [
  {
    name: 'Razer DeathAdder V3 Pro',
    brand: 'Razer',
    priceValue: 3990000,
    image: new URL('../assets/images/razer-gaming.jpg', import.meta.url).href,
    salePrice: '3.990.000đ',
    originalPrice: '4.990.000đ',
    reviews: 234,
    discount: '-20%',
    badge: 'Hot'
  },
  {
    name: 'Logitech G Pro X Superlight',
    brand: 'Logitech',
    priceValue: 3490000,
    image: new URL('../assets/images/razer-gaming.jpg', import.meta.url).href,
    salePrice: '3.490.000đ',
    originalPrice: '3.990.000đ',
    reviews: 189,
    discount: '-13%',
    badge: 'Hot'
  },
  {
    name: 'SteelSeries Apex Pro TKL',
    brand: 'SteelSeries',
    priceValue: 4990000,
    image: new URL('../assets/images/razer-gaming.jpg', import.meta.url).href,
    salePrice: '4.990.000đ',
    originalPrice: '5.990.000đ',
    reviews: 156,
    discount: '-17%',
    badge: 'Hot'
  },
  {
    name: 'HyperX Cloud Alpha S',
    brand: 'HyperX',
    priceValue: 2990000,
    image: new URL('../assets/images/razer-gaming.jpg', import.meta.url).href,
    salePrice: '2.990.000đ',
    originalPrice: '3.990.000đ',
    reviews: 298,
    discount: '-25%',
    badge: 'Hot'
  },
  {
    name: 'Corsair K95 RGB Platinum XT',
    brand: 'Corsair',
    priceValue: 5990000,
    image: new URL('../assets/images/razer-gaming.jpg', import.meta.url).href,
    salePrice: '5.990.000đ',
    originalPrice: '7.990.000đ',
    reviews: 134,
    discount: '-25%',
    badge: 'Hot'
  },
  {
    name: 'ASUS ROG Strix Scope RX',
    brand: 'ASUS ROG',
    priceValue: 3990000,
    image: new URL('../assets/images/razer-gaming.jpg', import.meta.url).href,
    salePrice: '3.990.000đ',
    originalPrice: '4.990.000đ',
    reviews: 87,
    discount: '-20%',
    badge: 'New'
  },
  {
    name: 'Razer Basilisk V3 Pro',
    brand: 'Razer',
    priceValue: 4490000,
    image: new URL('../assets/images/razer-gaming.jpg', import.meta.url).href,
    salePrice: '4.490.000đ',
    originalPrice: '5.490.000đ',
    reviews: 178,
    discount: '-18%',
    badge: 'Hot'
  },
  {
    name: 'Logitech G733 Lightspeed',
    brand: 'Logitech',
    priceValue: 2490000,
    image: new URL('../assets/images/razer-gaming.jpg', import.meta.url).href,
    salePrice: '2.490.000đ',
    originalPrice: '2.990.000đ',
    reviews: 203,
    discount: '-17%',
    badge: 'Hot'
  }
]
</script> 