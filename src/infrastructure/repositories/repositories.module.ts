import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigModule } from '../config/mongoose/mongoose.module';
import { User, UserSchema } from '../schemas/user.schema';
import { AvatarRepository } from './avatar.repository';
import { DatabaseUserRepository } from './user.repository';

@Module({
  imports: [MongooseConfigModule, MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [DatabaseUserRepository, AvatarRepository],
  exports: [DatabaseUserRepository, AvatarRepository],
})
export class RepositoriesModule {}
