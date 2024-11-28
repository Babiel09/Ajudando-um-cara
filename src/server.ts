import fastify from "fastify";
import cors from '@fastify/cors'; //Permite a conexão com o front
import { router } from "./routes/router";

const app = fastify({logger:true});
const port = 8000;

const server = ()=> {
    app.register(cors);
    app.register(router);
    app.listen({port})
    console.log(`API rodando na porta: http://localhost:${port}`);
};
server();
