import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CommonController } from './common/common.controller';

@Module({
  imports: [],
  controllers: [AppController, CatController, CommonController],
  providers: [AppService],
})
export class AppModule {}
