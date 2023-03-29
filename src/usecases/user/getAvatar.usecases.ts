import { AvatarRepository } from '../../infrastructure/repositories/avatar.repository';
import { DatabaseUserRepository } from '../../infrastructure/repositories/user.repository';
import { ILogger } from '../../domain/logger/logger.interface';
import { UserM } from '../../domain/model/user';

export class GetAvatarUseCases {
  constructor(
    private readonly logger: ILogger,
    private readonly userRepository: DatabaseUserRepository,
    private readonly avatarRepository: AvatarRepository,
  ) {}

  async execute(user: UserM): Promise<string> {
    try {
      const activeAvatar = await this.avatarRepository.getAvatar(user);

      await this.userRepository.update(user._id, activeAvatar.hash);

      return activeAvatar.image;
    } catch (error) {
      this.logger.error('getAvatarUseCases execute', error);
      return null;
    }
  }
}
