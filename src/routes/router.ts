import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { bingoRoutes } from "./bingoRoutes";
import { userRoutes } from "./userRoutes";

export const router = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
    fastify.register(bingoRoutes, {prefix:"/bingo"}); 
    fastify.register(userRoutes, {prefix:"/user"});
};