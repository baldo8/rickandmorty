import React, { useState } from "react";
import styles from "./Form.module.css";
import validate from "./validation.js";

const Form = ({ login }) => {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    nombre: '', // You can add more fields for other input errors
  });

  const handleChange = (event) => {
    setuserData({ ...userData, [event.target.name]: event.target.value });

    setErrors(
      validate({ ...userData, [event.target.name]: event.target.value })
    );}
  
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  
  return (
    <div className={styles.formdiv}>
      <form onSubmit={handleSubmit}>
        <img
          alt="this is a rick and morty pic for login"
          src="https://m.media-amazon.com/images/I/81dH1faXr7L._AC_SL1500_.jpg"
        ></img>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email here..."
          name="email"
          value={userData.email}
          onChange={handleChange}
          className={errors.email ? styles.warning1 : null}
        />
        <p className={styles.danger1}>{errors.email}</p>

        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder="Password here..."
          name="password"
          value={userData.password}
          onChange={handleChange}
          className={errors.password ? styles.warning1 : null}
        />
        <p className={styles.danger1}>{errors.password}</p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
