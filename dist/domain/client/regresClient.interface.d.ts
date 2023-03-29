import { AxiosResponse } from 'axios';
export interface IRegresClient {
    getUserData(): Promise<AxiosResponse>;
}
