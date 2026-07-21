# Yamaguchi 1Day Bus — 정보구조도 (IA)

> 야마구치현 원데이 버스투어 예약 사이트. 고정형 PC 전용(1280px)으로 개발 중. 모바일은 별도 사이트로 추후 제작 예정.

## 1. 기술 스택

| 항목 | 내용 |
|---|---|
| 프레임워크 | React + Vite |
| 라우팅 | vite-plugin-pages(파일 기반) + react-router-dom |
| 스타일링 | CSS Modules + 전역 유틸리티(common.css) |
| import 관리 | 배럴 파일 패턴 — components/common, components/board, components/sections 각각 index.js |
| 폰트 | Pretendard (jsDelivr CDN) |
| 캐러셀 | Swiper |
| 레이아웃 | 고정폭 1280px, 반응형 아님 |

## 2. 디자인 토큰 (src/styles/variables.css)

- 색상: Primary/Secondary 100~900 톤 스케일 (500이 메인), Gray 0~1000, Semantic(success/warning/error/info + light 버전)
- 메인 컬러: --color-primary #338556, --color-secondary #24748f
- Typography: --font-size-sm/base/lg/xl/2xl (px를 rem으로 자동 변환), --font-weight-regular/medium/bold
- Spacing: --spacing-xs~2xl
- Layout: --max-width/--min-width: 1280px, --radius-sm/md/lg/full
- Component 전용: --btn-*(버튼 색상), --control-height/padding/font-size-sm/md/lg (Button+Input 공유 사이즈 스케일)

## 3. 사이트맵

```
/                     홈 (랜딩페이지)
├── /bus                 야마구치1Day버스 소개
├── /course               관광지 갤러리 + 도시/분류 카테고리 필터 (완성)
├── /bus-hotel             1Day버스+호텔 - 단일 코스 상세+예약폼+운행코스 타임라인 (완성)
└── /board                문의게시판
    ├── /board/notice        공지사항 (아코디언 목록)
    │   └── /board/notice/write  공지사항 작성
    ├── /board/inquiry       문의사항 (아코디언 목록, 질문+답변)
    │   └── /board/inquiry/write 문의하기 작성 (ContactUs 링크도 동일 경로)
    └── /board/faq           FAQ (카테고리 탭 + 탭별 아코디언)
```

중요 변경 이력:
- 애초 "운행코스" 목업(상품상세+예약폼)이 /bus-hotel로 이동, /course는 별개로 관광지 갤러리+필터 페이지로 새로 제작 (구 /tour-info 계획 폐기, /course가 그 역할 대체)
- 클라이언트 미팅 PPT(요금제 등) 내용은 미반영하기로 확정했었으나, 이후 사용자가 별도로 요금 체계를 화목/금토 요일제에서 **성인/유아 2단계**로 직접 변경 요청함 (아래 4번 참고)
- /bus-hotel 상품 구조가 "여러 코스(variants) 중 선택"에서 **코스 1개 + 사진 6장 갤러리**로 단순화됨 (텍스트 정보는 고정, 사진만 전환)

### 상단 유틸리티
- ContactUs → /board/inquiry/write
- 로그인 → 관리자 전용 Popup 모달 UI만 (실제 인증 없음)
- "컴포넌트" 링크 → /components-guide (컴포넌트 데모 페이지, 아직 실제 생성 여부 확인 필요)

### 메인 네비게이션
야마구치1Day버스 · 운행코스(→/course) · 1Day버스+호텔(→/bus-hotel) · 문의게시판
- NavLink + isActive로 활성 표시, "문의게시판"만 useLocation().pathname.startsWith("/board")로 서브페이지 전체에서 활성 유지

### 게시판 잠금 기능
locked:true + password 필드 있는 글은 PasswordPrompt로 비밀번호 확인 후 열람

## 4. 페이지 구성

### / 홈 — 3섹션
1. **HeroBanner** — BANNERS 데이터 3개(야마구치소개/가을시즌/겨울시즌) 존재하나, `ACTIVE_BANNERS = BANNERS.slice(0, 1)`로 **현재 1개만 화면에 노출**, Swiper 자동재생/스와이프/페이지네이션 전부 비활성화(잠금). 나중에 여러 개 다시 쓰려면 slice 숫자만 변경.
2. **BusCourseSection** — busHotelGallery.js의 단일 코스 데이터 사용. 요일 뱃지, 성인/유아 요금표(가격표 th만 화목행 초록/금토행 회색 구분선, 좌우 테두리 없음), 로고 심볼 + 가격표, 설명, 예약하기(→/bus-hotel, 내부 Link). 오른쪽 갤러리 6장(aspect-ratio 4/3), 왼쪽 infoTop/infoBottom 구조로 여백 관리(margin-top:auto 대신 갤러리 높이에 카드가 자연히 맞춰지는 방식으로 최종 조정)
3. **PromoNoticeSection** — noticeList.js 최신 5개 실데이터, "관광정보 둘러보기" 카드는 **외부 링크** https://www.visit-jy.com/ko/ (a target=_blank), Notice 리스트 클릭시 전부 /board/notice로 이동(딥링크 자동오픈 기능은 보류, TODO 참고)

