import { IAvatarRepository } from '../../domain/repositories/avatarRepository.interface';
import { UserM } from '../../domain/model/user';
export declare class AvatarRepository implements IAvatarRepository {
    constructor();
    getAvatar(user: UserM): Promise<{
        hash?: string;
        image: string;
    }>;
    deleteAvatar(user: UserM): void;
}
