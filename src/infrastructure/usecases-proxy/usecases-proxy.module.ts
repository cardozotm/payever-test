import { DynamicModule, Module } from '@nestjs/common';

import { ExceptionsModule } from '../exceptions/exceptions.module';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';

import { RepositoriesModule } from '../repositories/repositories.module';

import { DatabaseUserRepository } from '../repositories/user.repository';
import { AvatarRepository } from '../repositories/avatar.repository';

import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { UseCaseProxy } from './usecases-proxy';
import { CreateUserUseCases } from '../../usecases/user/createUser.usecases';
import { DeleteAvatarUseCases } from '../../usecases/user/deleteAvatar.usecases';
import { GetAvatarUseCases } from '../../usecases/user/getAvatar.usecases';
import { GetUserUseCases } from '../../usecases/user/getUser.usecases';
import { RabbitMQService } from '../queue/rabbitmq.service';
import { RabbitMQModule } from '../queue/rabbitmq.module';

@Module({
  imports: [LoggerModule, EnvironmentConfigModule, RepositoriesModule, ExceptionsModule, RabbitMQModule],
})
export class UsecasesProxyModule {
  static CREATE_USER_USECASES_PROXY = 'createUserUsecasesProxy';
  static DELETE_AVATAR_USECASES_PROXY = 'deleteAvatarUsecasesProxy';
  static GET_AVATAR_USECASES_PROXY = 'getAvatarUsecasesProxy';
  static GET_USER_USECASES_PROXY = 'getUserUsecasesProxy';

  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      imports: [RabbitMQService],
      providers: [
        {
          inject: [LoggerService, DatabaseUserRepository, RabbitMQService],
          provide: UsecasesProxyModule.CREATE_USER_USECASES_PROXY,
          useFactory: (logger: LoggerService, userRepo: DatabaseUserRepository, queue: RabbitMQService) =>
            new UseCaseProxy(new CreateUserUseCases(logger, userRepo, queue)),
        },
        {
          inject: [LoggerService, DatabaseUserRepository, AvatarRepository],
          provide: UsecasesProxyModule.DELETE_AVATAR_USECASES_PROXY,
          useFactory: (logger: LoggerService, userRepo: DatabaseUserRepository, avatarRepo: AvatarRepository) =>
            new UseCaseProxy(new DeleteAvatarUseCases(logger, userRepo, avatarRepo)),
        },
        {
          inject: [LoggerService, DatabaseUserRepository, AvatarRepository],
          provide: UsecasesProxyModule.GET_AVATAR_USECASES_PROXY,
          useFactory: (logger: LoggerService, userRepo: DatabaseUserRepository, avatarRepo: AvatarRepository) =>
            new UseCaseProxy(new GetAvatarUseCases(logger, userRepo, avatarRepo)),
        },
        {
          inject: [LoggerService, DatabaseUserRepository],
          provide: UsecasesProxyModule.GET_USER_USECASES_PROXY,
          useFactory: (logger: LoggerService, userRepo: DatabaseUserRepository) =>
            new UseCaseProxy(new GetUserUseCases(logger, userRepo)),
        },
      ],
      exports: [
        UsecasesProxyModule.CREATE_USER_USECASES_PROXY,
        UsecasesProxyModule.DELETE_AVATAR_USECASES_PROXY,
        UsecasesProxyModule.GET_AVATAR_USECASES_PROXY,
        UsecasesProxyModule.GET_USER_USECASES_PROXY,
      ],
    };
  }
}
