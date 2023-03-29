import { DatabaseUserRepository } from '../../infrastructure/repositories/user.repository';
import { UserM } from '../../domain/model/user';
import { ILogger } from '../../domain/logger/logger.interface';
export declare class GetUserUseCases {
    private readonly logger;
    private readonly userRepository;
    constructor(logger: ILogger, userRepository: DatabaseUserRepository);
    execute(id: any): Promise<UserM>;
}
