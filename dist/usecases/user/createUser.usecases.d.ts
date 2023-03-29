import { DatabaseUserRepository } from '../../infrastructure/repositories/user.repository';
import { ILogger } from '../../domain/logger/logger.interface';
import { RabbitMQService } from '../../infrastructure/queue/rabbitmq.service';
import { Observer } from '../../domain/queue/observer.interface';
import { UserM } from '../../domain/model/user';
import { User } from '../../infrastructure/schemas/user.schema';
export declare class CreateUserUseCases implements Observer {
    private readonly logger;
    private readonly userRepository;
    private readonly rabbitMQService;
    constructor(logger: ILogger, userRepository: DatabaseUserRepository, rabbitMQService: RabbitMQService);
    execute(userData: UserM): Promise<User>;
    update(data: any): void;
}
