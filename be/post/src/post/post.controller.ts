import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dtos/createPost.dto';
import { UpdatePostDto } from './dtos/updatePost.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Post(':id')
  @UsePipes(ValidationPipe)
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(id, updatePostDto);
  }

  @Get('')
  @UsePipes(ValidationPipe)
  async findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  async findById(@Param('id') id: string) {
    return this.postService.findById(id);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
}
