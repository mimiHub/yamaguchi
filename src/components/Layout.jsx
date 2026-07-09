import Nav from "./Nav";
import Footer from "./Footer";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className="main-container">
      <Nav />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
