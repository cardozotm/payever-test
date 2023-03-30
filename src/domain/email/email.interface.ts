import { SendEmailDto } from '../../infrastructure/email/email.dto';

export interface IEmailService {
  sendEmail(mail: SendEmailDto): Promise<void>;
}
