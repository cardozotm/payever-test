import { User } from '../../infrastructure/schemas/user.schema';
export interface IUserRepository {
  findById(id: string): Promise<User>;
  create(user: User): Promise<User>;
  update(id: string, fileHash?: string | null, avatar?: string | null): Promise<void>;
}
