import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={`${styles.line} ${styles.lineBefore}`}></div>
        <h1 className={styles.headline}>Fastest of today</h1>
        <div className={`${styles.line} ${styles.lineAfter}`}></div>
      </div>
    </header>
  );
}

export default Header;
