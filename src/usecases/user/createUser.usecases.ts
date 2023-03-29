import { DatabaseUserRepository } from '../../infrastructure/repositories/user.repository';
import { ILogger } from '../../domain/logger/logger.interface';
import { RabbitMQService } from '../../infrastructure/queue/rabbitmq.service';
import { Observer } from '../../domain/queue/observer.interface';
import { Inject, Injectable } from '@nestjs/common';
import { UserM } from '../../domain/model/user';
import { User } from '../../infrastructure/schemas/user.schema';

@Injectable()
export class CreateUserUseCases implements Observer {
  constructor(
    private readonly logger: ILogger,
    private readonly userRepository: DatabaseUserRepository,
    @Inject(RabbitMQService) private readonly rabbitMQService: RabbitMQService,
  ) {}

  public async execute(userData: UserM): Promise<User> {
    try {
      const result = await this.userRepository.create(userData);

      this.logger.log('createUserUseCases execute', 'New user have been inserted');
      
      this.rabbitMQService.publish(result);
      return result;
    } catch (error) {
      this.logger.error('createUserUseCases execute', error.message);
      throw error;
    }
  }

  public update(data: any): void {
    console.log(`Received event: ${JSON.stringify(data)}`);
  }
}
