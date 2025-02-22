import React from "react";
import nobleCause from "./assets/cause1.jpg";
import styles from "./styles/nobelCauseComponent.module.css";

const NobelCauseComponent = () => {
  return (
    <React.Fragment>
      <div className={`col-12 m-auto ${styles.container}`}>
        <h1 className={styles.header}>Become a part of noble cause</h1>
        <p className={styles.para}>
        Every child deserves a future filled with hope, education, and opportunity. At Bal Kalyan, we are committed to empowering underprivileged children by providing them with the care, education, and resources they need to build a better tomorrow.

By joining hands with us, you can make a real difference in the lives of these young minds. Whether through donations, volunteering, or spreading awareness, your support brings smiles, nurtures dreams, and creates a brighter future for those in need.
        </p>
        <img className={styles.image} src={nobleCause} alt="noble cause" />
      </div>
    </React.Fragment>
  );
};

export default NobelCauseComponent;
