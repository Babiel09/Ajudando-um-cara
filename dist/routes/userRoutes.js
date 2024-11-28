"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const userController_1 = require("../controllers/userController");
const userRoutes = (fastify, options) => {
    fastify.get("/", userController_1.userController.get);
    fastify.post("/", userController_1.userController.post);
    fastify.delete("/:id", userController_1.userController.delete);
    fastify.get("/:id", userController_1.userController.getById);
    fastify.put("/:id", userController_1.userController.put);
};
exports.userRoutes = userRoutes;
