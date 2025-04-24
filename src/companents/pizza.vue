<template>
  <div class="container">
    <h1 class="title">Pizzalar</h1>
    <div class="grid">
      <div
        class="item"
        v-for="(pizza, index) in filteredPizzalar"
        :key="index"
      >
        <img :src="pizza.rasm" :alt="pizza.nomi" class="img" />
        <h2 class="name">{{ pizza.nomi }}</h2>
        <p class="price">Narxi: {{ pizza.narx }} so'm</p>
        <button class="btn" @click="handleAddToCart(pizza)">
          Savatchaga qo‘shish 🛒
        </button>
      </div>
    </div>
    <h2 class="men">Project manager: Qudrat Iskandarov 💻</h2>
  </div>
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

// Rasmlar importi
import rasm1 from '@/assets/mixpizza.png'
import rasm2 from '@/assets/mixpizza.png'
import rasm3 from '@/assets/mixpizza.png'
import rasm4 from '@/assets/mcpizza.png'
import rasm5 from '@/assets/xanskaya.png'
import rasm6 from '@/assets/ramontic.png'
import rasm7 from '@/assets/donerpizza.png'
import rasm8 from '@/assets/peperoni.png'
import rasm9 from '@/assets/tovuqqozi.png'

const pizzalar = [
  { nomi: "Mix pizza M(25sm)", narx: 50000, rasm: rasm1 },
  { nomi: "Mix pizza L(30sm)", narx: 70000, rasm: rasm2 },
  { nomi: "Mix pizza XL(40sm)", narx: 90000, rasm: rasm3 },
  { nomi: "MC pizza M(25sm)", narx: 55000, rasm: rasm4 },
  { nomi: "MC pizza L(30sm)", narx: 70000, rasm: rasm4 },
  { nomi: "MC pizza XL(40sm)", narx: 95000, rasm: rasm4 },
  { nomi: "Xanskaya M(25sm)", narx: 60000, rasm: rasm5 },
  { nomi: "Xanskaya L(30sm)", narx: 80000, rasm: rasm5 },
  { nomi: "Xanskaya XL(40sm)", narx:100000, rasm: rasm5 },
  { nomi: "Ramontic M(25sm)", narx: 50000, rasm: rasm6 },
  { nomi: "Ramontic L(30sm)", narx: 70000, rasm: rasm6 },
  { nomi: "Romantic XL(40sm)", narx: 90000, rasm: rasm6 },
  { nomi: "Doner pizza M(25sm)", narx: 60000, rasm: rasm7 },
  { nomi: "Doner pizza L(30sm)", narx: 80000, rasm: rasm7 },
  { nomi: "Doner pizza XL(40sm)", narx:100000, rasm: rasm7 },
  { nomi: "Peperoni pizza M(25sm)", narx: 50000, rasm: rasm8 },
  { nomi: "Peperoni pizza L(30sm)", narx: 70000, rasm: rasm8 },
  { nomi: "Peperoni pizza XL(40sm)", narx: 90000, rasm: rasm8 },
  { nomi: "Tovuqli qo'ziqorinli M(25sm)", narx: 50000, rasm: rasm9 },
  { nomi: "Tovuqli qo'ziqorinli L(30sm)", narx: 70000, rasm: rasm9 },
  { nomi: "Tovuqli qo'ziqorinli XL(40sm)", narx: 90000, rasm: rasm9 },
  { nomi: "Margarita M(25sm)", narx: 40000, rasm: rasm7 },
  { nomi: "Margarita L(30sm)", narx: 65000, rasm: rasm7 },
  { nomi: "Margarita XL(40sm)", narx: 80000, rasm: rasm7 }
]

// Qidiruvga ko‘ra filtrlash
const filteredPizzalar = computed(() => {
  if (!props.searchQuery) return pizzalar
  return pizzalar.filter(p =>
    p.nomi.toLowerCase().includes(props.searchQuery.toLowerCase())
  )
})

// Savatchaga qo‘shish
function handleAddToCart(pizza) {
  const existingItem = props.cart.find(cartItem => cartItem.nomi === pizza.nomi)
  if (existingItem) {
    existingItem.miqdor++
  } else {
    props.cart.push({ ...pizza, miqdor: 1 })
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
  margin-top: 20px;
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
  background-color: #f97316;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: #ea580c;
}
</style>
