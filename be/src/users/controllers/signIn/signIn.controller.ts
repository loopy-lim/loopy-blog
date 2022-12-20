import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { LoginUserDto } from 'src/users/dtos/users/loginUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('signIn')
export class SignInController {
  constructor(private readonly userService: UsersService) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async canSignIn (@Body() LoginUserDto: LoginUserDto): Promise<boolean> {
    return await this.userService.canSignIn(LoginUserDto);
  }
}
