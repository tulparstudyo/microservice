import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private readonly users: any[] = [];
  private readonly redisClient: ClientProxy;
  constructor(
    @Inject('TCP_SERVICE') private readonly tcpClient: ClientProxy,
  ) {

    this.redisClient = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379',
      },
    });
  }

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
