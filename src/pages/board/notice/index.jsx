import { Link } from "react-router-dom";
import { useState } from "react";
import {
  BoardSubNav,
  BoardHeader,
  BoardSearchBar,
  BoardTable,
  BoardPagination,
  PasswordPrompt,
} from "../../../components/board";

import { Button, Stack } from "../../../components/common";
import { noticeList } from "../../../data/noticeList";
import { useBoardAccordion } from "../../../hooks/useBoardAccordion";
import styles from "../Board.module.css";

const PAGE_SIZE = 10;

function NoticeListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(noticeList.length / PAGE_SIZE));
  const pagedItems = noticeList.slice(
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
  } = useBoardAccordion(noticeList);

  if (selectedItem) {
    return (
      <div>
        <BoardSubNav />
        <div className={styles.page}>
          <BoardHeader
            title="공지사항"
            description="야마구치 1Day 버스 관련 새소식을 알려드립니다."
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

          <div className={styles.detailContent}>{selectedItem.content}</div>

          {/* 열린 글(selectedItem)은 remainingItems에서 이미 제외된 상태 */}
          <BoardTable items={remainingItems} onRowClick={handleRowClick} />

          <div className={styles.detailNav}>
            <Button
              variant="outline"
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
          title="공지사항"
          description="야마구치 1Day 버스 관련 새소식을 알려드립니다."
        />
        <BoardSearchBar onSearch={(cond) => console.log(cond)} />

        <Stack justify="end" mb="md">
          <Link to="/board/notice/write">
            <Button variant="outline" size="sm">
              작성하기
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

export default NoticeListPage;
