import { SendEmailDto } from './email.dto';
export declare class EmailService {
    constructor();
    sendEmail(mail: SendEmailDto): Promise<void>;
}
