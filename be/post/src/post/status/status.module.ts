import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from 'src/schemas/post.schema';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';
import { PostStatus, PostStatusSchema } from 'src/schemas/postStatus.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Post.name, schema: PostSchema },
      { name: PostStatus.name, schema: PostStatusSchema },
    ]),
  ],
  controllers: [StatusController],
  providers: [StatusService],
})
export class StatusModule {}
