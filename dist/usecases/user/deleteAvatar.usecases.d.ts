import { ILogger } from '../../domain/logger/logger.interface';
import { DatabaseUserRepository } from '../../infrastructure/repositories/user.repository';
import { AvatarRepository } from '../../infrastructure/repositories/avatar.repository';
export declare class DeleteAvatarUseCases {
    private readonly logger;
    private readonly userRepository;
    private readonly avatarRepository;
    constructor(logger: ILogger, userRepository: DatabaseUserRepository, avatarRepository: AvatarRepository);
    execute(id: string): Promise<void>;
}
