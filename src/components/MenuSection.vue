<template>
  <section class="section" id="menu">
    <div class="container">
      <div class="section-header" v-animate="'fade-up'">
        <p class="label-tag">BEST MENU</p>
        <h2 class="section-title">고객이 사랑하는<br>쭈나라꾸미 메뉴</h2>
        <p class="section-subtitle">쭈나라꾸미의 대표 메뉴들을 만나보세요.</p>
      </div>

      <div class="tab-bar">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          :class="['tab-btn', { active: activeTab === tab.key }]"
          @click="activeTab = tab.key"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="menu-grid" v-if="activeTab === 'main'">
        <div v-for="item in mainMenu" :key="item.name" class="menu-card">
          <div class="menu-img">
            <img :src="item.img" :alt="item.name" />
            <span v-if="item.badge" class="menu-badge">{{ item.badge }}</span>
          </div>
          <div class="menu-info">
            <h3 class="menu-name">{{ item.name }}</h3>
          </div>
        </div>
      </div>

      <div class="set-grid" v-if="activeTab === 'set'">
        <div v-for="item in setMenu" :key="item.name" class="set-card">
          <div class="set-img">
            <img :src="item.img" :alt="item.name" />
          </div>
          <div class="set-info">
            <h3>{{ item.name }}</h3>
          </div>
        </div>
      </div>

      <div class="side-grid" v-if="activeTab === 'side'">
        <div v-for="item in sideMenu" :key="item.name" class="side-card">
          <div class="side-img">
            <img :src="item.img" :alt="item.name" />
          </div>
          <div class="side-info">
            <h4>{{ item.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import imgJjukkumi from '../assets/쭈꾸미볶음.jpg'
import imgPizza from '../assets/쭈나라피자.jpg'
import imgDonkasu from '../assets/수제돈까스.jpg'
import imgSaewoo from '../assets/새우튀김.jpg'
import imgFondu from '../assets/치즈퐁듀+감자튀김.jpg'
import imgMandu from '../assets/만두.jpg'
import imgSetA from '../assets/쭈나라 세트A.jpg'
import imgSetB from '../assets/쭈나라 세트B.jpg'
import imgSetC from '../assets/쭈나라 세트C.jpg'
import imgSalad from '../assets/샐러드.jpg'
import imgMuk from '../assets/묵사발.jpg'
import imgGgrancim from '../assets/계란찜.jpg'
import imgRice from '../assets/공기밥.jpg'
import imgUdon from '../assets/우동사리.jpg'

const activeTab = ref('main')

const tabs = [
  { key: 'main', label: '메인 메뉴' },
  { key: 'set', label: '세트 메뉴' },
  { key: 'side', label: '사이드' },
]

const mainMenu = [
  { name: '쭈꾸미볶음', price: '11,000원', badge: 'BEST', img: imgJjukkumi },
  { name: '쭈나라 피자', price: '6,000원', badge: null, img: imgPizza },
  { name: '수제 돈까스', price: '2,000원', badge: null, img: imgDonkasu },
  { name: '새우튀김', price: '2,500원', badge: null, img: imgSaewoo },
  { name: '치즈퐁듀+감자튀김', price: '6,000원', badge: null, img: imgFondu },
  { name: '만두', price: '4,000원', badge: null, img: imgMandu },
]

const setMenu = [
  { name: '쭈나라 세트A', price: '12,900원', img: imgSetA },
  { name: '쭈나라 세트B', price: '12,900원', img: imgSetB },
  { name: '쭈나라 세트C', price: '14,900원', img: imgSetC },
]

const sideMenu = [
  { name: '샐러드', price: '3,500원', img: imgSalad },
  { name: '묵사발', price: '3,500원', img: imgMuk },
  { name: '계란찜', price: '3,000원', img: imgGgrancim },
  { name: '공기밥', price: '1,000원', img: imgRice },
  { name: '우동사리', price: '2,000원', img: imgUdon },
]
</script>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.label-tag {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}

.tab-bar {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 48px;
}

.tab-btn {
  padding: 10px 28px;
  border-radius: 30px;
  border: 2px solid #e0e0e0;
  background: white;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  color: var(--gray);
  transition: all 0.2s;
  font-family: var(--font);
}

.tab-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.tab-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
}

/* 메인 메뉴 */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.menu-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  background: white;
}

.menu-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.14);
}

.menu-img {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.menu-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.menu-card:hover .menu-img img {
  transform: scale(1.05);
}

.menu-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: var(--primary);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  letter-spacing: 0.05em;
}

.menu-info {
  padding: 20px;
}

.menu-name {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.menu-desc {
  font-size: 0.85rem;
  color: var(--gray);
  line-height: 1.6;
  margin-bottom: 12px;
}

.menu-price {
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary);
}

/* 세트 메뉴 */
.set-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.set-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  background: white;
  transition: transform 0.2s, box-shadow 0.2s;
}

.set-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.14);
}

.set-img {
  height: 240px;
  overflow: hidden;
}

.set-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.set-card:hover .set-img img {
  transform: scale(1.04);
}

.set-info {
  padding: 20px;
}

.set-info h3 {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.set-info p {
  font-size: 0.85rem;
  color: var(--gray);
  line-height: 1.6;
  margin-bottom: 10px;
}

/* 사이드 메뉴 */
.side-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.side-card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  background: white;
  transition: transform 0.2s;
}

.side-card:hover {
  transform: translateY(-3px);
}

.side-img {
  height: 130px;
  overflow: hidden;
}

.side-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.side-card:hover .side-img img {
  transform: scale(1.05);
}

.side-info {
  padding: 12px;
  text-align: center;
}

.side-info h4 {
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.side-info p {
  font-size: 0.82rem;
  color: var(--primary);
  font-weight: 600;
}

@media (max-width: 900px) {
  .menu-grid,
  .set-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .side-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 560px) {
  .menu-grid,
  .set-grid {
    grid-template-columns: 1fr;
  }
  .side-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
