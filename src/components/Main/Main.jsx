import Header from "../Header/Header";
import List from "../List/List";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <Header />
      <List />
    </main>
  );
}

export default Main;
