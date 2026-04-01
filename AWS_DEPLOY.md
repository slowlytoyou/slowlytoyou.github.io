# AWS 배포 가이드

## 방법 1: S3 + CloudFront (권장)

### 1. 빌드
```bash
npm run build
```

### 2. S3 버킷 생성
- AWS Console → S3 → 버킷 생성
- 버킷 이름: `your-brand-name`
- 퍼블릭 액세스 차단 해제 (CloudFront 사용 시에는 유지해도 됨)
- 정적 웹사이트 호스팅 활성화
  - 인덱스 문서: `index.html`
  - 오류 문서: `index.html` (SPA 라우팅 처리)

### 3. dist 폴더 업로드
```bash
aws s3 sync dist/ s3://your-brand-name --delete
```

### 4. CloudFront 배포 생성
- Origin: S3 버킷
- Default root object: `index.html`
- 오류 페이지 설정: 403/404 → `/index.html` (200 반환) ← SPA 라우팅 필수

### 5. 도메인 연결 (선택)
- Route 53 또는 외부 DNS에서 CloudFront 도메인으로 CNAME 설정
- ACM에서 SSL 인증서 발급 (무료)

---

## 방법 2: AWS Amplify (간편)

```bash
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

또는 GitHub 연동 후 자동 배포:
- AWS Amplify Console → 앱 생성 → GitHub 연결
- 빌드 설정: `npm run build` / 출력 디렉토리: `dist`
- main 브랜치 push 시 자동 배포

---

## CloudFront 오류 페이지 설정 (SPA 라우팅 필수)

| 오류 코드 | 응답 경로 | 응답 코드 |
|-----------|-----------|-----------|
| 403       | /index.html | 200 |
| 404       | /index.html | 200 |
