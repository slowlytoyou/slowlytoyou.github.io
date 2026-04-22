<template>
  <div class="mobile-layout">
    <header class="mobile-header">
      <div class="mobile-header-inner">
        <div class="logo">
          <img :src="brandLogo" alt="쭈나라꾸미 로고" class="mobile-logo-image" />
        </div>
        <button class="mobile-menu-btn" @click="menuOpen = !menuOpen" aria-label="메뉴">
          <span :class="{ open: menuOpen }"></span>
        </button>
      </div>
      <div class="mobile-nav" :class="{ open: menuOpen }">
        <a href="#hero" @click="scrollTo('hero')">홈</a>
        <a href="#about" @click="scrollTo('about')">브랜드 소개</a>
        <a href="#menu" @click="scrollTo('menu')">메뉴</a>
        <a href="#franchise" @click="scrollTo('franchise')">가맹 안내</a>
        <a href="#contact" @click="scrollTo('contact')">상담 신청</a>
      </div>
    </header>

    <HeroSection id="hero" />
    <AboutSection />
    <MenuSection />
    <FranchiseSection />
    <ContactSection />
    <FooterSection />

    <div class="floating-buttons">
      <a href="http://pf.kakao.com/_rwHdX/chat" target="_blank" rel="noopener" class="floating-kakao" aria-label="카카오톡 상담">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#3C1E1E"><path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.73 1.74 5.15 4.4 6.56-.14.53-.5 1.93-.58 2.23-.09.37.14.37.3.27.12-.08 1.95-1.32 2.75-1.86.7.1 1.43.16 2.13.16 5.52 0 10-3.58 10-7.36S17.52 3 12 3z"/></svg>
      </a>
      <a href="#contact" class="floating-cta" @click.prevent="scrollTo('contact')">
        상담 신청
      </a>
    </div>

    <AnnouncementPopup />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import MenuSection from '../components/MenuSection.vue'
import FranchiseSection from '../components/FranchiseSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'
import AnnouncementPopup from '../components/AnnouncementPopup.vue'
import brandLogo from '../assets/로고-투명.png'

const menuOpen = ref(false)

function scrollTo(id) {
  menuOpen.value = false
  setTimeout(() => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, 100)
}
</script>

<style scoped>
.mobile-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
}

.mobile-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
}

.logo {
  display: flex;
  align-items: center;
}

.mobile-logo-image {
  display: block;
  height: 34px;
  width: auto;
  object-fit: contain;
}

.mobile-menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
}

.mobile-menu-btn span,
.mobile-menu-btn span::before,
.mobile-menu-btn span::after {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--dark);
  transition: all 0.3s;
  position: relative;
}

.mobile-menu-btn span::before,
.mobile-menu-btn span::after {
  content: '';
  position: absolute;
}

.mobile-menu-btn span::before {
  top: -7px;
}

.mobile-menu-btn span::after {
  top: 7px;
}

.mobile-menu-btn span.open {
  background: transparent;
}

.mobile-menu-btn span.open::before {
  transform: rotate(45deg);
  top: 0;
}

.mobile-menu-btn span.open::after {
  transform: rotate(-45deg);
  top: 0;
}

.mobile-nav {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: rgba(255, 255, 255, 0.99);
}

.mobile-nav.open {
  max-height: 300px;
}

.mobile-nav a {
  display: block;
  padding: 14px 24px;
  color: rgba(26, 26, 26, 0.82);
  font-size: 1rem;
  font-weight: 600;
  border-bottom: 1px solid rgba(26, 26, 26, 0.08);
  transition: color 0.2s;
}

.mobile-nav a:last-child {
  color: var(--secondary);
}

.mobile-nav a:hover {
  color: var(--dark);
}

.floating-buttons {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  align-items: center;
  z-index: 99;
}

.floating-cta {
  background: var(--primary);
  color: white;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 14px 32px;
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(200,57,43,0.5);
  white-space: nowrap;
  transition: transform 0.2s, box-shadow 0.2s;
}

.floating-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(200,57,43,0.6);
}

.floating-kakao {
  width: 50px;
  height: 50px;
  background: #FEE500;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  flex-shrink: 0;
  transition: transform 0.2s;
}

.floating-kakao:hover {
  transform: translateY(-2px);
}
</style>
