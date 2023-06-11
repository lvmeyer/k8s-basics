import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('WORKS');

    return 'Hello World!';
  }

  getHello2(): string {
    console.log('HELLO2');

    return process.env.FOO;
  }
}
