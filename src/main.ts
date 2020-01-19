import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import * as express from 'express';

import globalInfo from './config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(express.static(path.join(__dirname, 'public')));
  await app.listen(globalInfo.port);
}
bootstrap();
