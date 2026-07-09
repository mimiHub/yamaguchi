import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BoardSubNav,
  BoardHeader,
  BoardSearchBar,
  BoardTable,
  BoardPagination,
  PasswordPrompt,
} from "../../../components/board";
import { Button, LabeledBox, Stack } from "../../../components/common";
import { inquiryList } from "../../../data/inquiryList";
import { useBoardAccordion } from "../../../hooks/useBoardAccordion";
import styles from "../Board.module.css";

const PAGE_SIZE = 10;

function InquiryListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(inquiryList.length / PAGE_SIZE));
  const pagedItems = inquiryList.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const {
    selectedItem,
    prevItem,
    nextItem,
    remainingItems,
    isPromptOpen,
    handleRowClick,
    handlePasswordConfirm,
    closePrompt,
    closeDetail,
  } = useBoardAccordion(inquiryList);

  if (selectedItem) {
    return (
      <div>
        <BoardSubNav />
        <div className={styles.page}>
          <BoardHeader
            title="문의사항"
            description="야마구치 1Day 버스에 대한 궁금증을 해결해드립니다."
          />

          <table className={styles.detailTable}>
            <tbody>
              <tr>
                <th>No.{selectedItem.id}</th>
                <td>{selectedItem.category}</td>
                <th>등록일</th>
                <td>{selectedItem.date}</td>
              </tr>
              <tr>
                <th>제목</th>
                <td colSpan={3}>{selectedItem.title}</td>
              </tr>
            </tbody>
          </table>

          <LabeledBox label="답변" rounded={false}>
            {selectedItem.answered && selectedItem.answer
              ? selectedItem.answer
              : "미답변"}
          </LabeledBox>

          <BoardTable items={remainingItems} onRowClick={handleRowClick} />

          <div className={styles.detailNav}>
            <Button
              variant="outline"
              a
              size="sm"
              onClick={() => prevItem && handleRowClick(prevItem.id)}
            >
              이전
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => nextItem && handleRowClick(nextItem.id)}
            >
              다음
            </Button>
            <Button variant="secondary" size="sm" onClick={closeDetail}>
              목록으로
            </Button>
          </div>
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
      <BoardSubNav />
      <div className={styles.page}>
        <BoardHeader
          title="문의사항"
          description="야마구치 1Day 버스에 대한 궁금증을 해결해드립니다."
        />

        <BoardSearchBar onSearch={(cond) => console.log(cond)} />

        <Stack justify="end" mb="md">
          <Link to="/board/inquiry/write">
            <Button variant="outline" size="sm">
              문의하기
            </Button>
          </Link>
        </Stack>

        <BoardTable items={pagedItems} onRowClick={handleRowClick} />

        <BoardPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      <PasswordPrompt
        isOpen={isPromptOpen}
        onClose={closePrompt}
        onConfirm={handlePasswordConfirm}
      />
    </div>
  );
}

export default InquiryListPage;
