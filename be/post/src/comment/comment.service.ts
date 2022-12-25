import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, now } from 'mongoose';
import { Author, AuthorDocument } from 'src/schemas/author.schema';
import { Comment, CommentDocument } from 'src/schemas/comment.schema';
import { CreateCommentDto } from './dtos/createComment.dto';
import { UpdateCommentDto } from './dtos/updateComment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    @InjectModel(Author.name) private authorModel: Model<AuthorDocument>,
  ) {}

  async findByPostId(post_id: string): Promise<Comment[]> {
    return this.commentModel.find({ post_id, deleteAt: null });
  }

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    let author = await this.authorModel.findOne({
      username: createCommentDto.username,
      email: createCommentDto.email,
    });
    if (author == null) {
      author = new this.authorModel({
        username: createCommentDto.username,
        email: createCommentDto.email,
      });
    }

    const createComment = new this.commentModel({
      post_id: createCommentDto.post_id,
      content: createCommentDto.content,
      author,
    });

    return await createComment.save();
  }

  async update(
    _id: string,
    updateCommentDto: UpdateCommentDto,
  ): Promise<boolean> {
    // TODO: 추후 jwt랑 비교해서 update 금지해야함
    const updateComment = this.commentModel.findOne({ _id, deleteAt: null });
    const updatedCommentResult = await updateComment
      .updateOne({
        $set: {
          post_id: updateCommentDto.post_id,
          content: updateCommentDto.content,
        },
      })
      .exec();
    return updatedCommentResult.modifiedCount === 1;
  }

  async remove(_id: string): Promise<boolean> {
    // TODO: 추후 jwt랑 비교해서 remove 금지해야함
    const removeComment = this.commentModel.findOne({ _id, deleteAt: null });
    const removeCommentResult = await removeComment.updateOne({
      $set: { deleteAt: now() },
    });
    return removeCommentResult.modifiedCount === 1;
  }
}
