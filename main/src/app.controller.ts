import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "Main Service is runing";
  }

  @Get('tcp')
  testTcp() {
    return this.appService.testTcp();
  }
  @Get('docker')
  testRedis() {
    return this.appService.testDocker();
  }
}
