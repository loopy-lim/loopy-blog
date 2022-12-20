import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities';
import { SignInController } from './controllers/signIn/signIn.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController, SignInController],
  providers: [UsersService]
})
export class UsersModule {}
