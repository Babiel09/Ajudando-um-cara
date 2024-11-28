"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors")); //Permite a conexão com o front
const router_1 = require("./routes/router");
const app = (0, fastify_1.default)({ logger: true });
const port = 8000;
const server = () => {
    app.register(cors_1.default);
    app.register(router_1.router);
    app.listen({ port });
    console.log(`API rodando na porta: http://localhost:${port}`);
};
server();
