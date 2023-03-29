import { Injectable } from '@nestjs/common';
import { Channel, connect } from 'amqplib';
import { Observer } from '../../domain/queue/observer.interface';

@Injectable()
export class RabbitMQService {
  private readonly url: string;
  private readonly exchange: string;
  private channel: Channel;
  private readonly observers: Observer[];
  private static instance: RabbitMQService;

  constructor() {
    this.url = process.env.RABBITMQ_URL;
    this.exchange = process.env.RABBITMQ_EXCHANGE;
    this.observers = [];

    this.connect();
  }

  private async connect(): Promise<void> {
    const connection = await connect(this.url);
    this.channel = await connection.createChannel();

    await this.channel.assertExchange(this.exchange, 'fanout', { durable: false });

    const { queue } = await this.channel.assertQueue('', { exclusive: true });
    await this.channel.bindQueue(queue, this.exchange, '');

    this.channel.consume(queue, (msg) => {
      if (msg !== null) {
        const data = JSON.parse(msg.content.toString());
        this.notifyObservers(data);
        this.channel.ack(msg);
      }
    });
  }

  public getInstance(): RabbitMQService {
    if (!RabbitMQService.instance) {
      RabbitMQService.instance = new RabbitMQService();
    }
    return RabbitMQService.instance;
  }

  public subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  private notifyObservers(data: any): void {
    this.observers.forEach((observer) => observer.update(data));
  }

  public publish(data: any): void {
    this.channel.publish(this.exchange, '', Buffer.from(JSON.stringify(data)));
  }

  public registerLoggerObserver(): void {
    const loggerObserver: Observer = {
      update: (data: any) => {
        console.log(`Received data from RabbitMQ: ${JSON.stringify(data)}`);
      },
    };
    this.subscribe(loggerObserver);
  }
}
