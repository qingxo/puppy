import { Controller, Get } from '@nestjs/common';

@Controller('cat')
export class CatController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    @Get('one')
    findOne(): string {
        return 'one cat';
    }
}
