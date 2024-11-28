import { bingoController } from "../controllers/bingoController";
import fastify, {FastifyPluginOptions, FastifyInstance} from "fastify";

export const bingoRoutes = (fastify:FastifyInstance, options:FastifyPluginOptions) => {
    fastify.get("/", bingoController.get);
    fastify.post("/", bingoController.post);
    fastify.get("/:id", bingoController.getById);
    fastify.put("/:id", bingoController.put);
    fastify.delete("/:id", bingoController.delete);
}