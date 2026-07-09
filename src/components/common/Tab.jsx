import { useState } from "react";
import styles from "./Tab.module.css";

function Tab({ tabs, variant = "underline" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function getTabClassName(index) {
    const base = index === activeIndex ? styles.tabActive : styles.tab;
    const variantClass = styles[`variant-${variant}`];
    return `${base} ${variantClass}`;
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.tabList} ${styles[`list-${variant}`]}`}
        role="tablist"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}
            className={getTabClassName(index)}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`tabpanel-${activeIndex}`}
        aria-labelledby={`tab-${activeIndex}`}
        className={styles.tabContent}
      >
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}

export default Tab;
