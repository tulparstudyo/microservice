import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
    const url = 'redis://localhost:6379';
    const app = await NestFactory.createMicroservice(AppModule, {
        transport: Transport.REDIS,
        options: {
            url: url,
        },
    });
    console.log('MoviesService is running on ' + url );
    await app.listen();
}
bootstrap();
