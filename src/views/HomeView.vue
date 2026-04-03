<template>
  <div>
    <HeroSection />
    <div class="quick-links section">
      <div class="container">
        <div class="quick-grid">
          <router-link v-for="link in quickLinks" :key="link.to" :to="link.to" class="quick-card">
            <span class="quick-icon">{{ link.icon }}</span>
            <div>
              <h3>{{ link.title }}</h3>
              <p>{{ link.desc }}</p>
            </div>
            <span class="arrow">→</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'

const quickLinks = [
  { to: '/about', icon: '🏆', title: '브랜드 소개', desc: '25년 검증된 맛과 시스템' },
  { to: '/menu', icon: '🍽️', title: '대표 메뉴', desc: '시그니처 메뉴 보기' },
  { to: '/franchise', icon: '🏪', title: '가맹 안내', desc: '창업 비용 및 지원' },
  { to: '/contact', icon: '📞', title: '상담 신청', desc: '무료 1:1 상담' },
]
</script>

<style scoped>
.quick-links {
  padding: 60px 0;
  background: var(--light-gray);
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.quick-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: white;
  border-radius: 12px;
  padding: 24px 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  transition: transform 0.2s, box-shadow 0.2s;
  color: var(--text);
}

.quick-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  color: var(--primary);
}

.quick-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.quick-card h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 3px;
}

.quick-card p {
  font-size: 0.8rem;
  color: var(--gray);
}

.arrow {
  margin-left: auto;
  font-size: 1.1rem;
  color: var(--gray);
  transition: transform 0.2s;
}

.quick-card:hover .arrow {
  transform: translateX(4px);
  color: var(--primary);
}
</style>
