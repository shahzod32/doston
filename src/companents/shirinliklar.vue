<template>
  <div class="container">
    <h1 class="title">Shirinliklar</h1>
    <div class="grid">
      <div class="item" v-for="(item, index) in filteredShirinliklar" :key="index">
        <img :src="item.rasm" :alt="item.nomi" class="img" />
        <h2 class="name">{{ item.nomi }}</h2>
        <p class="price">Narxi: {{ item.narx }} so'm</p>
        <button class="btn" @click="handleAddToCart(item)">Savatchaga qo‘shish 🛒</button>
      </div>
    </div>
  </div>
  <h2 class="men">Project manager: Qudrat Iskandarov 💻</h2>
</template>

<script setup>
import { computed, inject } from 'vue'

// Qidiruv uchun prop
const props = defineProps({
  searchQuery: String,
  cart: Array
})

// App.vue dan provide qilingan funksiyani olamiz
const addToCart = inject('addToCart')
if (!addToCart) {
  console.warn('addToCart funksiyasi topilmadi. Ehtimol provide qilinmagan.')
}

// Rasm importlari
import rasm1 from '@/assets/coca.jpg'
import rasm2 from '@/assets/fanta.jpg'
import rasm3 from '@/assets/sprite.png'
import rasm4 from '@/assets/sharbat.jpg'
import rasm5 from '@/assets/choy.jpg'
import rasm6 from '@/assets/qora.jpg'

const shirinliklar = [
  { nomi: 'Gankonsky vafli',              narx: 30000, rasm: rasm1 },
  { nomi: 'Gankonsky vafli qulupnay',      narx: 55000, rasm: rasm2 },
  { nomi: 'Gankonsky vafli banan',         narx: 45000, rasm: rasm3 },
  { nomi: 'Gankonsky vafli mix meva',      narx: 60000, rasm: rasm4 },
  { nomi: 'Gankonsky vafli assorti',       narx: 65000, rasm: rasm5 },
  { nomi: 'Big assorti',                   narx: 95000, rasm: rasm6 }
]

// Qidiruvga ko‘ra filterlash
const filteredShirinliklar = computed(() => {
  if (!props.searchQuery) return shirinliklar
  return shirinliklar.filter(item =>
    item.nomi.toLowerCase().includes(props.searchQuery.toLowerCase())
  )
})

// Savatchaga qo‘shish
function handleAddToCart(item) {
  const existingItem = props.cart.find(cartItem => cartItem.nomi === item.nomi)
  if (existingItem) {
    existingItem.miqdor++
  } else {
    props.cart.push({ ...item, miqdor: 1 })
  }
  // emit yoki metod orqali cartni yangilash
  emit('update:cart', [...props.cart])
}
</script>

<style scoped>
.container {
  padding: 20px;
  text-align: center;
}
.men {
  text-align: center;
  font-family: sans-serif;
  font-size: 18px;
}
.title {
  font-size: 2rem;
  margin-bottom: 20px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
}
.item {
  background: #fff;
  padding: 15px;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
}
.name {
  margin: 10px 0 5px;
  font-size: 1.2rem;
  font-weight: bold;
}
.price {
  color: #666;
  margin-bottom: 10px;
}
.btn {
  background-color: #f59e0b;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: #d97706;
}
</style>
