import { useState } from "react";
import Popup from "../common/Popup";
import Input from "../common/Input";
import Button from "../common/Button";
import FormMessage from "../common/FormMessage";
import styles from "./PasswordPrompt.module.css";

function PasswordPrompt({ isOpen, onClose, onConfirm }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleConfirm() {
    const isCorrect = onConfirm(password);
    if (!isCorrect) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    setPassword("");
    setError("");
  }

  function handleClose() {
    setPassword("");
    setError("");
    onClose();
  }

  return (
    <Popup isOpen={isOpen} onClose={handleClose} title="비밀번호 확인">
      <p className={styles.desc}>
        작성자 또는 관리자만 열람할 수 있는 글입니다.
      </p>
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <FormMessage variant="error">{error}</FormMessage>}
      <div className={styles.actions}>
        <Button variant="outline" size="sm" onClick={handleClose}>
          취소
        </Button>
        <Button variant="secondary" size="sm" onClick={handleConfirm}>
          확인
        </Button>
      </div>
    </Popup>
  );
}

export default PasswordPrompt;
