import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { CreateUserDto } from 'src/user/dtos/users/createUser.dto';
import { Repository } from 'typeorm';
import { FindUserDto } from 'src/user/dtos/users/findUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<boolean> {
    const findUserUserName = await this.userRepository.findOneBy({
      username: createUserDto.username,
    });
    const findUserbyEmail = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });
    if (findUserUserName != null || findUserbyEmail != null) {
      return false;
    }

    const newUser = await this.userRepository.create(createUserDto);
    const cryptoPassword = CryptoJS.SHA256(createUserDto.password);
    newUser.password = cryptoPassword.toString(CryptoJS.enc.Base64url);

    this.userRepository.save(newUser);
    return true;
  }

  async findUserById(id: number): Promise<FindUserDto> {
    const userData = await this.userRepository.findOneBy({ id });
    const findUserDto = new FindUserDto();

    if (userData == null) {
      return findUserDto;
    }

    findUserDto.email = userData.email;
    findUserDto.username = userData.username;
    return findUserDto;
  }

  findUsers() {
    return this.userRepository.find();
  }
}
