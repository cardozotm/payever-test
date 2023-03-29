import { Injectable } from '@nestjs/common';
import { SendEmailDto } from './email.dto';

@Injectable()
export class EmailService {
  constructor() {}

  async sendEmail(mail: SendEmailDto): Promise<void> {
    console.log('sendEmail', `Simulating email sent to ${mail.to}, Subject: ${mail.subject}, Message: ${mail.message}`);
  }
}
