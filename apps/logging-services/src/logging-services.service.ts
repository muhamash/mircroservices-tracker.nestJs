import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggingServicesService {
  getHello(): string {
    return 'Hello World!';
  }
}
