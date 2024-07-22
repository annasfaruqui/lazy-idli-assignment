import { useState } from "react";
import styles from "./AddScore.module.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../userSlice";

function AddScore({ onClosePopup }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const pattern = /^[0-5][0-9]:[0-5][0-9]:[0-9]{3}$/;

    if (!name || !score) return setError("Please enter name and score");
    if (!pattern.test(score)) return setError("Score pattern NOT matching");

    const user = {
      id: Date.now(),
      name,
      score,
    };
    dispatch(addUser(user));

    setName("");
    setScore("");
    setError("");
    onClosePopup?.();
  }

  function handleReset(e) {
    e.preventDefault();

    setName("");
    setScore("");
    setError("");
  }

  return (
    <form className={styles.addScore} onSubmit={handleSubmit}>
      {/* NAME */}
      <div className={styles.formRow}>
        <label for="name">Player's Name:</label>
        <input
          type="text"
          id="name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter player's name"
          required
        />
      </div>

      {/* SCORE */}
      <div className={styles.formRow}>
        <label for="score">Score:</label>
        <input
          type="text"
          id="score"
          className={styles.input}
          pattern="^[0-5][0-9]:[0-5][0-9]:[0-9]{3}$"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          placeholder="Enter player's time (mm:ss:mss)"
          required
        />
      </div>

      {error && (
        <div className={styles.formRow}>
          <p>&nbsp;</p>
          <p className={styles.errorMessage}>{error}</p>
        </div>
      )}

      <div className={styles.btnRow}>
        <button
          className={`${styles.btn} ${styles.btnSecondary}`}
          onClick={handleReset}
          type="reset"
        >
          Reset
        </button>
        <button
          className={`${styles.btn} ${styles.btnPrimary}`}
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddScore;
