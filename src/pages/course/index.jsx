import { useState } from "react";
import { Badge, Input, Button, Stack } from "../../components/common";
import {
  courseItems,
  CITY_OPTIONS,
  CATEGORY_OPTIONS,
} from "../../data/courseItems";
import styles from "./Course.module.css";

function CoursePage() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [cityFilter, setCityFilter] = useState("전체");
  const [categoryFilter, setCategoryFilter] = useState("전체");

  const filteredItems = courseItems.filter((item) => {
    const cityMatch = cityFilter === "전체" || item.city === cityFilter;
    const categoryMatch =
      categoryFilter === "전체" || item.category === categoryFilter;
    return cityMatch && categoryMatch;
  });

  return (
    <div>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>
          야마구치 1Day버스
          <br />
          관광지정보
        </h1>
      </div>

      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumbInner}>
          HOME <span>›</span> 야마구치 1Day 버스 관광지정보
        </div>
      </div>

      <div className={styles.page}>
        <div className={styles.headingRow}>
          <h2 className={styles.heading}>🚌 야마구치 관광지 정보</h2>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setFilterOpen((prev) => !prev)}
          >
            ☰ 카테고리
          </Button>
        </div>

        {isFilterOpen && (
          <Stack gap="md" mb="lg">
            <Input
              type="select"
              placeholder="도시"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              options={CITY_OPTIONS}
            />
            <Input
              type="select"
              placeholder="분류"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              options={CATEGORY_OPTIONS}
            />
          </Stack>
        )}

        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                />
                <div className={styles.imageOverlay} />
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardTitle}>{item.title}</p>
                <Stack gap="xs" mb="xs">
                  <Badge variant="primary">{item.city}</Badge>
                  <Badge variant="secondary">{item.category}</Badge>
                </Stack>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className={styles.emptyText}>
            선택하신 조건에 맞는 관광지가 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}

export default CoursePage;
