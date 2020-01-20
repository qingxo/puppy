import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CatController } from './cat/cat.controller';
import { CommonController } from './common/common.controller';
import { EsbController } from './esb/esb.controller';
import { CatModule } from './cat/cat.module';
import { DatabaseModule } from './database/database.module';
import { LoggerMiddleware } from './common/logger.middleware';
@Module({
  imports: [CatModule, DatabaseModule],
  controllers: [AppController, CommonController, EsbController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('');
  }
}
