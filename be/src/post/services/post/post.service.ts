import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/entities/post.entity';
import { CreatePostDto } from 'src/post/dtos/createPost.dto';
import { PostDto } from 'src/post/dtos/post.dto';
import { UpdatePostDto } from 'src/post/dtos/updatePost.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) {}

  async createPost(createPost: CreatePostDto): Promise<boolean> {
    const createdPost = await this.postRepository.save(createPost);
    return createdPost.id != -1;
  }

  async deletePost(id: number): Promise<boolean> {
    const findedPost = await this.postRepository.findOneBy({ id });
    if (findedPost == null || findedPost.deleted_at != null) {
      return false;
    }
    findedPost.deleted_at = new Date();

    return (await this.postRepository.update({ id }, findedPost)).affected == 1;
  }

  async findPostById(id: number): Promise<PostDto> {
    const findedPost = await this.postRepository.findOneBy({ id });
    if (findedPost == null || findedPost.deleted_at != null) {
      return new PostDto();
    }
    return findedPost;
  }

  async findPosts(): Promise<PostDto[]> {
    return (await this.postRepository.find()).filter(
      post => post.deleted_at == null,
    );
  }

  async updatePost(id: number, updatePostDto: UpdatePostDto): Promise<boolean> {
    if ((await this.postRepository.findOneBy({ id })) == null) {
      return false;
    }
    return (
      (await (
        await this.postRepository.update({ id }, updatePostDto)
      ).affected) == 1
    );
  }
}
