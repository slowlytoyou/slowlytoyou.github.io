<template>
  <section class="hero" :style="{ backgroundImage: `url(${heroBg})` }">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <p class="hero-tag">대한민국 대표 쭈꾸미 프랜차이즈</p>
      <h1 class="hero-title">아주 맛있는<br>쭈꾸미 나라</h1>
      <p class="hero-desc">20년 전통의 비법 양념으로 만든 쭈꾸미,<br>지금 바로 나만의 매장을 시작하세요.</p>
      <div class="hero-buttons">
        <router-link to="/contact" class="btn-primary">가맹 상담 신청</router-link>
        <router-link to="/franchise" class="btn-outline-white">가맹 정보 보기</router-link>
      </div>
      <div class="hero-stats">
        <div class="stat">
          <span class="stat-num">300+</span>
          <span class="stat-label">전국 매장</span>
        </div>
        <div class="stat">
          <span class="stat-num">20년</span>
          <span class="stat-label">브랜드 역사</span>
        </div>
        <div class="stat">
          <span class="stat-num">98%</span>
          <span class="stat-label">가맹점 만족도</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroBg from '../assets/식당 전경3.png'
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.80) 0%,
    rgba(0, 0, 0, 0.55) 50%,
    rgba(0, 0, 0, 0.25) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  color: white;
  max-width: 640px;
}

.hero-tag {
  display: inline-block;
  background: var(--primary);
  color: white;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 20px;
  margin-bottom: 20px;
  letter-spacing: 0.05em;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  line-height: 1.15;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.hero-desc {
  font-size: 1.15rem;
  color: rgba(255,255,255,0.85);
  margin-bottom: 40px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 60px;
}

.btn-outline-white {
  display: inline-block;
  border: 2px solid rgba(255,255,255,0.7);
  color: white;
  padding: 12px 34px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.2s;
}

.btn-outline-white:hover {
  background: white;
  color: var(--dark);
}

.hero-stats {
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-size: 2rem;
  font-weight: 900;
  color: var(--secondary);
  line-height: 1;
}

.stat-label {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.6);
  margin-top: 4px;
}
</style>
