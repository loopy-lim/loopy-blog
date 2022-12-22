import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostStatus } from 'src/schemas/postStatus.schema';
import { CreatePostStatusDto } from './dtos/createPostStatus.dto';

@Injectable()
export class StatusService {
  constructor(
    @InjectModel(PostStatus.name) private postStatusModel: Model<PostStatus>,
  ) {}

  async create(
    post_id: string,
    createPostStatusDto: CreatePostStatusDto,
  ): Promise<PostStatus> {
    const createPostStatus = new this.postStatusModel({
      post_id,
      click_count: createPostStatusDto.click_number,
      heart: createPostStatusDto.heart,
    });
    return await createPostStatus.save();
  }

  async updateClickCount(post_id: string): Promise<boolean> {
    const updateClickCount = await this.postStatusModel.findOne({ post_id });
    const updateClickCountResult = await updateClickCount.updateOne({
      $inc: { click_count: 1 },
    });

    return updateClickCountResult.modifiedCount === 1;
  }

  async updateHeart(post_id: string): Promise<boolean> {
    const updateHeart = await this.postStatusModel.findOne({ post_id });
    const updateHeartResult = await updateHeart.updateOne({
      $inc: { heart: 1 },
    });

    return updateHeartResult.modifiedCount === 1;
  }

  async findByPostId(post_id: string) {
    return this.postStatusModel.findOne({ post_id }).exec();
  }
}
