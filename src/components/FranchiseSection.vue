<template>
  <section class="section franchise-section" id="franchise">
    <div class="container">
      <div class="section-header" v-animate="'fade-up'">
        <p class="label-tag">BUSINESS FRANCHISING</p>
        <h2 class="section-title">함께 성공하는<br>쭈나라꾸미 가맹 시스템</h2>
        <p class="section-subtitle">
          누구나 가맹점 하고 싶어 하지만 아무나 가맹점을 할 수 없는 사업입니다.<br>
          철저한 내부 심사를 통해 선발됩니다.
        </p>
      </div>

      <!-- 매장 사진 갤러리 -->
      <div class="store-gallery" v-animate="'fade-up'">
        <div class="gallery-feature">
          <img :src="conceptA" alt="인테리어 컨셉A" />
          <span class="gallery-label">인테리어 컨셉 A</span>
        </div>
        <div class="gallery-feature">
          <img :src="conceptB" alt="인테리어 컨셉B" />
          <span class="gallery-label">인테리어 컨셉 B</span>
        </div>
      </div>

      <!-- 내부 사진 및 3D 도면 -->
      <div class="interior-grid" v-animate="'fade-up'">
        <div
          v-for="item in detailShots"
          :key="item.title"
          class="interior-item"
        >
          <img :src="item.img" :alt="item.title" />
          <span class="gallery-label gallery-label--light">{{ item.title }}</span>
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
      <div class="cost-table-wrap" v-animate="'fade-up'">
        <h3 class="cost-title">초기 투자비용 안내</h3>
        <p class="cost-sub">70평 기준 / 단위: 만원 / 부가세 별도</p>
        <div class="cost-table">
          <div class="cost-row header">
            <span>항목</span>
            <span>금액</span>
            <span>비고</span>
          </div>
          <div v-for="row in costRows" :key="row.item" class="cost-row">
            <span>{{ row.item }}</span>
            <span class="cost-amount">{{ row.amount }}</span>
            <span class="cost-note">{{ row.note }}</span>
          </div>
          <div class="cost-row total">
            <span>총합계</span>
            <span class="cost-amount">21,900</span>
            <span></span>
          </div>
        </div>
        <p class="cost-notice">※ 상기 인테리어 비용은 예상 금액으로, 현장 실측 및 매장 조건에 따라 변동될 수 있습니다.</p>
        <p class="cost-notice">※ 매장 상황에 따라 인테리어, 간판, 주방 시설 비용은 일부 조정될 수 있습니다.</p>
      </div>

      <!-- 본사 지원 -->
      <div class="support-section" v-animate="'fade-up'">
        <h3 class="cost-title">본사 지원 시스템</h3>
        <div class="support-cards">
          <div class="support-card">
            <span class="support-icon">🔍</span>
            <h4>철저한 심사 선발</h4>
            <p>가맹점은 단순 신청이 아닌, 철저한 내부 심사를 통해 선발됩니다.</p>
          </div>
          <div class="support-card">
            <span class="support-icon">🧪</span>
            <h4>블루솔트 창업전략연구소</h4>
            <p>오랜 경험을 가진 프랜차이즈 전문가들로 구성되어, 가맹점을 성공적인 창업으로 이끌어 드립니다.</p>
          </div>
        </div>
      </div>

      <!-- 브랜드 아이덴티티 -->
      <div class="brand-identity" v-animate="'fade-up'">
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
      <div class="cta-box" v-animate="'scale'">
        <p>지금 바로 상담을 신청하고 성공 창업의 첫 걸음을 내딛으세요.</p>
        <router-link to="/contact" class="btn-primary">무료 상담 신청하기</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import conceptA from '../assets/식당 조감도.jpg'
import conceptB from '../assets/식당 전경3.png'
import view03 from '../assets/view03.jpg'
import view04 from '../assets/view04.jpg'
import view17 from '../assets/view17.jpg'
import view08 from '../assets/view08.jpg'
import imgApron from '../assets/30 앞치마.jpg'
import imgDish from '../assets/22 용기.jpg'
import imgVan from '../assets/50 승합차-A.jpg'
import imgPackage from '../assets/쭈꾸미포장.jpg'
import imgBanner from '../assets/15 오픈현수막.jpg'

const steps = [
  { title: '상담 신청', desc: '온라인 또는 전화 상담' },
  { title: '내부 심사', desc: '철저한 심사를 통한 선발' },
  { title: '상권 분석', desc: '입지 및 상권 전문 분석' },
  { title: '계약 체결', desc: '가맹 계약 및 교육 시작' },
  { title: '오픈 준비', desc: '인테리어·설비 지원' },
  { title: '그랜드 오픈', desc: '본사 오픈 지원팀 파견' },
]

