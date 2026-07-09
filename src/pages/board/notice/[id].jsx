import { useParams, useNavigate, Link } from "react-router-dom";
import BoardSubNav from "../../../components/board/BoardSubNav";
import BoardHeader from "../../../components/board/BoardHeader";
import Button from "../../../components/common/Button";
import { noticeList, getNoticeById } from "../../../data/noticeList";
import styles from "../Board.module.css";

function NoticeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const notice = getNoticeById(id);

  if (!notice) {
    return <div className={styles.page}>존재하지 않는 게시글입니다.</div>;
  }

  const currentIndex = noticeList.findIndex((item) => item.id === id);
  const prevItem = noticeList[currentIndex + 1];
  const nextItem = noticeList[currentIndex - 1];

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
              <th>No.{notice.id}</th>
              <td>{notice.category}</td>
              <th>등록일</th>
              <td>{notice.date}</td>
            </tr>
            <tr>
              <th>제목</th>
              <td colSpan={3}>{notice.title}</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.detailContent}>{notice.content}</div>

        <div className={styles.detailNav}>
          <Button
            variant="outline"
            size="sm"
            onClick={() => prevItem && navigate(`/board/notice/${prevItem.id}`)}
          >
            이전
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => nextItem && navigate(`/board/notice/${nextItem.id}`)}
          >
            다음
          </Button>
          <Link to="/board/notice">
            <Button variant="secondary" size="sm">
              목록으로
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NoticeDetailPage;
