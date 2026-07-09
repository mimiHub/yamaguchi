import styles from "./BoardHeader.module.css";

function BoardHeader({ title, description }) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}

export default BoardHeader;