### /bus — 2섹션
BusIntroBanner(소개) + BusFeatureGrid(특징 카드 6개: highlightCard 1개(고정 오버레이, hover 없음) + FEATURES 5개(hover시 이미지 확대+텍스트 숨김+반투명 오버레이, 숫자 왼쪽위 큰 반투명 흰색))

### /course — 완성
courseItems.js(관광지 6개: title/city/category/desc/image) 기반. 상단 배너+브레드크럼, "☰카테고리" 버튼으로 도시/분류 select 필터 토글, 그리드 카드(hover시 오버레이+이미지 반투명)

### /bus-hotel — 완성, 최근 대폭 개편
- busHotelGallery.js: **코스 1개**(variants 배열 아님), 필드: brand, title, departureDays(["토","일"]), price: {adultLabel:"성인", adultAmount:"59,000원", childLabel:"6세 미만", childAmount:"29,000원"}, minPeople, description(경로 텍스트: "고쿠라역-시모노세키항 국제터미널-...-고쿠라역"), images(6장 배열)
- 갤러리: 6장 썸네일(그리드 6열), 클릭해도 **텍스트 정보는 고정**, 사진만 전환 (예전 variants 구조 폐기)
- 정보 테이블: 출발일(뱃지 토/일) / 상품가격(rowSpan 2, 성인·유아 각 행) / 최소출발인원
- 예약 폼: 출발일(date)+승차/하차장소(select)+예약하기. 유효성검사, 완료시 FormMessage success + 수정/취소
- **운행 코스 섹션**: LabeledBox 3개 중 "여행일정"에 `CourseTimeline` 컴포넌트 삽입 — 클라이언트 제공 이미지(남색 배경 타임라인 그래픽)를 HTML/CSS로 직접 재현. 1회성 페이지 전용이라 `src/pages/bus-hotel/CourseTimeline.jsx` 안에 데이터(STOPS: 9개 정거장명/시간, DESCRIPTIONS: 5개 관광지 설명)와 컴포넌트를 한 파일에 통합(공용 컴포넌트로 안 뽑음, 데이터 분리도 안 함 — 사용자 명시적 결정). `CourseTimeline.module.css` 별도 파일 필요.
  - ⚠️ **최근 미해결 이슈**: CourseTimeline 스타일이 전혀 안 먹는 문제 발생 — `CourseTimeline.module.css` 파일 존재 여부 및 `import styles from "./CourseTimeline.module.css";` 확인 필요 (새 세션에서 이어서 디버깅 예정)
- 나머지 LabeledBox "비고" 2개는 내용 미정, 구조만 존재

### /board/notice, /board/inquiry — 아코디언 목록
- 클릭시 그 자리에서 아코디언 오픈(페이지 이동 없음), 열린 글은 목록에서 제외되고 상세 카드로 표시
- 이전/다음은 id 오름차순 기준
- 페이지네이션(PAGE_SIZE=10), SVG chevron 화살표(PaginationArrow, currentColor+180도 회전 재사용)
- notice/inquiry 상세: `LabeledBox label={selectedItem.title}` 하나만 사용 — 질문(title)이 헤더, 답변(answer 있으면 그것, 없으면 "미답변")이 body. 문의사항은 상단 요약 테이블에 제목이 이미 나오므로 LabeledBox 라벨은 title 대신 "답변" 고정 텍스트로 최종 조정(중복 방지)
- notice만 작성 페이지 보유 (구분/작성자/제목/비밀번호/내용, 작성완료 팝업, 이탈시 확인팝업 isDirty)

### /board/faq — 탭 + 탭별 아코디언
Tab(variant="solid") 4개 카테고리(버스예약/교통정보/관광정보/기타), FaqCategoryList가 탭마다 독립 useBoardAccordion 인스턴스. 상세는 `LabeledBox label={selectedItem.title} icon="Q"` (질문이 헤더, content가 답변 body)

## 5. 폴더 구조

