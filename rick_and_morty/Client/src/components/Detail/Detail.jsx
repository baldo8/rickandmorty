import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      })
      .catch((error) => console.log(error));
    return () => setCharacter({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  /* useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => {
        console.error("Error fetching character data:", error);
        window.alert("Error fetching character data");
      });
  }, [id]);
 */
  return (
    <div style={styles.container}>
      {character.name && <h1>{character.name}</h1>}
      {character.status && <h3>{character.status}</h3>}
      {character.species && <h4>{character.species}</h4>}
      {character.gender && <h4>{character.gender}</h4>}
      {character.origin && character.origin.name && (
        <h4>{character.origin.name}</h4>
      )}
      {character.image && (
        <img src={character.image} alt={`Image of ${character.name}`} />
      )}
      {/* Add other properties as needed */}
    </div>
  );
};

export default Detail;
