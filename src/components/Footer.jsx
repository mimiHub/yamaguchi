import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className="sr-only">부관훼리</span>
        </div>
        <address className={styles.contact}>
          <p>☎ 문의전화</p>
          <p>(주)넷투재팬</p>
          <p className={styles.phone}>
            <a href="tel:051-463-7182">051-463-7182</a>
          </p>
        </address>
        <address className={styles.address}>
          <p className={styles.addressLabel}>주소</p>
          <p>부산광역시 동구 충장대로 206(부산항 국제여객터미널)</p>
        </address>
      </div>
    </footer>
  );
}

export default Footer;
