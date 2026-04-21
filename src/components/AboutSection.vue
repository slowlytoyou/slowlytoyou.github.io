<template>
  <section class="section about-section" id="about">
    <div class="container">
      <div class="section-header" v-animate="'fade-up'">
        <p class="label-tag">WHY 쭈나라</p>
        <h2 class="section-title">쭈나라 <span class="title-accent">강점</span></h2>
        <p class="section-subtitle">유행이 아닌 구조, 쭈나라꾸미.</p>
      </div>

      <div class="strengths-grid">
        <div v-for="(item, i) in strengths" :key="i" class="strength-card" :class="`strength-${i}`" v-animate:[i*120]="'fade-up'">
          <div v-if="item.isRevenue" class="strength-revenue-seal" aria-label="연 매출 16억">
            <img :src="dishSeal" alt="" class="strength-revenue-image" />
            <svg viewBox="0 0 180 180" class="strength-revenue-svg" aria-hidden="true">
              <defs>
                <path id="about-revenue-arc" d="M 34 104 A 56 56 0 0 1 146 104" />
              </defs>
              <text class="strength-seal-arc">
                <textPath href="#about-revenue-arc" startOffset="50%" text-anchor="middle">연 매 출</textPath>
              </text>
            </svg>
            <div class="strength-seal-center">
              <span class="strength-seal-value">16억</span>
            </div>
          </div>
          <div v-else class="strength-icon-wrap">
            <span class="strength-icon">{{ item.icon }}</span>
          </div>
          <div class="strength-num">{{ String(i + 1).padStart(2, '0') }}</div>
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
        </div>
      </div>

      <!-- BS 창업전략연구소 전용 섹션 -->
      <div class="bs-section" v-animate="'fade-up'" :style="{ backgroundImage: `linear-gradient(135deg, rgba(10, 29, 51, 0.9), rgba(13, 35, 61, 0.78)), url(${conceptB})` }">
        <div class="bs-badge">BS 창업전략연구소</div>
        <h3 class="bs-title">매장을 살리고 성장시키는 <span>컨설팅 조직</span></h3>
        <div class="bs-content">
          <p>
            <strong>블루솔트 창업전략연구소</strong>는 쭈나라꾸미의 전략적 파트너로서,
            가맹점의 <strong>'실제 수익'</strong>을 만들어내는 전문 컨설팅 조직입니다.
          </p>
          <p>
            본사는 단순한 관리 체계를 넘어, 전문 컨설팅 기능을 체계적으로 구축하여
            가맹점을 실질적으로 지원하는 운영 시스템을 갖추고 있습니다.
            기존 프랜차이즈가 관리 중심에 머무는 것과 달리, 블루솔트는 각 매장의 상황을 분석하고
            <strong>수익이 나는 구조를 설계</strong>하는 데 집중합니다.
          </p>
        </div>
        <div class="bs-features">
          <div class="bs-feature">
            <div class="bs-feature-icon">📊</div>
            <h4>데이터 기반 진단</h4>
            <p>상권, 매출, 인력 운영, 원가 구조까지 매장의 실제 데이터를 기반으로 문제를 진단합니다.</p>
          </div>
          <div class="bs-feature">
            <div class="bs-feature-icon">⚙️</div>
            <h4>운영 전반 개선</h4>
            <p>운영 전반을 개선하여 실질적인 매출과 수익으로 연결합니다.</p>
          </div>
          <div class="bs-feature">
            <div class="bs-feature-icon">🔄</div>
            <h4>지속적 점검</h4>
            <p>오픈 이후에도 일회성 지원에 그치지 않고 지속적인 점검과 분석으로 함께합니다.</p>
          </div>
        </div>
        <p class="bs-conclusion">
          블루솔트 창업전략연구소는 단순한 관리 조직이 아니라,<br>
          <strong>매장을 살리고 성장시키는 컨설팅 조직</strong>입니다.
        </p>
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
import conceptB from '../assets/식당 전경3.png'
import dishSeal from '../assets/dish-seal.png'

const strengths = [
  { icon: '🔥', title: '검증된 맛', desc: '2002 월드컵부터 시작, 쭈꾸미와 피자의 조합이 유명한 집' },
  { icon: '📊', title: '연 매출 16억', desc: '25년 동안 안정적인 집객력과 매출 구조를 유지해온 검증된 브랜드입니다.', isRevenue: true },
  { icon: '⚡', title: '차별화된 조리시스템', desc: '5분 조리는 인건비 절감과 초보창업자를 위한 완성본' },
  { icon: '🧪', title: 'BS 창업전략연구소', desc: '수익이 나는 구조를 설계하는 전문 컨설팅 파트너' },
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
  position: relative;
  overflow: hidden;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--primary), var(--secondary), var(--primary));
  background-size: 200% 100%;
  animation: gradientShift 4s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
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

