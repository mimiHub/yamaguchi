# 무엇을 수정하려면 어디로 가야 하나 — 참고 가이드

Ctrl+F로 키워드 검색해서 빠르게 찾으세요.

## 색상 / 디자인 토큰

| 바꾸고 싶은 것 | 파일 |
|---|---|
| 브랜드 메인/서브 컬러 | variables.css → --color-primary(-500), --color-secondary(-500) |
| 톤 스케일 | variables.css → --color-primary-100~900 |
| 상태색(성공/실패/경고/안내) | variables.css → --color-success/error/warning/info |
| 버튼 전용 색 | variables.css → --btn-primary-bg 등 |
| 폰트 크기/굵기 | variables.css → --font-size-*, --font-weight-* |
| 여백 | variables.css → --spacing-xs~2xl |
| 버튼/인풋 높이(sm/md/lg 공통) | variables.css → --control-height/padding/font-size-* |
| 사이트 전체 폭 | variables.css → --max-width, --min-width (1280px) |

## 공용 컴포넌트 (components/common/)

| 컴포넌트 | 무엇을 하는지 |
|---|---|
| Button | variant(primary/secondary/outline/text) x size(sm/md/lg) |
| Input | type(text/date/select/textarea/checkbox/radio/switch/file), error, size, resizable(textarea) |
| Badge | variant(default/primary/secondary/accent/outline/success/warning/error/info) |
| Tab | variant(underline/pill/solid), ARIA 탭 패턴 내장 |
| Popup | 모달, role=dialog. 크기/모서리는 Popup.module.css의 .popup |
| Stack | 배치(direction/gap/align/justify/wrap) + 선택적 여백(mt/mb) + className으로 확장 가능 |
| FormMessage | variant(error/success/warning/info) 폼 전체 안내 박스 |
| LabeledBox | 라벨(문자열 or 실제 title) + children 자유 콘텐츠, icon/rounded 옵션 |
| ComingSoon | 준비중 placeholder |

새 컴포넌트 추가하면 `components/common/index.js`에 export 한 줄 잊지 않기.

## 게시판(공지/문의/FAQ) 전용 (components/board/)

| 컴포넌트 | 역할 |
|---|---|
| BoardSubNav | 공지사항\|문의사항\|FAQ 탭 (ul/li, NavLink) |
| BoardHeader | 제목+설명 |
| BoardTable | 목록 테이블. onRowClick 있으면 버튼(아코디언), basePath 있으면 라우팅, 둘 다 없으면 정적. 정렬은 각 th/td에 className="align-left" 등 직접 지정 |
| BoardSearchBar | 카테고리 select + 검색창 |
| BoardPagination + PaginationArrow | 페이지네이션, SVG 화살표 |
| PasswordPrompt | 잠긴 글 비밀번호 확인 |
| useBoardAccordion (hooks/) | 아코디언 열기/닫기, 잠금 확인, id 오름차순 이전/다음, remainingItems 필터링 — 공지/문의/FAQ 3곳이 전부 이 훅 공유 |

## 페이지별 위치

| 페이지 | 파일 |
|---|---|
| / 홈 | pages/index.jsx + sections/HeroBanner.jsx, BusCourseSection.jsx, PromoNoticeSection.jsx |
| /bus | pages/bus/index.jsx + sections/BusIntroBanner.jsx, BusFeatureGrid.jsx |
| /course (관광지 갤러리+필터) | pages/course/index.jsx + Course.module.css, 데이터 data/courseItems.js |
| /bus-hotel (예약+운행코스) | pages/bus-hotel/index.jsx + BusHotel.module.css, 데이터 data/busHotelGallery.js, 타임라인은 pages/bus-hotel/CourseTimeline.jsx(페이지 전용, 데이터 내장) |
| /board/notice | pages/board/notice/index.jsx(목록), write.jsx(작성), data/noticeList.js |
| /board/inquiry | pages/board/inquiry/index.jsx(목록), write.jsx(작성), data/inquiryList.js |
| /board/faq | pages/board/faq.jsx, data/faqList.js |
| 게시판 공용 레이아웃 CSS | pages/board/Board.module.css |

## 네비게이션 / 푸터

| 바꾸고 싶은 것 | 파일 |
|---|---|
| 메뉴, 로고, 로그인 팝업 | components/Nav.jsx + Nav.module.css |
| "문의게시판" 활성 유지 로직 | Nav.jsx의 useLocation().pathname.startsWith("/board") |
| 전체 틀(Nav+main+Footer) | components/Layout.jsx |
| 로고/연락처/주소 | components/Footer.jsx + Footer.module.css |
| 부관훼리 외부 링크 | Footer.jsx — a 태그 자체에 className(배경이미지)+href+target+rel 모두 있어야 함 |

## 데이터 (텍스트/내용만 바꾸고 싶을 때)

| 데이터 | 파일 |
|---|---|
| 랜딩페이지 배너 (지금 1개만 노출, 데이터는 3개) | sections/HeroBanner.jsx의 BANNERS 배열 + ACTIVE_BANNERS = BANNERS.slice(0, N) |
| /bus-hotel 코스 정보(요금/요일/설명/사진6장) | data/busHotelGallery.js — 코스 1개 구조, images 배열 |
| /course 관광지 6개 | data/courseItems.js |
| /bus-hotel 운행코스 타임라인 그래픽 | pages/bus-hotel/CourseTimeline.jsx 안 STOPS, DESCRIPTIONS 상수 (파일 하나에 데이터+컴포넌트 다 있음) |
| 공지사항/문의사항/FAQ 글 | data/noticeList.js, inquiryList.js(answer 필드 있음), faqList.js |
| BusFeatureGrid 카드 5개 | sections/BusFeatureGrid.jsx의 FEATURES 배열 |

## 전역 유틸리티 클래스 (styles/common.css, className="문자열"로 사용)

| 클래스 | 용도 |
|---|---|
| align-left/center/right | 텍스트 정렬 강제 |
| blind (sr-only) | 화면엔 안 보이고 스크린리더에만 읽힘 |
| full-width | 너비 100% |

## 자주 헷갈리는 것

- **styles.xxx**(CSS Module) vs **"문자열"**(전역 클래스): 이 컴포넌트만의 스타일이면 styles.xxx, 프로젝트 전체 재사용 규칙이면 common.css 문자열
- **Stack의 mt/mb**: 안 넘기면 여백 없음, 필요한 곳만 mt="md" 등으로 추가
- **화면이 갑자기 빈 페이지**: (1) import 누락 (2) 정의 안 된 변수/함수 참조. 브라우저 콘솔(F12) 먼저 확인
- **CSS 값 바꿨는데 안 먹힘**: 명시도(specificity) 문제 — 더 구체적 선택자가 이기고 있을 가능성. 개발자도구에서 취소선 그어진 스타일 확인
- **배경이미지+숨김텍스트 로고**: 배경과 blind 텍스트가 반드시 같은 태그 안에 있어야 함(예: a 태그 자체에 className+배경이미지, 그 안에 blind span). div로 감싸고 a는 크기 없이 안에 두면 클릭 영역이 사라짐 — 이 실수가 Nav 로고, Footer 로고 두 번 반복됐음
- **1회성 vs 재사용 컴포넌트**: 다른 곳에서도 쓸 가능성이 있으면 components/common 또는 board에, 그 페이지 하나에서만 쓰면 그 페이지 폴더 안에 두고 데이터까지 한 파일에 합쳐도 무방 (CourseTimeline.jsx 사례)