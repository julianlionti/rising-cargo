import { Injectable } from '@nestjs/common';
import { ReservationDto } from '../dto/reservation.dto';
import { ReservationRepository } from '../repository/reservation.repository';
import { Status } from '../enums/status';
import {
  AbstractService,
  CreateFn,
  DeleteFn,
  DtoToModelFn,
  GetByIdFn,
  GetFn,
  ModelToDtoFn,
  UpdateFn,
} from '@app/shared/database/abstract.service';
import { Reservation } from '../schemas/reservation.schema';

@Injectable()
export class ReservationService extends AbstractService<
  Reservation,
  ReservationDto
> {
  constructor(readonly reservationRepository: ReservationRepository) {
    super();
  }

  create: CreateFn<ReservationDto> = async (dto) => {
    const item = await this.reservationRepository.create(this.dtoToModel(dto));
    return this.modelToDto(item);
  };

  update: UpdateFn<ReservationDto> = async (id, dto) => {
    const item = await this.reservationRepository.findOneAndUpdate(
      { id },
      this.dtoToModel(dto),
    );
    return this.modelToDto(item);
  };

  get: GetFn<ReservationDto> = async () => {
    const items = await this.reservationRepository.find({});
    return items.map((e) => this.modelToDto(e));
  };

  getById: GetByIdFn<ReservationDto> = async (id) => {
    const item = await this.reservationRepository.findOne({ id });
    return this.modelToDto(item);
  };

  delete: DeleteFn = async () => {
    // await this.reservationRepository
  };

  modelToDto: ModelToDtoFn<Reservation, ReservationDto> = (model) => ({
    ...model,
  });

  dtoToModel: DtoToModelFn<Reservation, ReservationDto> = (dto) => ({
    ...dto,
  });
}
