import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostBoxDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;
}
