"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAvatarUseCases = void 0;
class DeleteAvatarUseCases {
    constructor(logger, userRepository, avatarRepository) {
        this.logger = logger;
        this.userRepository = userRepository;
        this.avatarRepository = avatarRepository;
    }
    async execute(id) {
        const user = await this.userRepository.findById(id);
        if (!user || !user.avatar) {
            return;
        }
        this.avatarRepository.deleteAvatar(user);
        await this.userRepository.update(id, null, null);
        this.logger.log('deleteAvatarUseCases execute', `User ${id} avatar have been deleted`);
    }
}
exports.DeleteAvatarUseCases = DeleteAvatarUseCases;
//# sourceMappingURL=deleteAvatar.usecases.js.map