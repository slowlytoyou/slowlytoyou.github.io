<template>
  <div class="page-wrapper">
    <div class="page-hero">
      <div class="container">
        <p class="breadcrumb"><router-link to="/">홈</router-link> / 브랜드 소개</p>
        <h1>브랜드 소개</h1>
      </div>
    </div>
    <AboutSection />
    <section class="section timeline-section">
      <div class="container">
        <div class="section-header">
          <p class="label-tag">브랜드 히스토리</p>
          <h2 class="section-title">우리의 걸어온 길</h2>
        </div>
        <div class="timeline">
          <div v-for="item in history" :key="item.year" class="timeline-item">
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AboutSection from '../components/AboutSection.vue'

const history = [
  { year: '2002', title: '쭈나라꾸미 오픈', desc: '호텔 셰프 출신 사장님이 경산에서 레스토랑을 운영하며 쭈꾸미 불맛 요리를 탄생시켰습니다. 처음부터 대형 매장으로 시작했습니다.' },
  { year: '2002~', title: '25년간 검증된 맛', desc: '2002 월드컵부터 시작하여 배달에 의존하지 않아도 안정적인 매출 구조를 만드는 쭈꾸미 외식 브랜드로 자리 잡았습니다.' },
  { year: '2025', title: '주)청염 설립', desc: '사장이 없어도 운영되는 시스템을 만드는 데 집중, 통돌이 조리 시스템을 도입해 배달·내점·포장이 모두 가능한 빠른 조리 구조를 완성했습니다.' },
  { year: '2026', title: 'BS 창업전략연구소 설립', desc: '프랜차이즈 전문가들로 구성된 BS(블루솔트)창업전략연구소를 설립, 가맹점의 오픈부터 운영 전반까지 함께합니다.' },
]
</script>

<style scoped>
.page-wrapper {
  padding-top: 70px;
}

.page-hero {
  background: linear-gradient(135deg, #1a1a1a, #3d0e0e);
  color: white;
  padding: 60px 0;
}

.breadcrumb {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.5);
  margin-bottom: 12px;
}

.breadcrumb a {
  color: rgba(255,255,255,0.5);
}

.breadcrumb a:hover {
  color: white;
}

.page-hero h1 {
  font-size: 2.5rem;
  font-weight: 900;
}

.timeline-section {
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

.timeline {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 120px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e0e0e0;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 0;
  margin-bottom: 36px;
  position: relative;
}

.timeline-year {
  width: 100px;
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--primary);
  padding-top: 4px;
  text-align: right;
  flex-shrink: 0;
}

.timeline-dot {
  width: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10px;
  flex-shrink: 0;
}

.timeline-dot::after {
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 0 4px rgba(200,57,43,0.2);
}

.timeline-content {
  flex: 1;
  background: white;
  border-radius: 10px;
  padding: 16px 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}

.timeline-content h4 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.timeline-content p {
  font-size: 0.88rem;
  color: var(--gray);
  line-height: 1.7;
}
</style>
