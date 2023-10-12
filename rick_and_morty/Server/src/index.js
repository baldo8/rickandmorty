require('dotenv').config();
const { conn } = require('./DB_connection');
const server = require("./app")
const {PORT}=process.env

 conn.sync({ force: false }).then(() => {
  console.log('DB connection established')
  server.listen(PORT, () => {
    console.log(`server levantado en el puerto ${PORT}`)
  })
}) 




/* server.listen(PORT,async()=>{
  await conn.sync({ force: false })
  console.log(`server on port ${PORT}`)
}) */
 















/* const http = require("http")
const {getCharById} = require("./controllers/getCharById")

http.createServer((req,res)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');

     if (req.url.includes(`/rickandmorty/character`)) {
        const id = req.url.split("/").at(-1)
       getCharById(res, id)  
    }else{
        res.writeHead(404,({"Content-type": "application/json"}))
        res.end(JSON.stringify({error: "404 something went wrong!"}))
    }

}).listen(3001,"localhost") */

/* const http = require("http");
const { getCharById } = require("./controllers/getCharById");

const PORT = 3001;

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { url } = req;

  // if (req.url.startsWith("/rickandmorty/character/")) {
  //     const id = req.url.substring(req.url.lastIndexOf("/") + 1);
  //     const characterId = parseInt(id);

  //     const character = data.characters.find(char => char.id === characterId);

  if (url.includes("/rickandmorty/character")) {
    // const id = url.split("/").pop();
    const id = +req.url.split("/").pop();
    getCharById(res, id);
  } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`server levantado en el puerto ${PORT}`);
}); */
