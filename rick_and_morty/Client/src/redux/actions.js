import { ADD_FAV, REMOVE_FAV, FILTER,ORDER } from "./action-type";
import axios from "axios";

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {

           const {data}= await axios.post(endpoint, {character})
                return dispatch({
                   type: ADD_FAV,
                   payload: data,
                });
             

        } catch (error) {
            console.log(error.message);
            window.alert(error.response.data.message);
        }
      
    };
 };

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async(dispatch) => {
       
        try {
            const { data } = await axios.delete(endpoint);
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
          });
        } catch (error) {
            window.alert(error.response.data.message);
        }
         
       
    };
 };

export const filterCards = (filterActParam)=>{
    return{
        type:FILTER,
        payload:filterActParam
    }
}
export const orderCards = (id)=>{
    return{
        type:ORDER,
        payload:id
    }}


/* export const getStoreName = () => {
    return function (dispatch) {
        fetch(`http://localhost:3001/store`)
            .then((res) => res.json())
            .then((data) => dispatch({ type: "GET_STORE_NAME", payload: data }))
    }
} */