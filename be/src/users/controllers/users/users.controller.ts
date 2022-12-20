import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/users/createUser.dto';
import { FindUserDto } from 'src/users/dtos/users/findUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('')
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Get(':id')
  async findUserById(@Param('id', ParseIntPipe) id: number): Promise<FindUserDto> {
    return await this.userService.findUserById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }
}
