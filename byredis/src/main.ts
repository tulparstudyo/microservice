import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {

    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.REDIS,
        options: {
            url: 'redis://localhost:3102',
        },
    });
    await app.listen();
    console.log('MoviesService is running on 3102.');
}
bootstrap();
