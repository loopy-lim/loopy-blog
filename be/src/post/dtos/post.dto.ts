import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class PostDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly content: string;

  @IsNotEmpty()
  @IsNumber()
  readonly clickcount: number;

  @IsNumber()
  readonly box_id: number;

  @IsNotEmpty()
  @IsDate()
  readonly updated_at: Date;
}
