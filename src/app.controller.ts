import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'greeting' })
  getGreetingMessage(name: string): string {
    return `Hello ${name}`;
  }

  @MessagePattern({ cmd: 'greeting-async' })
  async getGreetingMessageAysnc(name: string): Promise<string> {
    return `Hello ${name}`;
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
