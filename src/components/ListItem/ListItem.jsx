import styles from "./ListItem.module.css";

function ListItem({ el, idx }) {
  return (
    <li className={styles.li} style={{ animationDelay: `${idx * 0.02}s` }}>
      <div
        className={`${styles.listItem} ${
          idx + 1 < 4 && styles[`top__${idx + 1}`]
        }`}
      >
        <span className={styles.position}>{idx + 1}</span>
        <p className={styles.name}>{el.name}</p>
        <p className={styles.prizeWinner}>
          {idx + 1 === 1 && (
            <>
              <span className={styles.bigScreen}>$5000</span>
              <span className={styles.smallScreen}>🥇</span>
            </>
          )}
          {idx + 1 === 2 && (
            <>
              <span className={styles.bigScreen}>$2000</span>
              <span className={styles.smallScreen}>🥈</span>
            </>
          )}
          {idx + 1 === 3 && (
            <>
              <span className={styles.bigScreen}>$1000</span>
              <span className={styles.smallScreen}>🥉</span>
            </>
          )}
          {idx + 1 > 3 && <span>&nbsp;</span>}
        </p>
        <p className={styles.time}>{el.score}</p>
      </div>
      <div
        className={`${styles.emptyDiv} ${
          idx + 1 < 4 && styles[`emptyTop__${idx + 1}`]
        }`}
      >
        &nbsp;
      </div>
    </li>
  );
}

export default ListItem;
