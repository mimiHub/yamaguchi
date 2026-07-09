import { useState } from "react";
import {
  Button,
  Input,
  Badge,
  Tab,
  Popup,
  Stack,
  FormMessage,
  LabeledBox,
} from "../components/common";

function ComponentsGuidePage() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [textValue, setTextValue] = useState("");

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 0" }}>
      <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "8px" }}>
        컴포넌트 가이드
      </h1>
      <p style={{ color: "var(--color-text-light)", marginBottom: "40px" }}>
        개발 참고용 페이지입니다. 모든 공용 컴포넌트의 variant/size를 한눈에
        확인할 수 있어요.
      </p>

      {/* Button */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
          Button
        </h2>
        <Stack gap="md" wrap>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="text">Text</Button>
        </Stack>
        <Stack gap="md" mt="md" wrap>
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="md">
            Medium
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
        </Stack>
      </section>

      {/* Badge */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
          Badge
        </h2>
        <Stack gap="sm" wrap>
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="accent">Accent</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </Stack>
      </section>

      {/* Input */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
          Input
        </h2>
        <Stack direction="column" gap="md" style={{ maxWidth: "360px" }}>
          <Input
            placeholder="text (기본)"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <Input type="date" />
          <Input
            type="select"
            placeholder="select 예시"
            options={["옵션1", "옵션2", "옵션3"]}
          />
          <Input
            type="textarea"
            placeholder="textarea (리사이즈 불가+스크롤)"
          />
          <Input type="textarea" placeholder="textarea (resizable)" resizable />
          <Input placeholder="에러 상태 예시" error="이 필드는 필수입니다." />
        </Stack>
      </section>

      {/* Tab */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
          Tab
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "var(--color-text-light)",
            marginBottom: "8px",
          }}
        >
          variant="underline" (기본값)
        </p>
        <Tab
          tabs={[
            { label: "탭1", content: <p>underline 탭 내용 1</p> },
            { label: "탭2", content: <p>underline 탭 내용 2</p> },
          ]}
        />
        <p
          style={{
            fontSize: "14px",
            color: "var(--color-text-light)",
            margin: "16px 0 8px",
          }}
        >
          variant="pill"
        </p>
        <Tab
          variant="pill"
          tabs={[
            { label: "탭1", content: <p>pill 탭 내용 1</p> },
            { label: "탭2", content: <p>pill 탭 내용 2</p> },
          ]}
        />
        <p
          style={{
            fontSize: "14px",
            color: "var(--color-text-light)",
            margin: "16px 0 8px",
          }}
        >
          variant="solid" (FAQ에서 사용 중)
        </p>
        <Tab
          variant="solid"
          tabs={[
            { label: "탭1", content: <p>solid 탭 내용 1</p> },
            { label: "탭2", content: <p>solid 탭 내용 2</p> },
          ]}
        />
      </section>

      {/* FormMessage */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
          FormMessage
        </h2>
        <Stack direction="column" gap="sm">
          <FormMessage variant="error">에러 메시지 예시입니다.</FormMessage>
          <FormMessage variant="success">성공 메시지 예시입니다.</FormMessage>
          <FormMessage variant="warning">경고 메시지 예시입니다.</FormMessage>
          <FormMessage variant="info">안내 메시지 예시입니다.</FormMessage>
        </Stack>
      </section>

      {/* LabeledBox */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
          LabeledBox
        </h2>
        <Stack direction="column" gap="md">
          <LabeledBox label="기본 (rounded)">
            내용이 들어가는 영역입니다.
          </LabeledBox>
          <LabeledBox label="rounded=false" rounded={false}>
            모서리가 각진 버전입니다.
          </LabeledBox>
          <LabeledBox label="Q" icon="Q">
            아이콘이 붙은 버전 (FAQ에서 사용 중).
          </LabeledBox>
        </Stack>
      </section>

      {/* Popup */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
          Popup
        </h2>
        <Button variant="secondary" onClick={() => setPopupOpen(true)}>
          팝업 열어보기
        </Button>
        <Popup
          isOpen={isPopupOpen}
          onClose={() => setPopupOpen(false)}
          title="팝업 예시"
        >
          <p>Popup 컴포넌트 내용 영역입니다.</p>
        </Popup>
      </section>

      {/* Stack */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>
          Stack
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "var(--color-text-light)",
            marginBottom: "8px",
          }}
        >
          direction="row" (기본), gap="md"
        </p>
        <Stack
          gap="md"
          style={{ border: "1px dashed var(--color-border)", padding: "8px" }}
        >
          <Badge variant="primary">A</Badge>
          <Badge variant="primary">B</Badge>
          <Badge variant="primary">C</Badge>
        </Stack>
        <p
          style={{
            fontSize: "14px",
            color: "var(--color-text-light)",
            margin: "16px 0 8px",
          }}
        >
          direction="column", justify="between" (예: BusCourseSection에서 활용)
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "120px",
            border: "1px dashed var(--color-border)",
            padding: "8px",
          }}
        >
          <Badge variant="secondary">위쪽</Badge>
          <Badge variant="secondary">아래쪽</Badge>
        </div>
      </section>
    </div>
  );
}

export default ComponentsGuidePage;
