import { Controller, Get, Req, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('test')
  getTestInfo(@Req() request: Request): string {
    return this.appService.getTest();
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log('the id:' + params.id);
    return `this action returns a #${params.id} cat`;
  }

  @Get('test/async')
  async findAsyncTest(): Promise<any[]> {
    return [];
  }

  @Get('test/:id')
  findOne2(@Param('id') id): string {
    return `This action returns a #${id} cat`;
  }
}
