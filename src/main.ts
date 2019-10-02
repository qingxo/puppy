import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import * as express from 'express';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(express.static(path.join(__dirname, 'public')));
  await app.listen(3001);
}
bootstrap();
