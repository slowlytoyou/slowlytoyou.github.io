<template>
  <section class="section franchise-section" id="franchise">
    <div class="container">
      <div class="section-header">
        <p class="label-tag">가맹 안내</p>
        <h2 class="section-title">함께 성공하는<br>쭈나라꾸미 가맹 시스템</h2>
        <p class="section-subtitle">투명한 가맹 조건과 체계적인 지원으로 성공을 함께 만들어 갑니다.</p>
      </div>

      <!-- 매장 사진 갤러리 -->
      <div class="store-gallery">
        <div class="gallery-main">
          <img :src="store3" alt="쭈나라꾸미 표준 매장" />
          <span class="gallery-label">표준 매장 외관</span>
        </div>
        <div class="gallery-sub">
          <div class="gallery-item">
            <img :src="store1" alt="매장 간판" />
            <span class="gallery-label">매장 간판</span>
          </div>
          <div class="gallery-item">
            <img :src="interior1" alt="인테리어 조감도" />
            <span class="gallery-label">인테리어 조감도</span>
          </div>
        </div>
      </div>

      <!-- 가맹 절차 -->
      <div class="process-steps">
        <div v-for="(step, index) in steps" :key="index" class="step">
          <div class="step-num">{{ index + 1 }}</div>
          <div class="step-content">
            <h4>{{ step.title }}</h4>
            <p>{{ step.desc }}</p>
          </div>
          <div v-if="index < steps.length - 1" class="step-arrow">→</div>
        </div>
      </div>

      <!-- 가맹 비용 -->
      <div class="cost-table-wrap">
        <h3 class="cost-title">가맹 비용 안내</h3>
        <div class="cost-table">
          <div class="cost-row header">
            <span>항목</span>
            <span>소형 (20평 이하)</span>
            <span>중형 (20~40평)</span>
            <span>대형 (40평 이상)</span>
          </div>
          <div v-for="row in costRows" :key="row.item" class="cost-row">
            <span>{{ row.item }}</span>
            <span>{{ row.small }}</span>
            <span>{{ row.medium }}</span>
            <span>{{ row.large }}</span>
          </div>
        </div>
        <p class="cost-notice">※ 위 금액은 VAT 포함 기준이며, 점포 상황에 따라 달라질 수 있습니다.</p>
      </div>

      <!-- 본사 지원 -->
      <div class="support-grid">
        <div v-for="s in supports" :key="s.title" class="support-card">
          <span class="support-icon">{{ s.icon }}</span>
          <h4>{{ s.title }}</h4>
          <p>{{ s.desc }}</p>
        </div>
      </div>

      <!-- 브랜드 아이덴티티 -->
      <div class="brand-identity">
        <h3 class="cost-title">브랜드 아이덴티티 패키지</h3>
        <p class="brand-sub">가맹 계약 시 본사가 일괄 제공하는 브랜드 패키지입니다.</p>
        <div class="brand-grid">
          <div v-for="b in brandItems" :key="b.label" class="brand-card">
            <div class="brand-img">
              <img :src="b.img" :alt="b.label" />
            </div>
            <p>{{ b.label }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="cta-box">
        <p>지금 바로 상담을 신청하고 성공 창업의 첫 걸음을 내딛으세요.</p>
        <router-link to="/contact" class="btn-primary">무료 상담 신청하기</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import store1 from '../assets/식당 전경1.jpg'
import store3 from '../assets/식당 전경3.png'
import interior1 from '../assets/식당 조감도.jpg'
import imgApron from '../assets/30 앞치마.jpg'
import imgDish from '../assets/22 용기.jpg'
import imgVan from '../assets/50 승합차-A.jpg'
import imgPackage from '../assets/쭈꾸미포장.jpg'
import imgBanner from '../assets/15 오픈현수막.jpg'

const steps = [
  { title: '상담 신청', desc: '온라인 또는 전화 상담' },
  { title: '현장 방문', desc: '본사 방문 및 매장 견학' },
  { title: '상권 분석', desc: '입지 및 상권 전문 분석' },
  { title: '계약 체결', desc: '가맹 계약 및 교육 시작' },
  { title: '오픈 준비', desc: '인테리어·설비 지원' },
  { title: '그랜드 오픈', desc: '본사 오픈 지원팀 파견' },
]

const costRows = [
  { item: '가맹비', small: '500만원', medium: '700만원', large: '1,000만원' },
  { item: '교육비', small: '200만원', medium: '200만원', large: '200만원' },
  { item: '인테리어', small: '3,000만원~', medium: '5,000만원~', large: '8,000만원~' },
  { item: '초도물품', small: '300만원', medium: '400만원', large: '500만원' },
  { item: '보증금', small: '500만원', medium: '700만원', large: '1,000만원' },
]

const supports = [
  { icon: '📚', title: '체계적인 교육', desc: '4주 본사 교육 + 현장 실습으로 누구나 쉽게 운영 가능' },
  { icon: '📦', title: '식자재 직공급', desc: '본사 직거래로 신선한 재료를 합리적인 가격에 공급' },
  { icon: '📱', title: 'POS & 앱 지원', desc: '스마트 주문·배달·정산 시스템 무료 제공' },
  { icon: '📣', title: '마케팅 지원', desc: '전국 광고·SNS·앱 마케팅 본사 직접 운영' },
]

const brandItems = [
  { label: '유니폼 (앞치마)', img: imgApron },
  { label: '브랜드 식기', img: imgDish },
  { label: '홍보 차량 래핑', img: imgVan },
  { label: '포장 용기', img: imgPackage },
  { label: '오픈 현수막', img: imgBanner },
]
</script>

<style scoped>
.franchise-section {
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

/* 매장 갤러리 */
.store-gallery {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 16px;
  margin-bottom: 70px;
  border-radius: 16px;
  overflow: hidden;
}

.gallery-main,
.gallery-item {
  position: relative;
  overflow: hidden;
}

.gallery-main img {
  width: 100%;
  height: 360px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.gallery-main:hover img {
  transform: scale(1.03);
}

.gallery-sub {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.gallery-item img {
  width: 100%;
  height: 172px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.gallery-item:hover img {
  transform: scale(1.03);
}

.gallery-label {
  position: absolute;
  bottom: 10px;
  left: 12px;
  background: rgba(0,0,0,0.55);
  color: white;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
}

/* 가맹 절차 */
.process-steps {
  display: flex;
  align-items: flex-start;
  gap: 0;
  margin-bottom: 70px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.step {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.step-num {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--primary);
  color: white;
  font-size: 1.1rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-content h4 {
  font-size: 0.9rem;
  font-weight: 700;
  white-space: nowrap;
}

.step-content p {
  font-size: 0.78rem;
  color: var(--gray);
  white-space: nowrap;
}

.step-arrow {
  font-size: 1.3rem;
  color: var(--gray);
  margin: 0 12px;
  padding-bottom: 16px;
}

/* 비용표 */
.cost-table-wrap {
  margin-bottom: 60px;
}

.cost-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.brand-sub {
  font-size: 0.88rem;
  color: var(--gray);
  margin-bottom: 24px;
}

.cost-table {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  background: white;
}

.cost-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 14px 24px;
  font-size: 0.9rem;
  border-bottom: 1px solid #f0f0f0;
}

.cost-row:last-child {
  border-bottom: none;
}

.cost-row.header {
  background: var(--dark);
  color: white;
  font-weight: 700;
}

.cost-row:not(.header):hover {
  background: #fafafa;
}

.cost-notice {
  font-size: 0.8rem;
  color: var(--gray);
  margin-top: 10px;
}

/* 지원 카드 */
.support-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 60px;
}

.support-card {
  background: white;
  border-radius: 12px;
  padding: 28px 20px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}

.support-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 14px;
}

.support-card h4 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.support-card p {
  font-size: 0.85rem;
  color: var(--gray);
  line-height: 1.6;
}

/* 브랜드 아이덴티티 */
.brand-identity {
  margin-bottom: 60px;
}

.brand-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.brand-card {
  border-radius: 10px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  transition: transform 0.2s;
}

.brand-card:hover {
  transform: translateY(-3px);
}

.brand-img {
  height: 150px;
  overflow: hidden;
}

.brand-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.brand-card:hover .brand-img img {
  transform: scale(1.05);
}

.brand-card p {
  padding: 10px 12px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text);
  text-align: center;
}

/* CTA */
.cta-box {
  background: var(--primary);
  color: white;
  border-radius: 16px;
  padding: 48px;
  text-align: center;
}

.cta-box p {
  font-size: 1.1rem;
  margin-bottom: 24px;
  opacity: 0.9;
}

.cta-box .btn-primary {
  background: white;
  color: var(--primary);
  font-size: 1.05rem;
}

.cta-box .btn-primary:hover {
  background: #f8f8f8;
}

@media (max-width: 900px) {
  .support-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .brand-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .store-gallery {
    grid-template-columns: 1fr;
  }
  .gallery-main img {
    height: 240px;
  }
  .gallery-sub {
    flex-direction: row;
  }
  .gallery-item img {
    height: 150px;
  }
  .cost-row {
    font-size: 0.78rem;
    padding: 12px 14px;
  }
}

@media (max-width: 560px) {
  .support-grid {
    grid-template-columns: 1fr;
  }
  .brand-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .cta-box {
    padding: 32px 20px;
  }
}
</style>
