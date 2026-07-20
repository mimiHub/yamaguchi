import styles from "./CourseTimeline.module.css";

const STOPS = [
  { name: "고쿠라역", nameJp: "小倉駅", times: ["08:00", "17:40"] },
  { name: "시모노세키항 국제터미널", nameJp: "下関国際ターミナル", times: ["08:50"] },
  { name: "시모노세키역", nameJp: "下関駅", times: ["09:00"] },
  { name: "츠노시마 대교", nameJp: "角島大橋", times: ["10:15-10:45"] },
  { name: "모토노스미신사", nameJp: "元乃隅神社", times: ["11:20-12:00"] },
  { name: "센자키친", nameJp: "センザキッチン", times: ["12:30-13:40"], note: "자유식사·쇼핑" },
  { name: "아키요시다이", nameJp: "秋吉台", times: ["14:20-14:50"] },
  { name: "벳푸 벤텐 연못", nameJp: "別府弁天池", times: ["15:10-15:40"] },
  { name: "씨몰", nameJp: "シーモール", times: ["16:40"], note: "대형 쇼핑몰" },
];

const DESCRIPTIONS = [
  { name: "츠노시마 대교", desc: "새하얀 모래사장과 코발트블루 바다가 어우러진 절경으로, TV 광고와 영화 촬영지로도 유명한 일본 대표 관광명소입니다. 총 길이 1,780m의 무료 일반도로 교량으로, 에메랄드빛 바다를 감상하며 드라이브와 산책을 즐길 수 있는 최고의 포토 스폿입니다." },
  { name: "모토노스미신사", desc: "바다를 향해 123개의 붉은 토리이가 이어지는 장관으로 유명한 야마구치현 대표 절경 명소입니다. 푸른 바다와 초록빛 자연이 어우러진 아름다운 풍경 덕분에 SNS 인기 포토 스폿으로 사랑받으며, CNN이 선정한 '일본에서 가장 아름다운 장소 31선'에도 이름을 올렸습니다." },
  { name: "센자키친", desc: "신선한 해산물과 제철 식재료를 즐길 수 있는 복합 관광시설입니다. 해산물 레스토랑과 바비큐, 쇼핑은 물론 오미지마 유람선까지 함께 즐길 수 있어 먹거리와 체험, 아름다운 바다 풍경을 모두 만끽할 수 있습니다." },
  { name: "아키요시다이", desc: "일본 최대 규모의 카르스트 고원으로, 드넓은 초원과 하얀 석회암이 어우러진 이색적인 풍경을 자랑하는 일본 3대 카르스트 중 하나입니다. 사계절 아름다운 자연 속에서 드라이브와 트레킹을 즐기기 좋은 대표 관광 명소입니다." },
  { name: "벳푸 벤텐 연못", desc: "'일본 명수 백선'에 선정된 명소로, 에메랄드빛의 맑고 신비로운 물빛이 아름다운 관광지입니다. 직접 샘물을 마실 수 있으며, 장수와 복을 가져다준다는 전설로 많은 여행객이 찾는 힐링 명소입니다." },
];

function CourseTimeline() {
  return (
    <div>
      <div className={styles.wrapper}>
        <span className={styles.tag}>운행 코스</span>
        <div className={styles.line}>
          {STOPS.map((stop) => (
            <div key={stop.name} className={styles.stop}>
              <p className={styles.name}>{stop.name}</p>
              <p className={styles.nameJp}>{stop.nameJp}</p>
              <span className={styles.dot} />
              <div className={styles.times}>
                {stop.times.map((time) => (
                  <p key={time}>{time}</p>
                ))}
              </div>
              {stop.note && <p className={styles.note}>({stop.note})</p>}
            </div>
          ))}
        </div>
        <p className={styles.footnote}>
          ●현지 도로 상황 등에 의해 일정에 변동이 생길 수 있습니다.
        </p>
      </div>

      <div className={styles.courseDescList}>
        {DESCRIPTIONS.map((item) => (
          <div key={item.name} className={styles.courseDescItem}>
            <h4 className={styles.courseDescTitle}>{item.name}</h4>
            <p className={styles.courseDescText}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseTimeline;
