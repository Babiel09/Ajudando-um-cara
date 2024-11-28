import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { bingoRoutes } from "./bingoRoutes";

export const router = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
    fastify.register(bingoRoutes, {prefix:"/bingo"}); 
};