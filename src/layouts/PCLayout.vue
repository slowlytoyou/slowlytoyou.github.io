<template>
  <div class="pc-layout">
    <NavBar />
    <main class="pc-main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <FooterSection />
    <AnnouncementPopup />
    <a href="http://pf.kakao.com/_rwHdX/chat" target="_blank" rel="noopener" class="floating-kakao" aria-label="카카오톡 상담">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#3C1E1E"><path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.73 1.74 5.15 4.4 6.56-.14.53-.5 1.93-.58 2.23-.09.37.14.37.3.27.12-.08 1.95-1.32 2.75-1.86.7.1 1.43.16 2.13.16 5.52 0 10-3.58 10-7.36S17.52 3 12 3z"/></svg>
    </a>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import FooterSection from '../components/FooterSection.vue'
import AnnouncementPopup from '../components/AnnouncementPopup.vue'
</script>

<style scoped>
.pc-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.pc-main {
  flex: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.floating-kakao {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 56px;
  height: 56px;
  background: #FEE500;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  z-index: 99;
  transition: transform 0.2s, box-shadow 0.2s;
}

.floating-kakao:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
}
</style>
