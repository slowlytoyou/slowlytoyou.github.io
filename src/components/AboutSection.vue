<template>
  <section class="section about-section" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-image">
          <img :src="storeImg" alt="쭈나라꾸미 매장 전경" class="main-img" />
          <div class="about-badge">
            <strong>2004</strong>
            <span>창업</span>
          </div>
          <div class="interior-thumb">
            <img :src="interiorImg" alt="매장 인테리어" />
            <span>표준 인테리어</span>
          </div>
        </div>
        <div class="about-text">
          <p class="label-tag">브랜드 스토리</p>
          <h2 class="section-title">20년 전통의<br>쭈꾸미 맛을 이어가다</h2>
          <p class="about-desc">
            2004년 작은 골목식당에서 시작한 쭈나라꾸미는 진심 어린 맛 하나로
            전국 300여 개의 매장을 운영하는 대한민국 대표 쭈꾸미 프랜차이즈로 성장했습니다.
          </p>
          <p class="about-desc">
            신선한 국내산 쭈꾸미, 20년을 지켜온 비법 양념, 그리고 가맹점주와 함께
            성장하는 상생 경영을 통해 지속적인 브랜드 신뢰를 쌓아가고 있습니다.
          </p>
          <div class="about-features">
            <div class="feature">
              <span class="feature-icon">✓</span>
              <span>100% 국내산 신선 쭈꾸미 사용</span>
            </div>
            <div class="feature">
              <span class="feature-icon">✓</span>
              <span>20년 비법 양념 레시피 완전 전수</span>
            </div>
            <div class="feature">
              <span class="feature-icon">✓</span>
              <span>전문 교육 센터 운영 (4주 과정)</span>
            </div>
            <div class="feature">
              <span class="feature-icon">✓</span>
              <span>24시간 본사 서포트 시스템</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import storeImg from '../assets/식당 전경2.jpg'
import interiorImg from '../assets/식당 조감도2.jpg'
</script>

<style scoped>
.about-section {
  background: var(--light-gray);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-image {
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

.interior-thumb {
  margin-top: 14px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.interior-thumb img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;
}

.interior-thumb span {
  position: absolute;
  bottom: 8px;
  left: 12px;
  background: rgba(0,0,0,0.55);
  color: white;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
}

.label-tag {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}

.about-desc {
  color: var(--gray);
  line-height: 1.8;
  margin-bottom: 16px;
}

.about-features {
  margin-top: 28px;
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

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-badge {
    right: 10px;
    bottom: 100px;
    width: 80px;
    height: 80px;
  }
}
</style>
