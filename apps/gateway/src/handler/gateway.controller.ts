import { Controller, Get } from '@nestjs/common';
import { GatewayService } from '../service/gateway.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Rising Cargo')
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Get('/status')
  getStatus() {
    return { running: true };
  }

  @Get()
  getHello(): string {
    return this.gatewayService.getHello();
  }
}
