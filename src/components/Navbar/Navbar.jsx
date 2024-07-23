import logo from "../../assets/logo.svg";
import Popup from "../Popup/Popup";
import AddScore from "../AddScore/AddScore";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Logo" />
      <Popup>
        <Popup.Open opens="add-score">
          <button className={styles.addScoreBtn}>Add Score</button>
        </Popup.Open>
        <Popup.Window name="add-score" heading="Add score">
          <AddScore />
        </Popup.Window>
      </Popup>
    </nav>
  );
}

export default Navbar;
