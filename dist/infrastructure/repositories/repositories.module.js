"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoriesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_module_1 = require("../config/mongoose/mongoose.module");
const user_schema_1 = require("../schemas/user.schema");
const avatar_repository_1 = require("./avatar.repository");
const user_repository_1 = require("./user.repository");
let RepositoriesModule = class RepositoriesModule {
};
RepositoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_module_1.MongooseConfigModule, mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }])],
        providers: [user_repository_1.DatabaseUserRepository, avatar_repository_1.AvatarRepository],
        exports: [user_repository_1.DatabaseUserRepository, avatar_repository_1.AvatarRepository],
    })
], RepositoriesModule);
exports.RepositoriesModule = RepositoriesModule;
//# sourceMappingURL=repositories.module.js.map