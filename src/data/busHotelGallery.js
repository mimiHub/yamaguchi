export const busHotelGallery = [
  {
    id: "1",
    brand: "YAMAGUCHI 1DAY BUS",
    title: "야마구치 1Day Bus",
    departureDays: ["토", "일"],
    price: {
      adultLabel: "성인",
      adultAmount: "59,000원",
      childLabel: "6세 미만",
      childAmount: "29,000원",
    },
    minPeople: "4명",
    description:
      "고쿠라역 - 시모노세키항 국제터미널 - 시모노세키역 - 츠노시마대교 - 모토노스미신사 - 센자키친 - 아키요시다이 - 벳푸벤텐연못 - 씨몰 - 고쿠라역",
    images: [
      "https://picsum.photos/seed/yamaguchi-course-1/800/533",
      "https://picsum.photos/seed/yamaguchi-course-2/800/533",
      "https://picsum.photos/seed/yamaguchi-course-3/800/533",
      "https://picsum.photos/seed/yamaguchi-course-4/800/533",
      "https://picsum.photos/seed/yamaguchi-course-5/800/533",
      "https://picsum.photos/seed/yamaguchi-course-6/800/533",
    ],
  },
];

export function getBusHotelGalleryById(id) {
  return busHotelGallery.find((item) => item.id === id);
}