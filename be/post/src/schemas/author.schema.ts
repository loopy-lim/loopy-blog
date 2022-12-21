import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

type AuthorDocument = Author & Document;

@Schema({ timestamps: true })
export class Author {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;
}
const AuthorSchema = SchemaFactory.createForClass(Author);

export { AuthorSchema, AuthorDocument };
