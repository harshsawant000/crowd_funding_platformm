import React from "react";
import ChildImage from "./assets/happy.jpg";
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
  return (
    <React.Fragment>
      <div className="row col-12">
        <div className={`col-md-8 ${styles.whyUs}`}>
          <h1 className={styles.header}>Why us ?</h1>
          <p className={styles.para}>
            The Bal Kalyan Sanstha, Pune established in 1979, is a unique institution of its kind, working for the welfare of special children. We are the recipients of the “National Award – 2009”. Bal Kalyan Sanstha was felicitated with NATIONAL AWARD 2009 FOR THE EMPOWERMENT OF PERSONS WITH DISABILITIES by the Minister of Social Justice & Empowerment which was awarded by Smt. Pratibha Patil the then President of India for the pioneering work to uplift the specials.

            Our work, roughly speaking, is of three-fold first education of special children among the different sections of disability. Secondly to the extent possible the development of a stronger and higher type of character, a firm of purpose and discipline in action, and thirdly the cultivation of an intense feeling of self-reliant independence for rehabilitation of specials and actual placement in public, private, and even corporate sector.

            We have set up of Recreational & Cultural center exclusively for special children. Sanstha is located near Raj Bhavan on land allotted by Raj Bhavan itself for the purpose.  The center provides facilities for Sports, Art & Crafts through the media of education and recreation.  We also provide training in Drawing, Painting, Music, Dancing, Swimming, Gymnastics, Physical Training exercises, etc., to special children.

            Institute is deeply concerned about the overall development of special children and youth. As a regular ongoing endeavor, The Bal Kalyan Sanstha provides facilities free of cost to special children for their recreation and sports. 4000 special students from 85 special schools are the beneficiaries. The activity starts with curiosity and ends with a sense of satisfaction at accumulating important knowledge in an enjoyable manner.

            Bal Kalyan Sanstha offers an ideal environment for their overall growth and believes in encouraging the children every way possible, a humble yet attractive comfortable spacious building with lush green lawns. Lovely myriad blossoms welcome the children every day. The institution has warm affectionate and extremely diligent teachers to coach the children to develop various skills.
          </p>
        </div>
        <div className="col-md-4">
          <img className={styles.image} src={ChildImage} alt="happy" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyUs;
