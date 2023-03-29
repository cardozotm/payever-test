import { DynamicModule } from '@nestjs/common';
export declare class UsecasesProxyModule {
    static CREATE_USER_USECASES_PROXY: string;
    static DELETE_AVATAR_USECASES_PROXY: string;
    static GET_AVATAR_USECASES_PROXY: string;
    static GET_USER_USECASES_PROXY: string;
    static register(): DynamicModule;
}
