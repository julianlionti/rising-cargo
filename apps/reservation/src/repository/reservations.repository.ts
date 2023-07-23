import { AbstractRepository } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Reservation } from '../entities/reservation.entity';

@Injectable()
export class ReservationsRepository extends AbstractRepository<Reservation> {
  protected readonly logger = new Logger(ReservationsRepository.name);

  constructor(
    @InjectConnection()
    connection: Connection,
    @InjectModel(Reservation.name) model: Model<Reservation>,
  ) {
    super(model, connection);
  }
}
