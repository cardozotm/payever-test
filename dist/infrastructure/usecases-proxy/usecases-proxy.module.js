"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UsecasesProxyModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsecasesProxyModule = void 0;
const common_1 = require("@nestjs/common");
const exceptions_module_1 = require("../exceptions/exceptions.module");
const logger_module_1 = require("../logger/logger.module");
const logger_service_1 = require("../logger/logger.service");
const repositories_module_1 = require("../repositories/repositories.module");
const user_repository_1 = require("../repositories/user.repository");
const avatar_repository_1 = require("../repositories/avatar.repository");
const environment_config_module_1 = require("../config/environment-config/environment-config.module");
const usecases_proxy_1 = require("./usecases-proxy");
const createUser_usecases_1 = require("../../usecases/user/createUser.usecases");
const deleteAvatar_usecases_1 = require("../../usecases/user/deleteAvatar.usecases");
const getAvatar_usecases_1 = require("../../usecases/user/getAvatar.usecases");
const getUser_usecases_1 = require("../../usecases/user/getUser.usecases");
const rabbitmq_service_1 = require("../queue/rabbitmq.service");
const rabbitmq_module_1 = require("../queue/rabbitmq.module");
let UsecasesProxyModule = UsecasesProxyModule_1 = class UsecasesProxyModule {
    static register() {
        return {
            module: UsecasesProxyModule_1,
            imports: [rabbitmq_service_1.RabbitMQService],
            providers: [
                {
                    inject: [logger_service_1.LoggerService, user_repository_1.DatabaseUserRepository, rabbitmq_service_1.RabbitMQService],
                    provide: UsecasesProxyModule_1.CREATE_USER_USECASES_PROXY,
                    useFactory: (logger, userRepo, queue) => new usecases_proxy_1.UseCaseProxy(new createUser_usecases_1.CreateUserUseCases(logger, userRepo, queue)),
                },
                {
                    inject: [logger_service_1.LoggerService, user_repository_1.DatabaseUserRepository, avatar_repository_1.AvatarRepository],
                    provide: UsecasesProxyModule_1.DELETE_AVATAR_USECASES_PROXY,
                    useFactory: (logger, userRepo, avatarRepo) => new usecases_proxy_1.UseCaseProxy(new deleteAvatar_usecases_1.DeleteAvatarUseCases(logger, userRepo, avatarRepo)),
                },
                {
                    inject: [logger_service_1.LoggerService, user_repository_1.DatabaseUserRepository, avatar_repository_1.AvatarRepository],
                    provide: UsecasesProxyModule_1.GET_AVATAR_USECASES_PROXY,
                    useFactory: (logger, userRepo, avatarRepo) => new usecases_proxy_1.UseCaseProxy(new getAvatar_usecases_1.GetAvatarUseCases(logger, userRepo, avatarRepo)),
                },
                {
                    inject: [logger_service_1.LoggerService, user_repository_1.DatabaseUserRepository],
                    provide: UsecasesProxyModule_1.GET_USER_USECASES_PROXY,
                    useFactory: (logger, userRepo) => new usecases_proxy_1.UseCaseProxy(new getUser_usecases_1.GetUserUseCases(logger, userRepo)),
                },
            ],
            exports: [
                UsecasesProxyModule_1.CREATE_USER_USECASES_PROXY,
                UsecasesProxyModule_1.DELETE_AVATAR_USECASES_PROXY,
                UsecasesProxyModule_1.GET_AVATAR_USECASES_PROXY,
                UsecasesProxyModule_1.GET_USER_USECASES_PROXY,
            ],
        };
    }
};
UsecasesProxyModule.CREATE_USER_USECASES_PROXY = 'createUserUsecasesProxy';
UsecasesProxyModule.DELETE_AVATAR_USECASES_PROXY = 'deleteAvatarUsecasesProxy';
UsecasesProxyModule.GET_AVATAR_USECASES_PROXY = 'getAvatarUsecasesProxy';
UsecasesProxyModule.GET_USER_USECASES_PROXY = 'getUserUsecasesProxy';
UsecasesProxyModule = UsecasesProxyModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [logger_module_1.LoggerModule, environment_config_module_1.EnvironmentConfigModule, repositories_module_1.RepositoriesModule, exceptions_module_1.ExceptionsModule, rabbitmq_module_1.RabbitMQModule],
    })
], UsecasesProxyModule);
exports.UsecasesProxyModule = UsecasesProxyModule;
//# sourceMappingURL=usecases-proxy.module.js.map