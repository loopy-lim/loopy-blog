import { IsEmail, IsJWT, IsNotEmpty, MinLength } from 'class-validator';

export class JWTDto {
  @IsNotEmpty()
  @MinLength(3)
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsJWT()
  readonly accessToken: string;
}
