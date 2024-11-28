import { userController }from "../controllers/userController";
import fastify, {FastifyPluginOptions, FastifyInstance} from "fastify";

export const userRoutes = (fastify:FastifyInstance, options:FastifyPluginOptions) => {
    fastify.get("/", userController.get)
    fastify.post("/", userController.post)
    fastify.delete("/:id", userController.delete)
    fastify.get("/:id", userController.getById)
    fastify.put("/:id", userController.put)
}