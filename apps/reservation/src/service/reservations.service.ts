import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from '../dto/create-reservation.dto';
import { UpdateReservationDto } from '../dto/update-reservation.dto';
import { ReservationsRepository } from '../repository/reservations.repository';
import { toObjectId } from '@app/shared/common/db';

@Injectable()
export class ReservationsService {
  constructor(private reservationRepository: ReservationsRepository) {}

  create(createReservationDto: CreateReservationDto) {
    return this.reservationRepository.create(createReservationDto);
  }

  findAll() {
    return this.reservationRepository.find({});
  }

  findOne(id: string) {
    return this.reservationRepository.find(toObjectId(id));
  }

  update(id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationRepository.findOneAndUpdate(
      toObjectId(id),
      updateReservationDto,
    );
  }

  remove(id: string) {
    return this.reservationRepository.remove(toObjectId(id));
  }
}
