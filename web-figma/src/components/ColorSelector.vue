<template>
    <div class="flex flex-wrap gap-2 mt-3.5 text-base leading-loose text-center text-black whitespace-nowrap max-md:max-w-full">
      <button
        v-for="color in colors"
        :key="color.value"
        @click="selectColor(color.value)"
        :class="[
          'flex flex-col flex-1 items-center px-7 pt-2.5 pb-4 rounded border border-solid max-md:px-5',
          modelValue === color.value
            ? 'bg-sky-50 border-sky-600'
            : 'border-gray-300'
        ]"
      >
        <div
          :class="[
            'flex shrink-0 w-8 h-8 rounded-full',
            color.bgClass
          ]"
        ></div>
        <span class="mt-2.5">{{ color.label }}</span>
      </button>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    }
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const colors = [
    { value: 'purple', label: 'Tím', bgClass: 'bg-purple-500' },
    { value: 'black', label: 'Đen', bgClass: 'bg-black' },
    { value: 'white', label: 'Trắng', bgClass: 'bg-gray-200' },
    { value: 'blue', label: 'Xanh', bgClass: 'bg-blue-400' }
  ]
  
  const selectColor = (value) => {
    emit('update:modelValue', value)
  }
  </script>
  