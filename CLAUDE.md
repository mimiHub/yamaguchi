# CLAUDE.md

이 프로젝트(Yamaguchi 1Day Bus)에서 작업할 때 따르는 행동 지침입니다. 일반적인 LLM 코딩 실수를 줄이기 위한 규칙과, 이 프로젝트에서 실제로 반복됐던 문제들을 정리했습니다.

> 참고: 1~4번 원칙은 [andrej-karpathy-skills/CLAUDE.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CLAUDE.md)의 구성을 참고해 이 프로젝트에 맞게 재구성했습니다.

## 1. 코딩 전에 먼저 생각하기

**추측하지 않기. 헷갈리는 걸 숨기지 않기. 트레이드오프는 드러내기.**

- 가정한 내용은 명시적으로 말하기. 확신 없으면 물어보기.
- 여러 해석이 가능하면, 하나로 조용히 결정하지 말고 선택지를 제시하기.
- 더 단순한 방법이 있으면 그렇게 말하기.
- 뭔가 불명확하면 멈추고, 무엇이 헷갈리는지 짚고 나서 질문하기.

## 2. 단순함이 먼저

**문제를 해결하는 최소한의 코드만. 추측성 확장 금지.**

- 요청받지 않은 기능은 추가하지 않기.
- 한 번만 쓰이는 코드에 과한 추상화 만들지 않기.
- 요청 안 한 "유연성"이나 "설정 가능성"을 미리 넣지 않기.
- 일어날 수 없는 상황에 대한 예외처리 넣지 않기.

**이 프로젝트에서의 적용 예**: `Stack`, `LabeledBox`처럼 실제로 여러 곳에서 재사용될 게 명확한 것만 공용 컴포넌트로 뽑는다. 한 곳에서만 쓰이는 레이아웃(예: `BusCourseSection`의 위/아래 그룹 분리)은 그냥 전용 CSS 클래스로 처리해도 된다 — 억지로 일반화하지 않는다.

## 3. 외과수술식 변경

**꼭 필요한 곳만 건드리기. 내가 어지른 것만 치우기.**

- 기존 코드를 수정할 때, 관련 없는 코드/주석/포맷팅을 "개선"하지 않기.
- 고장 안 난 걸 리팩터링하지 않기.
- 기존 스타일을 따르기, 내 취향과 달라도.
- 관련 없는 죽은 코드를 발견하면 언급만 하고, 지우지 않기 (요청받지 않았다면).

**변경으로 인해 고아가 된 것 처리**:
- 내 변경 때문에 안 쓰이게 된 import/변수/함수는 지우기.
- 원래부터 있던 죽은 코드는 요청 없이는 지우지 않기.

**이 프로젝트에서의 적용 예**: 데이터 구조를 바꿀 때(예: `price.weekday` → `price.weekdayLabel`/`weekdayAmount`), 그 데이터를 참조하는 **모든** 파일(`bus-hotel/index.jsx`, `BusCourseSection.jsx`)을 같이 확인하고 고치기. 한 곳만 고치면 나머지에서 `undefined` 에러가 난다.

## 4. 목표 중심 실행

**성공 기준을 정의하고, 확인될 때까지 반복하기.**

작업을 검증 가능한 목표로 바꾸기:
- "검증 추가해줘" → "잘못된 입력에 대한 케이스를 먼저 떠올리고, 그게 막히는지 확인"
- "버그 고쳐줘" → "그 버그가 재현되는 상황을 먼저 짚고, 고친 뒤 그 상황에서 재현 안 되는지 확인"

다단계 작업은 짧게 계획을 먼저 말하기.

---

## 5. 이 프로젝트 특유의 반복 실수 (실제 겪었던 패턴)

### import 관련
- 새 컴포넌트/훅을 쓰기 전에 반드시 import부터 확인. "화면이 갑자기 빈 페이지"의 90%는 (1) import 누락 (2) 정의 안 된 변수/함수 참조.
- 배럴 파일(`components/common/index.js`, `components/board/index.js`, `components/sections/index.js`)에 새 컴포넌트를 추가했으면, export 한 줄도 반드시 같이 추가.
- 리네임(파일명, 함수명, 변수명) 시 그 이름을 참조하는 **모든** 곳을 같이 고치기 — 한 곳이라도 빠지면 조용히 깨진다.

### CSS 관련
- 스타일이 안 먹으면 먼저 확인할 것: (1) 존재하지 않는 CSS 변수를 참조하고 있는지 (2) 더 구체적인 선택자가 덮어쓰고 있는지(명시도 문제) (3) CSS Modules 클래스(`styles.xxx`)와 전역 클래스(`"문자열"`)를 헷갈리지 않았는지.
- 새 CSS 블록을 추가할 때, 이미 다른 블록에 정의된 속성(특히 `color`, `border-bottom` 등)을 실수로 다시 선언해서 뒤에 오는 블록이 앞의 걸 덮어쓰지 않도록 주의.
- 컴포넌트 전용 스타일은 `해당컴포넌트.module.css`에, 프로젝트 전역에서 재사용하는 유틸리티는 `styles/common.css`에.

### 데이터 구조 관련
- 여러 페이지가 같은 데이터를 참조할 때(예: `busHotelGallery.js`를 랜딩페이지와 `/bus-hotel` 양쪽에서 사용), 데이터 구조를 바꾸면 그 데이터를 쓰는 모든 페이지를 같이 업데이트.
- `id` 필드는 항상 문자열로 통일 (숫자/문자열 혼용 시 `===` 비교가 깨짐).

### 확인 습관
- 브라우저 화면이 이상하면 개발자도구(F12) Console 탭부터 확인 — 대부분 에러 메시지가 원인을 알려준다.
- 코드 수정 후에는 화면이 "이전과 동일하게" 보이는지 먼저 확인 (리팩터링이면 화면 변화가 없어야 정상), 그다음 의도한 변화가 적용됐는지 확인.

---

**이 지침이 잘 지켜지고 있다는 신호**: 불필요한 변경이 줄어듦, 과하게 복잡하게 만들어서 다시 짜는 일이 줄어듦, 문제가 생기고 나서가 아니라 구현 전에 명확히 하는 질문이 늘어남.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
