<template>
  <section class="section" id="contact">
    <div class="container">
      <div class="contact-wrap">
        <div class="contact-info" v-animate="'fade-right'">
          <p class="label-tag">상담 문의</p>
          <h2 class="section-title">가맹 상담 신청</h2>
          <p class="contact-desc">
            가맹 상담부터 오픈 준비까지 전담 컨설턴트가 함께합니다.<br>
            부담 없이 상담을 신청해 주세요.
          </p>
          <div class="info-items">
            <div class="info-item">
              <span class="info-icon">📞</span>
              <div>
                <p class="info-label">가맹 상담 전화</p>
                <p class="info-value">010-2132-3153</p>
              </div>
            </div>
            <div class="info-item">
              <span class="info-icon">📍</span>
              <div>
                <p class="info-label">본사 주소</p>
                <p class="info-value">대구시 동구 동부로 30길 102-3, 1208호</p>
              </div>
            </div>
            <div class="info-item">
              <span class="info-icon">👤</span>
              <div>
                <p class="info-label">대표</p>
                <p class="info-value">박철주</p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-wrap" v-animate="'fade-left'">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfqSqCV7LZzNx3-bPnZeWylUy3DgfcGVRQ-FJzX7DdQZdToKQ/viewform?embedded=true"
            width="100%"
            height="820"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            로딩중…
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-wrap {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 80px;
  align-items: start;
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
  margin-bottom: 36px;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.info-icon {
  font-size: 1.6rem;
  flex-shrink: 0;
}

.info-label {
  font-size: 0.8rem;
  color: var(--gray);
}

.info-value {
  font-size: 1rem;
  font-weight: 600;
  margin-top: 2px;
}

.contact-form-wrap {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 32px rgba(0,0,0,0.1);
}

.contact-form-wrap iframe {
  display: block;
}

@media (max-width: 900px) {
  .contact-wrap {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