```
src/
  components/
    Layout.jsx, Nav.jsx, Footer.jsx
    common/   Button, Input, Badge, Card, Title, Popup, Tab, Stack,
              FormMessage, LabeledBox, ComingSoon + index.js
    board/    BoardSubNav, BoardHeader, BoardTable, BoardSearchBar,
              BoardPagination, PaginationArrow, PasswordPrompt + index.js
    sections/ HeroBanner, BusCourseSection, PromoNoticeSection,
              BusIntroBanner, BusFeatureGrid + index.js
  hooks/
    useBoardAccordion.js
  pages/
    index.jsx
    bus/index.jsx              (인라인 style 정리 필요 - TODO)
    course/index.jsx, Course.module.css
    bus-hotel/
      index.jsx, BusHotel.module.css
      CourseTimeline.jsx, CourseTimeline.module.css  (페이지 전용, 데이터 내장)
    board/
      Board.module.css
      notice/index.jsx, write.jsx
      inquiry/index.jsx, write.jsx
      faq.jsx
  data/
    busHotelGallery.js   (단일 코스, images 배열)
    courseItems.js       (/course 관광지 6개)
    noticeList.js, inquiryList.js(answer 필드 포함), faqList.js
  styles/
    variables.css, reset.css, common.css
```

## 6. 데이터 확장 규칙

- **busHotelGallery.js**: 코스 1개 구조. images 배열에 사진 추가/교체만 하면 됨. 텍스트 정보(brand/title/price/description)는 공통.
- **게시판 글 추가**: id는 문자열, 중복 없이. locked:true 시 password 필수. BoardTable "No."는 item.id 그대로 표시(배열 위치 아님).
- **courseItems.js**: city/category 값을 CITY_OPTIONS/CATEGORY_OPTIONS 배열에도 추가해야 필터에 노출됨.
- **HeroBanner**: BANNERS에 항목 추가 후 ACTIVE_BANNERS의 slice 범위를 늘리면 화면에 반영됨.

## 7. 미확정 / TODO

- [ ] CourseTimeline.module.css 스타일 미적용 문제 — 파일 존재/import 확인 필요 (최우선)
- [ ] pages/bus/index.jsx 인라인 스타일 → bus.module.css 분리
- [ ] 로그인 실제 인증 연동 범위 논의
- [ ] 랜딩페이지 Notice 클릭시 해당 글 자동 오픈되는 딥링크(useSearchParams+useEffect) — 보류
- [ ] /components-guide 페이지 실제 파일 생성 여부 확인 (가이드만 제공했음)
- [ ] 실제 이미지 리소스 교체 (현재 대부분 picsum.photos placeholder)
- [ ] bus-hotel "비고" LabeledBox 2개 내용 미정
- [ ] 모바일 버전은 별도 사이트로 추후 제작

## 8. 접근성 / 시맨틱 HTML

- Nav 메뉴 `<ul><li>`, BoardSubNav도 동일
- Popup: role="dialog" aria-modal aria-labelledby, 닫기 버튼 blind 텍스트
- Tab: role="tablist"/"tab"+aria-selected/"tabpanel"+aria-labelledby
- Footer 연락처/주소: `<address>` (font-style:normal로 이탤릭 재정의), 전화번호 tel: 링크
- 로고/외부링크 이미지: 배경이미지+blind 텍스트는 반드시 **같은 태그**(a 자체)에 함께 넣어야 함 — div로 감싸고 a를 안에 넣으면 클릭 영역이 사라지는 실수 반복 발생했음
- 외부 링크(target="_blank")는 항상 rel="noopener noreferrer" 동반

## 9. 자주 겪은 실수 (참고)

- import 누락 / 배럴 파일(index.js) export 빠뜨림 → 화면 빈 페이지의 90% 원인
- CSS 변수가 variables.css에 없는데 참조 → 에러 없이 조용히 무시됨 (Nevas 원본 복사시 자주 발생)
- CSS 명시도: 태그+클래스 조합이 순수 클래스보다 강함 → BoardTable th/td 정렬은 결국 각 셀에 명시적 className(align-left 등) 부여하는 방식으로 확정 (CSS cascade 트릭 대신)
- 데이터 구조 변경시 그 데이터를 쓰는 모든 파일(랜딩페이지+bus-hotel 등) 동시 확인 필요
- public/ 폴더 이미지는 절대경로(/파일명), src/assets/는 상대경로
- <li> 안 <a>/NavLink는 display:flex 명시 필요 (안 그러면 정렬 깨짐)
- 파일 첨부가 간헐적으로 빈 내용 전달되는 이슈 있었음 — 안 되면 텍스트로 직접 붙여넣기 권장