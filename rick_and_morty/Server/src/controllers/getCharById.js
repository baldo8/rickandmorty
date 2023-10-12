const URL = "https://rickandmortyapi.com/api/character/"
const axios = require("axios")

const getCharById = async (req, res) => {
    try {
      const { id: charId } = req.params;
      const response = await axios.get(`${URL}${charId}`);
      
      const { id, name, gender, species, origin, image, status } = response.data;
  
      if (!id) {
        return res.status(404).json({ error: "Not found" });
      }
  
      const character = { id, name, gender, species, origin, image, status };
      
      res.status(200).json(character);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

/* 
// this code gives the entire character array!!!
const getCharById = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await axios.get(`${URL}${id}`);
      const character = response.data;
      
      if (!character) {
        return res.status(404).json({ error: "Not found" });
      }
      
      res.status(200).json(character);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }; */



module.exports = getCharById

/* 
const axios = require("axios")

 function getCharById(res, id) {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
       console.log(response.data)
       const {id,name,gender,species,origin, image, status} = response.data// destructer to bring data from api res.data
       res.writeHead(200,{"Content-Type": "application/json"})
       res.end(JSON.stringify({id,name,gender,species,status,origin,image}))
    }).catch(error => {
        res.writeHead(500,{"Content-Type": "text/plain"} )
        res.end( error.message)
    } )
}
module.exports ={
    getCharById
}
 */
/* const axios = require("axios");

function getCharById(res, id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
        console.log(response.data); 
        
        const { name, image, species, gender, status,  id, origin } = response.data; // data : { id: 2, image:... }
        res.writeHead(200, {"Content-Type": "application/json" });
        res.end(JSON.stringify({ id, name, gender, species, status, origin, image }))
    })
    .catch((error) => {
        res.writeHead(500, {'Content-Type' : 'text/plain'})
        res.end(error.message)
    } )
}

module.exports = {
    getCharById
}; */