"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bingoRoutes = void 0;
const bingoController_1 = require("../controllers/bingoController");
const bingoRoutes = (fastify, options) => {
    fastify.get("/", bingoController_1.bingoController.get);
    fastify.post("/", bingoController_1.bingoController.post);
    fastify.get("/:id", bingoController_1.bingoController.getById);
    fastify.put("/:id", bingoController_1.bingoController.put);
    fastify.delete("/:id", bingoController_1.bingoController.delete);
};
exports.bingoRoutes = bingoRoutes;
