<template>
  <section class="hero" :style="{ backgroundImage: `url(${heroBg})` }">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <h1 class="hero-title animate-fade-up">거침없이 즐기는<br><span class="highlight">쭈꾸미 한상</span></h1>
      <p class="hero-desc animate-fade-up delay-1">맛은 25년 동안 검증 됐고!<br>구조는 프랜차이즈로 완성됐다!</p>
      <div class="hero-buttons animate-fade-up delay-2">
        <router-link to="/contact" class="btn-primary btn-pulse">가맹 상담 신청</router-link>
        <router-link to="/franchise" class="btn-outline-white">가맹 정보 보기</router-link>
      </div>
      <div class="hero-revenue animate-fade-up delay-3">
        <div class="revenue-box">
          <span class="revenue-label">연 평균 매출</span>
          <div class="revenue-num">
            <span class="revenue-amount">16억</span>
            <span class="revenue-unit">원</span>
          </div>
        </div>
        <p class="hero-note">검증된 맛과 운영 시스템을 바탕으로 대형 매장형 가맹 모델을 제안합니다.</p>
      </div>
    </div>
    <div class="hero-scroll-indicator">
      <span></span>
    </div>
  </section>
</template>

<script setup>
import heroBg from '../assets/식당 조감도.jpg'
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 82% 18%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 28%),
    linear-gradient(100deg, rgba(7, 18, 44, 0.66) 0%, rgba(18, 56, 126, 0.34) 48%, rgba(255, 255, 255, 0.08) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  color: white;
  max-width: 720px;
  text-shadow: 0 10px 30px rgba(5, 16, 41, 0.28);
}

.hero-title {
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  font-weight: 900;
  line-height: 1.12;
  margin-bottom: 18px;
  letter-spacing: -0.02em;
}

.highlight {
  color: var(--secondary);
}

.hero-desc {
  font-size: 1.08rem;
  color: rgba(255,255,255,0.92);
  margin-bottom: 32px;
  line-height: 1.75;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 32px;
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
  border: 1px solid rgba(255,255,255,0.4);
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
  align-items: flex-end;
  gap: 20px;
  flex-wrap: wrap;
}

.revenue-box {
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 12px;
  padding: 16px 24px;
  text-align: center;
  box-shadow: 0 16px 32px rgba(6, 18, 45, 0.2);
  backdrop-filter: blur(8px);
}

.revenue-label {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.78);
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
  color: #FEE500;
  text-shadow: 0 0 12px rgba(254, 229, 0, 0.4);
}

.revenue-unit {
  font-size: 1rem;
  color: rgba(255,255,255,0.82);
}

.hero-note {
  max-width: 300px;
  font-size: 0.92rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.82);
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
  border: 2px solid rgba(255,255,255,0.7);
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
  background: rgba(255,255,255,0.85);
  border-radius: 2px;
  animation: scrollBounce 1.5s infinite;
}

@keyframes scrollBounce {
  0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
  50% { transform: translateX(-50%) translateY(12px); opacity: 0.3; }
}

@media (max-width: 768px) {
  .hero {
    min-height: 680px;
    background-position: 62% center;
  }

  .hero-content {
    padding-top: 24px;
  }

  .hero-note {
    max-width: none;
  }
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
