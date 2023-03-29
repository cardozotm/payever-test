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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarRepository = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const fs = require("fs");
const crypto = require("crypto");
let AvatarRepository = class AvatarRepository {
    constructor() { }
    async getAvatar(user) {
        try {
            const { hash, avatar } = user;
            const filePath = `/tmp/${user._id}_${user.hash}`;
            if (fs.existsSync(filePath)) {
                const fileBuffer = fs.readFileSync(filePath);
                console.log(`getAvatarUseCases execute file hash: ${hash} already exists`);
                return { image: fileBuffer.toString('base64') };
            }
            const { data } = await axios_1.default.get(avatar, {
                responseType: 'arraybuffer',
            });
            const fileBuffer = Buffer.from(data);
            const shaHash = crypto.createHash('sha256');
            const fileHash = shaHash.digest('hex');
            fs.writeFileSync(`/tmp/${user._id}_${fileHash}`, fileBuffer);
            return {
                hash: fileHash,
                image: fileBuffer.toString('base64'),
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
    deleteAvatar(user) {
        try {
            const { hash } = user;
            const filePath = `/tmp/${user._id}_${hash}`;
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error);
        }
    }
};
AvatarRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AvatarRepository);
exports.AvatarRepository = AvatarRepository;
//# sourceMappingURL=avatar.repository.js.map