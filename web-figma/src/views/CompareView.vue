<template>
  <div class="min-h-screen flex flex-col font-inter bg-gray-50">
    <Header />

    <!-- Compare section -->
    <section class="max-w-[1260px] mx-auto w-full px-4 py-12">
      <div class="flex flex-col lg:flex-row items-center justify-center gap-12 relative">
        <!-- Product A card -->
        <CompareCard :product="productA" color="blue" />

        <!-- VS circle -->
        <div class="shrink-0 rounded-full bg-gray-200 w-16 h-16 flex items-center justify-center font-semibold text-gray-800 text-lg">
          VS
        </div>

        <!-- Product B card -->
        <CompareCard :product="productB" color="emerald" />
      </div>

      <!-- Technical specs table -->
      <div class="bg-white rounded-lg shadow mt-16 overflow-auto">
        <table class="min-w-full table-auto text-sm">
          <thead class="bg-gray-50 text-gray-600">
            <tr>
              <th class="px-6 py-3 text-left font-medium">Thông số</th>
              <th class="px-6 py-3 text-left font-medium text-blue-600">{{ productA.name }}</th>
              <th class="px-6 py-3 text-left font-medium text-emerald-600">{{ productB.name }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, idx) in specs" :key="idx" :class="idx % 2 ? 'bg-gray-50' : ''" class="border-t">
              <td class="px-6 py-3 text-gray-800 font-medium">{{ row.label }}</td>
              <td class="px-6 py-3">{{ row.a }}</td>
              <td class="px-6 py-3">{{ row.b }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pros & Cons section -->
      <div class="grid lg:grid-cols-2 gap-8 mt-16">
        <!-- Product A pros/cons -->
        <div class="bg-white rounded-xl shadow border border-gray-200 p-6">
          <div class="flex items-center gap-2 mb-6">
            <span class="text-lg font-semibold text-slate-900">{{ productA.name }}</span>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Pros -->
            <div>
              <h4 class="text-green-600 font-medium mb-2">Ưu điểm</h4>
              <ul class="space-y-2">
                <li v-for="(pro, i) in productA.pros" :key="'proA'+i" class="flex items-start gap-2 text-sm">
                  <i class="ti ti-check text-green-500 mt-0.5"></i>
                  <span>{{ pro }}</span>
                </li>
              </ul>
            </div>
            <!-- Cons -->
            <div>
              <h4 class="text-red-600 font-medium mb-2">Nhược điểm</h4>
              <ul class="space-y-2">
                <li v-for="(con, i) in productA.cons" :key="'conA'+i" class="flex items-start gap-2 text-sm">
                  <i class="ti ti-x text-red-500 mt-0.5"></i>
                  <span>{{ con }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Product B pros/cons -->
        <div class="bg-white rounded-xl shadow border border-gray-200 p-6">
          <div class="flex items-center gap-2 mb-6">
            <span class="text-lg font-semibold text-slate-900">{{ productB.name }}</span>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Pros -->
            <div>
              <h4 class="text-green-600 font-medium mb-2">Ưu điểm</h4>
              <ul class="space-y-2">
                <li v-for="(pro, i) in productB.pros" :key="'proB'+i" class="flex items-start gap-2 text-sm">
                  <i class="ti ti-check text-green-500 mt-0.5"></i>
                  <span>{{ pro }}</span>
                </li>
              </ul>
            </div>
            <!-- Cons -->
            <div>
              <h4 class="text-red-600 font-medium mb-2">Nhược điểm</h4>
              <ul class="space-y-2">
                <li v-for="(con, i) in productB.cons" :key="'conB'+i" class="flex items-start gap-2 text-sm">
                  <i class="ti ti-x text-red-500 mt-0.5"></i>
                  <span>{{ con }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommendations -->
      <div class="grid lg:grid-cols-2 gap-8 mt-16">
        <div class="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h3 class="text-blue-600 font-medium mb-4">Chọn {{ productA.name }} nếu:</h3>
          <ul class="space-y-2 list-disc pl-5">
            <li v-for="(item, i) in productA.recommendIf" :key="i">{{ item }}</li>
          </ul>
        </div>
        <div class="rounded-lg border border-emerald-200 bg-emerald-50 p-6">
          <h3 class="text-emerald-600 font-medium mb-4">Chọn {{ productB.name }} nếu:</h3>
          <ul class="space-y-2 list-disc pl-5">
            <li v-for="(item, i) in productB.recommendIf" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import CompareCard from '../components/CompareCard.vue'

// Product placeholder data – ideally this comes from API
const productA = {
  name: 'iPhone 14 Pro Max',
  brand: 'Apple',
  tag: 'Bán chạy',
  price: 29990000,
  img: new URL('@/assets/images/iphone-15-pro-max.png', import.meta.url).href,
  rating: 4.7,
  reviews: 1245,
  highlights: [
    'Chip A16 Bionic mạnh mẽ',
    'Màn hình Dynamic Island',
    'Camera 48MP chuyên nghiệp'
  ],
  pros: [
    'Chip A16 hoạt động mượt mà, tối ưu năng lượng',
    'Phần mềm iOS ổn định, cập nhật dài hạn',
    'Thiết kế cao cấp, Dynamic Island sáng tạo',
    'Chụp ảnh màu sắc chân thực, video xuất sắc'
  ],
  cons: [
    'Giá thành cao nhất phân khúc',
    'Sạc nhanh chậm hơn đối thủ',
    'Không hỗ trợ USB-C như nhiều thiết bị khác',
    'Không có jack tai nghe 3.5mm'
  ],
  recommendIf: [
    'Bạn là người dùng hệ sinh thái Apple',
    'Quan tâm đến trải nghiệm phần mềm mượt mà',
    'Thường xuyên quay video chất lượng cao',
    'Thích thiết kế nguyên khối cao cấp'
  ]
}

const productB = {
  name: 'Samsung Galaxy S23 Ultra',
  brand: 'Samsung',
  tag: 'Mới nhất',
  price: 27990000,
  img: new URL('@/assets/images/samsung-galaxy-buds-2-pro.png', import.meta.url).href,
  rating: 4.9,
  reviews: 1876,
  highlights: [
    'Chip Snapdragon 8 Gen 2',
    'Bút S Pen tích hợp',
    'Camera 200MP đột phá'
  ],
  pros: [
    'Camera 200MP đột phá, zoom 100x',
    'Bút S Pen tiện lợi cho ghi chú',
    'Pin lớn, sạc nhanh 45W',
    'Màn hình lớn, độ phân giải cao'
  ],
  cons: [
    'Thiết kế thay đổi ít so với thế hệ trước',
    'Nặng hơn iPhone 14 Pro Max',
    'Giá thành cũng rất cao',
    'Nhiều bloatware trên hệ điều hành'
  ],
  recommendIf: [
    'Bạn cần camera độ phân giải cực cao',
    'Muốn có bút S Pen để ghi chú',
    'Cần pin trâu và sạc nhanh',
    'Thích hệ sinh thái Android linh hoạt'
  ]
}

// Specs rows
const specs = [
  { label: 'Màn hình', a: '6.7" OLED, 120Hz', b: '6.8" Dynamic AMOLED 2X, 120Hz' },
  { label: 'Độ phân giải', a: '2796 x 1290 pixel', b: '3088 x 1440 pixel' },
  { label: 'Vi xử lý', a: 'Apple A16 Bionic', b: 'Snapdragon 8 Gen 2' },
  { label: 'RAM', a: '6GB', b: '12GB' },
  { label: 'Bộ nhớ', a: '128GB/256GB/512GB/1TB', b: '256GB/512GB/1TB' },
  { label: 'Camera sau', a: '48MP + 12MP + 12MP', b: '200MP + 12MP + 10MP + 10MP' },
  { label: 'Camera trước', a: '12MP', b: '12MP' },
  { label: 'Pin', a: '4,323mAh', b: '5,000mAh' },
  { label: 'Sạc nhanh', a: '27W có dây, 15W MagSafe', b: '45W có dây, 15W không dây' },
  { label: 'Hệ điều hành', a: 'iOS 16', b: 'Android 13 (One UI 5.1)' },
  { label: 'Kháng nước', a: 'IP68', b: 'IP68' },
  { label: 'Kích thước', a: '160.7 x 77.6 x 7.85 mm', b: '163.4 x 78.1 x 8.9 mm' },
  { label: 'Trọng lượng', a: '240g', b: '234g' },
  { label: 'Tính năng đặc biệt', a: 'Dynamic Island, Face ID', b: 'S Pen, zoom 100x' }
]
</script>

<style scoped></style> 