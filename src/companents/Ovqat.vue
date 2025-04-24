<template>
  <div class="container">
    <h1 class="title">Ovqatlar</h1>
    <div class="grid">
      <div class="item" v-for="(ovqat, index) in filteredOvqatlar" :key="index">
        <img :src="ovqat.rasm" :alt="ovqat.nomi" class="img" />
        <h2 class="name">{{ ovqat.nomi }}</h2>
        <p class="price">Narxi: {{ ovqat.narx }} so'm</p>
        <button class="btn" @click="addToCart(ovqat)">Savatchaga qo‘shish 🛒</button>
      </div>
    </div>
    <h2 class="men">Project manager: Qudrat Iskandarov 💻</h2>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['searchQuery', 'addToCart'])

import rasm1 from '@/assets/lavash.png'
import rasm2 from '@/assets/lavashsir.png'
import rasm3 from '@/assets/blob.png'
import rasm4 from '@/assets/shavertovuq.jpg'
import rasm5 from '@/assets/xoggi.png'
import rasm6 from '@/assets/shavertandirli.png'
import rasm7 from '@/assets/doner.png'
import rasm8 from '@/assets/chizburger.png'
import rasm9 from '@/assets/burger2.png'
import rasm10 from '@/assets/hotdog.png'
import rasm11 from '@/assets/bigchiz.png'
import rasm12 from '@/assets/chicken.png'
import rasm13 from '@/assets/classic2x.png'
import rasm14 from '@/assets/hotcl.jpg'
import rasm15 from '@/assets/kar.jpg'
import rasm16 from '@/assets/mek.jpg'

const ovqatlar = [
  { nomi: "Lavash Standart", narx: 30000, rasm: rasm1 },
  { nomi: "Lavash Sirli", narx: 32000, rasm: rasm2 },
  { nomi: "Lavash Tandir", narx: 32000, rasm: rasm3 },
  { nomi: "Shaverma tovuqli", narx: 25000, rasm: rasm4 },
  { nomi: "Shaverma tandir", narx: 18000, rasm: rasm6 },
  { nomi: "Doner", narx: 25000, rasm: rasm7 },
  { nomi: "Xoggi", narx: 30000, rasm: rasm5 },
  { nomi: "Big Doner", narx: 28000, rasm: rasm7 },
  { nomi: "Xoggi Tovuqli", narx: 25000, rasm: rasm5 },
  { nomi: "Chizburger", narx: 26000, rasm: rasm8 },
  { nomi: "Big Chizburger", narx: 35000, rasm: rasm11 },
  { nomi: "Chicken burger", narx: 25000, rasm: rasm12 },
  { nomi: "Burger", narx: 24000, rasm: rasm9 },
  { nomi: "Big burger", narx: 30000, rasm: rasm9 },
  { nomi: "Hot dog classic", narx: 12000, rasm: rasm14 },
  { nomi: "Hot dog classic 2x", narx: 15000, rasm: rasm13 },
  { nomi: "MC Hot dog", narx: 15000, rasm: rasm10 },
  { nomi: "Karolevskiy", narx: 18000, rasm: rasm15 },
  { nomi: "Meksikoniskiy", narx: 16000, rasm: rasm16 },
  { nomi: "Giros", narx: 25000, rasm: rasm7 },
  { nomi: "Roll chicken", narx: 22000, rasm: rasm7 },
  { nomi: "Club sandwich go'shtli", narx: 35000, rasm: rasm7 },
  { nomi: "Club sandwich tovuqli", narx: 32000, rasm: rasm7 },
  { nomi: "KFC Strips", narx: "100g 8000", rasm: rasm7 },
  { nomi: "KFC Qannot", narx: "100g 8000", rasm: rasm7 },
  { nomi: "Kartoshka fri", narx: 15000, rasm: rasm7 },
  { nomi: "Shariki", narx: 15000, rasm: rasm7 },
  { nomi: "Po derevenski", narx: 15000, rasm: rasm7 },
  { nomi: "Qizil sous", narx: 2000, rasm: rasm7 },
  { nomi: "Sirli sous", narx: 2000, rasm: rasm7 },
  { nomi: "MC sous", narx: 2000, rasm: rasm7 },
  { nomi: "Aralash Pide", narx: 55000, rasm: rasm7 },
  { nomi: "Chechevitsa", narx: 22000, rasm: rasm7 },
  { nomi: "Iskandar kabob", narx: 65000, rasm: rasm7 },
  { nomi: "Doner food", narx: 50000, rasm: rasm7 },
  { nomi: "Salat Sveji", narx: 18000, rasm: rasm7 },
  { nomi: "MC salat", narx: 30000, rasm: rasm7 },
  { nomi: "Sezor salat", narx: 30000, rasm: rasm7 },
]

const filteredOvqatlar = computed(() => {
  if (!props.searchQuery) return ovqatlar
  return ovqatlar.filter(ovqat =>
    ovqat.nomi.toLowerCase().includes(props.searchQuery.toLowerCase())
  )
})
</script>


<style scoped>
.men {
  text-align: center;
  font-family: sans-serif;
  font-size: 18px;
}
.container {
  padding: 20px;
  text-align: center;
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
  background-color: #22c55e;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: #16a34a;
}
</style>

