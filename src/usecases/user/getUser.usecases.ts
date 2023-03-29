import { DatabaseUserRepository } from '../../infrastructure/repositories/user.repository';
import { UserM } from '../../domain/model/user';
import { ILogger } from '../../domain/logger/logger.interface';

export class GetUserUseCases {
  constructor(private readonly logger: ILogger, private readonly userRepository: DatabaseUserRepository) {}

  public async execute(id: any): Promise<UserM> {
    try {
      const result = await this.userRepository.findById(id);
      this.logger.log('getUserUseCases execute', `Found user id:${id}`);
      console.log(result);
      return result;
    } catch (error) {
      this.logger.error('createUserUseCases execute', error.message);
      throw error;
    }
  }
}
