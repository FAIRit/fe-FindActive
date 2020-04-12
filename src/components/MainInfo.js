import React from "react";
import styles from "../styles/MainInfo.module.css";

const MainInfo = () => {
  return (
    <div className={styles.mainInfo}>
      <h1 className={styles.mainInfoTitle}>Czym jest FindActive?</h1>
      <div className={styles.mainInfoText}>FindActive to wyszukiwarka obiektów sportowych w Polsce. Wyszukuj po kategoriach. Masz teraz łatwy dostęp do obiektów sportowych, gdziekolwiek jesteś! </div>
      <button className={styles.mainInfoButton}>Zarejestruj się za darmo</button>
    </div>
  );
};

export default MainInfo;
