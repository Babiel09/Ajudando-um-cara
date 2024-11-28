"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itensRoutes = void 0;
const itensController_1 = require("../controllers/itensController");
const itensRoutes = (fastify, options) => {
    fastify.get("/", itensController_1.itensController.get);
    fastify.post("/", itensController_1.itensController.post);
    fastify.delete("/:id", itensController_1.itensController.delete);
    fastify.put("/:id", itensController_1.itensController.put);
    fastify.get("/:id", itensController_1.itensController.getById);
};
exports.itensRoutes = itensRoutes;
