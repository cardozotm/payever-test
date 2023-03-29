"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const usecases_proxy_1 = require("../../usecases-proxy/usecases-proxy");
const usecases_proxy_module_1 = require("../../usecases-proxy/usecases-proxy.module");
const user_presenter_1 = require("./user.presenter");
const response_decorator_1 = require("../../common/swagger/response.decorator");
const user_dto_1 = require("./user.dto");
const user_1 = require("../../../domain/model/user");
let UserController = class UserController {
    constructor(createUserUsecasesProxy, deleteAvatarUsecasesProxy, getAvatarUsecasesProxy, getUserUsecasesProxy) {
        this.createUserUsecasesProxy = createUserUsecasesProxy;
        this.deleteAvatarUsecasesProxy = deleteAvatarUsecasesProxy;
        this.getAvatarUsecasesProxy = getAvatarUsecasesProxy;
        this.getUserUsecasesProxy = getUserUsecasesProxy;
    }
    async create(user) {
        const createdUser = await this.createUserUsecasesProxy.getInstance().execute(user);
        return createdUser;
    }
    async findOne(id) {
        const foundUser = await this.getUserUsecasesProxy.getInstance().execute(id);
        return new user_presenter_1.UserPresenter(foundUser);
    }
    async findOneAvatar(id) {
        const foundUser = await this.getUserUsecasesProxy.getInstance().execute(id);
        return await this.getAvatarUsecasesProxy.getInstance().execute(foundUser);
    }
    async deleteAvatar(id) {
        return this.deleteAvatarUsecasesProxy.getInstance().execute(id);
    }
};
__decorate([
    (0, common_1.Post)('users'),
    (0, response_decorator_1.ApiResponseType)(user_presenter_1.UserPresenter, false),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.AddUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    (0, response_decorator_1.ApiResponseType)(user_presenter_1.UserPresenter, false),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('user/:id/avatar'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOneAvatar", null);
__decorate([
    (0, common_1.Delete)('user/:id/avatar'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteAvatar", null);
UserController = __decorate([
    (0, common_1.Controller)(),
    (0, swagger_1.ApiTags)('users'),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal error' }),
    (0, swagger_1.ApiExtraModels)(user_presenter_1.UserPresenter),
    __param(0, (0, common_1.Inject)(usecases_proxy_module_1.UsecasesProxyModule.CREATE_USER_USECASES_PROXY)),
    __param(1, (0, common_1.Inject)(usecases_proxy_module_1.UsecasesProxyModule.DELETE_AVATAR_USECASES_PROXY)),
    __param(2, (0, common_1.Inject)(usecases_proxy_module_1.UsecasesProxyModule.GET_AVATAR_USECASES_PROXY)),
    __param(3, (0, common_1.Inject)(usecases_proxy_module_1.UsecasesProxyModule.GET_USER_USECASES_PROXY)),
    __metadata("design:paramtypes", [usecases_proxy_1.UseCaseProxy,
        usecases_proxy_1.UseCaseProxy,
        usecases_proxy_1.UseCaseProxy,
        usecases_proxy_1.UseCaseProxy])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map