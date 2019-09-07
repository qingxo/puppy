import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { catsProviders } from './cat.providers';
import { DatabaseModule } from '../database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [CatController],
  providers: [CatService, ...catsProviders],
})
export class CatModule {}
