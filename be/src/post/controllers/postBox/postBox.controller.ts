import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePostBoxDto } from 'src/post/dtos/createPostBox.dto';
import { PostBoxDto } from 'src/post/dtos/postBox.dto';
import { UpdatePostBoxDto } from 'src/post/dtos/updatePostBox.dto';
import { PostBoxService } from 'src/post/services/postBox/postBox.service';

@Controller('postbox')
export class PostBoxController {
  constructor(private readonly postBoxService: PostBoxService) {}
  @Get('')
  findPostBoxs() {
    return this.postBoxService.findPostBoxs();
  }

  @Get(':id')
  findPostBoxById(@Param('id', ParseIntPipe) id: number) {
    return this.postBoxService.findPostBoxById(id);
  }

  @Post('')
  @UsePipes(ValidationPipe)
  createPostBox(@Body() createPostBoxDto: CreatePostBoxDto) {
    return this.postBoxService.createPostBox(createPostBoxDto);
  }

  @Post(':id')
  @UsePipes(ValidationPipe)
  updatePostBox(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostBoxDto: UpdatePostBoxDto,
  ) {
    return this.postBoxService.updatePostBox(id, updatePostBoxDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  deletePostBox(@Param('id', ParseIntPipe) id: number) {
    return this.postBoxService.deletePostBox(id);
  }
}
