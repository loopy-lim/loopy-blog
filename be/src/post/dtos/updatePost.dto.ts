import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdatePostDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly content: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  readonly box_id: number;
}
