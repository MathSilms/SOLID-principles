
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";

const mailTrapMailProvider = new MailTrapMailProvider()
const postgresUserRepository = new PostgresUserRepository()


const createUserUseCase = new CreateUserUseCase(
    mailTrapMailProvider,
    postgresUserRepository
)

const createUserController = new CreateUserController(
    createUserUseCase,
)

export { createUserUseCase, createUserController }

