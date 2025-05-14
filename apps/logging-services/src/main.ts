import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { LoggingServicesModule } from './logging-services.module';

async function bootstrap() {
  const app = await NestFactory.create(LoggingServicesModule);
  // app.use(new ValidationPipe());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(process.env.port ?? 3003);
}
bootstrap();
