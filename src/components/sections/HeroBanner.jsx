import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Badge } from "../common";
import styles from "./HeroBanner.module.css";

const SCHEDULE_DAYS = ["화", "목", "금", "토"];

// boxTitle 안의 **텍스트**(하늘색), ##텍스트##(노란색)를 강조 span으로 변환, \n은 줄바꿈으로 처리
function renderBoxTitle(text) {
  return text.split("\n").map((line, lineIndex, lines) => (
    <span key={lineIndex}>
      {line.split(/(\*\*.*?\*\*|##.*?##)/g).map((part, partIndex) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <span key={partIndex} className={styles.highlightBlue}>
              {part.slice(2, -2)}
            </span>
          );
        }
        if (part.startsWith("##") && part.endsWith("##")) {
          return (
            <span key={partIndex} className={styles.highlightYellow}>
              {part.slice(2, -2)}
            </span>
          );
        }
        return part;
      })}
      {lineIndex < lines.length - 1 && <br />}
    </span>
  ));
}

const BANNERS = [
  {
    id: "yamaguchi-1day",
    badge: null,
    title: "야마구치 1DAY 버스",
    desc: '야마구치현의 인기있는 관광지만 "모아 모아" 출발하는 야마구치 당일 버스투어! 야마구치현 관광지를 보다 즐겁고 편안하게 둘러볼 수 있는 1일 버스 투어입니다.',
    boxTitle: "아래 체크항목에 **2가지 이상** 해당되시는 분은\n##[야마구치 1Day Bus]##를 신청해주세요!",
    highlights: [
      "렌트카 운전이 두려운 분",
      "일본의 비싼 대중교통비가 부담이신 분",
      "구글 지도를 봐도 찾아가기 힘드신 분",
      "핵심 관광지만 보고 싶으신 분",
      "일본 대중 교통타기엔 일본어가 부족하신 분",
    ],
  },
  {
    id: "autumn-promo",
    badge: "가을 시즌 한정",
    title: "단풍 명소 스페셜 코스",
    desc: "루리코지 5층석탑, 아키요시다이 카르스트 등 야마구치 가을 명소만 모은 한정 코스! 지금 예약하고 단풍 여행을 준비하세요.",
    boxTitle: "이런 분들께 추천드려요!",
    highlights: [
      "단풍 절정 시기에 딱 맞춰 방문하고 싶은 분",
      "인생샷 명소를 찾고 계신 분",
      "루리코지 5층석탑을 직접 보고 싶으신 분",
      "가을 정취를 만끽하고 싶으신 분",
    ],
  },
  {
    id: "winter-promo",
    badge: "겨울 시즌 한정",
    title: "온천 힐링 코스",
    desc: "유모토온천, 유다온천을 둘러보는 겨울 한정 온천 코스! 추운 겨울, 따뜻한 온천으로 몸과 마음을 녹여보세요.",
    boxTitle: "이런 분들께 추천드려요!",
    highlights: [
      "추운 겨울, 몸을 녹이고 싶으신 분",
      "노천탕에서 설경을 즐기고 싶으신 분",
      "온천 마을 특유의 정취를 느끼고 싶으신 분",
      "가족/연인과 힐링 여행을 계획 중이신 분",
    ],
  },
];

// 지금 화면에 보여줄 배너만 선택 - 나중에 켜려면 이 배열만 수정(3개 보여주고 싶을때 1->3 수정)
const ACTIVE_BANNERS = BANNERS.slice(0, 1);

function HeroBanner() {
  const isSingle = ACTIVE_BANNERS.length <= 1;

  return (
    <section className={styles.hero}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={isSingle ? false : { clickable: true }}
        autoplay={isSingle ? false : { delay: 4000, disableOnInteraction: false }}
        loop={!isSingle}
        allowTouchMove={!isSingle}
        className={styles.swiper}
      >
        {ACTIVE_BANNERS.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className={`${styles.slideBg} ${styles[banner.id]}`}>
              <div className={styles.heroInner}>
                <div className={styles.heroText}>
                  {banner.badge && (
                    <span className={styles.badge}>{banner.badge}</span>
                  )}
                  <p className={styles.schedule}>
                    매주
                    {SCHEDULE_DAYS.map((day) => (
                      <Badge key={day} variant="primary">
                        {day}
                      </Badge>
                    ))}
                    출발!
                  </p>
                  <h1 className={styles.title}>{banner.title}</h1>
                  <p className={styles.desc}>{banner.desc}</p>
                </div>

                <div className={styles.checklistWrapper}>
                  <span className={styles.checkBadge} aria-hidden="true" />
                  <div className={styles.checklistBox}>
                    <p className={styles.checklistTitle}>
                      {renderBoxTitle(banner.boxTitle)}
                    </p>
                    <ul className={styles.checklist}>
                      {banner.highlights.map((item) => (
                        <li key={item}>· {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroBanner;