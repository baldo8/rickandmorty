import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  let [character, setCharacter] = useState("");

  const handleChange = (e) => {
    setCharacter(e.target.value);
  };

  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button
        className={styles.btn}
        onClick={() => {
          onSearch(character);
        }}
      >
        Agregar
      </button>
    </div>
  );
}

/* import React from "react";

export default function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
} */
/*  const [searchValue, setSearchValue] = useState(""); // Step 1: Create a state variable to hold the search input value

  // Step 2: Update the state variable when the user types in the search input
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Step 3: Call the onSearch function when the "Agregar" button is clicked
  const handleAddButtonClick = () => {
    props.onSearch(searchValue); // Call the onSearch function and pass the searchValue as an argument
  };
 */
