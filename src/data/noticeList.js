export const noticeList = [
  {
    id: "5",
    category: "관광정보",
    title: "야마구치현 공식 관광정보 사이트 안내",
    author: "니코니코니",
    date: "2019-01-01",
    answered: false,
    locked: false,
    password: "1111",
    content:
      "야마구치현의 상세한 관광정보는 야마구치현 공식 홈페이지(한국어 지원)에서도 확인하실 수 있습니다. 계절별 축제 일정, 온천 정보, 맛집 안내 등이 정리되어 있으니 여행 전 참고해주세요.",
  },
  {
    id: "4",
    category: "여행정보",
    title: "겨울철 방한 준비물 안내",
    author: "야미야미",
    date: "2019-02-09",
    answered: false,
    locked: false,
    content:
      "12월~2월 탑승 예정이신 분들은 실외 관광지 이동이 많은 만큼 방한용품(장갑, 목도리, 핫팩 등)을 꼭 챙겨주세요. 아키요시다이, 쓰노시마대교 등은 바람이 강한 지역입니다.",
  },
  {
    id: "3",
    category: "관광정보",
    title: "설 연휴 특별 운행 일정 안내",
    author: "다마고치",
    date: "2020-01-28",
    answered: false, // 답변이 등록되지 않은 상태
    locked: false,
    password: "1111",
    content:
      "설 연휴 기간(1/28~1/30) 동안은 평소와 다른 특별 운행 일정으로 진행됩니다. 출발 시간이 1시간 앞당겨지니 예약 시 반드시 확인해주세요.",
  },
  {
    id: "2",
    category: "여행정보",
    title: "야마구치 온천 마을 여행 가이드 공개",
    author: "얌얌몬",
    date: "2025-04-01",
    answered: false,
    locked: false,
    content:
      "유모토온천, 유다온천을 중심으로 한 야마구치 온천 마을 여행 가이드북을 새롭게 공개했습니다. 온천 마을 지도와 추천 코스는 홈페이지 관광정보 메뉴에서 다운로드하실 수 있습니다.",
  },
  {
    id: "1",
    category: "관광정보",
    title: "야마구치 1Day 버스 노선 일부 변경 안내",
    author: "나돈짱많아",
    date: "2026-07-08",
    answered: false,
    locked: false,
    password: "1111",
    content:
      "도로 공사로 인해 일부 구간(가라토시장 인근)의 하차 위치가 임시로 변경됩니다. 변경된 위치는 현장 안내 스태프의 안내에 따라주시기 바랍니다.",
  },
];

export function getNoticeById(id) {
  return noticeList.find((item) => item.id === id);
}
