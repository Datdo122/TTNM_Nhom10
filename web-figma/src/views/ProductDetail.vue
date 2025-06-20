<template>
  <div class="overflow-hidden bg-gray-50">
    <Header />

    <main class="flex flex-col items-center pl-20 mt-16 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <div class="w-full max-w-[1260px] max-md:max-w-full">
        <div class="flex gap-5 items-stretch max-md:flex-col">
          <div class="w-6/12 max-md:ml-0 max-md:w-full flex">
            <div class="flex overflow-hidden flex-col justify-center h-full w-full p-10 bg-white rounded-lg shadow-md max-md:p-8 max-md:mt-6 max-md:max-w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/edfca6674abb4e0c940a9946bdbd7d84/7df3570e9d734ca382e4c78201817fadbdb4cd6c?placeholderIfAbsent=true"
                alt="iPhone 12 mini"
                class="object-contain w-full aspect-[1.36] max-md:max-w-full"
              />
            </div>
          </div>

          <div class="ml-5 w-6/12 max-md:ml-0 max-md:w-full flex">
            <ProductInfo class="flex-1 h-full" />
          </div>
        </div>
      </div>

      <nav class="flex items-center py-px mt-16 w-full text-base text-center text-gray-500 max-w-[1260px] max-md:mt-10 max-md:max-w-full border-b border-gray-200">
        <button
          @click="setActiveTab('specs')"
          :class="[
            'px-6 py-5 leading-loose transition-colors',
            activeTab === 'specs' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-gray-700'
          ]"
        >
          Thông số kỹ thuật
        </button>
        <button
          @click="setActiveTab('description')"
          :class="[
            'px-6 py-5 leading-relaxed transition-colors',
            activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-gray-700'
          ]"
        >
          Mô tả sản phẩm
        </button>
        <button
          @click="setActiveTab('reviews')"
          :class="[
            'px-6 py-5 leading-loose transition-colors',
            activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-gray-700'
          ]"
        >
          Đánh giá
        </button>
      </nav>

      <!-- Tab Content -->
      <div class="w-full max-w-[1260px] max-md:max-w-full">
        <TechnicalSpecs v-if="activeTab === 'specs'" />

        <div v-else-if="activeTab === 'description'" class="mt-6 w-full">
          <div class="overflow-hidden px-6 py-7 bg-white rounded-lg shadow-md max-md:px-5">
            <h2 class="text-xl font-bold leading-none text-gray-900 mb-6">
              Mô tả sản phẩm
            </h2>
            <div class="text-center py-12 text-gray-500">
              <p>Không có</p>
            </div>
          </div>
        </div>

        <div v-else-if="activeTab === 'reviews'" class="mt-6 w-full">
          <div class="overflow-hidden px-6 py-7 bg-white rounded-lg shadow-md max-md:px-5">
            <h2 class="text-xl font-bold leading-none text-gray-900 mb-6">
              Đánh giá sản phẩm
            </h2>
            <div class="text-center py-12 text-gray-500">
              <p>Không có</p>
            </div>
          </div>
        </div>
      </div>

      <StoreLocator />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import ProductInfo from '../components/ProductInfo.vue'
import TechnicalSpecs from '../components/TechnicalSpecs.vue'
import StoreLocator from '../components/StoreLocator.vue'
import Footer from '../components/Footer.vue'

const activeTab = ref('specs')

const setActiveTab = (tab) => {
  activeTab.value = tab
}
</script>
