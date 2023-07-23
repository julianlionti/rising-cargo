import { Module } from '@nestjs/common';
import { GatewayController } from './handler/gateway.controller';
import { GatewayService } from './service/gateway.service';
import { SharedModule } from '@app/shared';

@Module({
  imports: [SharedModule],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
