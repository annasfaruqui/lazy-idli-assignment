import { FaStopwatch, FaTrophy } from "react-icons/fa6";
import styles from "./ListHeader.module.css";

function ListHeader() {
  return (
    <header className={styles.header}>
      <FaTrophy />
      <p className={styles.name}>Name</p>
      <p className={styles.time}>
        <FaStopwatch />
        <span>Time</span>
      </p>
    </header>
  );
}

export default ListHeader;
