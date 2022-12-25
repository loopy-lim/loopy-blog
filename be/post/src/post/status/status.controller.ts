import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StatusService } from './status.service';
import { CreatePostStatusDto } from './dtos/createPostStatus.dto';

@Controller('status')
export class StatusController {
  constructor(private readonly statusSevice: StatusService) {}

  @Post(':post_id')
  @UsePipes(ValidationPipe)
  async create(
    @Param('post_id') post_id: string,
    @Body() createPostStatusDto: CreatePostStatusDto,
  ) {
    return this.statusSevice.create(post_id, createPostStatusDto);
  }

  @Post('/click/:post_id')
  @UsePipes(ValidationPipe)
  async updateClickCount(@Param('post_id') post_id: string) {
    return this.statusSevice.updateClickCount(post_id);
  }

  @Post('/heart/:post_id')
  @UsePipes(ValidationPipe)
  async updateHeartCount(@Param('post_id') post_id: string) {
    return this.statusSevice.updateHeart(post_id);
  }

  @Get(':post_id')
  @UsePipes(ValidationPipe)
  async findByPostId(@Param('post_id') post_id: string) {
    return this.statusSevice.findByPostId(post_id);
  }
}
