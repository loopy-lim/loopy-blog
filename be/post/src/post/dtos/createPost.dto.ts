import { IsEmail, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @IsNotEmpty()
  @IsUrl()
  readonly title_image: string;

  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}
