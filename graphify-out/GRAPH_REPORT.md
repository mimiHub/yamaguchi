# Graph Report - .  (2026-07-08)

## Corpus Check
- 80 files · ~138,064 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 217 nodes · 342 edges · 40 communities (18 shown, 22 thin omitted)
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.87)
- Token cost: 0 input · 708,274 output

## Community Hubs (Navigation)
- Board List Pages & Data
- Common UI Component Library
- Landing & Bus-Hotel Sections
- Package Dependencies & Scripts
- Site Architecture & Wireframes
- Notice Detail & Sub-Nav
- App Shell & Entry Point
- Bus Intro Page
- Icon Sprite Sheet
- Lint Configuration
- Course Page & Data
- CSS Pitfalls & Verification Habits
- Data Structure Conventions
- Yamaguchi Banner Imagery
- Folder Structure & Utility CSS
- Board Pagination
- Brand Logo
- Partner Ferry Logo
- TODO List & Tour Info Mockup
- Graphify Usage Rule
- Favicon Asset
- Hero Banner Image
- Highlight Card Image
- Logo Symbol Asset
- Hero Asset (Unused Boilerplate)
- React Boilerplate Logo
- Vite Boilerplate Logo
- Contact Us Screenshot 1
- Contact Us Screenshot 2 (Login Modal)
- FAQ Screenshot
- Landing Page Screenshot
- Notice Board List Screenshot
- Notice Write Screenshot
- Notice Detail Screenshot
- Sub-page Intro Screenshot
- Sub-page Booking Screenshot
- Tourist Info Screenshot

