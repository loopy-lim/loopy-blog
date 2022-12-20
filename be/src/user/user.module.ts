import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { SignInController } from './controllers/signIn/signIn.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController, SignInController],
  providers: [UserService],
})
export class UserModule {}
