import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloo(): string {
    return 'Hello World!';
  }
}
