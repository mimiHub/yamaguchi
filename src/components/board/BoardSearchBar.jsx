import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import styles from "./BoardSearchBar.module.css";

const CATEGORY_OPTIONS = ["전체", "관광정보", "여행정보"];

function BoardSearchBar({ onSearch }) {
  const [category, setCategory] = useState("전체");
  const [keyword, setKeyword] = useState("");

  function handleSearch() {
    onSearch({ category, keyword });
  }

  return (
    <div className={styles.searchBar}>
      <Input
        type="select"
        placeholder="전체"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        options={CATEGORY_OPTIONS}
      />
      <Input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button variant="primary" size="md" onClick={handleSearch}>
        검색
      </Button>
    </div>
  );
}

export default BoardSearchBar;
