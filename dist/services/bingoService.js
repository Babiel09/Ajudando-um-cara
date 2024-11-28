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
exports.Update = exports.Delete = exports.ShowOne = exports.ShowAll = exports.InsertIntoDB = void 0;
const client_1 = require("@prisma/client");
const prismaClient = new client_1.PrismaClient();
;
;
class InsertIntoDB {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ nome }) {
            try {
                const postedBingo = yield prismaClient.bingo.create({
                    data: {
                        nome: nome
                    }
                });
                if (!postedBingo) {
                    throw new Error("Parceiro, fudeu, o Bingo não conseguiu ser criado dentro do banco de dados");
                }
                ;
                return postedBingo;
            }
            catch (err) {
                throw new Error(`Nós não conseguimos efeturar a ação de inserir os dados no banco de dados. Dê uma checada no erro:${err}`);
            }
            ;
        });
    }
    ;
}
exports.InsertIntoDB = InsertIntoDB;
;
class ShowAll {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findedBingo = yield prismaClient.bingo.findMany();
                if (!findedBingo) {
                    throw new Error("Parceiro, fudeu, os Bingos não conseguiu ser encontrado dentro do banco de dados");
                }
                ;
                return findedBingo;
            }
            catch (err) {
                throw new Error(`Nós não conseguimos efeturar a ação mostrar todos os dados do banco de dados. Dê uma checada no erro:${err}`);
            }
            ;
        });
    }
    ;
}
exports.ShowAll = ShowAll;
;
class ShowOne {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            try {
                const findJustOneBingo = yield prismaClient.bingo.findFirst({
                    where: {
                        id: id
                    }
                });
                if (!findJustOneBingo) {
                    throw new Error("Parceiro, fudeu, o Bingo não conseguiu ser encontrado dentro do banco de dados");
                }
                ;
                return findJustOneBingo;
            }
            catch (err) {
                throw new Error(`Nós não conseguimos efeturar a ação mostrar apenas um dado do banco de dados. Dê uma checada no erro:${err}`);
            }
            ;
        });
    }
    ;
}
exports.ShowOne = ShowOne;
;
class Delete {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id }) {
            try {
                const deleteBingo = yield prismaClient.bingo.delete({
                    where: {
                        id: id
                    }
                });
                if (!deleteBingo) {
                    throw new Error("Parceiro, fudeu, o Bingo não conseguiu deletar um Bingo dentro do banco de dados");
                }
                ;
                return deleteBingo;
            }
            catch (err) {
                throw new Error(`Nós não conseguimos efeturar a ação deletar um dado do banco de dados. Dê uma checada no erro:${err}`);
            }
            ;
        });
    }
    ;
}
exports.Delete = Delete;
;
class Update {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, nome }) {
            try {
                const findTheId = yield prismaClient.bingo.findFirst({
                    where: {
                        id: id
                    }
                });
                if (!findTheId) {
                    throw new Error(`Não foi possível encontrar esse id.`);
                }
                ;
                const updateTheBingp = yield prismaClient.bingo.update({
                    where: {
                        id: findTheId.id
                    },
                    data: {
                        nome: nome
                    }
                });
                if (!updateTheBingp) {
                    throw new Error("Parceiro, fudeu, o Bingo não conseguiu ser atualizado dentro do banco de dados");
                }
                ;
                return updateTheBingp;
            }
            catch (err) {
                throw new Error(`Nós não conseguimos efeturar a ação atualizar um dado do banco de dados. Dê uma checada no erro:${err}`);
            }
            ;
        });
    }
    ;
}
exports.Update = Update;
;
