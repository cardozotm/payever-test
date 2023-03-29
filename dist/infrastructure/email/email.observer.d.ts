import { Observer } from 'src/domain/queue/observer.interface';
import { EmailService } from './email.service';
export declare class EmailObserver implements Observer {
    private readonly emailService;
    constructor(emailService: EmailService);
    update(data: any): void;
}
