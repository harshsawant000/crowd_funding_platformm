import React from "react";
import NavBar from "../Components/navbar_notLanding";
import Form from "../Components/queryForm";
import ScrollToTop from "../Components/scrollToTop";
import styles from "../Components/styles/contactUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>CONTACT US</h1>
        <div className={styles.content}>
          Address :
          Bal Kalyan Sanstha, Near Raj Bhavan, Ganesh Khind Road, Pune :411 007,

          Maharashtra State (INDIA).

          Tel : 020 2565 5953
          WhatsApp: +91 93560 74071
          Email : balkalyansanstha@gmail.com
          <br />
          <br />
          <div className={styles.map}>
            <iframe
              title="Map"
              src="https://www.google.com/maps/place/Bal+Kalyan+Sanstha+Pune/@18.5485639,73.8233942,17z/data=!4m6!3m5!1s0x3bc2bf6a14fb9cdd:0x1ade623c48572725!8m2!3d18.5485639!4d73.8233942!16s%2Fg%2F1tcxbn8s?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
              width="600"
              height="380"
              frameBorder="0"
              aria-hidden="false"
            ></iframe>
          </div>
          <div className="row">
            <div className={`col-md-8 ${styles.contactUs}`}>
              <h1 className={styles.inheader}>Get In Touch</h1>
              <p className={styles.inpara}>
                Feel free to contact us in case of any queries
              </p>
              <div className={styles.content}>
                <Form />
              </div>
            </div>
            <div className={`col-md-4 ${styles.details}`}>
              <h1 className={styles.inheader}>Our Office</h1>
              <p className={styles.incontent}>
                <b>Bal Kalyan Sanstha</b>
                <br />
                Near Raj bhavan,
                <br />
                Ganeshkhind Road,
                <br /> Pune - 411007
                <br /> <br />
                For any queries, reach us out at email : balkalyansanstha@gmail.com
                <br />
                +91-9356074071
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
