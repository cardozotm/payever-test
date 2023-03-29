import { ILogger } from '../../domain/logger/logger.interface';
import { DatabaseUserRepository } from '../../infrastructure/repositories/user.repository';
import { AvatarRepository } from '../../infrastructure/repositories/avatar.repository';

export class DeleteAvatarUseCases {
  constructor(
    private readonly logger: ILogger,
    private readonly userRepository: DatabaseUserRepository,
    private readonly avatarRepository: AvatarRepository,
  ) {}
  async execute(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);
    if (!user || !user.avatar) {
      return;
    }

    this.avatarRepository.deleteAvatar(user);

    await this.userRepository.update(id, null, null);

    this.logger.log('deleteAvatarUseCases execute', `User ${id} avatar have been deleted`);
  }
}
