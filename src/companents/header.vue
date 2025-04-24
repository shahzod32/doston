<template>
  <header class="header">
    <div class="container">
      <img  src="@/assets/p.png" alt="Logo" class="logo" />
      <img class="logo1" src="@/assets/menyu2.png" alt="Menyu" />

      <button class="menu-btn" @click="toggleMenu">☰</button>

      <nav :class="['nav', { 'nav-open': menuOpen }]">
        <router-link to="/ovqatlar" @click="closeMenu">Ovqatlar</router-link>
        <router-link to="/ichimliklar" @click="closeMenu">Ichimliklar</router-link>
        <router-link to="/shirinliklar" @click="closeMenu">Shirinliklar</router-link>
        <router-link to="/pizza" @click="closeMenu">Pizza</router-link>
       
      </nav>
      <router-link to="/cart" @click="closeMenu" class="cart-link">
        <span class="cart-emoji"> 🛒</span>
        </router-link>
    </div>

    <div class="search-bar">
      <input
        :value="searchQuery"
        @input="updateSearch"
        type="text"
        placeholder="Ovqat yoki ichimlik qidiring..."
      />
    </div>
  </header>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  searchQuery: String,
  cartItemCount: Number
})
const emit = defineEmits(['update:searchQuery'])

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu  = () => (menuOpen.value = false)
const updateSearch = (e) => emit('update:searchQuery', e.target.value)
</script>

<style scoped>
.header {
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
 
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
}

.logo {
  height: 40px;
}

.logo1 {
  height: 30px;
}

.menu-btn {
  font-size: 24px;
  background: none;
  border: none;
  display: none;
  cursor: pointer;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.router-link-exact-active {
  color: #2563eb;
}

.search-bar {
  padding: 10px 20px;
  background-color: #f1f5f9;
  display: flex;
  justify-content: center;
}

.search-bar input {
  width: 100%;
  max-width: 500px;
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-size: 16px;
}

@media (max-width: 768px) {
  .menu-btn {
    display: flex;
  }
  .cart-emoji{
   font-size: 26px;
  }

  .logo1 {
    width: 120px;
    height: 80px;
  }

  .nav {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    align-items: center;
    display: none;
    padding: 10px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 10px;
  }

  .nav.nav-open {
    display: flex;
  }

  .search-bar input {
    font-size: 14px;
    padding: 8px 12px;
  }
}
</style>
