import { NavLink } from "react-router-dom";
import styles from "./BoardSubNav.module.css";

const TABS = [
  { label: "공지사항", to: "/board/notice" },
  { label: "문의사항", to: "/board/inquiry" },
  { label: "FAQ", to: "/board/faq" },
];

function getTabClassName({ isActive }) {
  return isActive ? `${styles.tab} ${styles.tabActive}` : styles.tab;
}

function BoardSubNav() {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {TABS.map((tab) => (
          <li key={tab.to}>
            <NavLink to={tab.to} className={getTabClassName}>
              {tab.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BoardSubNav;
