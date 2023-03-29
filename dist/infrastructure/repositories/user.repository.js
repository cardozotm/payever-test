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
exports.DatabaseUserRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../schemas/user.schema");
let DatabaseUserRepository = class DatabaseUserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findById(id) {
        return this.userModel.findById(id).exec();
    }
    async create(user) {
        try {
            const createdUser = new this.userModel(user);
            return createdUser.save();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    async update(id, fileHash, avatar) {
        try {
            const user = await this.userModel.findById(id).exec();
            if (!user || !user.avatar) {
                return null;
            }
            user.hash = fileHash;
            user.avatar = avatar;
            await user.save();
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
DatabaseUserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DatabaseUserRepository);
exports.DatabaseUserRepository = DatabaseUserRepository;
//# sourceMappingURL=user.repository.js.map