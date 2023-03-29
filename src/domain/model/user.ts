export class BaseUser {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export class UserM extends BaseUser {
  _id?: string;
  hash?: string;
}
