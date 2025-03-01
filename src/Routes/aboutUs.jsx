import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUsIIITM from "../Components/assets/about3.jpg";
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={aboutUsIIITM}
            alt="aboutUs- IIITM Block View"
          />
        </div>
        <p className={styles.content}>
          <br />
          Established in 1979, Bal Kalyan Sanstha, Pune stands as a unique institution dedicated to the holistic welfare of individuals with diverse abilities. Our mission is to empower Divyang individuals by nurturing their talents and fostering self-reliance. In 2009, our organization was honored with the prestigious NATIONAL AWARD 2009 FOR THE EMPOWERMENT OF PERSONS WITH DISABILITIES, presented by the esteemed Smt. Pratibha Patil, the former President of India, in recognition of our pioneering efforts in uplifting the Divyang community. Our approach is structured in three phases: firstly, providing foundational education to Divyang individuals across various disability segments. Secondly, focusing on robust character development and instilling confidence in their personalities. Finally, we are committed to instilling a sense of independence, facilitating the rehabilitation of Divyang individuals, and ensuring their meaningful integration into public, private, and corporate sectors.
          <br />
          <br />
          
          <br />
          <br />
          
          <br />
          
          <br />
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
