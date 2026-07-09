import { Link } from "react-router-dom";
import { useState } from "react";
import { Badge, Stack } from "../common";
import { getBusHotelGalleryById } from "../../data/busHotelGallery";
import styles from "./BusCourseSection.module.css";

function BusCourseSection() {
  const gallery = getBusHotelGalleryById("1");
  const [activeIndex, setActiveIndex] = useState(0);

  if (!gallery) {
    return null;
  }

  const active = gallery.variants[activeIndex];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          <img
            src="/images/bus-icon.png"
            alt=""
            className={styles.headingIcon}
          />
          Bus Course
          <span className={styles.headingDesc}>
            원데이버스 코스별 안내 리스트입니다.
          </span>
        </h2>

        <div className={styles.content}>
          <div className={styles.infoCard}>
            <div className={styles.infoTop}>
              <div className={styles.scheduleBadges}>
                {active.departureDays.map((day) => (
                  <Badge key={day} variant="primary">
                    {day}
                  </Badge>
                ))}
              </div>
              <p className={styles.infoTitle}>{active.title}</p>

              <div className={styles.priceRow}>
                <img
                  src="/logo-symbol.png"
                  alt="Yamaguchi 1Day Bus 로고"
                  className={styles.priceLogo}
                />
                <table className={styles.priceTable}>
                  <tbody>
                    <tr>
                      <th>{active.price.weekdayLabel}</th>
                      <td>{active.price.weekdayAmount}</td>
                    </tr>
                    <tr>
                      <th>{active.price.weekendLabel}</th>
                      <td>{active.price.weekendAmount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={styles.routeText}>{active.description}</p>
            </div>

            <div className={styles.infoBottom}>
              <Link to="/bus-hotel" className={styles.reserveButton}>
                예약하기
              </Link>
            </div>
          </div>

          <div className={styles.gallery}>
            {gallery.variants.map((variant, index) => (
              <button
                key={variant.title}
                type="button"
                className={
                  index === activeIndex
                    ? `${styles.galleryItem} ${styles.galleryItemActive}`
                    : styles.galleryItem
                }
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={variant.image}
                  alt={variant.title}
                  className={styles.galleryImage}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusCourseSection;
