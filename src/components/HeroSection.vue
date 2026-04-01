<template>
  <section class="hero" :style="{ backgroundImage: `url(${heroBg})` }">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <p class="hero-tag animate-fade-down">대한민국 대표 쭈꾸미 프랜차이즈</p>
      <h1 class="hero-title animate-fade-up">거침없이 즐기는<br><span class="highlight">쭈꾸미 한상</span></h1>
      <p class="hero-desc animate-fade-up delay-1">###</p>
      <div class="hero-buttons animate-fade-up delay-2">
        <router-link to="/contact" class="btn-primary btn-pulse">가맹 상담 신청</router-link>
        <router-link to="/franchise" class="btn-outline-white">가맹 정보 보기</router-link>
      </div>
      <div class="hero-revenue animate-fade-up delay-3">
        <div class="revenue-box">
          <span class="revenue-label">월 평균 매출</span>
          <div class="revenue-num">
            <span class="revenue-amount">1억 5천</span>
            <span class="revenue-unit">만원</span>
          </div>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-num count-up">###</span>
            <span class="stat-label">전국 매장</span>
          </div>
          <div class="stat">
            <span class="stat-num">###</span>
            <span class="stat-label">브랜드 역사</span>
          </div>
          <div class="stat">
            <span class="stat-num">###</span>
            <span class="stat-label">가맹점 만족도</span>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-scroll-indicator">
      <span></span>
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
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.55) 50%,
    rgba(0, 0, 0, 0.25) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  color: white;
  max-width: 680px;
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

.highlight {
  color: var(--secondary);
  position: relative;
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
  margin-bottom: 48px;
}

.btn-pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(200, 57, 43, 0.6); }
  70% { box-shadow: 0 0 0 14px rgba(200, 57, 43, 0); }
  100% { box-shadow: 0 0 0 0 rgba(200, 57, 43, 0); }
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

.hero-revenue {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.revenue-box {
  background: rgba(244, 162, 53, 0.15);
  border: 2px solid var(--secondary);
  border-radius: 12px;
  padding: 16px 28px;
  text-align: center;
}

.revenue-label {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.7);
  display: block;
  margin-bottom: 4px;
}

.revenue-num {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.revenue-amount {
  font-size: 2rem;
  font-weight: 900;
  color: var(--secondary);
}

.revenue-unit {
  font-size: 1rem;
  color: rgba(255,255,255,0.7);
}

.hero-stats {
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-size: 1.8rem;
  font-weight: 900;
  color: white;
  line-height: 1;
}

.stat-label {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.55);
  margin-top: 4px;
}

/* Scroll indicator */
.hero-scroll-indicator {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.hero-scroll-indicator span {
  display: block;
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255,255,255,0.5);
  border-radius: 12px;
  position: relative;
}

.hero-scroll-indicator span::after {
  content: '';
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: rgba(255,255,255,0.7);
  border-radius: 2px;
  animation: scrollBounce 1.5s infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
  50% { transform: translateX(-50%) translateY(12px); opacity: 0.3; }
}

/* Animations */
.animate-fade-up {
  animation: fadeUp 0.8s ease-out both;
}

.animate-fade-down {
  animation: fadeDown 0.6s ease-out both;
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
