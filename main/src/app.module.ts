import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'TCP_SERVICE', transport: Transport.TCP, options: { port: 3101 } },
      { name: 'REDIS_SERVICE', transport: Transport.REDIS, options: { url: 'redis://127.0.0.1:6379' } },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
