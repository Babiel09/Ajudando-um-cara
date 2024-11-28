import { FastifyRequest, FastifyReply } from "fastify";
import { InsertIntoDB, Delete, ShowAll, ShowOne, Update  } from "../services/bingoService";

export abstract class bingoController{
   static async get(req:FastifyRequest, reply:FastifyReply){
        const mostrar = new ShowAll();
        try{
            const bingoEncontrado = await mostrar.execute();
            if(!bingoEncontrado){
                reply.status(500).send({server:"Fi, fudeu"});
                throw new Error();
            };
            reply.status(200).send(bingoEncontrado);
        } catch(err){
            throw new Error(`Fudeu, não conseguimos efetuar the method GET. Cheque o erro:${err}`)
        };
    };

    static async post(req:FastifyRequest, reply:FastifyReply){
        const inserir = new InsertIntoDB();
    try{
        const {nome} = req.body as {nome:string};
        if(!nome){
            throw new Error("Você precisa passar o nome!");
        };
        const postedBingo = await inserir.execute({nome});

        if(!postedBingo){
            reply.status(500).send({server:"Fi, Fudeu"});
            throw new Error();
        };

        reply.status(201).send(postedBingo);
    }
        catch(err){
            throw new Error(`Fudeu, não conseguimos efetuar the method POST. Cheque o erro:${err}`)
        };
    };


    static async delete(req:FastifyRequest, reply:FastifyReply){
        const deletar = new Delete();
        try{
            const {id} = req.params as {id:string};

            if(!id){
                reply.status(400).send({server:"Fi, passa o id pra nós!"});
                throw new Error();
            };
            
            await deletar.execute({id});
            
            reply.status(204).send({server:"Bingo Deletado com sucesso"});
        }catch(err){
            throw new Error(`Fudeu, não conseguimos efetuar the method DELETE. Cheque o erro:${err}`)
        };
    };

    static async getById(req:FastifyRequest, reply:FastifyReply){

        const mostrarUm = new ShowOne();

        try{
            const {id} = req.params as {id:string};
            if(!id){
                reply.status(400).send({server:"Fi, passa o id pra nós!"});
                throw new Error();
            };
            const findedBingoById = await mostrarUm.execute({id});
            if(!findedBingoById){
                reply.status(500).send({server:"Fi, fudeu"});
                throw new Error();
            };
            reply.status(200).send(findedBingoById);
        }catch(err){
            throw new Error(`Fudeu, não conseguimos efetuar the method DELETE. Cheque o erro:${err}`)
        };
    };

    static async put(req:FastifyRequest, reply:FastifyReply){
        const atualizar = new Update();
        try{
            const {id} = req.params as {id:string};
            const {nome} = req.body as {nome:string};

            if(!id){
                reply.status(400).send({server:"Vai toma no cu, passa a porra do id"});
                throw new Error();
            };

            if(!nome) {
                reply.status(400).send({server:"Vai toma no cu, passa a porra do nome"});
                throw new Error();
            };

            const updetedBingo = await atualizar.execute({id,nome});

            if(!updetedBingo){
                reply.status(500).send({server:"Fudeu"});
                throw new Error();
            };

            reply.status(202).send(updetedBingo);

        }catch(err){
            throw new Error(`Fudeu, não conseguimos efetuar the method DELETE. Cheque o erro:${err}`)
        };
    };


};