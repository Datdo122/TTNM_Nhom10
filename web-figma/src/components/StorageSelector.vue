<template>
    <div class="flex flex-wrap gap-2 mt-3 text-center whitespace-nowrap max-md:max-w-full">
      <button
        v-for="storage in storageOptions"
        :key="storage.value"
        @click="selectStorage(storage.value)"
        :class="[
          'flex flex-col flex-1 items-center px-9 py-3.5 rounded border border-solid max-md:px-5',
          modelValue === storage.value
            ? 'bg-sky-50 border-sky-600'
            : 'border-gray-300'
        ]"
      >
        <span
          :class="[
            'text-base leading-loose',
            modelValue === storage.value ? 'text-sky-600' : 'text-black'
          ]"
        >
          {{ storage.label }}
        </span>
        <span class="mt-3.5 text-xs leading-none text-gray-500">
          {{ storage.price }}
        </span>
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
  
  const storageOptions = [
    { value: '64GB', label: '64GB', price: '12.990.000₫' },
    { value: '128GB', label: '128GB', price: '14.990.000₫' },
    { value: '256GB', label: '256GB', price: '16.990.000₫' }
  ]
  
  const selectStorage = (value) => {
    emit('update:modelValue', value)
  }
  </script>
  