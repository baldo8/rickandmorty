import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.navLink} to={"/home"}>
        Home
      </NavLink>
      <NavLink className={styles.navLink} to={"/about"}>
        About
      </NavLink>
      <NavLink className={styles.navLink} to={"/favorites"}>
        Favorites
      </NavLink>
      <div className={styles.Nav}>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Nav;
