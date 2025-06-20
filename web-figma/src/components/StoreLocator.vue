<template>
    <section class="overflow-hidden px-6 py-7 mt-10 w-full bg-white rounded-lg shadow-md max-w-[1264px] max-md:px-5 max-md:max-w-full">
      <h2 class="text-xl font-bold leading-none text-gray-900 mb-6">
        Tìm cửa hàng gần bạn
      </h2>
  
      <div class="grid grid-cols-3 gap-5 items-end w-full max-md:max-w-full">
        <!-- Province selector -->
        <div class="flex flex-col">
          <label class="mb-1 text-sm text-gray-700">Tỉnh/Thành phố</label>
          <div class="relative w-full">
            <select class="appearance-none w-full bg-white border border-gray-300 rounded-md py-3 px-4 pr-10 text-base text-black outline-none">
              <option>Hà Nội</option>
              <option>TP. Hồ Chí Minh</option>
              <option>Đà Nẵng</option>
            </select>
            <i class="ti ti-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 pointer-events-none"></i>
          </div>
        </div>
  
        <!-- District selector -->
        <div class="flex flex-col">
          <label class="mb-1 text-sm text-gray-700">Quận/Huyện</label>
          <div class="relative w-full">
            <select class="appearance-none w-full bg-white border border-gray-300 rounded-md py-3 px-4 pr-10 text-base text-black outline-none">
              <option>Quận 1</option>
              <option>Quận 2</option>
              <option>Quận 3</option>
            </select>
            <i class="ti ti-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 pointer-events-none"></i>
          </div>
        </div>
  
        <!-- Search button -->
        <div class="flex flex-col">
          <span class="invisible mb-1 select-none">label</span>
          <button class="w-full py-3 text-base leading-loose text-center text-white bg-blue-600 rounded-md h-[48px] cursor-pointer active:scale-95 duration-200 shadow-md hover:shadow-lg">
            Tìm cửa hàng
          </button>
        </div>
      </div>
  
      <div class="mt-6 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <article
            v-for="store in stores"
            :key="store.id"
            class="flex-1 basis-0 max-md:ml-0 max-md:w-full"
          >
            <div class="flex flex-col h-full items-start py-5 pr-12 pl-4 w-full rounded-lg border border-gray-300 border-solid max-md:pr-5 max-md:mt-2">
              <h3 class="text-lg leading-loose text-black">
                {{ store.name }}
              </h3>
  
              <div class="flex gap-2 items-start self-stretch mt-2.5 text-base">
                <i class="ti ti-map-pin text-red-500 text-base mt-1 flex-shrink-0"></i>
                <address class="flex-auto leading-loose text-gray-600 not-italic">
                  {{ store.address }}
                </address>
              </div>
  
              <div class="flex gap-2 items-center mt-1.5">
                <i class="ti ti-phone text-blue-500 text-base flex-shrink-0"></i>
                <a
                  :href="`tel:${store.phone}`"
                  class="text-base leading-loose text-gray-600"
                >
                  {{ store.phone }}
                </a>
              </div>
  
              <div class="flex gap-2 items-center mt-2">
                <i class="ti ti-clock text-yellow-500 text-base flex-shrink-0"></i>
                <time class="text-base leading-loose text-gray-600 basis-auto">
                  {{ store.hours }}
                </time>
              </div>
  
              <button class="px-3.5 py-2.5 mt-auto text-sm leading-loose text-center text-blue-600 bg-blue-100 rounded">
                Xem bản đồ
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const stores = [
    {
      id: 1,
      name: 'ShopDienthoai - Quận 1',
      address: '123 Nguyễn Huệ, P. Bến Nghé, Q.1, TP.HCM',
      phone: '0966 119 995',
      hours: '8:30 - 21:30 (T2 - CN)'
    },
    {
      id: 2,
      name: 'ShopDienthoai - Quận 3',
      address: '456 Võ Văn Tần, P.5, Q.3, TP.HCM',
      phone: '0987 654 321',
      hours: '8:30 - 21:30 (T2 - CN)'
    },
    {
      id: 3,
      name: 'ShopDienthoai - Quận 10',
      address: '789 Lý Thường Kiệt, P.14, Q.10, TP.HCM',
      phone: '0978 123 456',
      hours: '8:30 - 21:30 (T2 - CN)'
    }
  ]
  </script>
  