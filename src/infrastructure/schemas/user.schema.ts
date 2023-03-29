import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserM } from 'src/domain/model/user';

@Schema()
export class User implements UserM {
  @Prop()
  id?: string;

  @Prop()
  email: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  avatar: string;

  @Prop()
  hash?: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = HydratedDocument<User>;
