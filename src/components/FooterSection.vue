<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="logo">
            <span>🐙</span>
            <span class="logo-text">쭈나라꾸미</span>
          </div>
          <p>########################################</p>
          <p class="copyright">© 2024 쭈나라꾸미 All rights reserved.</p>
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
            <span>###</span>
            <span>###</span>
            <span>###</span>
          </div>
          <div>
            <h4>SNS</h4>
            <a href="#" @click.prevent>인스타그램</a>
            <a href="#" @click.prevent>유튜브</a>
            <a href="#" @click.prevent>블로그</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>사업자등록번호: ### | 대표: ### | ###</p>
        <div class="footer-policy">
          <a href="#" @click.prevent>개인정보처리방침</a>
          <a href="#" @click.prevent>이용약관</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #111;
  color: rgba(255,255,255,0.7);
  padding: 60px 0 30px;
}

.footer-top {
  display: flex;
  gap: 60px;
  margin-bottom: 40px;
}

.footer-brand {
  flex: 1;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  margin-bottom: 16px;
  font-size: 1.2rem;
}

.logo-text {
  font-weight: 900;
}

.footer-brand p {
  font-size: 0.88rem;
  line-height: 1.7;
  margin-bottom: 6px;
}

.copyright {
  margin-top: 16px;
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
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.78rem;
  opacity: 0.5;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-policy {
  display: flex;
  gap: 20px;
}

.footer-policy a {
  color: inherit;
}

@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    gap: 36px;
  }
  .footer-links {
    flex-wrap: wrap;
    gap: 32px;
  }
}
</style>
