// import React from "react";
// import jwtDecode from "jwt-decode";
// import NavBar from "../Components/navbar_notLanding";
// import ShowQuery from "../Components/showquery";
// import ScrollToTop from "../Components/scrollToTop";
// import { logout, isAuthorised } from "../services/auth";
// import { toast } from "react-toastify";
// import styles from "../Components/styles/dashboard.module.css";
// import user from "../Components/assets/admin.png";

// const AdminDashboard = (p) => {
//   if (!isAuthorised()) {
//     p.history.replace("/page-not-found");
//     toast.error("Not authorised");
//     return null;
//   }
//   let email = jwtDecode(localStorage.getItem("token")).email;
//   // let id = jwtDecode(localStorage.getItem("token")).foo;
//   return (
//     <React.Fragment>
//       <NavBar />
//       <ScrollToTop />
//       <div className={`col-md-10 m-auto border ${styles.container}`}>
//         <img src={user} className={`${styles.image}`} alt="userIcon" />
//         <h2 className={`${styles.text}`}>Admin Dashboard</h2>
//         <b>{email}</b>
//         <hr />
//         <button
//           className="btn btn-warning m-2"
//           onClick={() => {
//             p.history.push("/admin/new");
//           }}
//         >
//           New Admin +
//         </button>
//         <button
//           className="btn btn-warning"
//           onClick={() => {
//             p.history.push("/admin/campaign/new");
//           }}
//         >
//           New Campaign
//         </button>
//         <button
//           className="btn btn-primary m-2"
//           onClick={() => {
//             p.history.push("/all-campaigns");
//           }}
//         >
//           All Campaigns
//         </button>
//         <button
//           className="btn btn-danger"
//           onClick={() => {
//             logout().then(() => {
//               window.location = "/";
//             });
//           }}
//         >
//           Logout
//         </button>
//         <hr />
//         <ShowQuery />
//         <br />
//       </div>
//     </React.Fragment>
//   );
// };

// export default AdminDashboard;
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import NavBar from "../Components/navbar_notLanding";
import ShowQuery from "../Components/showquery";
import ScrollToTop from "../Components/scrollToTop";
import { logout, isAuthorised } from "../services/auth";
import { toast } from "react-toastify";
import styles from "../Components/styles/dashboard.module.css";
import userIcon from "../Components/assets/admin.png";

const AdminDashboard = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!isAuthorised()) {
      toast.error("Not authorized");
      history.replace("/page-not-found");
    } else {
      try {
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token);
        setEmail(decoded.email);
      } catch (error) {
        toast.error("Invalid session, please log in again.");
        logout().then(() => (window.location = "/"));
      }
    }
  }, [history]);

  return (
    <>
      <NavBar />
      <ScrollToTop />
      <div className={`col-md-10 m-auto border ${styles.container}`}>
        <img src={userIcon} className={styles.image} alt="Admin Icon" />
        <h2 className={styles.text}>Admin Dashboard</h2>
        <b>{email}</b>
        <hr />
        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-warning" onClick={() => history.push("/admin/new")}>
            New Admin +
          </button>
          <button className="btn btn-warning" onClick={() => history.push("/admin/campaign/new")}>
            New Campaign
          </button>
          <button className="btn btn-primary" onClick={() => history.push("/all-campaigns")}>
            All Campaigns
          </button>
          <button className="btn btn-danger" onClick={() => logout().then(() => (window.location = "/"))}>
            Logout
          </button>
        </div>
        <hr />
        <ShowQuery />
      </div>
    </>
  );
};

export default AdminDashboard;
