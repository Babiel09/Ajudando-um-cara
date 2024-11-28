import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { bingoRoutes } from "./bingoRoutes";
import { userRoutes } from "./userRoutes";
import { itensRoutes } from "./itensRoutes";

export const router = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
    fastify.register(bingoRoutes, {prefix:"/bingo"}); 
    fastify.register(userRoutes, {prefix:"/user"});
    fastify.register(itensRoutes, {prefix:"/itens"});
};