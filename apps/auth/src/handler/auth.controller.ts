import { Controller, Get } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/status')
  getStatus() {
    return { running: true };
  }

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }
}
