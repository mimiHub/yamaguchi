# 무엇을 수정하려면 어디로 가야 하나 — 참고 가이드

"이거 어디서 고치지?" 싶을 때 이 표부터 확인하세요. Ctrl+F로 키워드 검색하면 빨라요.

## 색상 / 디자인 토큰

| 바꾸고 싶은 것                 | 파일                                                                                    |
| ------------------------------ | --------------------------------------------------------------------------------------- |
| 브랜드 메인/서브 컬러 (전체)   | `src/styles/variables.css` → `--color-primary`, `--color-secondary`                     |
| 톤 스케일(연한/진한 버전)      | `variables.css` → `--color-primary-100~900`                                             |
| 성공/실패/경고/안내 색         | `variables.css` → `--color-success`, `--color-error`, `--color-warning`, `--color-info` |
| 버튼 전용 색                   | `variables.css` → `--btn-primary-bg` 등                                                 |
| 폰트 크기                      | `variables.css` → `--font-size-sm/base/lg/xl/2xl`                                       |
| 폰트 굵기                      | `variables.css` → `--font-weight-regular/medium/bold`                                   |
| 여백(spacing)                  | `variables.css` → `--spacing-xs~2xl`                                                    |
| 버튼/인풋 높이 (sm/md/lg 공통) | `variables.css` → `--control-height-*`, `--control-padding-x-*`                         |
| 사이트 전체 폭, 모서리 둥글기  | `variables.css` → `--max-width`, `--radius-*`                                           |

## 공용 컴포넌트 (여러 페이지에서 재사용)

| 컴포넌트        | 위치                                                | 이걸로 할 수 있는 것                                    |
| --------------- | --------------------------------------------------- | ------------------------------------------------------- |
| `Button`        | `components/common/Button.jsx` + `.module.css`      | variant(primary/secondary/outline/text), size(sm/md/lg) |
| `Input`         | `components/common/Input.jsx` + `.module.css`       | type(text/date/select/textarea 등), error, size         |
| `Badge`         | `components/common/Badge.jsx` + `.module.css`       | variant(primary/secondary/accent/success 등)            |
| `Tab`           | `components/common/Tab.jsx` + `.module.css`         | variant(underline/pill/solid)                           |
| `Popup`         | `components/common/Popup.jsx` + `.module.css`       | 모달 크기/모서리/헤더색                                 |
| `Stack`         | `components/common/Stack.jsx` + `.module.css`       | 요소 배치(방향/간격/정렬), 여백(mt/mb)                  |
| `FormMessage`   | `components/common/FormMessage.jsx` + `.module.css` | variant(error/success/warning/info) 알림 박스           |
| `LabeledBox`    | `components/common/LabeledBox.jsx` + `.module.css`  | 라벨+내용 박스, rounded 여부                            |
| `ComingSoon`    | `components/common/ComingSoon.jsx`                  | 준비중 페이지 문구                                      |
| `Card`, `Title` | `components/common/Card.jsx`, `Title.jsx`           | 지금은 거의 안 쓰임 (참고용)                            |

> 새 컴포넌트를 common 폴더에 추가하면 `components/common/index.js`에도 export 한 줄 추가해야 배럴 import가 가능해요.

## 게시판(공지사항/문의사항/FAQ) 전용 컴포넌트

| 컴포넌트            | 위치                                                           | 역할                                                                  |
| ------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------- |
| `BoardSubNav`       | `components/board/BoardSubNav.jsx`                             | 공지사항\|문의사항\|FAQ 상단 탭                                       |
| `BoardHeader`       | `components/board/BoardHeader.jsx`                             | 페이지 제목+설명                                                      |
| `BoardTable`        | `components/board/BoardTable.jsx`                              | 목록 테이블 (헤더 정렬은 `<th className="align-left">`처럼 직접 지정) |
| `BoardSearchBar`    | `components/board/BoardSearchBar.jsx`                          | 카테고리 select + 검색창                                              |
| `BoardPagination`   | `components/board/BoardPagination.jsx` + `PaginationArrow.jsx` | 페이지네이션, 화살표 SVG                                              |
| `PasswordPrompt`    | `components/board/PasswordPrompt.jsx`                          | 잠긴 글 비밀번호 확인 팝업                                            |
| `useBoardAccordion` | `hooks/useBoardAccordion.js`                                   | 아코디언 열기/닫기, 잠금 확인, 이전/다음 로직 (공지/문의/FAQ 공용)    |

