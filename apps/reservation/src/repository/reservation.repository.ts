import { AbstractRepository } from '@app/shared';
import { Injectable, Logger } from '@nestjs/common';
import { Reservation } from '../schemas/reservation.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class ReservationRepository extends AbstractRepository<Reservation> {
  protected readonly logger = new Logger(ReservationRepository.name);

  constructor(
    @InjectConnection()
    connection: Connection,
    @InjectModel(Reservation.name) model: Model<Reservation>,
  ) {
    super(model, connection);
  }
}
