"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var RabbitMQService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQService = void 0;
const common_1 = require("@nestjs/common");
const amqplib_1 = require("amqplib");
let RabbitMQService = RabbitMQService_1 = class RabbitMQService {
    constructor() {
        this.url = process.env.RABBITMQ_URL;
        this.exchange = process.env.RABBITMQ_EXCHANGE;
        this.observers = [];
        this.connect();
    }
    async connect() {
        const connection = await (0, amqplib_1.connect)(this.url);
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
    getInstance() {
        if (!RabbitMQService_1.instance) {
            RabbitMQService_1.instance = new RabbitMQService_1();
        }
        return RabbitMQService_1.instance;
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers(data) {
        this.observers.forEach((observer) => observer.update(data));
    }
    publish(data) {
        this.channel.publish(this.exchange, '', Buffer.from(JSON.stringify(data)));
    }
    registerLoggerObserver() {
        const loggerObserver = {
            update: (data) => {
                console.log(`Received data from RabbitMQ: ${JSON.stringify(data)}`);
            },
        };
        this.subscribe(loggerObserver);
    }
};
RabbitMQService = RabbitMQService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RabbitMQService);
exports.RabbitMQService = RabbitMQService;
//# sourceMappingURL=rabbitmq.service.js.map