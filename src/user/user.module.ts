import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserMockService } from './service/user-mock.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'UserService',
      useClass: UserMockService
    }
  ]
})
export class UserModule {}
