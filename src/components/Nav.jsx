import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Popup, Input, Button } from "./common";
import styles from "./Nav.module.css";

function Nav() {
  const location = useLocation();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");

  function getMenuClassName({ isActive }) {
    return isActive ? styles.navActive : styles.navMenuLink;
  }

  // /board로 시작하는 모든 경로(공지사항/문의사항/FAQ)에서 활성 처리
  const isBoardActive = location.pathname.startsWith("/board");

  function handleLogin() {
    console.log("로그인 시도:", loginId, loginPw);
  }

  return (
    <header className={styles.nav}>
      <div className={styles.utilityWrapper}>
        <div className={styles.navUtility}>
          <Link to="/components-guide">컴포넌트</Link>
          <Link to="/board/inquiry/write">ContactUs</Link>
          <button type="button" onClick={() => setLoginOpen(true)}>
            로그인
          </button>
        </div>
      </div>
      <div className={styles.navMain}>
        <Link to="/" className={styles.navLogo}>
          <span className="sr-only">Yamaguchi 1Day Bus</span>
        </Link>
        <nav className={styles.navMenu}>
          <ul className={styles.navMenuList}>
            <li>
              <NavLink to="/bus" className={getMenuClassName}>
                야마구치1Day버스
              </NavLink>
            </li>
            <li>
              <NavLink to="/course" className={getMenuClassName}>
                운행코스
              </NavLink>
            </li>
            <li>
              <NavLink to="/bus-hotel" className={getMenuClassName}>
                1Day버스+호텔
              </NavLink>
            </li>
            <li>
              <Link
                to="/board/notice"
                className={
                  isBoardActive ? styles.navActive : styles.navMenuLink
                }
              >
                문의게시판
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Popup
        isOpen={isLoginOpen}
        onClose={() => setLoginOpen(false)}
        title="로그인"
      >
        <div className={styles.loginForm}>
          <Input
            placeholder="아이디"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={loginPw}
            onChange={(e) => setLoginPw(e.target.value)}
          />
          <div className={styles.loginActions}>
            <Button variant="primary" size="sm" onClick={handleLogin}>
              로그인
            </Button>
            <Button variant="outline" size="sm">
              비밀번호찾기
            </Button>
          </div>
        </div>
      </Popup>
    </header>
  );
}

export default Nav;
