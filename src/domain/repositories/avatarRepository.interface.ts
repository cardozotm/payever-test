import { User } from '../../infrastructure/schemas/user.schema';

export interface IAvatarRepository {
  getAvatar(user: User): Promise<{ hash?: string; image: string }>;
  deleteAvatar(user: User): void;
}
