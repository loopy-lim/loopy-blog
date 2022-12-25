import { IsEmail, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;

  @IsUrl()
  readonly title_image: string;

  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}
