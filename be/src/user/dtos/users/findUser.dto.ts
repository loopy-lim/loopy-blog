import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class FindUserDto {
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
