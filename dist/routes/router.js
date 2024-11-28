"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const bingoRoutes_1 = require("./bingoRoutes");
const userRoutes_1 = require("./userRoutes");
const itensRoutes_1 = require("./itensRoutes");
const router = (fastify, options) => __awaiter(void 0, void 0, void 0, function* () {
    fastify.register(bingoRoutes_1.bingoRoutes, { prefix: "/bingo" });
    fastify.register(userRoutes_1.userRoutes, { prefix: "/user" });
    fastify.register(itensRoutes_1.itensRoutes, { prefix: "/itens" });
});
exports.router = router;
