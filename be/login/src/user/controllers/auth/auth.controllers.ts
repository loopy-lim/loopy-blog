import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JWTDto } from 'src/user/dtos/auth/JWT.dto';
import { LoginUserDto } from 'src/user/dtos/users/loginUser.dto';
import { AuthService } from 'src/user/services/auth/auth.service';
import { UserService } from 'src/user/services/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly userService: UserService) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async auth(@Body() jwtDto: JWTDto): Promise<boolean> {
    return this.authService.auth(jwtDto);
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  async canSignIn(@Body() LoginUserDto: LoginUserDto): Promise<any> {
    return this.authService.signIn(LoginUserDto);
  }
}
