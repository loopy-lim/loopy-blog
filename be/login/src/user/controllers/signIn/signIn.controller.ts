import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LoginUserDto } from 'src/user/dtos/users/loginUser.dto';
import { UserService } from 'src/user/services/user/user.service';

@Controller('signIn')
export class SignInController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async canSignIn(@Body() LoginUserDto: LoginUserDto): Promise<boolean> {
    return await this.userService.canSignIn(LoginUserDto);
  }
}
