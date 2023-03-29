import { Observer } from '../../domain/queue/observer.interface';
export declare class RabbitMQService {
    private readonly url;
    private readonly exchange;
    private channel;
    private readonly observers;
    private static instance;
    constructor();
    private connect;
    getInstance(): RabbitMQService;
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    private notifyObservers;
    publish(data: any): void;
    registerLoggerObserver(): void;
}
