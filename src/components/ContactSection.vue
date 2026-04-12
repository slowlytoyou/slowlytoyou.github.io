<template>
  <section class="section" id="contact">
    <div class="container">
      <div class="contact-content" v-animate="'fade-up'">
        <p class="label-tag">상담 문의</p>
        <h2 class="section-title">가맹 상담 신청</h2>
        <p class="contact-desc">
          가맹 상담부터 오픈 준비까지 전담 컨설턴트가 함께합니다.<br>
          부담 없이 상담을 시작해 주세요.
        </p>

        <div class="contact-actions">
          <a href="http://pf.kakao.com/_rwHdX/chat" target="_blank" rel="noopener" class="action-card kakao-card">
            <div class="action-icon kakao-icon">
              <svg viewBox="0 0 24 24" width="36" height="36" fill="#3C1E1E"><path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.73 1.74 5.15 4.4 6.56-.14.53-.5 1.93-.58 2.23-.09.37.14.37.3.27.12-.08 1.95-1.32 2.75-1.86.7.1 1.43.16 2.13.16 5.52 0 10-3.58 10-7.36S17.52 3 12 3z"/></svg>
            </div>
            <h3>카카오톡으로 상담하기</h3>
            <p>클릭하면 카카오톡 채팅이 시작됩니다.<br>편하게 문의해주세요.</p>
          </a>

          <a href="tel:01021323153" class="action-card phone-card">
            <div class="action-icon phone-icon">📞</div>
            <h3>전화 상담</h3>
            <p>010-2132-3153<br>클릭하여 바로 통화</p>
          </a>
        </div>

        <div class="contact-info-bar">
          <div class="info-item">
            <span>📍</span>
            <span>대구시 동구 동부로 30길 102-3, 1208호</span>
          </div>
          <div class="info-item">
            <span>👤</span>
            <span>대표 박철주</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.label-tag {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}

.contact-desc {
  color: var(--gray);
  line-height: 1.8;
  margin-bottom: 48px;
}

.contact-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 48px;
}

.action-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 28px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  color: inherit;
}

.action-card:hover {
  transform: translateY(-6px);
}

.kakao-card {
  background: #FEE500;
  box-shadow: 0 4px 24px rgba(254, 229, 0, 0.4);
}

.kakao-card:hover {
  box-shadow: 0 12px 40px rgba(254, 229, 0, 0.5);
}

.phone-card {
  background: var(--primary);
  color: white;
  box-shadow: 0 4px 24px rgba(200, 57, 43, 0.3);
}

.phone-card:hover {
  box-shadow: 0 12px 40px rgba(200, 57, 43, 0.45);
}

.action-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.kakao-icon {
  background: rgba(60, 30, 30, 0.1);
}

.phone-icon {
  background: rgba(255, 255, 255, 0.2);
  font-size: 2rem;
}

.action-card h3 {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 10px;
}

.kakao-card h3 {
  color: #3C1E1E;
}

.action-card p {
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.8;
}

.kakao-card p {
  color: #3C1E1E;
}

.contact-info-bar {
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--gray);
}

@media (max-width: 560px) {
  .contact-actions {
    grid-template-columns: 1fr;
  }
}
</style>
