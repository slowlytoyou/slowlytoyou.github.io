<template>
  <section class="hero" :style="{ backgroundImage: `url(${heroBg})` }">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <h1 class="hero-title animate-fade-up"><span class="hero-title-line">거침없이 즐기는</span><br><span class="highlight">쭈꾸미 한상</span></h1>
      <div class="hero-summary animate-fade-up delay-1">
        <p class="hero-desc">맛은 25년 동안 검증 됐고!<br>구조는 프랜차이즈로 완성됐다!</p>
        <div class="hero-buttons">
          <router-link to="/franchise" class="hero-cta">가맹정보보기</router-link>
        </div>
        <div class="revenue-box">
          <span class="revenue-label">연 평균 매출</span>
          <div class="revenue-num">
            <span class="revenue-amount">16억</span>
            <span class="revenue-unit">원</span>
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
import heroBg from '../assets/식당 조감도 hero.jpg'
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 720px;
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
    linear-gradient(90deg, rgba(18, 45, 117, 0.16) 0%, rgba(18, 45, 117, 0.04) 24%, rgba(255, 255, 255, 0) 48%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(4, 10, 24, 0.04) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  color: white;
  width: min(760px, calc(100% - 48px));
  max-width: 760px;
  margin-top: -244px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  text-shadow: 0 10px 30px rgba(5, 16, 41, 0.2);
  text-align: center;
}

.hero-title {
  font-size: clamp(2.8rem, 5.6vw, 4.8rem);
  font-weight: 900;
  line-height: 1.12;
  margin-bottom: 18px;
  letter-spacing: -0.02em;
}

.hero-title-line {
  white-space: nowrap;
}

.highlight {
  color: var(--secondary);
}

.hero-desc {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.95);
  line-height: 1.7;
  margin: 0;
}

.hero-summary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 12px;
}

.hero-buttons {
  display: flex;
  justify-content: center;
}

.hero-cta {
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 14px 34px;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 700;
  box-shadow: 0 18px 40px rgba(200, 57, 43, 0.28);
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
}

.hero-cta:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 22px 42px rgba(169, 50, 38, 0.34);
}

.revenue-box {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  padding: 16px 24px;
  text-align: center;
  box-shadow: 0 18px 40px rgba(7, 18, 44, 0.18);
  backdrop-filter: blur(10px);
  flex: 0 0 auto;
}

.revenue-label {
  font-size: 0.8rem;
  color: rgba(26, 26, 26, 0.66);
  display: block;
  margin-bottom: 4px;
}

.revenue-num {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.revenue-amount {
  font-size: 2.2rem;
  font-weight: 900;
  color: var(--primary);
}

.revenue-unit {
  font-size: 1rem;
  color: rgba(26, 26, 26, 0.78);
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
    min-height: 760px;
    background-position: center center;
  }

  .hero-content {
    width: calc(100% - 40px);
    max-width: 100%;
    margin-top: -156px;
  }

  .hero-title {
    font-size: clamp(2.5rem, 10vw, 3.4rem);
  }

  .hero-desc {
    max-width: 320px;
    text-align: left;
  }

  .hero-summary {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }

  .hero-buttons {
    justify-content: flex-start;
  }

  .revenue-box {
    padding: 16px 20px;
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
