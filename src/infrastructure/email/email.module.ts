import { Module } from '@nestjs/common';
import { RabbitMQService } from '../../infrastructure/queue/rabbitmq.service';
import { EmailService } from './email.service';
import { EmailObserver } from './email.observer';

@Module({
  providers: [
    {
      provide: EmailService,
      useFactory: () => new EmailService(),
    },
    EmailObserver,
    {
      provide: RabbitMQService,
      useFactory: () => new RabbitMQService(),
    },
  ],
  exports: [EmailService, RabbitMQService],
})
export class EmailModule {}
