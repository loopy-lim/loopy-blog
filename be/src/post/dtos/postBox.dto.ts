import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PostBoxDto {
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  readonly title: string;
}
