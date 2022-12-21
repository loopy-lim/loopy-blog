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
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dtos/createComment.dto';
import { UpdateCommentDto } from './dtos/updateComment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Post(':id')
  @UsePipes(ValidationPipe)
  async update(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentService.update(id, updateCommentDto);
  }

  @Get(':post_id')
  @UsePipes(ValidationPipe)
  async findById(@Param('post_id') post_id: string) {
    return this.commentService.findByPostId(post_id);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  async remove(@Param('id') id: string) {
    return this.commentService.remove(id);
  }
}
