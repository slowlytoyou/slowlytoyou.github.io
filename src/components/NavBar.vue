<template>
  <header class="navbar scrolled">
    <div class="container navbar-inner">
      <div class="logo-wrap">
        <router-link to="/" class="logo">
          <img :src="brandLogo" alt="쭈나라꾸미 로고" class="logo-image" />
        </router-link>
        <span class="logo-tag">대구·경북 프리미엄 쭈꾸미 브랜드</span>
      </div>

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
import brandLogo from '../assets/로고-투명.png'
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
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-image {
  display: block;
  height: 48px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 10px rgba(255, 255, 255, 0.08));
}

.logo-tag {
  display: inline-block;
  background: rgba(200, 57, 43, 0.9);
  color: white;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 5px 12px;
  border-radius: 20px;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

@media (max-width: 900px) {
  .logo-tag {
    display: none;
  }

  .logo-image {
    height: 38px;
  }
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 36px;
}

.nav-links a {
  color: rgba(26, 26, 26, 0.74);
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
  color: var(--dark);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  transform: scaleX(1);
}

.nav-links a.active {
  color: var(--dark);
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
