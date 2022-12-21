import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, now } from 'mongoose';
import { Post, PostDocument } from 'src/schemas/post.schema';
import { CreatePostDto } from './dtos/createPost.dto';
import { Author, AuthorDocument } from 'src/schemas/author.schema';
import { UpdatePostDto } from './dtos/updatePost.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
    @InjectModel(Author.name) private authorModel: Model<AuthorDocument>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    let author = await this.authorModel.findOne({
      username: createPostDto.username,
      email: createPostDto.email,
    });
    if (author == null) {
      author = new this.authorModel({
        username: createPostDto.username,
        email: createPostDto.email,
      });
    }

    const createPost = new this.postModel({
      title: createPostDto.title,
      content: createPostDto.content,
      author,
    });
    return await createPost.save();
  }

  async update(_id: string, updatePostDto: UpdatePostDto): Promise<boolean> {
    // TODO: 추후 jwt랑 비교해서 update 금지해야함
    const updatePost = this.postModel.findOne({ _id, deleteAt: null });
    const updatedPostResult = await updatePost
      .updateOne({
        $set: { title: updatePostDto.title, content: updatePostDto.content },
      })
      .exec();
    return updatedPostResult.modifiedCount === 1;
  }

  async remove(_id: string): Promise<boolean> {
    // TODO: 추후 jwt랑 비교해서 remove 금지해야함
    const removePost = this.postModel.findOne({ _id, deleteAt: null });
    const removePostResult = await removePost.updateOne({
      $set: { deleteAt: now() },
    });
    return removePostResult.modifiedCount === 1;
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find({ deleteAt: null }).exec();
  }

  async findById(_id: string): Promise<Post> {
    return this.postModel.findOne({ _id, deleteAt: null }).exec();
  }
}
