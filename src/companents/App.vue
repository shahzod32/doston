<template>
  <Header
    v-model:searchQuery="searchQuery"
    :cartItemCount="cart.length"
  />

  <!-- router-view ichida slot orqali prop-larni uzatamiz -->
  <router-view v-slot="{ Component }">
    <component
      :is="Component"
      :searchQuery="searchQuery"
      :addToCart="addToCart"
      v-model:cart="cart"
    />
  </router-view>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/companents/header.vue'

const searchQuery = ref('')
const cart = ref([])

function addToCart(item) {
  const found = cart.value.find(i => i.nomi === item.nomi)
  if (found) {
    found.miqdor++
  } else {
    cart.value.push({ ...item, miqdor: 1 })
  }
}
</script>
