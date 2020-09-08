import { IMailProvider, IMessage } from "../../providers/IMailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider implements IMailProvider {
    private transporter:Mail;

    constructor(){
        this.transporter = nodemailer.createTransport({
            host:'smtp.mailtrap.io',
            port:2525,
            auth:{
                user:'',
                pass:''
            }
        })
    }
    
    
    async sendMail(message:IMessage): Promise<void>{
        await this.transporter.sendMail({
            to:{
                name:message.to.nome,
                address:message.to.email
            },
            from:{
                name:message.from.nome,
                address:message.from.email
            },
            subject: message.subject,
            html:message.body,

        })
    }
}