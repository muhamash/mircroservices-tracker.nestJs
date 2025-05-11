import { Injectable } from '@nestjs/common';

@Injectable()
export class RiderServicesService {
  getHello(): string {
    return 'Hello World!';
  }
}
