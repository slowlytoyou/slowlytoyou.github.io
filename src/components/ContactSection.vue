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
            <a href="tel:01021323153" class="info-item info-link">
              <span class="info-icon">📞</span>
              <div>
                <p class="info-label">가맹 상담 전화 (클릭하여 통화)</p>
                <p class="info-value">010-2132-3153</p>
              </div>
            </a>
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
          <form @submit.prevent="handleSubmit" class="contact-form">
            <h3 class="form-title">간편 상담 신청</h3>
            <p class="form-sub">아래 정보를 입력해주시면 빠르게 연락드립니다.</p>

            <input type="hidden" name="access_key" :value="accessKey" />
            <input type="hidden" name="subject" value="[쭈나라꾸미] 새로운 가맹 상담 신청" />
            <input type="hidden" name="from_name" value="쭈나라꾸미 홈페이지" />
            <input type="checkbox" name="botcheck" style="display:none" />

            <div class="form-group">
              <label>이름 <span class="required">*</span></label>
              <input v-model="form.name" name="name" type="text" required placeholder="홍길동" />
            </div>

            <div class="form-group">
              <label>연락처 <span class="required">*</span></label>
              <input v-model="form.phone" name="phone" type="tel" required placeholder="010-0000-0000" />
            </div>

            <div class="form-group">
              <label>희망 지역</label>
              <input v-model="form.region" name="region" type="text" placeholder="예: 대구 동구" />
            </div>

            <div class="form-group">
              <label>창업 예상 시기</label>
              <select v-model="form.timing" name="timing">
                <option value="">선택해주세요</option>
                <option>1개월 이내</option>
                <option>3개월 이내</option>
                <option>6개월 이내</option>
                <option>미정</option>
              </select>
            </div>

            <div class="form-group">
              <label>문의 내용</label>
              <textarea v-model="form.message" name="message" rows="4" placeholder="문의하실 내용을 자유롭게 작성해주세요."></textarea>
            </div>

            <div class="form-group checkbox-group">
              <label>
                <input v-model="form.agree" type="checkbox" required />
                <span>개인정보 수집·이용에 동의합니다. <strong>(필수)</strong></span>
              </label>
            </div>

            <button type="submit" class="submit-btn" :disabled="loading">
              {{ loading ? '전송 중...' : '상담 신청하기' }}
            </button>

            <p v-if="status === 'success'" class="form-message success">
              ✅ 상담 신청이 접수되었습니다. 빠르게 연락드리겠습니다.
            </p>
            <p v-if="status === 'error'" class="form-message error">
              ❌ 전송 실패. 잠시 후 다시 시도해주세요.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Web3Forms Access Key - https://web3forms.com 에서 무료로 발급받아 교체
const accessKey = 'YOUR_WEB3FORMS_ACCESS_KEY'

const form = reactive({
  name: '',
  phone: '',
  region: '',
  timing: '',
  message: '',
  agree: false,
})

const loading = ref(false)
const status = ref('')

async function handleSubmit(e) {
  loading.value = true
  status.value = ''

  const formData = new FormData(e.target)

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
    const result = await response.json()

    if (result.success) {
      status.value = 'success'
      Object.keys(form).forEach(k => {
        form[k] = typeof form[k] === 'boolean' ? false : ''
      })
    } else {
      status.value = 'error'
    }
  } catch {
    status.value = 'error'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-wrap {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
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
  gap: 16px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  border-radius: 12px;
  background: var(--light-gray);
  transition: all 0.2s;
}

.info-link {
  cursor: pointer;
  color: inherit;
}

.info-link:hover {
  background: var(--primary);
  color: white;
  transform: translateX(4px);
}

.info-link:hover .info-label,
.info-link:hover .info-value {
  color: white;
}

.info-icon {
  font-size: 1.6rem;
  flex-shrink: 0;
}

.info-label {
  font-size: 0.78rem;
  color: var(--gray);
}

.info-value {
  font-size: 1rem;
  font-weight: 700;
  margin-top: 2px;
}

/* Form */
.contact-form-wrap {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.08);
  overflow: hidden;
}

.contact-form {
  padding: 36px 32px;
}

.form-title {
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 6px;
  color: var(--dark);
}

.form-sub {
  font-size: 0.88rem;
  color: var(--gray);
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--text);
}

.required {
  color: var(--primary);
}

.form-group input[type="text"],
.form-group input[type="tel"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  transition: border-color 0.2s;
  background: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary);
}

.form-group textarea {
  resize: vertical;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  color: var(--gray);
}

.checkbox-group input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: var(--primary);
  cursor: pointer;
}

.submit-btn {
  width: 100%;
  padding: 16px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 8px;
}

.submit-btn:hover:not(:disabled) {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(200, 57, 43, 0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-message {
  margin-top: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  text-align: center;
}

.form-message.success {
  background: #e8f5e9;
  color: #2e7d32;
}

.form-message.error {
  background: #ffebee;
  color: #c62828;
}

@media (max-width: 900px) {
  .contact-wrap {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
