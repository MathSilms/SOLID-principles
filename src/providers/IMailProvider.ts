interface IAdress{
    email:string;
    nome:string;
}


export interface IMessage{
    to:IAdress;
    from:IAdress;
    subject:string;
    body:string;
}


export interface IMailProvider {
    sendMail(message : IMessage): Promise<void>;
}