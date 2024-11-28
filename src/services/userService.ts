import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

export enum Usereses{
    Follow = "Follow",
    Sub = "Sub",
    Vip = "Vip"
}

interface InsertProps{
  nome:string
  wins: number
  coins: number
  email: string
  pass: string
  role: Usereses
};
interface ShowOneProps {
    id: string
};

interface UpdateProps{
    id:string;
    nome:string
    wins: number
    coins: number
    email: string
    pass: string
    role: Usereses
}

export class InsertIntoDB{
    async execute({nome,wins,coins,email,pass,role}:InsertProps){
        try{
           const postedBingo = await prismaClient.users.create({
            data:{
                nome:nome,
                wins:wins,
                coins:coins,
                email:email,
                pass:pass,
                role:role
            }
           });

           if(!postedBingo){
            throw new Error("Parceiro, fudeu, o Bingo não conseguiu ser criado dentro do banco de dados");
           };
           
           return postedBingo;
        } catch(err){
            throw new Error(`Nós não conseguimos efeturar a ação de inserir os dados no banco de dados. Dê uma checada no erro:${err}`)
        };
    };
};

export class ShowAll{
    async execute(){
        try{
            const findedBingo = await prismaClient.users.findMany();
            if(!findedBingo){
                throw new Error("Parceiro, fudeu, os Bingos não conseguiu ser encontrado dentro do banco de dados");
            };
            return findedBingo;
        }catch(err){
            throw new Error(`Nós não conseguimos efeturar a ação mostrar todos os dados do banco de dados. Dê uma checada no erro:${err}`)
        };
    };
};

export class ShowOne{
    async execute({id}:ShowOneProps){
        try{
            const findJustOneBingo = await prismaClient.users.findFirst({
                where:{
                    id:id
                }
            });

            if(!findJustOneBingo){
                throw new Error("Parceiro, fudeu, o Bingo não conseguiu ser encontrado dentro do banco de dados");
            };

            return findJustOneBingo;

        }catch(err){
            throw new Error(`Nós não conseguimos efeturar a ação mostrar apenas um dado do banco de dados. Dê uma checada no erro:${err}`)
        };
    };
};


export class Delete{
    async execute({id}:ShowOneProps){
        try{
            const deleteBingo = await prismaClient.users.delete({
                where:{
                    id:id
                }
            });

            if(!deleteBingo){
                throw new Error("Parceiro, fudeu, o Bingo não conseguiu deletar um Bingo dentro do banco de dados");
            };

            return deleteBingo;
                
        }catch(err){
            throw new Error(`Nós não conseguimos efeturar a ação deletar um dado do banco de dados. Dê uma checada no erro:${err}`)
        };
    };
};

export class Update{
    async execute({id,nome,wins,coins,email,pass,role}:UpdateProps){
        try{
            const findTheId = await prismaClient.users.findFirst({
                where:{
                    id:id
                }
            });

            if(!findTheId){
                throw new Error(`Não foi possível encontrar esse id.`)
            };

            const updateTheBingp = await prismaClient.users.update({
                where:{
                    id:findTheId.id
                },
                data:{
                    nome:nome,
                    wins:wins,
                    coins:coins,
                    email:email,
                    pass:pass,
                    role:role
                }
            });

            if(!updateTheBingp){
                throw new Error("Parceiro, fudeu, o Bingo não conseguiu ser atualizado dentro do banco de dados");
            };

            return  updateTheBingp;

        }catch(err){
            throw new Error(`Nós não conseguimos efeturar a ação atualizar um dado do banco de dados. Dê uma checada no erro:${err}`)
        };
    };
};