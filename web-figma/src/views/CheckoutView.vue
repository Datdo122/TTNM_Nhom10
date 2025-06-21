<template>
  <div class="w-full min-h-screen bg-gray-50 font-roboto">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

    <Header />

    <main class="py-8">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left Column - Main Content -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Delivery Address Section -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center gap-3">
                <i class="fas fa-map-marker-alt text-blue-500 text-lg"></i>
                <h2 class="text-lg font-bold text-gray-800">Địa Chỉ Nhận Hàng</h2>
              </div>
              <button class="text-blue-500 text-sm font-medium hover:text-blue-600">
                Thay đổi
              </button>
            </div>
            
            <div class="border-t border-gray-200 pt-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i class="fas fa-user text-blue-500"></i>
                </div>
                <div class="flex-1">
                  <h3 class="font-medium text-gray-900 mb-1">Nguyễn Văn A</h3>
                  <p class="text-gray-600 text-sm mb-1">+84 123 456 789</p>
                  <p class="text-gray-600 text-sm mb-3">Số 1, Đường ABC, Phường XYZ, Quận 1, TP.Hồ Chí Minh</p>
                  <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Mặc định
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Shipping Section -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-center gap-3 mb-6">
              <i class="fas fa-truck text-blue-500 text-lg"></i>
              <h2 class="text-lg font-bold text-gray-800">Vận Chuyển</h2>
            </div>

            <div class="border border-gray-200 rounded-lg overflow-hidden">
              <div class="p-4 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-4">
                    <i class="fas fa-shipping-fast text-blue-500"></i>
                    <div>
                      <h3 class="font-medium text-gray-900">Shopee Express</h3>
                      <p class="text-gray-600 text-sm">Giao hàng hỏa tốc</p>
                    </div>
                  </div>
                  <span class="text-blue-500 font-medium">30.000đ</span>
                </div>
              </div>
              
              <div class="p-4 bg-blue-50">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-4">
                    <i class="far fa-clock text-blue-500"></i>
                    <div>
                      <h3 class="font-medium text-gray-900">Dự kiến giao hàng</h3>
                      <p class="text-gray-600 text-sm">Thứ 6, 12/05/2023</p>
                    </div>
                  </div>
                  <button class="text-blue-500 text-sm font-medium hover:text-blue-600">
                    Đổi Ngày
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Payment Methods Section -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-center gap-3 mb-6">
              <i class="fas fa-credit-card text-blue-500 text-lg"></i>
              <h2 class="text-lg font-bold text-gray-800">Phương Thức Thanh Toán</h2>
            </div>

            <div class="space-y-4">
              <!-- COD Payment -->
              <div 
                @click="selectedPaymentMethod = 'cod'"
                :class="[
                  'rounded-lg p-4 cursor-pointer',
                  selectedPaymentMethod === 'cod' 
                    ? 'border-2 border-blue-300 bg-blue-50' 
                    : 'border border-gray-300 hover:border-gray-400'
                ]"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-4">
                    <div class="w-5 h-5 border-2 rounded-full flex items-center justify-center"
                         :class="selectedPaymentMethod === 'cod' ? 'border-blue-500' : 'border-gray-300'">
                      <div v-if="selectedPaymentMethod === 'cod'" class="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <i class="fas fa-hand-holding-usd text-blue-500"></i>
                    <div>
                      <h3 class="font-medium text-gray-900">Thanh toán khi nhận hàng (COD)</h3>
                      <p class="text-gray-600 text-sm">Nhận hàng mới thanh toán</p>
                    </div>
                  </div>
                  <i v-if="selectedPaymentMethod === 'cod'" class="fas fa-check text-blue-500"></i>
                </div>
              </div>

              <!-- ShopeePay -->
              <div 
                @click="selectedPaymentMethod = 'shopeepay'"
                :class="[
                  'rounded-lg p-4 cursor-pointer',
                  selectedPaymentMethod === 'shopeepay' 
                    ? 'border-2 border-blue-300 bg-blue-50' 
                    : 'border border-gray-300 hover:border-gray-400'
                ]"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-4">
                    <div class="w-5 h-5 border-2 rounded-full flex items-center justify-center"
                         :class="selectedPaymentMethod === 'shopeepay' ? 'border-blue-500' : 'border-gray-300'">
                      <div v-if="selectedPaymentMethod === 'shopeepay'" class="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div class="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <span class="text-white text-xs font-bold">S</span>
                    </div>
                    <div>
                      <h3 class="font-medium text-gray-900">Ví ShopeePay</h3>
                      <p class="text-gray-600 text-sm">Thanh toán bằng ví điện tử ShopeePay</p>
                    </div>
                  </div>
                  <i v-if="selectedPaymentMethod === 'shopeepay'" class="fas fa-check text-blue-500"></i>
                </div>
              </div>

              <!-- Credit Card -->
              <div 
                @click="selectedPaymentMethod = 'creditcard'"
                :class="[
                  'rounded-lg p-4 cursor-pointer',
                  selectedPaymentMethod === 'creditcard' 
                    ? 'border-2 border-blue-300 bg-blue-50' 
                    : 'border border-gray-300 hover:border-gray-400'
                ]"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-4">
                    <div class="w-5 h-5 border-2 rounded-full flex items-center justify-center"
                         :class="selectedPaymentMethod === 'creditcard' ? 'border-blue-500' : 'border-gray-300'">
                      <div v-if="selectedPaymentMethod === 'creditcard'" class="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <i class="far fa-credit-card text-blue-500"></i>
                    <div>
                      <h3 class="font-medium text-gray-900">Thẻ tín dụng/ghi nợ</h3>
                      <p class="text-gray-600 text-sm">Thẻ Visa, Mastercard</p>
                    </div>
                  </div>
                  <i v-if="selectedPaymentMethod === 'creditcard'" class="fas fa-check text-blue-500"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Discount Code Section -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-center gap-3 mb-6">
              <i class="fas fa-tag text-blue-500 text-lg"></i>
              <h2 class="text-lg font-bold text-gray-800">Mã Giảm Giá</h2>
            </div>

            <div class="flex gap-4 mb-4">
              <input 
                type="text" 
                placeholder="Nhập mã giảm giá"
                class="flex-1 px-4 py-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                v-model="discountCode"
                @keyup.enter="addDiscountCode"
              />
              <button 
                @click="addDiscountCode"
                class="bg-blue-500 text-white px-6 py-4 rounded font-medium hover:bg-blue-600"
              >
                Áp<br/>dụng
              </button>
            </div>

            <div class="flex gap-3 flex-wrap" v-if="appliedDiscountCodes.length > 0">
              <div 
                v-for="code in appliedDiscountCodes" 
                :key="code"
                class="bg-blue-50 border border-blue-200 rounded px-3 py-1 flex items-center gap-2"
              >
                <span class="text-blue-600 text-sm">{{ code }}</span>
                <button 
                  @click="removeDiscountCode(code)"
                  class="text-gray-500 hover:text-gray-700"
                >
                  <i class="fas fa-times text-xs"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <div class="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
              <i class="fas fa-shopping-bag text-blue-500 text-lg"></i>
              <h2 class="text-lg font-bold text-gray-800">Đơn Hàng Của Bạn</h2>
            </div>

            <!-- Product Items -->
            <div class="space-y-6 mb-6">
              <!-- Product 1 -->
              <div class="flex gap-4 pb-6 border-b border-gray-200">
                <div class="w-16 h-20 bg-gray-100 rounded-lg flex-shrink-0">
                    <img src="../assets/images/iphone-15-pro-max.png" alt="iPhone 15 Pro Max" class="w-full h-full object-cover">
                </div>
                <div class="flex-1">
                  <h3 class="font-medium text-gray-900 text-sm leading-6 mb-2">
                    iPhone 14 Pro Max 128GB -<br/>Chính hãng VN/A
                  </h3>
                  <p class="text-gray-600 text-sm mb-2">Đen<br/>x1</p>
                </div>
                <div class="text-right">
                  <p class="text-blue-500 font-medium">25.990.000đ</p>
                  <p class="text-gray-500 text-xs line-through">28.990.000đ</p>
                </div>
              </div>

              <!-- Product 2 -->
              <div class="flex gap-4 pb-6 border-b border-gray-200">
                <div class="w-16 h-20 bg-gray-100 rounded-lg flex-shrink-0">
                    <img src="../assets/images/sony-headphones.png" alt="Sony Headphones" class="w-full h-full object-cover">
                </div>
                <div class="flex-1">
                  <h3 class="font-medium text-gray-900 text-sm leading-6 mb-2">
                    AirPods Pro 2 - Chính hãng<br/>Apple Việt Nam
                  </h3>
                  <p class="text-gray-600 text-sm mb-2">Trắng<br/>x1</p>
                </div>
                <div class="text-right">
                  <p class="text-blue-500 font-medium">5.990.000đ</p>
                  <p class="text-gray-500 text-xs line-through">6.500.000đ</p>
                </div>
              </div>

              <!-- Product 3 -->
              <div class="flex gap-4 pb-6">
                <div class="w-16 h-20 bg-gray-100 rounded-lg flex-shrink-0">
                    <img src="../assets/images/samsung-galaxy-buds-2-pro.png" alt="Samsung Galaxy Buds 2 Pro" class="w-full h-full object-cover">
                </div>
                <div class="flex-1">
                  <h3 class="font-medium text-gray-900 text-sm leading-6 mb-2">
                    Cáp USB-C to Lightning 1m -<br/>Chính hãng Apple
                  </h3>
                  <p class="text-gray-600 text-sm mb-2">Trắng<br/>x2</p>
                </div>
                <div class="text-right">
                  <p class="text-blue-500 font-medium">590.000đ</p>
                  <p class="text-gray-500 text-xs line-through">650.000đ</p>
                </div>
              </div>
            </div>

            <!-- Order Summary -->
            <div class="space-y-4 mb-6">
              <div class="flex justify-between">
                <span class="text-gray-600">Tạm tính:</span>
                <span class="font-medium">32.570.000đ</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Phí vận chuyển:</span>
                <span class="font-medium">30.000đ</span>
              </div>
              <div class="flex justify-between">
                <span class="text-green-600">Giảm giá:</span>
                <span class="text-green-600 font-medium">-500.000đ</span>
              </div>
              <div class="border-t border-gray-200 pt-4">
                <div class="flex justify-between">
                  <span class="text-lg font-bold">Tổng cộng:</span>
                  <span class="text-lg font-bold text-blue-600">32.100.000đ</span>
                </div>
              </div>
            </div>

            <!-- Order Button -->
            <button class="w-full bg-cyan-500 text-white py-3 rounded-lg font-bold hover:bg-cyan-600 flex items-center justify-center gap-2">
              <i class="fas fa-shopping-cart"></i>
              ĐẶT HÀNG NGAY
            </button>

            <!-- Security Notice -->
            <div class="flex items-center gap-2 mt-4 text-gray-500 text-xs">
              <i class="fas fa-lock"></i>
              <span>Thông tin của bạn được bảo mật theo chính sách riêng tư</span>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const discountCode = ref('')
const selectedPaymentMethod = ref('cod') // Default to COD
const appliedDiscountCodes = ref(['GIAMGIA50K', 'FREESHIP30']) // Default discount codes

// Function to add discount code
const addDiscountCode = () => {
  const code = discountCode.value.trim().toUpperCase()
  if (code && !appliedDiscountCodes.value.includes(code)) {
    appliedDiscountCodes.value.push(code)
    discountCode.value = '' // Clear input after adding
  }
}

// Function to remove discount code
const removeDiscountCode = (code) => {
  const index = appliedDiscountCodes.value.indexOf(code)
  if (index > -1) {
    appliedDiscountCodes.value.splice(index, 1)
  }
}
</script>

<style scoped>
.font-roboto {
  font-family: 'Roboto', sans-serif;
}
</style> 