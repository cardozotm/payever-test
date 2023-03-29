import { Module, OnModuleInit } from '@nestjs/common';
import { EmailModule } from '../email/email.module';
import { EmailObserver } from '../email/email.observer';
import { RabbitMQService } from './rabbitMq.service';

@Module({
  imports: [EmailModule],
  providers: [RabbitMQService, EmailObserver],
  exports: [RabbitMQService],
})
export class RabbitMQModule implements OnModuleInit {
  constructor(private readonly rabbitMQService: RabbitMQService, private readonly emailObserver: EmailObserver) {}

  onModuleInit() {
    this.rabbitMQService.subscribe(this.emailObserver);
    this.rabbitMQService.registerLoggerObserver();
  }
}
