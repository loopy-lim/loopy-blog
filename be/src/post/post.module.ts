import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './controllers/post/post.controller';
import { PostService } from './services/post/post.service';
import { Post } from 'src/entities/post.entity';
import { PostBox } from 'src/entities/postbox.entity';
import { PostBoxController } from './controllers/postBox/postBox.controller';
import { PostBoxService } from './services/postBox/postBox.service';

@Module({
  imports: [TypeOrmModule.forFeature([Post, PostBox])],
  controllers: [PostController, PostBoxController],
  providers: [PostService, PostBoxService],
})
export class PostModule {}
