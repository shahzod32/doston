<template>
  <div class="container">
    <h1 class="title">Ichimliklar</h1>
    <div class="grid">
      <div
        class="item"
        v-for="(drink, index) in filteredIchimliklar"
        :key="index"
      >
        <img :src="drink.rasm" :alt="drink.nomi" class="img" />
        <h2 class="name">{{ drink.nomi }}</h2>
        <p class="price">Narxi: {{ drink.narx }} so'm</p>
        <button class="btn" @click="addToCart(drink)">
          Savatchaga qo‘shish 🛒
        </button>
      </div>
    </div>
    <h2 class="men">Project manager: Qudrat Iskandarov 💻</h2>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// App.vue orqali uzatiladigan props
const props = defineProps({
  searchQuery: String,
  addToCart: Function
})

// Rasm importlari (sizgiyo ro'yxatga moslab o'zgartiring)
import r1 from '@/assets/coca.jpg'
import r2 from '@/assets/fanta.jpg'
import r3 from '@/assets/sprite.png'
import r4 from '@/assets/sharbat.jpg'
import r5 from '@/assets/choy.jpg'
import r6 from '@/assets/qora.jpg'
import r7 from '@/assets/0,5l.jpeg'
import r8 from '@/assets/1l.jpg'
import r9 from '@/assets/cofe.jpg'

const ichimliklar = [
  { nomi: 'Coca‑Cola 1,5l', narx: '500ml 8000', rasm: r1 },
  { nomi: 'Fanta 1,5l',    narx: '500ml 7500', rasm: r2 },
  { nomi: 'Sprite 1,5l',   narx: '500ml 7500', rasm: r3 },
  { nomi: 'Sharbat',       narx: '500ml 10000', rasm: r4 },
  { nomi: 'Choy',          narx: '200ml 5000', rasm: r5 },
  { nomi: 'Qora choy',     narx: '200ml 4500', rasm: r6 },
  { nomi: 'Suv (0.5L)',    narx: '0.5L 3000',  rasm: r7 },
  { nomi: 'Suv (1.5L)',    narx: '1.5L 6000',  rasm: r8 },
  { nomi: 'Kofe',          narx: '200ml 9000', rasm: r9 }
]

const filteredIchimliklar = computed(() => {
  if (!props.searchQuery) return ichimliklar
  return ichimliklar.filter(d =>
    d.nomi.toLowerCase().includes(props.searchQuery.toLowerCase())
  )
})
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
  background: white;
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
  background-color: #0ea5e9;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: #0284c7;
}
</style>
