import { Link } from "react-router-dom";
import Badge from "../common/Badge";
import styles from "./BoardTable.module.css";

function BoardTable({ items, basePath, onRowClick }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>No.</th>
          <th>구분</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{String(item.id).padStart(2, "0")}</td>
            <td>{item.category}</td>
            <td className="align-left">
              {onRowClick ? (
                <button
                  type="button"
                  className={styles.titleLink}
                  onClick={() => onRowClick(item.id)}
                >
                  {item.locked && <span className={styles.lockIcon}>🔒</span>}
                  <span className={styles.titleText}>{item.title}</span>
                  {item.answered && <Badge variant="accent">답변</Badge>}
                </button>
              ) : basePath ? (
                <Link
                  to={`${basePath}/${item.id}`}
                  className={styles.titleLink}
                >
                  {item.locked && <span className={styles.lockIcon}>🔒</span>}
                  <span className={styles.titleText}>{item.title}</span>
                  {item.answered && <Badge variant="accent">답변</Badge>}
                </Link>
              ) : (
                <span className={styles.titleLink}>
                  {item.locked && <span className={styles.lockIcon}>🔒</span>}
                  <span className={styles.titleText}>{item.title}</span>
                  {item.answered && <Badge variant="accent">답변</Badge>}
                </span>
              )}
            </td>
            <td>{item.author}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BoardTable;
