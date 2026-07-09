# Yamaguchi 1Day Bus — 정보구조도 (IA)

> 야마구치현 원데이 버스투어 예약 사이트. **고정형 PC 전용**으로 우선 개발하며, 모바일 버전은 별도 사이트로 추후 제작 예정.

## 1. 기술 스택 & 개발 규칙

| 항목          | 내용                                                                                                                  |
| ------------- | --------------------------------------------------------------------------------------------------------------------- |
| 프레임워크    | React + Vite                                                                                                          |
| 라우팅        | `vite-plugin-pages` (파일 기반 라우팅) + `react-router-dom`                                                           |
| 스타일링      | CSS Modules + 전역 유틸리티 클래스(`common.css`)                                                                      |
| import 관리   | 배럴 파일(barrel file) 패턴 — `components/common`, `components/board`, `components/sections` 각각 `index.js`로 재수출 |
| 폰트          | Pretendard (jsDelivr CDN)                                                                                             |
| 캐러셀        | Swiper (`swiper/react`)                                                                                               |
| 레이아웃      | 고정폭 1280px (`--max-width`, `--min-width`)                                                                          |
| 참고 프로젝트 | Nevas (동일 컨벤션 적용: `components/Layout.jsx`에 Nav/Footer, children 패턴)                                         |

## 2. 디자인 토큰

`src/styles/variables.css`에 정의. 원시 토큰(색상 스케일)과 의미 토큰(컴포넌트별 alias)을 분리하는 방식.

### 색상 — 톤 스케일 (100~900) + Semantic + Gray

```css
--color-primary-500: #338556;
--color-secondary-500: #24748f;
--color-primary: var(--color-primary-500);
--color-secondary: var(--color-secondary-500);

--color-success: #0d9488;
--color-success-light: #d1f5f0;
--color-warning: #f59e0b;
--color-warning-light: #fef3c7;
--color-error: #ef4444;
--color-error-light: #fee2e2;
--color-info: #3b82f6;
--color-info-light: #dbeafe;
```

### 컴포넌트 전용 토큰

```css
--btn-primary-bg / --btn-primary-text
--btn-secondary-bg / --btn-secondary-text
--btn-outline-bg / --btn-outline-text / --btn-outline-border / --btn-outline-hover-bg
--btn-text-color

--control-height-sm: 32px;
--control-height-md: 40px;
--control-height-lg: 48px;
--control-padding-x-sm / md / lg
--control-font-size-sm / md / lg
```

Button, Input이 동일한 --control-\* 값을 참조하므로 같은 size(sm/md/lg)끼리는 항상 높이가 일치함.

### Layout

```css
--max-width: 1280px;
--min-width: 1280px;
```

폰트 사이즈는 px 값을 rem으로 자동 변환하는 방식 사용 (calc(px값 / 16 \* 1rem)), 브라우저 확대/축소 접근성 대응.

## 3. 사이트맵 / 라우팅 구조

```
/                           홈 (랜딩페이지)
├── /bus                     야마구치1Day버스 소개
├── /course/:id                운행코스 상세  (미착수, ComingSoon으로 임시 대체)
├── /bus-hotel                1Day버스+호텔  (완성 - 갤러리+상세정보+예약폼)
├── /tour-info                관광지정보 목록  (미착수)
│   └── /tour-info/:id         관광지 상세  (미착수)
└── /board                    문의게시판
    ├── /board/notice           공지사항 (아코디언 목록)
    │   └── /board/notice/write   공지사항 작성 (관리자용, 비밀번호 설정)
    ├── /board/inquiry          문의사항 (아코디언 목록)
    │   └── /board/inquiry/write  문의하기 작성 (상단 ContactUs 링크도 동일 경로)
    └── /board/faq              FAQ (카테고리 탭 + 탭별 아코디언)
```

주의: /course/1과 /bus-hotel의 콘텐츠가 서로 바뀌었음. 애초에 "운행코스" 목업(상품상세+예약폼)으로 만들었던 내용을 /bus-hotel로 옮기고, /course/1은 ComingSoon(준비중) 컴포넌트로 대체함. 사용자 확인 후 확정된 사항.

참고: 클라이언트 미팅 정리 PPT를 검토했으나, 해당 미팅 내용(온라인예약 폐지, 성인/유아 요금제, 전화예약 등)은 이번 프로젝트에 미반영하기로 확정. 위 사이트맵/네비게이션이 최종 기준.

