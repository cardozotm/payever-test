import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { IAvatarRepository } from '../../domain/repositories/avatarRepository.interface';
import { UserM } from '../../domain/model/user';
import axios from 'axios';
import * as fs from 'fs';
import * as crypto from 'crypto';

@Injectable()
export class AvatarRepository implements IAvatarRepository {
  constructor() {}
  async getAvatar(user: UserM): Promise<{ hash?: string; image: string }> {
    try {
      const { hash, avatar } = user;

      const filePath = `/tmp/${user._id}_${user.hash}`;

      if (fs.existsSync(filePath)) {
        const fileBuffer = fs.readFileSync(filePath);
        console.log(`getAvatarUseCases execute file hash: ${hash} already exists`);
        return { image: fileBuffer.toString('base64') };
      }

      const { data } = await axios.get(avatar, {
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
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  deleteAvatar(user: UserM): void {
    try {
      const { hash } = user;
      const filePath = `/tmp/${user._id}_${hash}`;
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
