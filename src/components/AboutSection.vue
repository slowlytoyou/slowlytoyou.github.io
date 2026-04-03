<template>
  <section class="section about-section" id="about">
    <div class="container">
      <div class="section-header" v-animate="'fade-up'">
        <p class="label-tag">WHY 쭈나라</p>
        <h2 class="section-title">쭈나라 강점</h2>
        <p class="section-subtitle">유행이 아닌 구조, 쭈나라꾸미.</p>
      </div>

      <div class="strengths-grid">
        <div v-for="(item, i) in strengths" :key="i" class="strength-card" v-animate:[i*100]="'fade-up'">
          <div class="strength-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>

      <!-- 브랜드 소개 -->
      <div class="brand-intro" v-animate="'fade-up'">
        <h3 class="brand-quote">"불맛 하나로 25년, 시스템으로 미래를 잇다."</h3>
        <div class="brand-text">
          <p>
            쭈나라꾸미는 단순한 식당이 아닌, <strong>'구조로 설계된 사업형 프랜차이즈'</strong>입니다.
            검증된 불맛 쭈꾸미를 기반으로 누구나 안정적으로 운영할 수 있는 시스템을 구축하고,
            대형 매장 중심의 구조를 통해 어떤 상권에서도 고객을 끌어들이는 집객형 매장을 만들어냅니다.
          </p>
          <p>
            우리는 상권이나 메뉴보다 먼저 수익이 나는 구조와 지속 가능한 운영 방식을 설계합니다.
            그 결과, 쭈나라꾸미는 외식업의 한계를 넘어 매출과 운영 안정성을 동시에 확보하는 비즈니스 모델로 자리 잡았습니다.
          </p>
          <p class="brand-bold">
            쭈나라꾸미는 환경에 맞추지 않습니다. 환경을 장악합니다.
          </p>
          <p>
            BS(블루솔트)창업전략연구소는 가맹점의 오픈부터 운영 전반까지 함께하며,
            구조가 실제 수익으로 이어질 수 있도록 지속적으로 분석하고 개선합니다.
            우리는 단순한 가맹 확대가 아닌, 다음 세대까지 이어질 수 있는 사업 구조를 만듭니다.
          </p>
        </div>
      </div>

      <!-- 브랜드 특장점 -->
      <div class="features-grid">
        <div v-for="(item, i) in features" :key="i" class="feature-card" v-animate:[i*100]="'fade-up'">
          <div class="feature-num">{{ String(i + 1).padStart(2, '0') }}</div>
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
        </div>
      </div>

      <div class="about-visual" v-animate="'fade-up'">
        <div class="about-image-wrap">
          <img :src="storeImg" alt="쭈나라꾸미 매장 전경" class="main-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import storeImg from '../assets/식당 전경2.jpg'

const strengths = [
  { icon: '🔥', title: '검증된 맛', desc: '2002 월드컵부터 시작, 쭈꾸미와 피자의 조합이 유명한 집' },
  { icon: '📊', title: '월 평균 매출 1억 5천', desc: '높은 매출을 오랜 시간 유지' },
  { icon: '⚡', title: '차별화된 조리시스템', desc: '5분 조리는 인건비 절감과 초보창업자를 위한 완성본' },
  { icon: '💼', title: '비즈니스 사업모델', desc: '소자본 생계형 사업이 아닌 투자형 비즈니스 모델' },
]

const features = [
  { title: '높은 수익성', desc: '평균 25%~30% 수익구조를 만들어 갑니다.' },
  { title: '비즈니스 모델', desc: '상권에 맞추는 브랜드가 아니라, 환경을 장악하는 구조의 대형 비즈니스 모델입니다.' },
  { title: '대구경북 프리미엄 쭈꾸미 브랜드', desc: '자부심은 전국 최강으로, 가맹점수는 소수 정예로 운영됩니다.' },
  { title: '한국식 양식 메뉴 구성', desc: '쭈꾸미와 피자의 조합은 가성비와 가심비로 많은 고객들을 사로잡아 왔습니다.' },
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
  font-style: italic;
}

/* Strengths Grid */
.strengths-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 70px;
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
  font-size: 1.05rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: var(--dark);
}

.strength-card p {
  font-size: 0.85rem;
  color: var(--gray);
  line-height: 1.7;
}

/* Brand Intro */
.brand-intro {
  margin-bottom: 70px;
  background: white;
  border-radius: 16px;
  padding: 48px 40px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
}

.brand-quote {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--primary);
  text-align: center;
  margin-bottom: 32px;
  line-height: 1.5;
}

.brand-text p {
  color: var(--gray);
  line-height: 1.9;
  margin-bottom: 16px;
  font-size: 0.95rem;
}

.brand-text p:last-child {
  margin-bottom: 0;
}

.brand-bold {
  color: var(--dark) !important;
  font-weight: 700;
  font-size: 1.05rem !important;
  text-align: center;
  padding: 16px 0;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 70px;
}

.feature-card {
  background: white;
  border-radius: 16px;
  padding: 28px 24px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 28px rgba(0,0,0,0.12);
}

.feature-num {
  font-size: 2rem;
  font-weight: 900;
  color: var(--secondary);
  margin-bottom: 12px;
  line-height: 1;
}

.feature-card h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 8px;
}

.feature-card p {
  font-size: 0.85rem;
  color: var(--gray);
  line-height: 1.7;
}

/* About Visual */
.about-visual {
  text-align: center;
}

.about-image-wrap {
  display: inline-block;
  max-width: 800px;
  width: 100%;
}

.main-img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 16px;
  display: block;
}

@media (max-width: 900px) {
  .strengths-grid,
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .brand-intro {
    padding: 32px 24px;
  }
}

@media (max-width: 560px) {
  .strengths-grid,
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
