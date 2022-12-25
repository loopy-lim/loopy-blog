import {  IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  @MinLength(3)
  readonly username: string;

  @IsNotEmpty()
  @MinLength(8)
  readonly password: string;
}
