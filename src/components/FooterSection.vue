<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="logo">
            <img :src="footerLogo" alt="쭈나라꾸미 로고" class="footer-logo-image" />
          </div>
          <p>맛은 25년 동안 검증 됐고! 구조는 프랜차이즈로 완성됐다!</p>
          <p class="copyright">© 2025 주)청염 All rights reserved.</p>
        </div>
        <div class="footer-links">
          <div>
            <h4>바로가기</h4>
            <router-link to="/">홈</router-link>
            <router-link to="/about">브랜드 소개</router-link>
            <router-link to="/menu">메뉴</router-link>
            <router-link to="/franchise">가맹 안내</router-link>
            <router-link to="/contact">상담 신청</router-link>
          </div>
          <div>
            <h4>고객센터</h4>
            <a href="tel:01021323153">010-2132-3153</a>
            <span>주)청염 - 대구시 동구 동부로 30길 102-3, 1208호</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>사업자등록번호: 192-88-03527 | 대표: 박철주 | 주)청염</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import footerLogo from '../assets/로고-투명.png'
</script>

<style scoped>
.footer {
  background: #111;
  color: rgba(255,255,255,0.7);
  padding: 40px 0 24px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.logo {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  width: fit-content;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.96);
  margin-bottom: 12px;
}

.footer-logo-image {
  display: block;
  height: 42px;
  width: auto;
  object-fit: contain;
}

.footer-brand p {
  font-size: 0.88rem;
  line-height: 1.7;
  margin-bottom: 6px;
}

.copyright {
  margin-top: 12px;
  font-size: 0.78rem;
  opacity: 0.5;
}

.footer-links {
  display: flex;
  gap: 60px;
}

.footer-links > div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-links h4 {
  color: white;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.footer-links a,
.footer-links span {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.55);
  transition: color 0.2s;
}

.footer-links a:hover {
  color: white;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 20px;
  font-size: 0.78rem;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    gap: 24px;
  }
  .footer-links {
    flex-wrap: wrap;
    gap: 32px;
  }
}
</style>
