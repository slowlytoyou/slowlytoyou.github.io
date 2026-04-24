<template>
  <section class="hero" :style="{ backgroundImage: `url(${heroBg})` }">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <h1 class="hero-title animate-fade-up"><span class="hero-title-line">거침없이 즐기는</span><br><span class="highlight">쭈꾸미 한상</span></h1>
      <div class="hero-summary animate-fade-up delay-1">
        <p class="hero-desc">맛은 25년 동안 검증 됐고!<br>구조는 프랜차이즈로 완성됐다!</p>
        <div class="revenue-seal" aria-label="연 매출 16억">
          <img :src="dishSeal" alt="" class="revenue-seal-image" />
          <svg viewBox="0 0 180 180" class="revenue-seal-svg" aria-hidden="true">
            <defs>
              <linearGradient id="heroRevenueGradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stop-color="#4f72ff" />
                <stop offset="55%" stop-color="#8457e8" />
                <stop offset="100%" stop-color="#ff5cb8" />
              </linearGradient>
              <path id="heroRevenueArc" d="M 104 17 A 68 68 0 0 1 163 75" />
            </defs>
            <text class="seal-arc-text">
              <textPath href="#heroRevenueArc" startOffset="31%" text-anchor="middle">연 매 출</textPath>
            </text>
            <text x="90" y="108" text-anchor="middle" class="seal-value">16억!</text>
          </svg>
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
import dishSeal from '../assets/dish-seal.png'
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
  margin-top: -204px;
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

.revenue-seal {
  position: relative;
  width: 176px;
  height: 176px;
  flex: 0 0 auto;
  filter: drop-shadow(0 18px 32px rgba(8, 18, 40, 0.18));
}

.revenue-seal-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.revenue-seal-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: rotate(-24deg);
}

.seal-arc-text {
  fill: rgba(18, 18, 18, 0.96);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.seal-value {
  fill: url(#heroRevenueGradient);
  font-size: 3.7rem;
  font-weight: 900;
  letter-spacing: -0.05em;
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
    align-items: center;
    gap: 18px;
  }

  .hero-desc {
    text-align: center;
  }

  .revenue-seal {
    width: 156px;
    height: 156px;
  }

  .seal-arc-text {
    font-size: 13px;
  }

  .seal-value {
    font-size: 3.3rem;
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
