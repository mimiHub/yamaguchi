import { Link } from "react-router-dom";
import { noticeList } from "../../data/noticeList";
import styles from "./PromoNoticeSection.module.css";

const PROMO_IMAGE = "https://picsum.photos/seed/travel-guidebook-pages/880/440";

// 최신 5개만 미리보기 (noticeList는 id 내림차순으로 정렬되어 있음)
const LATEST_NOTICES = noticeList.slice(0, 5);

function PromoNoticeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Link to="/bus" className={styles.promoCard}>
          <img src={PROMO_IMAGE} alt="" className={styles.promoImage} />
          <div className={styles.promoOverlay}>
            <p className={styles.promoTitle}>
              Yamaguchi 1Day Bus
              <br />
              야마구치 관광정보 둘러보기
            </p>
            <p className={styles.promoDesc}>
              원데이 코스별 상세 설명 및 각종 정보
            </p>
          </div>
        </Link>

        <div className={styles.noticeCard}>
          <div className={styles.noticeHeader}>
            <h2>Notice</h2>
            <Link to="/board/notice" className={styles.moreLink}>
              +
            </Link>
          </div>
          <ul className={styles.noticeList}>
            {LATEST_NOTICES.map((item) => (
              <li key={item.id}>
                <Link to="/board/notice">
                  <span className={styles.noticeDate}>{item.date}</span>
                  <span className={styles.noticeTitle}>{item.title}</span>
                  <span className={styles.noticeAuthor}>{item.author}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PromoNoticeSection;
