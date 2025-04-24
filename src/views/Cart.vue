<template>
  <div class="cart-page">
    <h1>Savatcha</h1>
    <p v-if="!filteredCartItems.length">Savatcha bo‘sh</p>
    <ul v-else>
      <li v-for="(item, idx) in filteredCartItems" :key="idx" class="cart-item">
        <img :src="item.rasm" class="cart-item-img" />
        <div class="cart-item-info">
          <h2>{{ item.nomi }}</h2>
          <p>{{ calculateTotalPrice(item) }}</p>
          <div class="quantity">
            <button @click="decreaseQuantity(item)">−</button>
            <span>{{ item.miqdor }}</span>
            <button @click="increaseQuantity(item)">+</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props: cart va searchQuery qabul qiladi
const props = defineProps({
  cart: Array,
  searchQuery: String
})
const emit = defineEmits(['update:cart'])

// Filter qilingan savatcha elementlari
const filteredCartItems = computed(() => {
  if (!props.searchQuery) return props.cart
  return props.cart.filter(item =>
    item.nomi.toLowerCase().includes(props.searchQuery.toLowerCase())
  )
})

function increaseQuantity(item) {
  item.miqdor++
  emit('update:cart', [...props.cart])
}

function decreaseQuantity(item) {
  if (item.miqdor > 1) {
    item.miqdor--
  } else {
    props.cart.splice(props.cart.indexOf(item), 1)
  }
  emit('update:cart', [...props.cart])
}

function calculateTotalPrice(item) {
  const price = parseInt(String(item.narx).match(/\d+/g).join(''), 10)
  return (price * item.miqdor).toLocaleString() + " so'm"
}
</script>

<style scoped>
.cart-page {
  padding: 20px;
  text-align: center;
}

.cart-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.cart-item {
  background: #fff;
  padding: 15px;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  gap: 15px;
}

.cart-item-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
}

.cart-item-info {
  flex: 1;
  text-align: left;
}

.cart-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.cart-price {
  color: #666;
  margin-bottom: 10px;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 8px;
}

.quantity button {
  background: #22c55e;
  border: none;
  color: white;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.quantity button:hover {
  background-color: #16a34a;
}

.cart-total {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 30px;
}
</style>
