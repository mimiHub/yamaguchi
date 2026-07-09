import styles from "./Popup.module.css";

function Popup({ isOpen, onClose, title, children }) {
  if (!isOpen) {
    return null;
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.popup}>
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          <button className={styles.closeButton} onClick={onClose}>
            <span className="sr-only">닫기</span>✕
          </button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default Popup;
