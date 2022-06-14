import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'TCP_SERVICE', transport: Transport.TCP, options: { port: 3101 } },
      { name: 'DOCKER_SERVICE', transport: Transport.TCP, options: { host:"172.17.0.4", port: 3102 } },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
