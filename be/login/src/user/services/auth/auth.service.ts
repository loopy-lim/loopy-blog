import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities';
import { JWTDto } from 'src/user/dtos/auth/JWT.dto';
import { LoginUserDto } from 'src/user/dtos/users/loginUser.dto';
import * as CryptoJS from 'crypto-js'
import { RedisService } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class AuthService {
  private readonly redis: Redis;
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly redisService: RedisService,
    private jwtService: JwtService,
  ) {this.redis = this.redisService.getClient();}

  async auth(jwtDto: JWTDto): Promise<boolean> {
    const savedJWT = await this.redis.get(jwtDto.username);
    
    return savedJWT == jwtDto.accessToken;
  }

  async signIn(loginUserDto: LoginUserDto): Promise<any> {
    let jwt = '';
    const userData = await this.userRepository.findOneBy({
      username: loginUserDto.username,
    });

    if (userData == null) {
      return {accessToken: jwt};
    }

    const cryptoPassword = CryptoJS.SHA256(loginUserDto.password);
    const canSignIn =
      userData.password == cryptoPassword.toString(CryptoJS.enc.Base64url);
    if (canSignIn) {
      jwt = this.jwtService.sign({username: userData.username, email: userData.email});
      await this.redis.set(loginUserDto.username, jwt, "GET");
    }
    return {accessToken: jwt};
  }
}
