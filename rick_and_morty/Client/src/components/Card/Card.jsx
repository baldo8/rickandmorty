import { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";

function Card({
  name,
  species,
  gender,
  image,
  onClose,
  id,
  addFav,
  removeFav,
  myFavorites,
  animate = false,
}) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites?.forEach((charFav) => {
      if (charFav.id === id) setIsFav(true);
    });
  }, [myFavorites, id]);


  const handleOnClose = () => {
    setIsFav(false);
    removeFav(id);
  };

  
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ name, species, gender, image, id, onClose });
    }
  };

  return (
    <>


<div className={`${styles.card} ${animate ? styles["spin-in"] : ""}`}>
        {isFav ? (
          <button onClick={handleFavorite} >❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        {isFav ? (
          <button onClick={handleOnClose}>X</button>
        ) : (
          <button onClick={() => onClose(id)}>X</button>
        )}

        {/* <button onClick={() => onClose(id)}>X</button> */}
        <Link to={`/detail/${id}`}>
          <h3 className="card-name">{name}</h3>
        </Link>
        <img src={image} alt="" />
        <p>{species}</p>
        <p>{gender}</p>


      </div>
    </>
  );
}

export function mapStateToProps(myFavorites) {
  return {
    myFavorites: myFavorites.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (char) {
      dispatch(addFav(char));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
