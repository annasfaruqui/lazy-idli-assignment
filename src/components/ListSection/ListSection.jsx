import ListHeader from "../ListHeader/ListHeader";
import List from "../List/List";
import styles from "./ListSection.module.css";

function ListSection() {
  return (
    <section id="list-section" className={styles.section}>
      <ListHeader />
      <List />
    </section>
  );
}

export default ListSection;
