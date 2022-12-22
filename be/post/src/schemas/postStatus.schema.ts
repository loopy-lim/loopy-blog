import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

type PostStatusDocument = PostStatus & Document;

@Schema({ timestamps: true })
export class PostStatus {
  @Prop({ required: true })
  post_id: string;

  @Prop({ required: true })
  click_count: number;

  @Prop({ required: true })
  heart: number;
}
const PostStatusSchema = SchemaFactory.createForClass(PostStatus);

export { PostStatusSchema, PostStatusDocument };
