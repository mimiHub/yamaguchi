import { useState } from "react";
import { Badge, Button, Input, FormMessage, Stack, LabeledBox } from "../../components/common";
import { getBusHotelGalleryById } from "../../data/busHotelGallery";
import styles from "./BusHotel.module.css";
import CourseTimeline from "./CourseTimeline";




const BOARDING_LOCATIONS = ["고쿠라역", "시모노세키역", "부산항 국제여객터미널"];
const DROPOFF_LOCATIONS = ["고쿠라역", "시모노세키역", "부산항 국제여객터미널"];

function BusHotelPage() {
  const course = getBusHotelGalleryById("1");
  const [activeIndex, setActiveIndex] = useState(0);

  const [departureDate, setDepartureDate] = useState("");
  const [boardingLocation, setBoardingLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");

  const [reservation, setReservation] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  if (!course) {
    return <div className={styles.page}>상품 정보를 찾을 수 없습니다.</div>;
  }

  function handleReserve() {
    if (!departureDate || !boardingLocation || !dropoffLocation) {
      setErrorMessage("출발일, 승차장소, 하차장소를 모두 선택해주세요.");
      setReservation(null);
      return;
    }
    setErrorMessage("");
    setReservation({
      date: departureDate,
      boarding: boardingLocation,
      dropoff: dropoffLocation,
    });
  }

  function handleEdit() {
    setReservation(null);
  }

  function handleCancel() {
    setReservation(null);
    setDepartureDate("");
    setBoardingLocation("");
    setDropoffLocation("");
  }

  return (
    <div className={styles.page}>
      <section className={styles.productTop}>
        <div className={styles.gallery}>
          <img
            key={activeIndex}
            src={course.images[activeIndex]}
            alt={`${course.title} 사진 ${activeIndex + 1}`}
            className={styles.mainImage}
          />
          <ul className={styles.thumbList}>
            {course.images.map((image, index) => (
              <li key={image}>
                <button
                  type="button"
                  className={
                    index === activeIndex
                      ? `${styles.thumb} ${styles.thumbActive}`
                      : styles.thumb
                  }
                  onClick={() => setActiveIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${course.title} 썸네일 ${index + 1}`}
                    className={styles.thumbImage}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.info}>
          <p className={styles.brand}>{course.brand}</p>
          <h1 className={styles.title}>{course.title}</h1>

          <table className={styles.infoTable}>
            <tbody>
              <tr>
                <th>출발일</th>
                <td>
                  <div className={styles.dayBadges}>
                    {course.departureDays.map((day) => (
                      <Badge key={day} variant="secondary">
                        {day}
                      </Badge>
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <th rowSpan={2}>상품가격</th>
                <td>
                  {course.price.adultLabel} {course.price.adultAmount}
                </td>
              </tr>
              <tr>
                <td>
                  {course.price.childLabel} {course.price.childAmount}
                </td>
              </tr>
              <tr>
                <th>최소출발 인원</th>
                <td>{course.minPeople}</td>
              </tr>
            </tbody>
          </table>

          <p className={styles.desc}>{course.description}</p>
        </div>
      </section>

      <section className={styles.routeSection}>
        <h2 className={styles.sectionHeading}>🚌 야마구치 노선</h2>
        <p className={styles.sectionDesc}>버스노선을 선택해주세요.</p>

        {!reservation ? (
          <>
            <div className={styles.routeForm}>
              <Input type="date" size="md" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
              <Input type="select" size="md" placeholder="승차장소" value={boardingLocation} onChange={(e) => setBoardingLocation(e.target.value)} options={BOARDING_LOCATIONS} />
              <Input type="select" size="md" placeholder="하차장소" value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)} options={DROPOFF_LOCATIONS} />
              <Button variant="primary" size="md" onClick={handleReserve}>
                예약하기
              </Button>
            </div>
            {errorMessage && <FormMessage variant="error">{errorMessage}</FormMessage>}
          </>
        ) : (
          <FormMessage variant="success">
            <p className={styles.reservationText}>✅ 예약이 완료되었습니다.</p>
            <div>
              <strong>{reservation.date}</strong> [출발] {reservation.boarding} → [도착] {reservation.dropoff}
            </div>
            <Stack gap="sm" justify="end">
              <Button variant="primary" size="sm" onClick={handleEdit}>수정</Button>
              <Button variant="outline" size="sm" onClick={handleCancel}>취소</Button>
            </Stack>
          </FormMessage>
        )}
      </section>

      <section className={styles.courseSection}>
        <h2 className={styles.sectionHeading}>🚌 운행 코스</h2>

        <LabeledBox label="여행일정">
          <CourseTimeline />
        </LabeledBox>  
      </section>
    </div>
  );
}

export default BusHotelPage;