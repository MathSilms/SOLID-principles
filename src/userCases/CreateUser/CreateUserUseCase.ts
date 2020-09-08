import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entitles/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase{
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider : IMailProvider,
    ){

    }
    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExist = await this.usersRepository.findByEmail(data.email);

        if(userAlreadyExist){
            throw new Error('User already exists');
        }

        const user = new User(data);

        await this.usersRepository.save(user);
        this.mailProvider.sendMail({
            to:{
                name:data.name,
                email:data.email
            },
            from:{
                name:'equipe do meu app',
                email:'equipe@meuapp.com',
            },
            subject:'seja bem vindo',
            body:'<p>Você já pode fazer login em nossa plataforma.</p>'
        })
    }
}