<template>
  <header class="navbar" :class="{ scrolled: isDark }">
    <div class="container navbar-inner">
      <router-link to="/" class="logo">
        <span class="logo-icon">🐙</span>
        <span class="logo-text">쭈나라꾸미</span>
      </router-link>

      <nav class="nav-links">
        <router-link to="/" exact-active-class="active">홈</router-link>
        <router-link to="/about" active-class="active">브랜드 소개</router-link>
        <router-link to="/menu" active-class="active">메뉴</router-link>
        <router-link to="/franchise" active-class="active">가맹 안내</router-link>
        <router-link to="/contact" class="nav-cta" active-class="active">상담 신청</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)

const isDark = computed(() => route.path !== '/' || isScrolled.value)

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.3s, box-shadow 0.3s;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(26, 26, 26, 0.97);
  box-shadow: 0 2px 20px rgba(0,0,0,0.3);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
}

.logo-icon {
  font-size: 1.6rem;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 900;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 36px;
}

.nav-links a {
  color: rgba(255,255,255,0.8);
  font-size: 0.95rem;
  font-weight: 600;
  transition: color 0.2s;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary);
  transform: scaleX(0);
  transition: transform 0.2s;
}

.nav-links a:hover {
  color: white;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  transform: scaleX(1);
}

.nav-links a.active {
  color: white;
}

.nav-cta {
  background: var(--primary);
  color: white !important;
  padding: 8px 22px;
  border-radius: 4px;
  transition: background 0.2s !important;
}

.nav-cta::after {
  display: none !important;
}

.nav-cta:hover {
  background: var(--primary-dark) !important;
}

.nav-cta.active {
  background: var(--primary-dark) !important;
}
</style>
