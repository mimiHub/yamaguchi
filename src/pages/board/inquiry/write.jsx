import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoardSubNav, BoardHeader } from "../../../components/board";
import { Input, Button, FormMessage, Stack } from "../../../components/common";
import styles from "../Board.module.css";

function InquiryWritePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    const newErrors = {};
    if (!title) newErrors.title = "제목을 입력해주세요.";
    if (!name) newErrors.name = "이름을 입력해주세요.";
    if (!content) newErrors.content = "문의내용을 입력해주세요.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
  }

  return (
    <div>
      <BoardSubNav />
      <div className={styles.page}>
        <BoardHeader
          title="문의하기"
          description="야마구치 1Day 버스에 대한 문의사항을 남겨주세요."
        />

        <div className={styles.form}>
          <Stack direction="column" gap="md">
            <Input
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={errors.title}
            />
            <Input
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
            />
          </Stack>

          <Input
            type="textarea"
            placeholder="문의내용"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            error={errors.content}
          />

          <Stack justify="center">
            <Button variant="primary" size="sm" onClick={handleSubmit}>
              문의하기
            </Button>
          </Stack>

          {submitted && (
            <FormMessage variant="success">
              <Stack justify="center">
                ✅ 문의가 성공적으로 제출되었습니다.
              </Stack>
              <Stack justify="center" gap="sm">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/board/inquiry")}
                >
                  목록으로
                </Button>
              </Stack>
            </FormMessage>
          )}
        </div>
      </div>
    </div>
  );
}

export default InquiryWritePage;
