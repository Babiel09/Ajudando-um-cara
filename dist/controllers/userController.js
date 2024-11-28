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
exports.userController = void 0;
const userService_1 = require("../services/userService");
class userController {
    static get(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const mostrar = new userService_1.ShowAll();
            try {
                const bingoEncontrado = yield mostrar.execute();
                if (!bingoEncontrado) {
                    reply.status(500).send({ server: "Fi, fudeu" });
                    throw new Error();
                }
                ;
                reply.status(200).send(bingoEncontrado);
            }
            catch (err) {
                throw new Error(`Fudeu, não conseguimos efetuar the method GET. Cheque o erro:${err}`);
            }
            ;
        });
    }
    ;
    static post(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const inserir = new userService_1.InsertIntoDB();
            try {
                const { nome, wins, coins, email, pass, role } = req.body;
                if (!nome) {
                    throw new Error("Você precisa passar o nome!");
                }
                ;
                const postedBingo = yield inserir.execute({ nome, wins, coins, email, pass, role });
                if (!postedBingo) {
                    reply.status(500).send({ server: "Fi, Fudeu" });
                    throw new Error();
                }
                ;
                reply.status(201).send(postedBingo);
            }
            catch (err) {
                throw new Error(`Fudeu, não conseguimos efetuar the method POST. Cheque o erro:${err}`);
            }
            ;
        });
    }
    ;
    static delete(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletar = new userService_1.Delete();
            try {
                const { id } = req.params;
                if (!id) {
                    reply.status(400).send({ server: "Fi, passa o id pra nós!" });
                    throw new Error();
                }
                ;
                yield deletar.execute({ id });
                reply.status(204).send({ server: "Bingo Deletado com sucesso" });
            }
            catch (err) {
                throw new Error(`Fudeu, não conseguimos efetuar the method DELETE. Cheque o erro:${err}`);
            }
            ;
        });
    }
    ;
    static getById(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const mostrarUm = new userService_1.ShowOne();
            try {
                const { id } = req.params;
                if (!id) {
                    reply.status(400).send({ server: "Fi, passa o id pra nós!" });
                    throw new Error();
                }
                ;
                const findedBingoById = yield mostrarUm.execute({ id });
                if (!findedBingoById) {
                    reply.status(500).send({ server: "Fi, fudeu" });
                    throw new Error();
                }
                ;
                reply.status(200).send(findedBingoById);
            }
            catch (err) {
                throw new Error(`Fudeu, não conseguimos efetuar the method DELETE. Cheque o erro:${err}`);
            }
            ;
        });
    }
    ;
    static put(req, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const atualizar = new userService_1.Update();
            try {
                const { id } = req.params;
                const { nome, wins, coins, email, pass, role } = req.body;
                if (!id) {
                    reply.status(400).send({ server: "Vai toma no cu, passa a porra do id" });
                    throw new Error();
                }
                ;
                if (!nome) {
                    reply.status(400).send({ server: "Vai toma no cu, passa a porra do nome" });
                    throw new Error();
                }
                ;
                const updetedBingo = yield atualizar.execute({ id, nome, wins, coins, email, pass, role });
                if (!updetedBingo) {
                    reply.status(500).send({ server: "Fudeu" });
                    throw new Error();
                }
                ;
                reply.status(202).send(updetedBingo);
            }
            catch (err) {
                throw new Error(`Fudeu, não conseguimos efetuar the method DELETE. Cheque o erro:${err}`);
            }
            ;
        });
    }
    ;
}
exports.userController = userController;
