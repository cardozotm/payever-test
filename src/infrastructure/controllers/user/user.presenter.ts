import { ApiProperty } from '@nestjs/swagger';
import { UserM } from '../../../domain/model/user';

export class UserPresenter {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  avatar: string;

  @ApiProperty()
  hash: string;

  constructor(user: UserM) {
    this.id = user._id;
    this.email = user.email;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.avatar = user.avatar;
    this.hash = user.hash;
  }
}
