import { useCallback } from "react";
import { useSelector } from "react-redux";
import ListHeader from "../ListHeader/ListHeader";
import { getUsers } from "../../userSlice";
import styles from "./List.module.css";

function List() {
  const list = useSelector(getUsers);

  function parseTime(time) {
    const [mm, ss, mss] = time.split(":").map((el) => Number(el));
    return new Date(mm * 60 * 1000 + ss * 1000 + mss);
  }

  const sortedList = useCallback(
    function () {
      const newList = JSON.parse(JSON.stringify(list));
      return newList.sort((a, b) => parseTime(a.score) - parseTime(b.score));
    },
    [list]
  );

  return (
    <section id="list-section" className={styles.section}>
      <ListHeader />
      <ul className={styles.list}>
        {sortedList().map((el, idx) => (
          <li key={el.id} className={styles.li}>
            <div
              className={`${styles.listItem} ${
                idx + 1 < 4 && styles[`top__${idx + 1}`]
              }`}
            >
              <span className={styles.position}>{idx + 1}</span>
              <p className={styles.name}>{el.name}</p>
              <p className={styles.prizeWinner}>
                {/* {idx + 1 === 1 &&
                  `${window.innerWidth >= 432 ? "$5000" : "🥇"}`}
                {idx + 1 === 2 &&
                  `${window.innerWidth >= 432 ? "$2000" : "🥈"}`}
                {idx + 1 === 3 &&
                  `${window.innerWidth >= 432 ? "$1000" : "🥉"}`}
                {idx + 1 > 3 && " "} */}
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
        ))}
      </ul>
    </section>
  );
}

export default List;
