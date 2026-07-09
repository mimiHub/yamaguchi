export const busHotelGallery = [
  {
    id: "1",
    variants: [
      {
        image: "https://picsum.photos/seed/yamaguchi-1/800/533",
        brand: "YAMAGUCHI 1DAY BUS",
        title: "야마구치 1Day Bus",
        departureDays: ["화", "목", "금", "토"],
        price: {
          weekdayLabel: "화 · 목",
          weekdayAmount: "4,900엔",
          weekendLabel: "금 · 토",
          weekendAmount: "5,900엔",
        },
        minPeople: "4명",
        description:
          "후쿠오카, 기타규슈지역에서도 이동하기 편한 야마구치현 서쪽 주요관광지를 관광하실 수 있습니다. 바다가 보이는 간몬 해협을 사이에 두고 경제의 중심지인 규슈지역과 가까이 접해있어 다양한 문화와 바다와 산이 어우러져 있는 절경을 관광하실 수 있습니다.",
      },
      {
        image: "https://picsum.photos/seed/yamaguchi-2/800/533",
        brand: "YAMAGUCHI SUNSET COURSE",
        title: "야마구치 노을 명소 코스",
        departureDays: ["금", "토"],
        price: {
          weekdayLabel: "화 · 목",
          weekdayAmount: "5,400엔",
          weekendLabel: "금 · 토",
          weekendAmount: "6,400엔",
        },
        minPeople: "4명",
        description:
          "쓰노시마 대교와 모토노스미 신사의 붉은 도리이가 노을과 어우러지는 인기 명소 코스입니다. 사진 촬영 명당으로 손꼽히는 장소들을 여유롭게 둘러볼 수 있습니다.",
      },
      {
        image: "https://picsum.photos/seed/yamaguchi-3/800/533",
        brand: "YAMAGUCHI ONSEN COURSE",
        title: "야마구치 온천 힐링 코스",
        departureDays: ["화", "금"],
        price: {
          weekdayLabel: "화 · 목",
          weekdayAmount: "5,900엔",
          weekendLabel: "금 · 토",
          weekendAmount: "6,900엔",
        },
        minPeople: "4명",
        description:
          "유모토온천, 유다온천을 둘러보는 힐링 코스입니다. 온천 마을 특유의 정취를 느끼며 편안한 하루를 보낼 수 있습니다.",
      },
      {
        image: "https://picsum.photos/seed/yamaguchi-4/800/533",
        brand: "YAMAGUCHI NATURE COURSE",
        title: "아키요시다이 자연 코스",
        departureDays: ["목", "일"],
        price: {
          weekdayLabel: "화 · 목",
          weekdayAmount: "4,700엔",
          weekendLabel: "금 · 토",
          weekendAmount: "5,700엔",
        },
        minPeople: "4명",
        description:
          "일본 최대급 카르스트 지형인 아키요시다이의 탁 트인 초원 경관을 즐길 수 있는 코스입니다.",
      },
      {
        image: "https://picsum.photos/seed/yamaguchi-5/800/533",
        brand: "YAMAGUCHI CULTURE COURSE",
        title: "루리코지 문화 코스",
        departureDays: ["수", "토"],
        price: {
          weekdayLabel: "화 · 목",
          weekdayAmount: "5,200엔",
          weekendLabel: "금 · 토",
          weekendAmount: "6,200엔",
        },
        minPeople: "4명",
        description:
          "국보로 지정된 루리코지 5층석탑을 중심으로 야마구치의 전통 문화를 체험할 수 있는 코스입니다.",
      },
      {
        image: "https://picsum.photos/seed/yamaguchi-6/800/533",
        brand: "YAMAGUCHI MARKET COURSE",
        title: "가라토 시장 미식 코스",
        departureDays: ["화", "일"],
        price: {
          weekdayLabel: "화 · 목",
          weekdayAmount: "4,900엔",
          weekendLabel: "금 · 토",
          weekendAmount: "5,900엔",
        },
        minPeople: "4명",
        description:
          "신선한 해산물로 유명한 가라토 시장에서 자유롭게 식사와 쇼핑을 즐길 수 있는 코스입니다.",
      },
      {
        image: "https://picsum.photos/seed/yamaguchi-7/800/533",
        brand: "YAMAGUCHI FULL COURSE",
        title: "야마구치 종합 코스",
        departureDays: ["화", "목", "금", "토"],
        price: {
          weekdayLabel: "화 · 목",
          weekdayAmount: "5,900엔",
          weekendLabel: "금 · 토",
          weekendAmount: "6,900엔",
        },
        minPeople: "4명",
        description:
          "야마구치의 핵심 명소를 하루에 모두 둘러보는 알찬 종합 코스입니다.",
      },
      {
        image: "https://picsum.photos/seed/yamaguchi-8/800/533",
        brand: "YAMAGUCHI NIGHT COURSE",
        title: "야마구치 야경 명소 코스",
        departureDays: ["금", "토"],
        price: {
          weekdayLabel: "화 · 목",
          weekdayAmount: "5,300엔",
          weekendLabel: "금 · 토",
          weekendAmount: "6,300엔",
        },
        minPeople: "4명",
        description:
          "가라토시장 야경과 간몬대교 일루미네이션을 감상하는 저녁 특별 코스입니다. 낮과는 다른 야마구치의 매력을 느껴보세요.",
      },
    ],
  },
];

export function getBusHotelGalleryById(id) {
  return busHotelGallery.find((item) => item.id === id);
}
