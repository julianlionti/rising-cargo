import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AuthController } from './handler/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/auth/.env',
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
