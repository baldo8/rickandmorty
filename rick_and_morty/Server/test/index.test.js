const app = require('../src/app');
   const session = require('supertest');
   const agent = session(app);

   describe("_Test de RUTAS_", () => {
    describe(`GET /rickandmorty/character/:id`, () =>{
        it('debe devolver un status 200', async () => {
            const response = await agent.get('/rickandmorty/character/1');
            expect(response.status).toBe(200);
       })
       it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`, async () => {
           const response = (await agent.get('/rickandmorty/character/1')).body;
           expect(response).toHaveProperty('id');
           expect(response).toHaveProperty('name');
           expect(response).toHaveProperty('species');
           expect(response).toHaveProperty('gender');
           expect(response).toHaveProperty('status');
           expect(response).toHaveProperty('origin');
           expect(response).toHaveProperty('image');
       })
       /* it("Si hay un error responde con status: 500", async () => {
           const response = await agent.get('/rickandmorty/character/100');
           expect(response.status).toBe(500);
       }) */
       })
   });
     
           
    