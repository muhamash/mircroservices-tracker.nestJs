import { NestFactory } from '@nestjs/core';
import { LoggingServicesModule } from './logging-services.module';

async function bootstrap() {
  const app = await NestFactory.create(LoggingServicesModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
