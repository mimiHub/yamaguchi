import styles from "./BusFeatureGrid.module.css";

const FEATURES = [
  {
    id: "popular-spots",
    number: "01",
    title: "인기 관광지 관람",
    desc: "인기 관광지를 코스로 즐길 수 있는 한정 라인업",
    image: "https://picsum.photos/seed/feature-popular-spots/400/240",
  },
  {
    id: "affordable",
    number: "02",
    title: "저렴하고 합리적인 여행",
    desc: "저렴하고 합리적인 관광지 코스",
    image: "https://picsum.photos/seed/feature-affordable/400/240",
  },
  {
    id: "safe-easy",
    number: "03",
    title: "편하고 안전한 여행",
    desc: "헤매지 않고 편하게 갈 수 있는 인기 코스",
    image: "https://picsum.photos/seed/feature-safe-easy/400/240",
  },
  {
    id: "direct",
    number: "04",
    title: "환승 없는 전용버스",
    desc: "환승 없이 목적지로 직행하는 투어전용버스",
    image: "https://picsum.photos/seed/feature-direct/400/240",
  },
  {
    id: "online-booking",
    number: "05",
    title: "쉽고 간편한 온라인 예약",
    desc: "온라인으로 편하고 간단하게 예약가능",
    image: "https://picsum.photos/seed/feature-online-booking/400/240",
  },
];

function BusFeatureGrid() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        🚌 원데이버스 특징
        <span className={styles.headingDesc}>
          원데이버스를 타면 좋은 점입니다.
        </span>
      </h2>

      <div className={styles.grid}>
        <div className={styles.highlightCard}>
          <div className={styles.highlightOverlay} />
          <p className={styles.highlightBrand}>
            YAMAGUCHI
            <br />
            1DAY BUS
          </p>
          <p className={styles.highlightTitle}>원데이버스 장점</p>
        </div>

        {FEATURES.map((feature) => (
          <div key={feature.id} className={styles.card}>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(${feature.image})` }}
            >
              <span className={styles.cardNumber}>{feature.number}</span>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.cardTitle}>{feature.title}</p>
              <p className={styles.cardDesc}>{feature.desc}</p>
            </div>

            <div className={styles.cardOverlay}>
              <p className={styles.overlayTitle}>{feature.title}</p>
              <p className={styles.overlayDesc}>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BusFeatureGrid;
