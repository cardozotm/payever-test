import { AxiosResponse } from 'axios';
import { IRegresClient } from '../../domain/client/regresClient.interface';
export declare class RegresClient implements IRegresClient {
    constructor();
    getUserData(): Promise<AxiosResponse>;
}
