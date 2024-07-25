import { useCallback } from "react";
import { useSelector } from "react-redux";
import { getUsers } from "../../userSlice";
import ListItem from "../ListItem/ListItem";
import styles from "./List.module.css";

function List() {
  const list = useSelector(getUsers);

  function parseTime(time) {
    const [mm, seconds] = time.split(":").map((el) => Number(el));
    const [ss, mss] = String(seconds)
      .split(".")
      .map((el) => Number(el));
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
    <ul className={styles.list}>
      {sortedList().map((el, idx) => (
        <ListItem key={el.id} idx={idx} el={el} />
      ))}
    </ul>
  );
}

export default List;
