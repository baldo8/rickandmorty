import { useState, useEffect } from 'react';
import './App.css';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from "./components/views/About/About"
import Form from './components/Form/Form.jsx';
import Detail from "./components/Detail/Detail"
import Favorites from "./components/Favorites/Favorites.jsx"

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios"
const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'naPassword';

function App() {


   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)

   const location = useLocation()
   const navigate = useNavigate();

   // App.js
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);
/* ------------------------------------------------------- */
   const onSearch = async (id) => {
      try {
        
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         setCharacters((oldChars) => [...oldChars, data]);
      } catch (error) {
         console.log(error.response.data);
      }


      /* fetch(`http://localhost:3001/rickandmorty/character/${id}`)
         .then((response) => response.json())
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         }); */
   }

  /*  --------------------------------------------------- */
   const handleOnClose = (id) => {
      setCharacters((oldChars) => oldChars.filter((ch) => ch.id !== + id));
   };

  /*  function login(userData) {

      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
      setAccess(true);
      navigate('/home');

   } */

 
   async function login(userData) {
      try {
         const { email, password } = userData;

         const URL = 'http://localhost:3001/rickandmorty/login/';

         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');

      } catch (error) {
         window.alert(error.response.data.response);
      }
      
   }




   return (
      <div className='App' >
         <div>
            {location.pathname !== "/" && <Nav onSearch={onSearch} />}
         </div>
         <hr></hr>
         <div>

            <Routes>
               <Route path="/about" element={<About />} />
               <Route path="/" element={<Form login={login} />} />
               <Route path="/home" element={<Cards characters={characters}
                  onClose={handleOnClose} />} />

               <Route path="/detail/:id" element={<Detail />} />

               <Route path="/favorites" element={<Favorites />} />



            </Routes>
         </div>
      </div>
   )
}

export default App
