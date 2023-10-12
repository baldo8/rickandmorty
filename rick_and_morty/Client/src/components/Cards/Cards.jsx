// Cards.js
import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.cards}>
      {characters.map(({ id, name, species, gender, image }) => (
        <Card
          key={id}
          id={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={onClose}
        />
      ))}
    </div>
  );
}

/* (property) characters: {
   id: number;
   name: string;
   status: string;
   species: string;
   gender: string;
   origin: {
       name: string;
       url: string;
   };
   image: string;
}[]
 */
