<template>
  <section class="section about-section" id="about">
    <div class="container">
      <div class="section-header" v-animate="'fade-up'">
        <p class="label-tag">WHY 쭈나라</p>
        <h2 class="section-title">쭈나라 강점</h2>
        <p class="section-subtitle">쭈나라꾸미가 선택받는 이유, 확실한 경쟁력을 확인하세요.</p>
      </div>

      <div class="strengths-grid">
        <div v-for="(item, i) in strengths" :key="i" class="strength-card" :class="`strength-${i}`" v-animate:[i*100]="'fade-up'">
          <div class="strength-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>

      <div class="about-visual">
        <div class="about-image-wrap" v-animate="'fade-right'">
          <img :src="storeImg" alt="쭈나라꾸미 매장 전경" class="main-img" />
          <div class="about-badge">
            <strong>###</strong>
            <span>창업</span>
          </div>
        </div>
        <div class="about-text" v-animate="'fade-left'">
          <h3 class="about-sub-title">###</h3>
          <p class="about-desc">
            ########################################
          </p>
          <div class="about-features">
            <div v-for="(f, i) in features" :key="i" class="feature">
              <span class="feature-icon">✓</span>
              <span>{{ f }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import storeImg from '../assets/식당 전경2.jpg'

const strengths = [
  { icon: '🔥', title: '검증된 맛', desc: '####################' },
  { icon: '📊', title: '월 평균 매출 1억 5천', desc: '전국 가맹점 평균 월 매출 1억 5천만원 달성, 안정적인 수익 구조' },
  { icon: '🏪', title: '소자본 창업 가능', desc: '####################' },
  { icon: '🤝', title: '본사 전폭 지원', desc: '####################' },
  { icon: '🚚', title: '식자재 직공급', desc: '####################' },
  { icon: '📱', title: '스마트 운영 시스템', desc: '####################' },
]

const features = [
  '####################',
  '####################',
  '####################',
  '####################',
]
</script>

<style scoped>
.about-section {
  background: var(--light-gray);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.label-tag {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}

.section-subtitle {
  color: var(--gray);
}

/* Strengths Grid */
.strengths-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 80px;
}

.strength-card {
  background: white;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.strength-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--primary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.strength-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 36px rgba(0,0,0,0.12);
}

.strength-card:hover::before {
  transform: scaleX(1);
}

.strength-icon {
  font-size: 2.8rem;
  margin-bottom: 16px;
}

.strength-card h3 {
  font-size: 1.1rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: var(--dark);
}

.strength-card p {
  font-size: 0.88rem;
  color: var(--gray);
  line-height: 1.7;
}

/* About Visual */
.about-visual {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-image-wrap {
  position: relative;
}

.main-img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 16px;
  display: block;
}

.about-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--primary);
  color: white;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(200,57,43,0.4);
  z-index: 1;
  animation: badgePulse 2s infinite;
}

@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.about-badge strong {
  font-size: 1.4rem;
  font-weight: 900;
  line-height: 1;
}

.about-badge span {
  font-size: 0.75rem;
  margin-top: 2px;
}

.about-sub-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--dark);
  margin-bottom: 16px;
  line-height: 1.4;
}

.about-desc {
  color: var(--gray);
  line-height: 1.8;
  margin-bottom: 28px;
}

.about-features {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: var(--text);
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: var(--primary);
  color: white;
  border-radius: 50%;
  font-size: 0.7rem;
  font-weight: 700;
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .strengths-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .about-visual {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 560px) {
  .strengths-grid {
    grid-template-columns: 1fr;
  }
  .about-badge {
    right: 10px;
    bottom: -10px;
    width: 80px;
    height: 80px;
  }
}
</style>
