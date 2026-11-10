# 02.개발 — T-Ting 프론트 (HTML + CSS)

빌드 도구 없이 브라우저에서 바로 여는 정적 웹. 나중에 React로 옮기기 쉽도록 클래스와 토큰 이름을 Figma 컴포넌트 이름에 맞췄어요.

## 보는 방법

- `index.html`을 더블클릭해서 브라우저로 열기, 또는
- VS Code 확장 **Live Server** 설치 → `index.html`에서 우클릭 → *Open with Live Server* (저장하면 자동 새로고침)

인터넷 연결이 필요해요. 폰트(Pretendard)와 아이콘(Lucide)을 CDN에서 불러와요. 폰트 파일은 `.gitignore` 규칙에 따라 저장소에 넣지 않아요.

## 폴더

```
02.개발/
├── index.html            컴포넌트 미리보기 (라이트/다크 전환)
├── styles/
│   ├── tokens.css        색 · 간격 · 반경 토큰 (Crayon Light / Dark)
│   ├── base.css          기본 스타일 · 글자 스타일 클래스
│   └── components.css    버튼 · 입력 · 체크 · 칩 · 배지 · 스위치 · 알림 · 토스트 · 팝업 · 탭바 · 스켈레톤 · 공통 요소
└── scripts/
    └── theme.js          테마 전환 (저장된 선택 → 없으면 기기 설정)
```

## 사용 예

```html
<button class="btn btn--l btn--primary btn--block">다음</button>
<button class="chip" aria-pressed="true">맛집</button>
<span class="badge badge--primary"><span class="badge__dot"></span>D-17</span>
<label class="field">
  <span class="field__label">여행 제목</span>
  <input class="field__control" placeholder="입력해 주세요">
  <span class="field__helper">최대 20자</span>
</label>
```

## 기준 문서 (claude.ai 프로젝트 t-ting)

- `t-ting-디자인-시스템-v1-crayon.md` — 토큰 · 컴포넌트 값
- `t-ting-화면-명세-A-D / E-H / I-K.md` — 화면 64개 구조 · 문구
- `t-ting-플로우-가이드.md` — 화면 흐름 · 역할별 권한

## 아직 남은 것

- 스위치 트랙·노브 색: Figma에서 SVG 자산이라 토큰으로 근사함 → 자산 확인 후 보정
- 손글씨 제목 폰트(제주돌담체): 웹 사용 라이선스 확인 전까지 Pretendard로 표시
- 로고 · doodle 밑줄 · 감정 아이콘 · 일러스트 자산 내보내기
- 화면 구현 (K1 메인부터 예정)
