import { Controller, Get, Param, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { MessagePattern } from '@nestjs/microservices';
import { CurrentUser } from '../utils/current-user.decorator';
import JwtAuthGuard from '../guards/jwt-auth.guard';
import LocalAuthGuard from '../guards/local-auth.guard';
import { Response } from 'express';
import { User } from '../users/entities/user.entity';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/status')
  getStatus() {
    return { running: true };
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) response: Response,
  ) {
    await this.authService.login(user, response);
    response.send(user);
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern('validate_user')
  async validateUser(@CurrentUser() user: User) {
    return user;
  }
}