const costRows = [
  { item: '가맹비', amount: '2,000', note: '소멸성' },
  { item: '교육비', amount: '1,000', note: '' },
  { item: '보증금', amount: '500', note: '보증보험 가입시 현금 예치 없음' },
  { item: '인테리어', amount: '14,000', note: '200만원(평당)' },
  { item: '주방기기', amount: '2,500', note: '워크인냉장고 별도' },
  { item: '의탁자', amount: '1,200', note: '' },
  { item: '간판', amount: '600', note: '' },
  { item: '로열티', amount: '100', note: '월 로열티 + 창업전략연구소' },
  { item: 'POS시스템/서빙로봇', amount: '-', note: '선택사항 (KT하이오더)' },
]

const brandItems = [
  { label: '유니폼 (앞치마)', img: imgApron },
  { label: '브랜드 식기', img: imgDish },
  { label: '홍보 차량 래핑', img: imgVan },
  { label: '포장 용기', img: imgPackage },
  { label: '오픈 현수막', img: imgBanner },
]

const detailShots = [
  { title: '매장 외관', img: view17 },
  { title: '내부 3D시안', img: view08 },
  { title: '3D 평면도', img: view03 },
  { title: '3D 배치도', img: view04 },
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
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}

.interior-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 70px;
}

.gallery-feature,
.interior-item {
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: white;
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
}

.gallery-feature {
  aspect-ratio: 16/10;
}

.gallery-feature img,
.interior-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.gallery-feature:hover img,
.interior-item:hover img {
  transform: scale(1.05);
}

.interior-item {
  aspect-ratio: 4/3;
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

.gallery-label--light {
  background: rgba(12, 19, 40, 0.72);
}

@media (max-width: 900px) {
  .store-gallery {
    grid-template-columns: 1fr;
  }

  .interior-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .interior-grid {
    grid-template-columns: 1fr;
  }
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
  transition: transform 0.3s ease;
}

.step:hover .step-num {
  transform: scale(1.15);
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
  margin-bottom: 6px;
}

.cost-sub {
  font-size: 0.88rem;
  color: var(--gray);
  margin-bottom: 20px;
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
  grid-template-columns: 1.5fr 1fr 2fr;
  padding: 14px 24px;
  font-size: 0.9rem;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s;
}

.cost-row:last-child {
  border-bottom: none;
}

.cost-row.header {
  background: var(--dark);
  color: white;
  font-weight: 700;
}

.cost-row.total {
  background: var(--primary);
  color: white;
  font-weight: 800;
  font-size: 1rem;
}

.cost-row:not(.header):not(.total):hover {
  background: #fff5f4;
}

.cost-amount {
  font-weight: 600;
}

.cost-note {
  font-size: 0.82rem;
  color: var(--gray);
}

.cost-row.total .cost-amount {
  color: white;
}

.cost-notice {
  font-size: 0.8rem;
  color: var(--gray);
  margin-top: 8px;
}

/* 지원 카드 */
.support-section {
  margin-bottom: 60px;
}

.support-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 20px;
}

.support-card {
  background: white;
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.support-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 28px rgba(0,0,0,0.12);
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
  font-size: 0.88rem;
  color: var(--gray);
  line-height: 1.7;
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
  transition: transform 0.3s ease;
}

.brand-card:hover {
  transform: translateY(-4px);
}

.brand-img {
  height: 150px;
  overflow: hidden;
}

.brand-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.brand-card:hover .brand-img img {
  transform: scale(1.08);
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
  background: linear-gradient(135deg, var(--primary), #e05545);
  color: white;
  border-radius: 16px;
  padding: 48px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-box::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
  animation: ctaShine 3s ease-in-out infinite;
}

@keyframes ctaShine {
  0%, 100% { transform: translateX(-30%) translateY(-30%); }
  50% { transform: translateX(30%) translateY(30%); }
}

.cta-box p {
  font-size: 1.1rem;
  margin-bottom: 24px;
  opacity: 0.9;
  position: relative;
}

.cta-box .btn-primary {
  background: white;
  color: var(--primary);
  font-size: 1.05rem;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.cta-box .btn-primary:hover {
  background: #f8f8f8;
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

@media (max-width: 900px) {
  .support-cards {
    grid-template-columns: 1fr;
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
  .brand-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .cta-box {
    padding: 32px 20px;
  }
}
</style>
