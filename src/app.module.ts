import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CatController } from './cat/cat.controller';
import { CommonController } from './common/common.controller';
import { EsbController } from './esb/esb.controller';
import { CatService } from './cat/cat.service';
import { CatModule } from './cat/cat.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [CatModule, DatabaseModule],
  controllers: [AppController, CommonController, EsbController],
  providers: [AppService],
})
export class AppModule {}
