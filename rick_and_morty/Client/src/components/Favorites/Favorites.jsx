import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";


export const Favorites = (/* { myFavorites } */) => {
  let myFavorites = useSelector(state => state.myFavorites);

let dispatch=useDispatch()

 const handleOrder =(e)=>{
  dispatch(orderCards(e.target.value))
 }
const handleFilter=(e)=>{
  dispatch(filterCards(e.target.value))
}

useEffect(() => {}, [myFavorites]);

  return (
<div>
    <select name="order" onChange={handleOrder} >
      <option value={"A"}>Ascendente</option>
      <option value={"D"}>Descendente</option>
    </select>
    <select onChange={handleFilter}>
      <option value={"Male"}>Male</option>
      <option value="Female">Female</option>
      <option value="Genderless">Genderless</option>
      <option value="unknown">unknown</option>
    </select>

    <div className={styles.favorites}>
      {myFavorites?.map((fav) => (
        <Card
          onClose={fav.onClose}
          name={fav.name}
          species={fav.species}
          gender={fav.gender}
          image={fav.image}
          id={fav.id}
        />
      ))}
    </div>
    </div>)
};
/* 
export const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
}; */

export default /* connect(mapStateToProps, null) */Favorites;
