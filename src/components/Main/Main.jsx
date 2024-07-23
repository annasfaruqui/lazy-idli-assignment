import Header from "../Header/Header";
import ListSection from "../ListSection/ListSection";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <Header />
      <ListSection />
    </main>
  );
}

export default Main;
