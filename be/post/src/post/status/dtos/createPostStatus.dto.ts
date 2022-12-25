import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePostStatusDto {
  @IsNotEmpty()
  @IsNumber()
  readonly click_number: number;

  @IsNotEmpty()
  @IsNumber()
  readonly heart: number;
}
