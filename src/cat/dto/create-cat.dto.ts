import { IsString, IsInt, MinLength, MaxLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