## 페이지별 파일 위치

| 페이지(URL)              | 파일                                                                                                       |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `/` 홈                   | `pages/index.jsx` + `components/sections/HeroBanner.jsx`, `BusCourseSection.jsx`, `PromoNoticeSection.jsx` |
| `/bus`                   | `pages/bus/index.jsx` + `components/sections/BusIntroBanner.jsx`, `BusFeatureGrid.jsx`                     |
| `/course`                | `pages/course/index.jsx` + `Course.module.css`, 데이터는 `data/courseItems.js`                             |
| `/bus-hotel`             | `pages/bus-hotel/index.jsx` + `BusHotel.module.css`, 데이터는 `data/busHotelGallery.js`                    |
| `/board/notice`          | `pages/board/notice/index.jsx`(목록), `write.jsx`(작성), 데이터 `data/noticeList.js`                       |
| `/board/inquiry`         | `pages/board/inquiry/index.jsx`(목록), `write.jsx`(작성), 데이터 `data/inquiryList.js`                     |
| `/board/faq`             | `pages/board/faq.jsx`, 데이터 `data/faqList.js`                                                            |
| 게시판 공용 레이아웃 CSS | `pages/board/Board.module.css`                                                                             |

## 상단 네비게이션 / 푸터

| 바꾸고 싶은 것                                              | 파일                                                      |
| ----------------------------------------------------------- | --------------------------------------------------------- |
| 메뉴 항목, 로고, 로그인 팝업                                | `components/Nav.jsx` + `Nav.module.css`                   |
| "문의게시판" 메뉴가 게시판 하위 어디서든 활성 표시되는 로직 | `Nav.jsx`의 `useLocation().pathname.startsWith("/board")` |
| Nav/Footer를 감싸는 전체 틀                                 | `components/Layout.jsx` + `Layout.module.css`             |
| 하단 로고/연락처/주소                                       | `components/Footer.jsx` + `Footer.module.css`             |

## 데이터 (내용/텍스트만 바꾸고 싶을 때)

| 데이터                              | 파일                                                       |
| ----------------------------------- | ---------------------------------------------------------- |
| 랜딩페이지 배너 3개 문구/이미지     | `components/sections/HeroBanner.jsx`의 `BANNERS` 배열      |
| bus-hotel 갤러리 7~8개 상품 정보    | `data/busHotelGallery.js`                                  |
| 운행코스(관광지) 6개                | `data/courseItems.js`                                      |
| 공지사항/문의사항/FAQ 글            | `data/noticeList.js`, `inquiryList.js`, `faqList.js`       |
| BusFeatureGrid 카드 5개 문구/이미지 | `components/sections/BusFeatureGrid.jsx`의 `FEATURES` 배열 |

## 전역 유틸리티 클래스 (CSS Modules 아님, 문자열로 바로 사용)

| 클래스                                      | 파일                | 용도                                                     |
| ------------------------------------------- | ------------------- | -------------------------------------------------------- |
| `align-left`, `align-center`, `align-right` | `styles/common.css` | 텍스트 정렬 강제 (`className="align-left"`처럼 문자열로) |
| `blind` (`sr-only`)                         | `styles/common.css` | 화면엔 안 보이고 스크린리더에만 읽히는 텍스트            |
| `full-width`                                | `styles/common.css` | 너비 100%                                                |

## 자주 헷갈리는 것 정리

- **`styles.xxx`** (import한 CSS Module) vs **`"문자열"`** (전역 클래스): 그 컴포넌트만의 스타일이면 `styles.xxx`, 프로젝트 전체에서 재사용하는 규칙(정렬, 숨김 등)이면 `common.css`의 문자열 클래스
- **`Stack`의 `mt`/`mb`**: 안 넘기면 여백 없음, 필요한 곳에만 `mt="md"`처럼 추가
- **화면이 갑자기 빈 페이지**: 대부분 (1) import를 빼먹었거나 (2) 정의 안 된 변수/함수를 참조 — 브라우저 콘솔(F12) 에러 메시지부터 확인
- **CSS 값을 바꿨는데 안 먹힘**: 명시도(specificity) 문제일 확률 높음 — 더 구체적인 선택자(`.className element`)가 이기고 있을 수 있음, 개발자도구에서 취소선 그어진 스타일 확인
