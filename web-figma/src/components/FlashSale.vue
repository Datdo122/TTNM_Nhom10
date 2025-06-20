<template>
  <section class="relative mx-auto mt-5 mb-0 w-full max-w-[1260px] max-md:mx-5 max-md:mt-5 max-md:mb-0 max-sm:mx-4 max-sm:mt-5 max-sm:mb-0">
    <div class="flex items-center px-3 py-0 w-full h-14 bg-red-600 rounded-[8px_8px_0_0]">
      <div class="flex gap-2 items-center">
        <div class="text-xl text-white">
          <i class="ti ti-bolt"></i>
        </div>
        <h2 class="text-xl font-bold leading-7 text-white">Flash Sale</h2>
      </div>
      <span class="ml-4 text-sm leading-5 text-white">Kết thúc sau:</span>
      <div class="p-2 ml-2 h-8 text-base leading-6 text-white rounded bg-black bg-opacity-20 w-[34px] flex items-center">{{ timeLeft.hours }}</div>
      <span class="mx-1 my-0 text-base leading-6 text-white">:</span>
      <div class="p-2 ml-2 h-8 text-base leading-6 text-white rounded bg-black bg-opacity-20 w-[34px] flex items-center">{{ timeLeft.minutes }}</div>
      <span class="mx-1 my-0 text-base leading-6 text-white">:</span>
      <div class="p-2 ml-2 h-8 text-base leading-6 text-white rounded bg-black bg-opacity-20 w-[34px] flex items-center">{{ timeLeft.seconds }}</div>
    </div>

    <!-- Horizontal Scrollable Container -->
    <div class="bg-white rounded-[0_0_8px_8px] p-4">
      <div class="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        <FlashSaleCard
          v-for="product in products"
          :key="product.name"
          :product="product"
        />
      </div>
    </div>

    <div class="flex gap-1 items-center justify-center mt-8">
      <span class="text-base leading-6 text-center text-blue-600 hover:text-blue-700 cursor-pointer transition-colors">Xem tất cả ưu đãi</span>
      <div class="text-base text-blue-600">
        <i class="ti ti-arrow-right"></i>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import FlashSaleCard from './FlashSaleCard.vue';

const timeLeft = ref({
  hours: '12',
  minutes: '45',
  seconds: '30'
});

const products = ref([
  {
    name: 'Samsung Galaxy Buds 2 Pro',
    image: new URL('../assets/images/samsung-galaxy-buds-2-pro.png', import.meta.url).href,
    salePrice: '3.490.000đ',
    originalPrice: '4.990.000đ',
    sold: 12,
    total: 20,
    soldPercentage: 60
  },
  {
    name: 'Tai nghe Sony WH-1000XM4',
    image: new URL('../assets/images/sony-headphones.png', import.meta.url).href,
    salePrice: '5.990.000đ',
    originalPrice: '7.990.000đ',
    sold: 18,
    total: 20,
    soldPercentage: 90
  },
  {
    name: 'Xiaomi Mi Watch Lite',
    image: new URL('../assets/images/samsung-galaxy-buds-2-pro.png', import.meta.url).href,
    salePrice: '1.290.000đ',
    originalPrice: '1.990.000đ',
    sold: 8,
    total: 20,
    soldPercentage: 40
  },
  {
    name: 'Apple Watch Series 8 GPS 41mm',
    image: new URL('../assets/images/sony-headphones.png', import.meta.url).href,
    salePrice: '8.490.000đ',
    originalPrice: '9.990.000đ',
    sold: 15,
    total: 20,
    soldPercentage: 75
  },
  {
    name: 'AirPods Pro 2nd Generation',
    image: new URL('../assets/images/samsung-galaxy-buds-2-pro.png', import.meta.url).href,
    salePrice: '5.490.000đ',
    originalPrice: '6.990.000đ',
    sold: 10,
    total: 20,
    soldPercentage: 50
  },
  {
    name: 'Samsung Galaxy Watch 5',
    image: new URL('../assets/images/sony-headphones.png', import.meta.url).href,
    salePrice: '4.990.000đ',
    originalPrice: '6.490.000đ',
    sold: 14,
    total: 20,
    soldPercentage: 70
  }
]);

let timer;

onMounted(() => {
  timer = setInterval(() => {
    // Simple countdown logic - in real app this would be based on actual end time
    let seconds = parseInt(timeLeft.value.seconds);
    let minutes = parseInt(timeLeft.value.minutes);
    let hours = parseInt(timeLeft.value.hours);

    if (seconds > 0) {
      seconds--;
    } else if (minutes > 0) {
      seconds = 59;
      minutes--;
    } else if (hours > 0) {
      seconds = 59;
      minutes = 59;
      hours--;
    }

    timeLeft.value = {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0')
    };
  }, 1000);
});

onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

/* Smooth scrolling */
.scrollbar-hide {
  scroll-behavior: smooth;
}
</style>
