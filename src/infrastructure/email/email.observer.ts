import { Injectable } from '@nestjs/common';
import { Observer } from 'src/domain/queue/observer.interface';
import { SendEmailDto } from './email.dto';
import { EmailService } from './email.service';

@Injectable()
export class EmailObserver implements Observer {
  private readonly emailService: EmailService;

  constructor(emailService: EmailService) {
    this.emailService = emailService;
  }

  public update(data: any): void {
    const emailData: SendEmailDto = {
      to: data.email,
      subject: `Hello ${data.first_name}, Wellcome to Payever`,
      message: 'The best finance App',
    };

    this.emailService.sendEmail(emailData);
  }
}
