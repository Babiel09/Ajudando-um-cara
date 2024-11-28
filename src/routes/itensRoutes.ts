import fastify,{FastifyInstance, FastifyPluginOptions} from "fastify";
import { itensController } from "../controllers/itensController";

export const itensRoutes = (fastify:FastifyInstance, options:FastifyPluginOptions) => {
    fastify.get("/", itensController.get)
    fastify.post("/", itensController.post)
    fastify.delete("/:id", itensController.delete)
    fastify.put("/:id", itensController.put)
    fastify.get("/:id", itensController.getById)
}