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
import { CreatePostDto } from 'src/post/dtos/createPost.dto';
import { UpdatePostDto } from 'src/post/dtos/updatePost.dto';
import { PostService } from 'src/post/services/post/post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('')
  async getPosts() {
    return await this.postService.findPosts();
  }

  @Get(':id')
  async getPostById(@Param('id', ParseIntPipe) id: number) {
    return await this.postService.findPostById(id);
  }

  @Post('')
  @UsePipes(ValidationPipe)
  async createPost(@Body() createPostDto: CreatePostDto) {
    return await this.postService.createPost(createPostDto);
  }

  @Post(':id')
  @UsePipes(ValidationPipe)
  async updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return await this.postService.updatePost(id, updatePostDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async deletePost(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.postService.deletePost(id);
  }
}
