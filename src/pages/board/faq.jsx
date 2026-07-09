import { useState } from "react";
import {
  BoardSubNav,
  BoardHeader,
  BoardTable,
  BoardPagination,
  PasswordPrompt,
} from "../../components/board";
import { Tab, Button, LabeledBox } from "../../components/common";
import { faqList } from "../../data/faqList";
import { useBoardAccordion } from "../../hooks/useBoardAccordion";
import styles from "./Board.module.css";

const CATEGORIES = ["버스예약", "교통정보", "관광정보", "기타"];
const PAGE_SIZE = 10;

function FaqCategoryList({ items }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const pagedItems = items.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const {
    selectedItem,
    remainingItems,
    isPromptOpen,
    handleRowClick,
    handlePasswordConfirm,
    closePrompt,
    closeDetail,
  } = useBoardAccordion(items);

  if (selectedItem) {
    return (
      <div>
        <LabeledBox label={selectedItem.title} icon="Q">
          {selectedItem.content}
        </LabeledBox>
        <BoardTable items={remainingItems} onRowClick={handleRowClick} />
        <div className={styles.detailNav}>
          <Button variant="secondary" size="sm" onClick={closeDetail}>
            목록으로
          </Button>
        </div>
        <PasswordPrompt
          isOpen={isPromptOpen}
          onClose={closePrompt}
          onConfirm={handlePasswordConfirm}
        />
      </div>
    );
  }

  return (
    <div>
      <BoardTable items={pagedItems} onRowClick={handleRowClick} />
      <BoardPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <PasswordPrompt
        isOpen={isPromptOpen}
        onClose={closePrompt}
        onConfirm={handlePasswordConfirm}
      />
    </div>
  );
}

function FaqPage() {
  const tabs = CATEGORIES.map((category) => ({
    label: category,
    content: (
      <FaqCategoryList
        items={faqList.filter((item) => item.tabCategory === category)}
      />
    ),
  }));

  return (
    <div>
      <BoardSubNav />
      <div className={styles.page}>
        <BoardHeader
          title="FAQ"
          description="자주 하는 질문을 보실 수 있습니다."
        />
        <Tab tabs={tabs} variant="solid" />
      </div>
    </div>
  );
}

export default FaqPage;
