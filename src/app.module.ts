import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';
import { UsersService } from './services/users.service';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [],
  providers: [UsersService],
})
export class AppModule {}
