<template>
  <Transition name="popup">
    <div v-if="visible && announcement.enabled" class="popup-overlay" @click="close">
      <div class="popup-box" @click.stop>
        <button class="popup-close" @click="close" aria-label="닫기">×</button>

        <div v-if="announcement.image" class="popup-image">
          <img :src="announcement.image" :alt="announcement.title" />
        </div>

        <div class="popup-content">
          <span class="popup-badge">{{ announcement.badge }}</span>
          <h2>{{ announcement.title }}</h2>
          <p v-html="announcement.body"></p>

          <div v-if="announcement.linkUrl" class="popup-actions">
            <a :href="announcement.linkUrl" class="popup-btn" @click="close">{{ announcement.linkText }}</a>
          </div>
        </div>

        <div class="popup-footer">
          <label>
            <input type="checkbox" v-model="hideToday" />
            <span>오늘 하루 보지 않기</span>
          </label>
          <button class="popup-text-btn" @click="close">닫기</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 공지/이벤트 설정 - 사용 시 enabled를 true로 변경하고 내용 수정
const announcement = {
  enabled: false, // ← 팝업을 띄우려면 true로 변경
  badge: 'NOTICE',
  title: '쭈나라꾸미 사무실 개소식 안내',
  body: '쭈나라꾸미 본사 사무실 개소식에 여러분을 초대합니다.<br><br>📅 일시: 2026년 X월 X일<br>📍 장소: 대구시 동구 동부로 30길 102-3, 1208호',
  image: null, // 이미지 URL 또는 null
  linkText: '자세히 보기',
  linkUrl: null, // 링크 또는 null
}

const visible = ref(false)
const hideToday = ref(false)

const STORAGE_KEY = 'junara-popup-hidden'

onMounted(() => {
  if (!announcement.enabled) return
  const hidden = localStorage.getItem(STORAGE_KEY)
  if (hidden) {
    const hiddenDate = new Date(hidden)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    hiddenDate.setHours(0, 0, 0, 0)
    if (hiddenDate.getTime() === today.getTime()) {
      return
    }
  }
  setTimeout(() => {
    visible.value = true
  }, 800)
})

function close() {
  if (hideToday.value) {
    localStorage.setItem(STORAGE_KEY, new Date().toISOString())
  }
  visible.value = false
}
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  backdrop-filter: blur(4px);
}

.popup-box {
  background: white;
  border-radius: 20px;
  max-width: 460px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  position: relative;
}

.popup-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border: none;
  background: rgba(0,0,0,0.4);
  color: white;
  font-size: 1.6rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: background 0.2s;
}

.popup-close:hover {
  background: rgba(0,0,0,0.6);
}

.popup-image {
  width: 100%;
  height: 240px;
  overflow: hidden;
}

.popup-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.popup-content {
  padding: 32px 28px 20px;
}

.popup-badge {
  display: inline-block;
  background: var(--primary);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
  letter-spacing: 0.05em;
}

.popup-content h2 {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--dark);
  margin-bottom: 16px;
  line-height: 1.4;
}

.popup-content p {
  font-size: 0.95rem;
  color: var(--gray);
  line-height: 1.8;
}

.popup-actions {
  margin-top: 20px;
}

.popup-btn {
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: background 0.2s;
}

.popup-btn:hover {
  background: var(--primary-dark);
}

.popup-footer {
  border-top: 1px solid #f0f0f0;
  padding: 14px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
}

.popup-footer label {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--gray);
  cursor: pointer;
}

.popup-footer input[type="checkbox"] {
  accent-color: var(--primary);
  cursor: pointer;
}

.popup-text-btn {
  background: none;
  border: none;
  color: var(--gray);
  cursor: pointer;
  font-size: 0.85rem;
  font-family: inherit;
}

.popup-text-btn:hover {
  color: var(--dark);
}

/* Animation */
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.3s ease;
}

.popup-enter-active .popup-box,
.popup-leave-active .popup-box {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}

.popup-enter-from .popup-box,
.popup-leave-to .popup-box {
  transform: scale(0.85) translateY(20px);
}
</style>
