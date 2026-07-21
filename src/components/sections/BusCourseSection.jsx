import { Link } from "react-router-dom";
import { Badge } from "../common";
import { getBusHotelGalleryById } from "../../data/busHotelGallery";
import { useState } from "react";
import styles from "./BusCourseSection.module.css";

function handleImgError(e) {
  e.currentTarget.style.display = "none";
}

function BusCourseSection() {
  const course = getBusHotelGalleryById("1");
  const [activeIndex, setActiveIndex] = useState(0);

  if (!course) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          <img
            src="/images/bus-icon.png"
            alt=""
            className={styles.headingIcon}
            onError={handleImgError}
          />
          Bus Course
          <span className={styles.headingDesc}>원데이버스 코스별 안내 리스트입니다.</span>
        </h2>       

        <div className={styles.content}>
          <div className={styles.infoCard}>
            <div className={styles.infoTop}>
              <div className={styles.scheduleBadges}>
                {course.departureDays.map((day) => (
                  <Badge key={day} variant="primary">
                    {day}
                  </Badge>
                ))}
              </div>
              <p className={styles.infoTitle}>{course.title}</p>

              <div className={styles.priceRow}>
                <img src="/logo-symbol.png" alt="Yamaguchi 1Day Bus 로고" className={styles.priceLogo} />
                <table className={styles.priceTable}>
                  <tbody>
                    <tr>
                      <th>{course.price.adultLabel}</th>
                      <td>{course.price.adultAmount}</td>
                    </tr>
                    <tr>
                      <th>{course.price.childLabel}</th>
                      <td>{course.price.childAmount}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={styles.routeText}>{course.description}</p>
            </div>

            <div className={styles.infoBottom}>
              <Link to="/bus-hotel" className={styles.reserveButton}>
                예약하기
              </Link>
            </div>
          </div>

          <div className={styles.gallery}>
            {course.images.map((image, index) => (
              <button
                key={image}
                type="button"
                className={
                  index === activeIndex
                    ? `${styles.galleryItem} ${styles.galleryItemActive}`
                    : styles.galleryItem
                }
                onClick={() => setActiveIndex(index)}
              >
                <img src={image} alt={`${course.title} 사진 ${index + 1}`} className={styles.galleryImage} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusCourseSection;