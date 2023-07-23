import { Module } from '@nestjs/common';
import { GatewayController } from './handler/gateway.controller';
import { GatewayService } from './service/gateway.service';
import { SharedModule } from '@app/shared';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/gateway/.env',
    }),
    SharedModule,
  ],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
