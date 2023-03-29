import { UseCaseProxy } from '../../usecases-proxy/usecases-proxy';
import { UserPresenter } from './user.presenter';
import { GetUserUseCases } from '../../../usecases/user/getUser.usecases';
import { CreateUserUseCases } from '../../../usecases/user/createUser.usecases';
import { DeleteAvatarUseCases } from '../../../usecases/user/deleteAvatar.usecases';
import { GetAvatarUseCases } from '../../../usecases/user/getAvatar.usecases';
import { AddUserDto } from './user.dto';
export declare class UserController {
    private readonly createUserUsecasesProxy;
    private readonly deleteAvatarUsecasesProxy;
    private readonly getAvatarUsecasesProxy;
    private readonly getUserUsecasesProxy;
    constructor(createUserUsecasesProxy: UseCaseProxy<CreateUserUseCases>, deleteAvatarUsecasesProxy: UseCaseProxy<DeleteAvatarUseCases>, getAvatarUsecasesProxy: UseCaseProxy<GetAvatarUseCases>, getUserUsecasesProxy: UseCaseProxy<GetUserUseCases>);
    create(user: AddUserDto): Promise<import("../../schemas/user.schema").User>;
    findOne(id: string): Promise<UserPresenter>;
    findOneAvatar(id: string): Promise<string>;
    deleteAvatar(id: string): Promise<void>;
}
