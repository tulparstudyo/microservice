import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private readonly users: any[] = [];
  private readonly redisClient: ClientProxy;
  constructor(
    @Inject('TCP_SERVICE') private readonly tcpClient: ClientProxy,
    @Inject('DOCKER_SERVICE') private readonly dockerClient: ClientProxy,
  ) {}

  testTcp() {
    console.log('Calling Microservice');
    return this.tcpClient.send('test_tcp', {});
  }
  testDocker() {
    console.log('Calling Microservice from Docker');
    return this.dockerClient.send('test_docker', {});
  }
}
