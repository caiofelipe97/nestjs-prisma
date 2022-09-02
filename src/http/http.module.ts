import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from '../services/users.service';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class HttpModule {}
