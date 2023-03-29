"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAvatarUseCases = void 0;
class GetAvatarUseCases {
    constructor(logger, userRepository, avatarRepository) {
        this.logger = logger;
        this.userRepository = userRepository;
        this.avatarRepository = avatarRepository;
    }
    async execute(user) {
        try {
            const activeAvatar = await this.avatarRepository.getAvatar(user);
            await this.userRepository.update(user._id, activeAvatar.hash);
            return activeAvatar.image;
        }
        catch (error) {
            this.logger.error('getAvatarUseCases execute', error);
            return null;
        }
    }
}
exports.GetAvatarUseCases = GetAvatarUseCases;
//# sourceMappingURL=getAvatar.usecases.js.map