## God Nodes (most connected - your core abstractions)
1. `Button()` - 13 edges
2. `무엇을 수정하려면 어디로 가야 하나 가이드` - 12 edges
3. `Stack()` - 10 edges
4. `BoardSubNav()` - 9 edges
5. `Input()` - 9 edges
6. `useBoardAccordion()` - 9 edges
7. `사이트맵 / 라우팅 구조` - 9 edges
8. `LabeledBox()` - 8 edges
9. `BoardHeader()` - 7 edges
10. `Badge()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `샘플 PDF 사이트맵 다이어그램` --semantically_similar_to--> `사이트맵 / 라우팅 구조`  [INFERRED] [semantically similar]
  src/git-sandbox/야마구치 원데이버스 샘플.pdf → README.md
- `샘플 PDF 운행코스/예약 목업` --semantically_similar_to--> `/bus-hotel 페이지`  [INFERRED] [semantically similar]
  src/git-sandbox/야마구치 원데이버스 샘플.pdf → README.md
- `샘플 PDF 랜딩 페이지 목업` --semantically_similar_to--> `/ 홈 랜딩페이지 (3섹션)`  [INFERRED] [semantically similar]
  src/git-sandbox/야마구치 원데이버스 샘플.pdf → README.md
- `샘플 PDF 야마구치1Day Bus 소개 목업` --semantically_similar_to--> `/bus 야마구치1Day버스 소개 페이지`  [INFERRED] [semantically similar]
  src/git-sandbox/야마구치 원데이버스 샘플.pdf → README.md
- `샘플 PDF 게시판 와이어프레임 (목록/상세/글작성)` --semantically_similar_to--> `/board/notice, /board/inquiry 목록+아코디언 페이지`  [INFERRED] [semantically similar]
  src/git-sandbox/야마구치 원데이버스 샘플.pdf → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **CLAUDE.md 4대 핵심 원칙 (Karpathy 스킬 참고 재구성)** — claude_md_think_before_coding, claude_md_simplicity_first, claude_md_surgical_changes, claude_md_goal_oriented_execution, claude_md_karpathy_reference [EXTRACTED 1.00]
- **문서/목업 전반에 걸쳐 표현된 사이트 구조** — readme_sitemap, where_to_edit_guide, src_git_sandbox_yamaguchi_oneday_bus_sample_sitemap, index_html_entry [INFERRED 0.85]
- **/bus-hotel ↔ /course 콘텐츠 스왑 관련 노드 그룹** — readme_content_swap_decision, readme_bus_hotel_page, readme_course_route, src_git_sandbox_yamaguchi_oneday_bus_sample_course_mockup [INFERRED 0.85]

## Communities (40 total, 22 thin omitted)

### Community 0 - "Board List Pages & Data"
Cohesion: 0.13
Nodes (21): import 관련 반복 실수 규칙, 단순함이 먼저 원칙, 게시판 잠금 기능 (locked+password), 디자인 토큰 체계, BoardHeader(), BoardPagination(), BoardSearchBar(), BoardSubNav() (+13 more)

### Community 1 - "Common UI Component Library"
Cohesion: 0.12
Nodes (9): 접근성 / 시맨틱 HTML 개선 작업, CATEGORY_OPTIONS, FormMessage(), Input(), Popup(), Tab(), Title(), Nav() (+1 more)

### Community 2 - "Landing & Bus-Hotel Sections"
Cohesion: 0.11
Nodes (17): 목표 중심 실행 원칙, andrej-karpathy-skills/CLAUDE.md (외부 참고 문서), 외과수술식 변경 원칙, 코딩 전에 먼저 생각하기 원칙, / 홈 랜딩페이지 (3섹션), Badge(), BusCourseSection(), BANNERS (+9 more)

### Community 3 - "Package Dependencies & Scripts"
Cohesion: 0.09
Nodes (21): dependencies, react, react-dom, react-router-dom, swiper, vite-plugin-pages, devDependencies, oxlint (+13 more)

### Community 4 - "Site Architecture & Wireframes"
Cohesion: 0.19
Nodes (13): title 'damagochi'와 프로젝트명 불일치, /board/faq 탭+아코디언 페이지, /board/notice, /board/inquiry 목록+아코디언 페이지, /bus-hotel 페이지, 클라이언트 미팅 정리 PPT (외부 문서), /course/1 ↔ /bus-hotel 콘텐츠 스왑 결정, /course/:id 라우트 (ComingSoon), 문의게시판 Nav 활성 상태 로직 (+5 more)

### Community 5 - "Notice Detail & Sub-Nav"
Cohesion: 0.24
Nodes (6): TABS, Button(), LATEST_NOTICES, getNoticeById(), noticeList, NoticeDetailPage()

### Community 6 - "App Shell & Entry Point"
Cohesion: 0.24
Nodes (7): index.html 엔트리 포인트, Pretendard 폰트 CDN 로드, Nevas (참고 프로젝트, 외부), 기술 스택 & 개발 규칙, App(), Footer(), Layout()

### Community 7 - "Bus Intro Page"
Cohesion: 0.27
Nodes (5): /bus 야마구치1Day버스 소개 페이지, BusFeatureGrid(), FEATURES, BusIntroBanner(), 샘플 PDF 야마구치1Day Bus 소개 목업

### Community 8 - "Icon Sprite Sheet"
Cohesion: 0.62
Nodes (7): Bluesky Icon (butterfly logo, dark fill), Discord Icon (game controller/mask logo, dark fill), Documentation Icon (folder with chevrons, purple outline), GitHub Icon (Octocat mark, dark fill), Social/Community Icon (person with star badge, purple outline), icons.svg (SVG Icon Sprite Sheet), X (Twitter) Icon, dark fill

### Community 9 - "Lint Configuration"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 10 - "Course Page & Data"
Cohesion: 0.53
Nodes (3): CATEGORY_OPTIONS, CITY_OPTIONS, courseItems

### Community 11 - "CSS Pitfalls & Verification Habits"
Cohesion: 0.50
Nodes (4): CSS 관련 반복 실수 규칙, 확인 습관 규칙, CSS 블록 순서로 color/border-bottom 덮어쓴 사례, 자주 헷갈리는 것 정리

### Community 12 - "Data Structure Conventions"
Cohesion: 1.00
Nodes (3): 데이터 구조 관련 반복 실수 규칙, 데이터 확장 규칙 (갤러리/게시판/배너), busHotelGallery.js variants 데이터

### Community 13 - "Yamaguchi Banner Imagery"
Cohesion: 1.00
Nodes (3): Five-Story Pagoda (Japanese Temple Landmark), Yamaguchi 1Day Bus Hero Banner, Sontetsu Tour Bus

### Community 14 - "Folder Structure & Utility CSS"
Cohesion: 0.67
Nodes (3): src/ 폴더 구조, common.css 유틸리티 클래스 파일, 전역 유틸리티 클래스 (align-*, blind, full-width)

## Ambiguous Edges - Review These
- `사이트맵 / 라우팅 구조` → `title 'damagochi'와 프로젝트명 불일치`  [AMBIGUOUS]
  index.html · relation: conceptually_related_to

## Knowledge Gaps
- **67 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+62 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **22 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `사이트맵 / 라우팅 구조` and `title 'damagochi'와 프로젝트명 불일치`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `무엇을 수정하려면 어디로 가야 하나 가이드` connect `Board List Pages & Data` to `Common UI Component Library`, `Data Structure Conventions`, `Folder Structure & Utility CSS`, `App Shell & Entry Point`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **Why does `Stack()` connect `Board List Pages & Data` to `Common UI Component Library`, `Landing & Bus-Hotel Sections`, `Course Page & Data`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Why does `사이트맵 / 라우팅 구조` connect `Site Architecture & Wireframes` to `Landing & Bus-Hotel Sections`, `Bus Intro Page`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `무엇을 수정하려면 어디로 가야 하나 가이드` (e.g. with `import 관련 반복 실수 규칙` and `src/ 폴더 구조`) actually correct?**
  _`무엇을 수정하려면 어디로 가야 하나 가이드` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _72 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Board List Pages & Data` be split into smaller, more focused modules?**
  _Cohesion score 0.12701612903225806 - nodes in this community are weakly interconnected._