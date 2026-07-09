import { useState } from "react";
import {
  Badge,
  Button,
  Input,
  FormMessage,
  Stack,
  LabeledBox,
} from "../../components/common";
import { getBusHotelGalleryById } from "../../data/busHotelGallery";
import styles from "./BusHotel.module.css";

const BOARDING_LOCATIONS = [
  "고쿠라역",
  "시모노세키역",
  "부산항 국제여객터미널",
];
const DROPOFF_LOCATIONS = ["고쿠라역", "시모노세키역", "부산항 국제여객터미널"];

function BusHotelPage() {
  const gallery = getBusHotelGalleryById("1");
  const [activeIndex, setActiveIndex] = useState(0);

  const [departureDate, setDepartureDate] = useState("");
  const [boardingLocation, setBoardingLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");

  // 예약 완료 후 보여줄 확인 정보 - 처음엔 null(예약 안 된 상태)
  const [reservation, setReservation] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  if (!gallery) {
    return <div className={styles.page}>상품 정보를 찾을 수 없습니다.</div>;
  }

  // 지금 선택된 갤러리 항목 하나만 꺼내옴 - 이 값에서 모든 텍스트가 파생됨
  const active = gallery.variants[activeIndex];

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

  // 수정: 예약 요약을 닫고 폼으로 돌아감. 입력값(date/location)은 그대로 남아있어서
  // 사용자가 원하는 부분만 바꿔서 다시 예약하기를 누르면 됨
  function handleEdit() {
    setReservation(null);
  }

  // 취소: 예약 요약을 닫고, 입력값도 전부 초기화
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
            src={active.image}
            alt={`${active.title} 사진`}
            className={styles.mainImage}
          />
          <div className={styles.thumbList}>
            {gallery.variants.map((variant, index) => (
              <button
                key={variant.title}
                type="button"
                className={
                  index === activeIndex
                    ? `${styles.thumb} ${styles.thumbActive}`
                    : styles.thumb
                }
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={variant.image}
                  alt={`${variant.title} 썸네일`}
                  className={styles.thumbImage}
                />
              </button>
            ))}
          </div>
        </div>

        <div key={`info-${activeIndex}`} className={styles.info}>
          <p className={styles.brand}>{active.brand}</p>
          <h1 className={styles.title}>{active.title}</h1>

          <table className={styles.infoTable}>
            <tbody>
              <tr>
                <th>출발일</th>
                <td>
                  <div className={styles.dayBadges}>
                    {active.departureDays.map((day) => (
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
                  {active.price.weekdayLabel} {active.price.weekdayAmount}
                </td>
              </tr>
              <tr>
                <td>
                  {active.price.weekendLabel} {active.price.weekendAmount}
                </td>
              </tr>
              <tr>
                <th>최소출발 인원</th>
                <td>{active.minPeople}</td>
              </tr>
            </tbody>
          </table>

          <p className={styles.desc}>{active.description}</p>
        </div>
      </section>

      <section className={styles.routeSection}>
        <h2 className={styles.sectionHeading}>🚌 야마구치 노선</h2>
        <p className={styles.sectionDesc}>버스노선을 선택해주세요.</p>

        {!reservation ? (
          <>
            <div className={styles.routeForm}>
              <Input
                type="date"
                size="md"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
              <Input
                type="select"
                size="md"
                placeholder="승차장소"
                value={boardingLocation}
                onChange={(e) => setBoardingLocation(e.target.value)}
                options={BOARDING_LOCATIONS}
              />
              <Input
                type="select"
                size="md"
                placeholder="하차장소"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
                options={DROPOFF_LOCATIONS}
              />
              <Button variant="primary" size="md" onClick={handleReserve}>
                예약하기
              </Button>
            </div>

            {errorMessage && (
              <FormMessage variant="error">{errorMessage}</FormMessage>
            )}
          </>
        ) : (
          <FormMessage variant="success">
            <p className={styles.reservationText}>✅ 예약이 완료되었습니다.</p>
            <div>
              <strong>{reservation.date}</strong> [출발] {reservation.boarding}{" "}
              → [도착] {reservation.dropoff}
            </div>
            <Stack gap="sm" justify="end">
              <Button variant="primary" size="sm" onClick={handleEdit}>
                수정
              </Button>
              <Button variant="outline" size="sm" onClick={handleCancel}>
                취소
              </Button>
            </Stack>
          </FormMessage>
        )}
      </section>

      <section className={styles.courseSection}>
        <h2 className={styles.sectionHeading}>🚌 운행 코스</h2>

        <LabeledBox label="여행일정">
          {/* 여기에 원하는 콘텐츠를 자유롭게 넣으면 됩니다 */}
        </LabeledBox>

        <LabeledBox label="비고">{/* 마찬가지로 자유롭게 */}</LabeledBox>

        <LabeledBox label="비고">{/* 마찬가지로 자유롭게 */}</LabeledBox>
      </section>
    </div>
  );
}

export default BusHotelPage;
