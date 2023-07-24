import { Body, Controller, Post, Req } from '@nestjs/common';
import { CreateUserRequest } from '../dto/create-user.request.dto';
import { UsersService } from '../service/users.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth/users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() request: CreateUserRequest) {
    return this.usersService.createUser(request);
  }
}
