import { UserM } from '../../../domain/model/user';
export declare class UserPresenter {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    hash: string;
    constructor(user: UserM);
}
