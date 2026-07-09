import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoardSubNav, BoardHeader } from "../../../components/board";
import { Input, Button, Popup } from "../../../components/common";
import styles from "../Board.module.css";
const NOTICE_CATEGORIES = ["관광정보", "여행정보"];

function NoticeWritePage() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState({});

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);

  // 폼에 뭐라도 입력된 적이 있는지 (하나라도 값이 있으면 true)
  const isDirty = Boolean(category || author || title || password || content);

  function handleSubmit() {
    const newErrors = {};
    if (!category) newErrors.category = "구분을 선택해주세요.";
    if (!author) newErrors.author = "작성자를 입력해주세요.";
    if (!title) newErrors.title = "제목을 입력해주세요.";
    if (!password) newErrors.password = "비밀번호를 입력해주세요.";
    if (!content) newErrors.content = "내용을 입력해주세요.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // 실제 저장 로직은 나중에 연결 (지금은 성공 팝업만)
    setShowSuccessPopup(true);
  }

  // "목록으로" 클릭 시: 작성 중이던 내용이 있으면 확인 팝업, 없으면 바로 이동
  function handleGoToList() {
    if (isDirty) {
      setShowLeaveConfirm(true);
    } else {
      navigate("/board/notice");
    }
  }

  return (
    <div>
      <BoardSubNav />
      <div className={styles.page}>
        <BoardHeader
          title="공지사항"
          description="야마구치 1Day 버스 관련 새소식을 알려드립니다."
        />

        <div className={styles.form}>
          <div className={styles.formRow}>
            <Input
              type="select"
              placeholder="구분"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              options={NOTICE_CATEGORIES}
              error={errors.category}
            />
            <Input
              placeholder="작성자"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              error={errors.author}
            />
          </div>

          <div className={styles.formRow}>
            <Input
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={errors.title}
            />
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />
          </div>

          <Input
            type="textarea"
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            error={errors.content}
          />

          <div className={styles.detailNav}>
            <Button variant="secondary" size="md" onClick={handleGoToList}>
              목록으로
            </Button>
            <Button variant="primary" size="md" onClick={handleSubmit}>
              작성
            </Button>
          </div>
        </div>
      </div>

      {/* 작성 완료 팝업 */}
      <Popup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        title="알림"
      >
        <p className={styles.popupText}>공지사항이 작성되었습니다.</p>
        <div className={styles.popupActions}>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate("/board/notice")}
          >
            목록으로
          </Button>
        </div>
      </Popup>

      {/* 작성 중 이탈 경고 팝업 */}
      <Popup
        isOpen={showLeaveConfirm}
        onClose={() => setShowLeaveConfirm(false)}
        title="알림"
      >
        <p className={styles.popupText}>
          공지사항 작성이 완료되지 않았습니다.
          <br />
          목록으로 이동하시겠습니까?
        </p>
        <div className={styles.popupActions}>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowLeaveConfirm(false)}
          >
            취소
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => navigate("/board/notice")}
          >
            나가기
          </Button>
        </div>
      </Popup>
    </div>
  );
}

export default NoticeWritePage;
