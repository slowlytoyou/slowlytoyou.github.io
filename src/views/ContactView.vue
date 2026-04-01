<template>
  <div class="page-wrapper">
    <div class="page-hero">
      <div class="container">
        <p class="breadcrumb"><router-link to="/">홈</router-link> / 상담 신청</p>
        <h1>상담 신청</h1>
      </div>
    </div>
    <ContactSection />
  </div>
</template>

<script setup>
import ContactSection from '../components/ContactSection.vue'
</script>

<style scoped>
.page-wrapper { padding-top: 70px; }
.page-hero {
  background: linear-gradient(135deg, #1a1a1a, #3d0e0e);
  color: white;
  padding: 60px 0;
}
.breadcrumb { font-size: 0.85rem; color: rgba(255,255,255,0.5); margin-bottom: 12px; }
.breadcrumb a { color: rgba(255,255,255,0.5); }
.page-hero h1 { font-size: 2.5rem; font-weight: 900; }
</style>
