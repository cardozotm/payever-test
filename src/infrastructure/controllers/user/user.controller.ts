import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UseCaseProxy } from '../../usecases-proxy/usecases-proxy';
import { UsecasesProxyModule } from '../../usecases-proxy/usecases-proxy.module';
import { UserPresenter } from './user.presenter';
import { ApiResponseType } from '../../common/swagger/response.decorator';
import { GetUserUseCases } from '../../../usecases/user/getUser.usecases';
import { CreateUserUseCases } from '../../../usecases/user/createUser.usecases';
import { DeleteAvatarUseCases } from '../../../usecases/user/deleteAvatar.usecases';
import { GetAvatarUseCases } from '../../../usecases/user/getAvatar.usecases';
import { AddUserDto } from './user.dto';

@Controller()
@ApiTags('users')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(UserPresenter)
export class UserController {
  constructor(
    @Inject(UsecasesProxyModule.CREATE_USER_USECASES_PROXY)
    private readonly createUserUsecasesProxy: UseCaseProxy<CreateUserUseCases>,
    @Inject(UsecasesProxyModule.DELETE_AVATAR_USECASES_PROXY)
    private readonly deleteAvatarUsecasesProxy: UseCaseProxy<DeleteAvatarUseCases>,
    @Inject(UsecasesProxyModule.GET_AVATAR_USECASES_PROXY)
    private readonly getAvatarUsecasesProxy: UseCaseProxy<GetAvatarUseCases>,
    @Inject(UsecasesProxyModule.GET_USER_USECASES_PROXY)
    private readonly getUserUsecasesProxy: UseCaseProxy<GetUserUseCases>,
  ) {}

  @Post('users')
  @ApiResponseType(UserPresenter, false)
  async create(@Body() user: AddUserDto) {
    const createdUser = await this.createUserUsecasesProxy.getInstance().execute(user);
    return createdUser;
  }

  @Get('user/:id')
  @ApiResponseType(UserPresenter, false)
  async findOne(@Param('id') id: string): Promise<UserPresenter> {
    const foundUser = await this.getUserUsecasesProxy.getInstance().execute(id);
    return new UserPresenter(foundUser);
  }

  @Get('user/:id/avatar')
  async findOneAvatar(@Param('id') id: string): Promise<string> {
    const foundUser = await this.getUserUsecasesProxy.getInstance().execute(id);
    return await this.getAvatarUsecasesProxy.getInstance().execute(foundUser);
  }

  @Delete('user/:id/avatar')
  async deleteAvatar(@Param('id') id: string): Promise<void> {
    return this.deleteAvatarUsecasesProxy.getInstance().execute(id);
  }
}