### 상단 유틸리티 영역 (Nav 최상단)

- ContactUs -> /board/inquiry/write
- 로그인 -> 관리자 전용, Popup 모달 UI만 구현. 실제 인증 로직은 범위 밖.

### 메인 네비게이션 (4개)

야마구치1Day버스 · 운행코스 · 1Day버스+호텔 · 문의게시판

- NavLink + isActive로 현재 페이지 메뉴 강조 표시
- "문의게시판"만 특수 처리: 공지사항/문의사항/FAQ 어디에 있든 활성 유지되어야 해서, NavLink의 정확 매칭 대신 useLocation().pathname.startsWith("/board")로 직접 판단

### 게시판 잠금 기능

공지사항/문의사항/FAQ 각 항목은 locked: true + password 필드를 가질 수 있음. 잠긴 글 클릭 시 PasswordPrompt 팝업으로 비밀번호 확인 후 열람 가능.

## 4. 페이지 구성

### / 홈 (랜딩페이지) - 3개 섹션

1. HeroBanner - Swiper 캐러셀, 배너 데이터 배열로 관리, 요일 뱃지는 공용 Badge 사용
2. BusCourseSection - 요일별 가격표(공용 Badge) + 노선 요약 + 갤러리 + 예약하기 CTA
3. PromoNoticeSection - 관광정보 프로모 카드 + Notice 위젯

### /bus 야마구치1Day버스 소개 - 2개 섹션

1. BusIntroBanner - 소개 배너
2. BusFeatureGrid - 원데이버스 장점 카드 그리드 (호버 시 오버레이 애니메이션)

### /bus-hotel - 완성됨 (구 "운행코스" 상세 내용)

- 갤러리: useState로 선택된 variant 관리, 클릭 시 메인 이미지 + 브랜드/타이틀/요일/가격/설명 전체가 함께 전환 (fade-in 애니메이션)
- 예약 폼: 출발일(date) + 승차/하차장소(select) + 예약하기 버튼
  - 유효성 검사: 셋 다 선택 안 하면 FormMessage variant="error"
  - 예약 완료 시 FormMessage variant="success"로 요약 표시, 수정/취소 버튼 제공
- 운행 코스 섹션: LabeledBox(라벨+자유 콘텐츠 박스) 3개, 현재 내용 비어있음

### /board/notice, /board/inquiry - 목록 + 아코디언 상세

- 클릭 시 페이지 이동 없이 그 자리에서 아코디언처럼 열림
- 이전/다음 버튼은 번호(id) 오름차순 기준으로 이동
- 페이지네이션 포함 (PAGE_SIZE = 10)
- notice만 작성 페이지 보유: 구분/작성자/제목/비밀번호/내용, 작성완료 팝업, 이탈 확인 팝업(isDirty)

### /board/faq - 탭 + 탭별 아코디언

- Tab 컴포넌트(variant="solid")로 4개 카테고리 전환
- 카테고리(탭)마다 FaqCategoryList가 독립적으로 렌더링되어 각자 자기만의 상태를 가짐

## 5. 폴더 구조

```
src/
  components/
    Layout.jsx, Nav.jsx, Footer.jsx
    common/   (Button, Input, Badge, Card, Title, Popup, Tab, Stack, FormMessage, LabeledBox, ComingSoon + index.js)
    board/    (BoardSubNav, BoardHeader, BoardTable, BoardSearchBar, BoardPagination, PaginationArrow, PasswordPrompt + index.js)
    sections/ (HeroBanner, BusCourseSection, PromoNoticeSection, BusIntroBanner, BusFeatureGrid + index.js)
  hooks/
    useBoardAccordion.js
  pages/
    index.jsx
    bus/index.jsx        (인라인 style 정리 필요 - TODO)
    bus-hotel/index.jsx, BusHotel.module.css
    course/[id].jsx       (ComingSoon)
    tour-info/            (미착수)
    board/
      Board.module.css
      notice/index.jsx, write.jsx
      inquiry/index.jsx, write.jsx
      faq.jsx
  data/
    busHotelGallery.js, noticeList.js, inquiryList.js, faqList.js
  styles/
    variables.css, reset.css, common.css
```

