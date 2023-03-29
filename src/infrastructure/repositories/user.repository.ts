import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserRepository } from '../../domain/repositories/userRepository.interface';
import { User } from '../schemas/user.schema';

@Injectable()
export class DatabaseUserRepository implements IUserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async create(user: User): Promise<User> {
    try {
      const createdUser = new this.userModel(user);
      return createdUser.save();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: string, fileHash?: string | null, avatar?: string | null): Promise<void> {
    try {
      const user = await this.userModel.findById(id).exec();
      if (!user || !user.avatar) {
        return null;
      }
      user.hash = fileHash;
      user.avatar = avatar;

      await user.save();
    } catch (error) {
      throw new Error(error);
    }
  }
}
