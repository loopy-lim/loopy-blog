import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/entities/post.entity';
import { PostBox } from 'src/entities/postbox.entity';
import { CreatePostBoxDto } from 'src/post/dtos/createPostBox.dto';
import { PostBoxDto } from 'src/post/dtos/postBox.dto';
import { UpdatePostBoxDto } from 'src/post/dtos/updatePostBox.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PostBoxService {
  constructor(
    @InjectRepository(PostBox)
    private readonly postBoxRepository: Repository<PostBox>,
  ) {}

  async findPostBoxs(): Promise<PostBoxDto[]> {
    return await this.postBoxRepository.find();
  }

  async findPostBoxById(id: number): Promise<PostBoxDto> {
    return await this.postBoxRepository.findOneBy({ id });
  }

  async findPostBoxByTitle(title: string): Promise<PostBoxDto> {
    return await this.postBoxRepository.findOneBy({ title });
  }

  async createPostBox(createPostBoxDto: CreatePostBoxDto): Promise<boolean> {
    const findPost = await this.findPostBoxByTitle(createPostBoxDto.title);
    
    if (findPost != null) {
      return false;
    }

    this.postBoxRepository.save(createPostBoxDto);
    return true;
  }

  async deletePostBox(id: number): Promise<boolean> {
    return (await this.postBoxRepository.delete({ id })).affected == 1;
  }

  async updatePostBox(id: number, updatePostBox: UpdatePostBoxDto) {
    return (
      (await (
        await this.postBoxRepository.update(id, updatePostBox)
      ).affected) == 1
    );
  }
}
