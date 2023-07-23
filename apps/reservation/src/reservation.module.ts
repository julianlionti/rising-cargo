import { Module } from '@nestjs/common';
import { ReservationController } from './handler/reservation.controller';
import { ReservationService } from './service/reservation.service';

@Module({
  imports: [],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
