import {Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
  {
    name: "Yuri Silva",
    email: "yuri.silva@gmail.com"
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const email = new EmailService;

    email.sendMail({
      to: {
        name: 'Yuri', 
        email: 'yuri@gmail.com'
      },
      message: {
        subject: 'Bem vindo a nossa empresa',
        body: 'Bem vindo!!!'
      }
    });
    return res.send('deu certo o envio de email');
  }
};