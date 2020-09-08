import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entitles/User";

export class PostgresUserRepository implements IUsersRepository{
   
    private users:User[] = [];

    async findByEmail(email:string): Promise<User>{
        const user = this.users.find(user => user.email=== email);
        return user;
    }

    async save(user:User): Promise<void>{
        this.users.push(user)
    }
}