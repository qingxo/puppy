import { Controller, Get, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}
  @Get('f*d')
  findAll(): string {
    return 'This action returns all cats';
  }

  @Post('addCat')
  async addCat(@Res() res, @Body() createCatDTO: CreateCatDto) {
    const cat = await this.catService.create(createCatDTO);
    return res.status(HttpStatus.OK).json({
      message: 'cat has been created successfully',
      cat,
    });
  }
  @Get('one')
  findOne(): string {
    return 'one cat';
  }
}
