import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('TCP_SERVICE') private readonly tcpClient: ClientProxy,
    @Inject('REDIS_SERVICE') private readonly redisClient: ClientProxy,
  ) {}

  testTcp() {
    console.log(this.tcpClient);
    return this.tcpClient.send('test_tcp', {});
  }
  testRedis() {
    console.log('Redis çağrılıyor');
    console.log(this.redisClient);
    return this.redisClient.send('test_redis', {});
  }
}
