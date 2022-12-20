import { IsNotEmpty, IsString } from 'class-validator';

export class UpdatePostBoxDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;
}
