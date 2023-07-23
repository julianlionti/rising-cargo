import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from '../dto/create-reservation.dto';
import { Status } from '../enums/status';

@Injectable()
export class ReservationService {
  getHello(): string {
    return 'Hello Reservation';
  }

  create(reservation: CreateReservationDto): CreateReservationDto {
    return { ...reservation, status: Status.Active };
  }
}
