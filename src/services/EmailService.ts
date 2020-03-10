interface IMailTo {
  name: string;
  email: string;
}
interface IMailMessage {
  subject: string;
  body: string;
  attachments?:string[]; 
}

// DTO -> Data Transform Object -> metologia DDD

interface IMessageDTO {
  to:IMailTo,
  message: IMailMessage,
}

class EmailService {
  sendMail({to, message}: IMessageDTO) {
    console.log(`E-mail enviado para ${to.email}, 
    no nome de ${to.name}, com o assunto de ${message.subject} 
    `)
  }
}

export default EmailService;