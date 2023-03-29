import { AvatarRepository } from '../../infrastructure/repositories/avatar.repository';
import { DatabaseUserRepository } from '../../infrastructure/repositories/user.repository';
import { ILogger } from '../../domain/logger/logger.interface';
import { UserM } from '../../domain/model/user';
export declare class GetAvatarUseCases {
    private readonly logger;
    private readonly userRepository;
    private readonly avatarRepository;
    constructor(logger: ILogger, userRepository: DatabaseUserRepository, avatarRepository: AvatarRepository);
    execute(user: UserM): Promise<string>;
}
