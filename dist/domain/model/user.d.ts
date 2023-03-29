export declare class BaseUser {
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}
export declare class UserM extends BaseUser {
    _id?: string;
    hash?: string;
}
