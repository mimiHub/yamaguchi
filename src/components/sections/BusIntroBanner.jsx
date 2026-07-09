import styles from "./BusIntroBanner.module.css";

function BusIntroBanner() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        🚌 야마구치 1DAY 버스란?
        <span className={styles.headingDesc}>
          야마구치 1DAY 버스 소개입니다.
        </span>
      </h2>

      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <p className={styles.brand}>YAMAGUCHI 1DAY BUS</p>
          <h3 className={styles.title}>야마구치 1DAY 버스</h3>
          <p className={styles.desc}>
            야마구치현의 인기 있는 주요관광지를 다닐 수 있는
            <br />
            당일 버스투어 상품입니다.
            <br />
            편하고 안전하게 야마구치를 둘러보세요~!
          </p>
        </div>
        {/* <div className={styles.bannerImage}>이미지 영역</div> */}
      </div>
    </section>
  );
}

export default BusIntroBanner;
