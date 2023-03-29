import { OnModuleInit } from '@nestjs/common';
import { EmailObserver } from '../email/email.observer';
import { RabbitMQService } from './rabbitMq.service';
export declare class RabbitMQModule implements OnModuleInit {
    private readonly rabbitMQService;
    private readonly emailObserver;
    constructor(rabbitMQService: RabbitMQService, emailObserver: EmailObserver);
    onModuleInit(): void;
}
