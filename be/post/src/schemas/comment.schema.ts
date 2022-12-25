import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, now } from 'mongoose';
import { Author } from './author.schema';

type CommentDocument = Comment & Document;

@Schema({ timestamps: true })
export class Comment {
  @Prop({ required: true })
  post_id: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true })
  author: Author;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;

  @Prop()
  deleteAt: Date;
}
const CommentSchema = SchemaFactory.createForClass(Comment);

export { CommentSchema, CommentDocument };
