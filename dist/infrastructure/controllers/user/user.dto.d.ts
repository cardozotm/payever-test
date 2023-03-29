import { User } from 'src/infrastructure/schemas/user.schema';
export declare class UpdateUserDto implements Partial<User> {
    readonly id: string;
    readonly email?: string;
    readonly first_name?: string;
    readonly last_name?: string;
    readonly avatar?: string;
    readonly hash?: string;
}
export declare class AddUserDto implements Partial<User> {
    readonly email: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly avatar: string;
}
