import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/shared';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservation, ReservationSchema } from './entities/reservation.entity';
import { ReservationsController } from './handler/reservations.controller';
import { ReservationsService } from './service/reservations.service';
import { ReservationsRepository } from './repository/reservations.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
      }),
      envFilePath: './apps/reservation/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      { name: Reservation.name, schema: ReservationSchema },
    ]),
    ReservationsModule,
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
