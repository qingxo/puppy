import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CommonController } from './common/common.controller';
import { EsbController } from './esb/esb.controller';

@Module({
  imports: [],
  controllers: [AppController, CatController, CommonController, EsbController],
  providers: [AppService],
})
export class AppModule {}