## 6. 데이터 확장 규칙

### /bus-hotel 갤러리 항목 추가 시

1. busHotelGallery.js의 variants 배열에 객체 추가
2. 컴포넌트 수정 불필요

### 게시판 글 추가 시

1. 해당 data/\*.js 배열에 객체 추가, id는 문자열로 중복 없이
2. 잠긴 글은 locked: true + password 추가
3. BoardTable "No." 컬럼은 item.id 그대로 표시 (배열 위치 기반 아님)

### 배너 추가 시

1. BANNERS 배열에 객체 추가
2. HeroBanner.module.css에 동일한 이름의 CSS 블록 추가

## 7. 미확정 / TODO

- [ ] pages/bus/index.jsx 인라인 스타일 -> bus.module.css로 분리
- [ ] /tour-info, /tour-info/:id 미착수
- [ ] /course/:id 실제 콘텐츠 미정
- [ ] 로그인 실제 인증 연동 범위 논의 필요
- [ ] 모바일 버전 별도 사이트로 추후 제작
- [ ] 실제 이미지 리소스 교체 (현재 placeholder)
- [ ] bus-hotel "운행 코스" LabeledBox 3개 실제 콘텐츠 미정
- [ ] BusCourseSection "예약하기" 링크 대상 재확인

## 8. 접근성 / 시맨틱 HTML 개선

튜터 피드백으로 전체 프로젝트의 시맨틱 태그를 점검하고 개선함.

- Nav.jsx: 메뉴 4개를 `<div>` 나열에서 `<ul><li>` 구조로 전환 (스크린리더가 "메뉴 항목 개수"를 인식하도록)
- Popup.jsx: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`로 모달임을 명시. 닫기 버튼(X)에 `blind` 텍스트로 "닫기" 라벨 추가
- Tab.jsx: `role="tablist"` / `role="tab"` + `aria-selected` / `role="tabpanel"` + `aria-labelledby` 추가 (탭 UI의 표준 ARIA 패턴)
- BoardSubNav.jsx: 탭 메뉴를 `<ul><li>`로 전환 (BoardSubNav는 실제 URL 이동이 있는 메뉴라 Tab.jsx의 ARIA 탭 패턴과는 다르게 처리)
- Footer.jsx: 연락처/주소 블록을 `<div>`에서 `<address>`로 전환, 전화번호는 `<a href="tel:...">`로 실제 클릭 가능하게. 브라우저 기본 font-style: italic은 CSS로 normal 재지정
- bus-hotel 갤러리 썸네일: `<div>` 나열 -> `<ul><li>`로 전환

### 이 과정에서 겪은 이슈 (참고용)

- `<li>` 안에 들어간 `<a>`(NavLink)는 기본이 inline이라 padding/gap/align-items가 제대로 안 먹음 -> `<a>` 자체에 display: flex 필요
- CSS 블록을 여러 개로 나눠 관리하다가, 나중에 추가한 공통 블록이 이전 블록의 color/border-bottom을 실수로 덮어쓴 사례 있었음 -> 색상처럼 서로 달라야 하는 속성과, 레이아웃처럼 공통인 속성을 같은 블록에 섞어 넣지 않도록 주의

## 9. 완료된 작업 로그

- [x] 폴더 구조 확정 + 배럴 파일 패턴 도입
- [x] 디자인 토큰 체계 확장 (톤 스케일 + Semantic + 컴포넌트 전용)
- [x] Layout, 고정형 1280px 레이아웃
- [x] 랜딩페이지 3섹션 + Swiper 캐러셀
- [x] /bus 소개 배너 + 특징 그리드
- [x] 공용 컴포넌트 라이브러리 구축
- [x] Nav 활성화 처리, 로그인 팝업, 로고 접근성
- [x] /bus-hotel 완성
- [x] /course/1 <-> /bus-hotel 콘텐츠 스왑 확정
- [x] useBoardAccordion 커스텀 훅
- [x] 게시판 완성 (아코디언, 페이지네이션, 잠금, 검색바, FAQ 탭)
- [x] 공지사항/문의하기 작성 페이지
- [x] 데이터 샘플 실제 텍스트로 교체
- [x] CSS 명시도 이슈 해결
- [x] Pagination 화살표 SVG화
- [x] Textarea 리사이즈 옵션화
