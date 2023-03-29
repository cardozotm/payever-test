import { Model } from 'mongoose';
import { IUserRepository } from '../../domain/repositories/userRepository.interface';
import { User } from '../schemas/user.schema';
export declare class DatabaseUserRepository implements IUserRepository {
    private userModel;
    constructor(userModel: Model<User>);
    findById(id: string): Promise<User>;
    create(user: User): Promise<User>;
    update(id: string, fileHash?: string | null, avatar?: string | null): Promise<void>;
}