.title-accent {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  color: var(--gray);
  font-style: italic;
}

/* Strengths Grid - 강조 디자인 */
.strengths-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 80px;
}

.strength-card {
  background: white;
  border-radius: 20px;
  padding: 36px 24px 30px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.strength-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--primary), #e05545);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
}

.strength-card > * {
  position: relative;
  z-index: 1;
}

.strength-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(200, 57, 43, 0.25);
}

.strength-card:hover::before {
  opacity: 1;
}

.strength-card:hover h3,
.strength-card:hover p,
.strength-card:hover .strength-num {
  color: white;
}

.strength-card:hover .strength-icon-wrap {
  background: rgba(255,255,255,0.2);
}

.strength-card.strength-1 {
  background: white;
}

.strength-num {
  position: absolute;
  top: 16px;
  right: 20px;
  font-size: 2.2rem;
  font-weight: 900;
  color: rgba(200, 57, 43, 0.12);
  line-height: 1;
  transition: color 0.4s ease;
}

.strength-icon-wrap {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(200,57,43,0.1), rgba(244,162,53,0.15));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  transition: background 0.4s ease;
}

.strength-revenue-seal {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
}

.strength-revenue-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.strength-revenue-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.strength-seal-arc {
  fill: rgba(200, 57, 43, 0.96);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.34em;
}

.strength-seal-center {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.strength-seal-value {
  font-size: 1.35rem;
  font-weight: 900;
  color: var(--primary);
  letter-spacing: -0.05em;
}

.strength-icon {
  font-size: 2.4rem;
}

.strength-card h3 {
  font-size: 1.1rem;
  font-weight: 800;
  margin-bottom: 12px;
  color: var(--dark);
  transition: color 0.4s ease;
}

.strength-card p {
  font-size: 0.85rem;
  color: var(--gray);
  line-height: 1.7;
  transition: color 0.4s ease;
}

/* Brand Intro */
.brand-intro {
  margin-bottom: 60px;
  background: white;
  border-radius: 20px;
  padding: 56px 48px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
  position: relative;
  overflow: hidden;
}

.brand-intro::before {
  content: '"';
  position: absolute;
  top: -20px;
  left: 30px;
  font-size: 12rem;
  color: rgba(200, 57, 43, 0.06);
  font-family: serif;
  line-height: 1;
}

.brand-quote {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary);
  text-align: center;
  margin-bottom: 32px;
  line-height: 1.5;
  position: relative;
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
  font-weight: 800;
  font-size: 1.15rem !important;
  text-align: center;
  padding: 20px 0 0;
  letter-spacing: -0.01em;
}

/* BS Section */
.bs-section {
  background-size: cover;
  background-position: center;
  color: white;
  border-radius: 24px;
  padding: 60px 48px;
  margin-bottom: 70px;
  position: relative;
  overflow: hidden;
}

.bs-section::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(100, 180, 255, 0.15) 0%, transparent 70%);
  border-radius: 50%;
}

.bs-section::after {
  content: '';
  position: absolute;
  bottom: -80px;
  left: -80px;
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(244, 162, 53, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.bs-badge {
  display: inline-block;
  background: linear-gradient(135deg, #4a90e2, #5fa3f0);
  color: white;
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 0.05em;
  position: relative;
}

.bs-title {
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 28px;
  line-height: 1.4;
  position: relative;
}

.bs-title span {
  color: #5fa3f0;
}

.bs-content {
  position: relative;
  margin-bottom: 36px;
}

.bs-content p {
  color: rgba(255,255,255,0.85);
  line-height: 1.9;
  font-size: 0.98rem;
  margin-bottom: 14px;
}

.bs-content strong {
  color: #5fa3f0;
  font-weight: 700;
}

.bs-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 32px;
  position: relative;
}

.bs-feature {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  padding: 24px 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.bs-feature:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(95,163,240,0.4);
  transform: translateY(-4px);
}

.bs-feature-icon {
  font-size: 2.2rem;
  margin-bottom: 12px;
}

.bs-feature h4 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: white;
}

.bs-feature p {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.7;
}

.bs-conclusion {
  text-align: center;
  font-size: 1.05rem;
  color: rgba(255,255,255,0.9);
  line-height: 1.8;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.15);
  position: relative;
}

.bs-conclusion strong {
  color: #5fa3f0;
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
  border-left: 4px solid var(--primary);
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
  .bs-features {
    grid-template-columns: 1fr;
  }
  .brand-intro {
    padding: 36px 24px;
  }
  .bs-section {
    padding: 40px 24px;
  }
  .bs-title {
    font-size: 1.4rem;
  }
}

@media (max-width: 560px) {
  .strengths-grid,
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
