"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserUseCases = void 0;
class GetUserUseCases {
    constructor(logger, userRepository) {
        this.logger = logger;
        this.userRepository = userRepository;
    }
    async execute(id) {
        try {
            const result = await this.userRepository.findById(id);
            this.logger.log('getUserUseCases execute', `Found user id:${id}`);
            console.log(result);
            return result;
        }
        catch (error) {
            this.logger.error('createUserUseCases execute', error.message);
            throw error;
        }
    }
}
exports.GetUserUseCases = GetUserUseCases;
//# sourceMappingURL=getUser.usecases.js.map